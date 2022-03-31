const Candidate = () => {

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center bg-orange-200 w-96 px-4 ">
                <h1 className="text-center my-5">REGISTER AS A USER</h1>
                <div className="py-4 w-full ">
                    <label>Username</label><br/>
                    <input className="h-10 w-full" />
                </div>
                <div className="py-4 ">
                    <label>Email</label><br/>
                    <input className="h-10 w-full"/>
                </div>
                <div className="py-4 ">
                    <label>PhoneNumber</label><br/>
                    <input className="h-10 w-full"/>
                </div>
                <div className="py-4 ">
                    <label>Password</label><br/>
                    <input className="h-10 w-full"/>
                </div>
                <div className="py-4 ">
                    <label>Confirm Password</label><br/>
                    <input className="h-10 w-full"/>
                </div>
                <button className="w-48 mx-auto h-8" style={{backgroundColor:"#14A800"}}>Sign Up</button>
            </form>
        </section>
    )

}

export default Candidate