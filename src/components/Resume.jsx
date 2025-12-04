import emailIcon from "../assets/icons/email.svg"
import phoneIcon from "../assets/icons/phone.svg"
import locationIcon from "../assets/icons/location.svg"

function PersonalSection({ data }){
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const location = data.location;

    return(
        <section className="personal">
            {name && <h1>{name.toUpperCase()}</h1>}
            <div className="contact-container">
                {email &&
                <>
                <img src={emailIcon}/>
                <p>{email}</p>
                </>
                }
                {phone &&
                <>
                <img src={phoneIcon}/>
                <p>{phone}</p>
                </>
                }
                {location &&
                <>
                <img src={locationIcon}/>
                <p>{location}</p>
                </>
                }
            </div>
        </section>
    )
}

function EducationSection({data}){
    const school = data.school;
    const year= data.years;
    const major = data.major;
    
    return (
        <section className="education">
            {school && <h2>Education</h2>}
            <div className="school">
                <p>{school}</p>
                <p>{major}</p>
                <p>{year}</p>
            </div>
        </section>)
}

function WorkSection({data}){
    const company = data.company;
    const title = data.title;
    const desc = data.description;
    const startDate = data.startDate
    const endDate = data.endDate;

    return (
        <section className="work">
            {company && <h2>Experience</h2>}
            <div className="">
                <p>{company}</p>
                <p>{title}</p>
                <p>{desc}</p>
                {endDate ? <p>{startDate} - {endDate}</p> : <p>{startDate}</p>}
            </div>
        </section>)

}



export default function Resume({ personalData, educationData, workData }){
    return(
        <div className="resume-container">
            <PersonalSection data={personalData} />
            <EducationSection data={educationData} />
            <WorkSection data={workData}/>
        </div>
    )
}