import { useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import Container from '../layout/Container'

import Loading from '../layout/Loading'

import styles from './Project.module.css'

function Project() {

    const [project, setProject] = useState([])
    const [showProjectForm ,setShowProjectForm] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'content-Type' : 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then(data => {
                setProject(data)
            })
            .catch(err => console.log(err))
        }, 300)
        
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>{`Projeto: ${project.name}`}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar Projeto' : 'fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span>R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span>R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>Detalhes do projeto</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project
