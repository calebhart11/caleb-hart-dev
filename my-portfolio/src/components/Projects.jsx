import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectLink } from "../styled-components/Projects"


export default function Projects() {
    return( <>
    <div id = "projects">
    <h1>Projects</h1>
    <ProjectsContainer>

        { 
            
            projects.map((project)=> <ProjectCard key={project.name}>
                <h3>{project.name}</h3>
                <ProjectImage src={project.image}/>
                <p>{project.description}</p>
                <ProjectLink href={project.github}target='_blank'>Github</ProjectLink>
                <ProjectLink href={project.live}target='_blank'>Live Site</ProjectLink>

            </ProjectCard>)
            
        }
    </ProjectsContainer>
    </div>
    </>
    )
    
}
    