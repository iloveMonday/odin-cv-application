import { useState } from 'react'
import InputField from './InputComponent'
import editIcon from "../assets/icons/edit.svg"

     
 export default function Personal({ handleUpdate, data}){
    const [isActive, setIsActive] = useState(true);

    function handleToggleActive(){
            setIsActive(!isActive)
    }

    function handleSave(e){
            e.preventDefault();
            handleToggleActive();
    }

    function handleChange(e){
            const { name, value } = e.target;
            handleUpdate((prevData) => ({ ...prevData, [name]: value}))
    }

    return (
        <form className="personal-form" onSubmit={handleSave}>
        <fieldset>
        <div className="form-title">
            <h2>Personal Info</h2>
            {!isActive && (
                <button onClick={handleToggleActive} className="form-button">
                    <img src={editIcon} alt="" /> Edit
                </button>
            )}
        </div>

            {isActive && (
                <>
                <InputField
                label="Full name "
                id="name"
                name="name"
                placeholder="belinda pencil"
                value={data.name}
                onChange={handleChange}
                />
                <InputField
                label="Email "
                id="email"
                name="email"
                placeholder="helpme@yelpme.com"
                value={data.email}
                onChange={handleChange}
                />
                <InputField
                label="Phone "
                id="phone"
                name="phone"
                type="tel"
                placeholder="508-976-1234"
                value={data.phone}
                onChange={handleChange}
                />
                <InputField
                label="Location "
                id="location"
                name="location"
                placeholder="Worcester, MA"
                value={data.location}
                onChange={handleChange}
                />
                <div className="button-div">
                    <button type="submit" className="form-button">
                        Save
                    </button>
                </div>
                </>
            )}
            <br />
      </fieldset>
      </form>
      )


      {/* 
        <label htmlFor="nameInput">Name </label>
        <input 
            type="text" 
            placeholder="belinda pencil"
            required={true} /> */}
            {/* <br />
        <label htmlFor="emailInput">Email </label>
        <input 
            type="email" 
            placeholder="billy@yaya.com"
            required={true} />
            <br />
        <label htmlFor="phoneInput">Phone </label>
        <input 
            type="tel" 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder='ex. 123-456-7890'
            required={true} />
            <br />
            <label htmlFor="locationInput">Location </label>
        <input 
            type="text"  /> */}
    }
