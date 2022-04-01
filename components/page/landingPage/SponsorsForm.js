const SponsorsForm = () => {

    return(
        <section className="my-48">
            <h1 className="text-3xl text-center font-semibold">Join Our Sponsors</h1>
            <form className="flex flex-row justify-center shadow-lg border-2 h-24 mx-52 rounded-full" >
                <input placeholder="website Url" className="h-16 border-2 mx-2 mt-4 pl-2 rounded-full" style={{borderColor:'#3C8224'}}/>
                <input placeholder="email" className="h-16 border-2 mx-2 rounded-full  mt-4 pl-2  border-green-600" style={{borderColor:'#3C8224'}}/>
                <input placeholder="phoneNumber" className="h-16 border-2 mx-2 rounded-full  mt-4 pl-2  border-green-600" style={{borderColor:'#3C8224'}}/>
                <button className="bg-green-600 h-16 w-48 text-white text-xl rounded-full  mt-4 pl-2 " style={{backgroundColor:'#3C8224'}}>Submit</button>
            </form>
        </section>
    )
}

export default SponsorsForm;