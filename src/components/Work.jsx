import { useState } from "react"
import InputField from "./InputComponent"
import editIcon from "../assets/icons/edit.svg"
import dropDownIcon from "../assets/icons/dropdown.svg"
import deleteIcon from "../assets/icons/delete.svg"

// make an array for Work Items
// and a function that creates each item

function WorkItem(){

}

export default function Work({ handleUpdate, data }){
    const [isActive, setIsActive] = useState(true);

    function handleToggleActive(){
        setIsActive(!isActive);
    }

    function handleSave(e){
        e.preventDefault();
        handleToggleActive();
    }

    function handleChange(e){
        const { name, value } = e.target;
        handleUpdate((prevData)=>({ ...prevData, [name]: value}))
    }

    return(
        <form className="work-form" onSubmit={handleSave}>
            <fieldset>
                <div className="form-title">
                    <h2>Experience</h2>
                    {!isActive &&(
                        <button onClick={handleToggleActive} className="form-button">
                            <img src={editIcon} alt="" /> Edit
                        </button>
                    )}
                </div>

                {isActive && (
                    <>
                    <InputField
                    label="Company"
                    id="company"
                    name="company"
                    placeholder="G0rp Tech"
                    value={data.company}
                    onChange={handleChange}
                    />
                    <InputField
                    label="Title"
                    id="title"
                    name="title"
                    placeholder="Rocket Tech"
                    value={data.title}
                    onChange={handleChange}
                    />
                    <InputField
                    label="Responsibilities"
                    id="description"
                    name="description"
                    placeholder="Launch pad regulation"
                    value={data.description}
                    onChange={handleChange}
                    />
                    <InputField
                    label="Start Date"
                    id="startDate"
                    name="startDate"
                    placeholder="April 3000"
                    value={data.startDate}
                    onChange={handleChange}
                    />
                    <InputField
                    label="End Date"
                    id="endDate"
                    name="endDate"
                    placeholder="June 3002"
                    value={data.endDate}
                    onChange={handleChange}
                    />
                    <div className="button-div">
                    <button type="submit" className="form-button">
                        Add
                    </button>
                </div>
                    </>
                )}
            </fieldset>

        </form>
        )
}




{/* <fieldset>
        <h2>Work Info</h2>
            <label htmlFor="companyInput">Company </label>
            <input 
                type="text" 
                placeholder="burns corp"
                 />
            <br />
            <label htmlFor="titleInput">Title </label>
            <input 
                type="text" 
                placeholder="safety inspector"
                 />
            <br />
            <label htmlFor="respInput">Responsibilities </label>
            <input 
                type="textarea" 
                placeholder="donuts, napping, scratching, belching."
                rows="2"
                 />
            <br />
            <label htmlFor="startInput">Start Date </label>
            <input 
                type="date" 
                 />
            <br />
            <label htmlFor="endInput">End Date </label>
            <input 
                type="date" 
                 />
            <br />
            <button>add</button>
            <br />
        </fieldset> */}
