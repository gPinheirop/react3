import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/Message.jsx"
import Container from  '../layout/Container'

import styles from './Projects.module.css'
import LinkButton from "../layout/LinkButton.jsx"
import ProjectCard from "../project/ProjectCard.jsx"

function Projects (){

    const [projects, setProjects] = useState([])

    useEffect (() => {
        
        fetch('http://localhost:5000/projects', {
            method:"GET",
            headers: {
                "content-Type" : "application/json",
            },
        })
            .then((resp) => resp.json())
            .then(data => {
                console.log(data)
                setProjects(data)
        })
            .catch((err) => console.log(err))
          
    }, [])

    const location = useLocation()
    let message =''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to ="/newproject" text="Criar projeto" />
            </div>
            {message && <Message msg={message} type="sucess"/>}
            <Container customClass ="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            // handleRemove={}
                        />
                    ))
                }
            </Container>
        </div>
    )
}

export default Projects