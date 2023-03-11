import about from "../json/about.json"
import { BioContainer, BioImg } from "../styled-components/Bio"

export default function Bio(){
    return(
        <BioContainer>
            <h1>{about.blurb}</h1>
            {/* <h2>{about.blurb}</h2> */}
            <BioImg src={about.img}/>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </BioContainer>
    )
}