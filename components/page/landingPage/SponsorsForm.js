const SponsorsForm = () => {

    return(
        <section className="my-48">
            <h1 className="text-3xl text-center font-semibold mt-24">Join Our Sponsors</h1>
            <h1 className="text-2xl font-semibold text-center mt-14 mb-24">Lets add Owerri to the map, where buisnesses meet talents</h1>
            <form className="flex flex-col md:flex-row justify-center shadow-lg border-2 md:h-24 lg:mx-28 xl:mx-52 rounded-full " >
                <input placeholder="website Url" className="h-16 border-2 mx-2 mt-4 pl-2 rounded-full outline-none" style={{borderColor:'#3C8224'}}/>
                <input placeholder="email" className="h-16 border-2 mx-2 rounded-full  mt-4 pl-2 outline-none border-green-600" style={{borderColor:'#3C8224'}}/>
                <input placeholder="phoneNumber" className="h-16 border-2 mx-2 rounded-full  mt-4 pl-2 outline-none border-green-600" style={{borderColor:'#3C8224'}}/>
                <button className="bg-green-600 h-16 w-48 mx-auto xl:mx-12 text-white text-xl rounded-full  mt-4 pl-2 " style={{backgroundColor:'#3C8224'}}>Submit</button>
            </form>
        </section>
    )
}

export default SponsorsForm;