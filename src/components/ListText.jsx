import { useState } from 'react'
import InputField from './InputComponent'
import deleteIcon from '../assets/icons/delete.svg'

let nextId= 0;

export default function List(handleUpdate, data){
    const [activeIndex, setActiveIndex] = useState(0)
    const [school, setSchool] = useState('')
    const [eduItems, setEduItems] = useState([]);

    function handleRemoveData(){
        setEduItems(
            eduItems.filter(edu =>
                    edu.id !== eduItems.id
                ))
    }

    function handleChange(e){
        const { name, value } = e.target;
        handleUpdate((prevData) => 
            prevData.map((item, index) =>{
                if(index == activeIndex){
                    return {...item, [name]: value};
                }
                return item
            }))
    }

    function sayHi(){
        console.log(eduItems)
    }

return(
    <>
      <input 
        value={school}
        onChange={e => setSchool(e.target.value)} />
      {/* <input 
        value={major}
        onChange={e => setSchool(e.target.value)} /> */}


      <button onClick={() => {
        setEduItems([
            ...eduItems,
            { id: nextId++, school: school}
        ]);
        sayHi()
      }} >Add</button>


      
      <ul>
        {eduItems.map(eduItem => (
            <li key={eduItem.id}> {eduItem.school} 
            <button onClick=
            // {console.log(eduItem)}
            // {handleRemoveData}
            {() => {
                setEduItems(eduItems.filter(a =>
                    a.id !== eduItem.id
                ))
            }}
            >
                {/* <img src={deleteIcon} />  */}
                Delete</button>
            <button>Edit</button>
            </li>
        ))}
      </ul>

    </>
);
}