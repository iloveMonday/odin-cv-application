import { useState } from 'react'
import InputField from './InputComponent'
import editIcon from "../assets/icons/edit.svg"
import dropDownIcon from "../assets/icons/dropdown.svg"
import deleteIcon from "../assets/icons/delete.svg"

// function that creates each item
// make an array for Education
// push Item to Array
// display each Array item, Delete add dropDown for edit









/////////////////////////////PREMADE FORM BELOW!!!!!!!!!////////////////


// function EducationItem({
//     index,
//     data,
//     updateData,
//     isActive,
//     setActiveIndex,
//     removeData
// }){
//     function handleToggleIsActive(){
//         if(!isActive){
//             setActiveIndex(index);}
//             else {
//                 setActiveIndex(-1);
//             }
//         }
    

//     function handleRemoveData(){
//         removeData(index)
//     }

//     return{
//         <li key={index}>
        

//         </li>

//     }
// }



// export default function Education({ handleUpdate, data }){
//     const [activeIndex, setActiveIndex] = useState(-1);

//     function handleChange(e){
//         const { name, value } = e.target;
//         handleUpdate((prevData) => ({ ...prevData, [name]: value}))
//     }

//     function handleAdd(){

//     }

//     function handleRemove(){
//     }



//    return (
//     <form className='education-form' onSubmit={handleSave}>
//         <fieldset>
//             <div className='form-title'>
//                 <h2>Education</h2>
//                 {!isActive && (
//                     <button onClick={handleToggleActive} className='form-button'>
//                         <img src={editIcon} alt="" /> Edit
//                     </button>
//                 )}
//             </div>

//             {isActive && (
//                 <>
//                 <InputField
//                 label="School"
//                 id="school"
//                 name="school"
//                 placeholder="Tumple University"
//                 value={data.school}
//                 onChange={handleChange}
//                 />
//                 <InputField
//                 label="Major"
//                 id="major"
//                 name="major"
//                 placeholder="Biometrics"
//                 value={data.major}
//                 onChange={handleChange}
//                 />
//                 <InputField
//                 label="Year Graduated"
//                 id="year"
//                 name="year"
//                 placeholder="2999"
//                 value={data.year}
//                 onChange={handleChange}
//                 />
//                 <div className="button-div">
//                     <button type="submit" className="form-button">
//                         Add
//                     </button>
//                 </div>
//                 </>
//             )}
//         </fieldset>
//     </form>
//    )
// }




////////////////////^^^^^^PREMADE FORM/////////////////////////////////



export default function Education({ handleUpdate, data }){
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
    <form className='education-form' onSubmit={handleSave}>
        <fieldset>
            <div className='form-title'>
                <h2>Education</h2>
                {!isActive && (
                    <button onClick={handleToggleActive} className='form-button'>
                        <img src={editIcon} alt="" /> Edit
                    </button>
                )}
            </div>

            {isActive && (
                <>
                <InputField
                label="School"
                id="school"
                name="school"
                placeholder="Tumple University"
                value={data.school}
                onChange={handleChange}
                />
                <InputField
                label="Major"
                id="major"
                name="major"
                placeholder="Biometrics"
                value={data.major}
                onChange={handleChange}
                />
                <InputField
                label="Year Graduated"
                id="year"
                name="year"
                placeholder="2999"
                value={data.year}
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