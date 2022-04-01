const Buisness = () => {

    const submitHandler = () => {

    }

    return (
        <section className="pt-80">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
            <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>Recover ForgettenPassword</h1>
                <label className="mt-8">Buisness Email</label><br/>
                <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password'/>
                <button onClick={submitHandler} className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg" style={{backgroundColor:"#14A800"}}>Send Mail</button>
            </form>
        </section>
    )
}

export default Buisness;