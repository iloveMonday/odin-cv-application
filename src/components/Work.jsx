export default function Work(){
    return(
        <fieldset>
        <h2>Personal Info</h2>
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
        </fieldset>
    )
}

