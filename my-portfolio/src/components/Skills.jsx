import icons from "../json/icons.json"
import { SkillsContainer, SkillsImage } from "../styled-components/Skills"
// import { ProjectsContainer, ProjectCard, ProjectImage, ProjectLink } from "../styled-components/Projects"


export default function Skills() {
    return( <>
    <div id ='skills'>
    <h1>Skills</h1>
    
    <SkillsContainer>
    {/* <h1>Skills</h1> */}
        { 
            
            icons.map((icon)=> <div key={icon.image}>
                
                <SkillsImage src={icon.image}/>
                <p>{icon.name}</p>
                
                

            </div>)
            
        }
    </SkillsContainer>
    </div>
    </>
    )
    
}
    