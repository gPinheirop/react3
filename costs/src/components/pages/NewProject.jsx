import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    const history = useNavigate()

    function createPost( project ){
        
        //inicialize and services
        project.cost = 0
        project.services =[]
        fetch('http://localhost:5000/project',{

            method:"POST",
            headers:{
                "Content-Type" : "aplication/json",
            },
            body:
            JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            history('/projects', {massage:'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
    
}

export default NewProject