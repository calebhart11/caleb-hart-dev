import about from "../json/about.json"
import { FormContainer } from "../styled-components/ContactMe"
import { HeaderContainer,NavContainer,NavLinkWrapper} from "../styled-components/Header"


export default function Header(props) {
return (
    <HeaderContainer>
        <h1>Full-Stack Developer</h1>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/calebhart11" target="_blank"><div className="github">Github <ion-icon name="logo-github"></ion-icon></div></NavLinkWrapper>
            <NavLinkWrapper href="https://www.linkedin.com/in/caleb-hart-dev/" target="_blank"><div className="linkedin">LinkedIn <ion-icon name="logo-linkedin"></ion-icon></div></NavLinkWrapper>
            <NavLinkWrapper href="https://docs.google.com/document/d/1GNTKzgOlSrIDT8dAYPixs1uxXDMuS-UxGbUC2yzY_cs/edit?usp=sharing"download="calebhartresume.pdf" target="_blank"><div className="resume">Resume <ion-icon name="reader-outline"></ion-icon></div></NavLinkWrapper>
            <NavLinkWrapper href='#skills'><div className='skillsLink'>Skills <ion-icon name="construct-outline"></ion-icon></div></NavLinkWrapper>
            <NavLinkWrapper href="#projects"><div className='projectsLink'>Projects <ion-icon name="albums-outline"></ion-icon></div></NavLinkWrapper>
            <NavLinkWrapper href="#formlink"><div className="contact">Contact Me <ion-icon name="mail-outline"></ion-icon></div></NavLinkWrapper>


        </NavContainer>
    </HeaderContainer>
    
    )
}
