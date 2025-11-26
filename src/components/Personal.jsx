     function Personal(){

     return (
     <>
        <h2>Personal Info</h2>
        <label htmlFor="nameInput">Name </label>
        <input 
            type="text" 
            placeholder="belinda pencil"
            required={true} />
            <br />
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
      </>
      )

    }

    export default Personal