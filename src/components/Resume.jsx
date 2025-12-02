import emailIcon from "../assets/icons/email.svg"
import phoneIcon from "../assets/icons/phone.svg"
import locationIcon from "../assets/icons/location.svg"

function PersonalSection({ data }){
    const name = data.name;

    return(
        <section className="personal">
            {name && <h1>{name.toUpperCase()}</h1>}
        </section>
    )
}



export default function Resume({ personalData }){
    return(
        <div className="resume-container">
            <PersonalSection data={personalData} />
        </div>
    )
}