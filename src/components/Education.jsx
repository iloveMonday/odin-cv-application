function Education(){
   return (
   <>
    
        <h2>Education</h2>
        <label htmlFor="schoolInput">School </label>
        <input 
            type="text" 
            placeholder="mit"
            />
            <br />
        <label htmlFor="nameInput">Major </label>
        <input 
            type="text" 
            placeholder="kung-fu"
             />
            <br />
        <label htmlFor="nameInput">Years Attended </label>
        <input 
            type="text" 
            placeholder="1999-2999"
            pattern='[0-9]{4}-[0-9]{4}' />
            <br />
            <br />
    
    </>
    );
}

export default Education