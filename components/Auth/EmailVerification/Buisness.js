const Buisness = () => {

    const submitHandler = () => {

    }
        return(
            <section className="pt-80">
                <div  className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
                    <p className="py-8">Check your e-mail for verification link, if you {`can't`} find it in inbox please check your spam folder</p>
                    <button onClick={submitHandler} className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg" style={{backgroundColor:"#14A800"}}>Resend Mail</button>
                </div>
            </section>
        )
}

export default Buisness;