const BuisnessPlan = () => {
    return(
        <section className="py-48">
            <div className="flex flex-col md:flex-row  mx-auto justify-center">
                <div className="bg-green-500 text-center mx-4 rounded-md shadow-lg border hover:bg-white hover:text-green-700 my-4">
                    <h1 className="text-3xl py-4">Basic Pack</h1>
                    <p className="text-2xl">Pricing</p>
                    <h1 className="text-2xl py-2">Free</h1>
                    <ul className="text-lg mt-5">
                        <li className="my-3">Social media buisness profile</li>
                        <li className="my-3">optimization</li>
                        <li className="my-3">Google business listing</li>
                        <li className="my-3 mx-4">Buisness documentation(video & photo coverage)</li>
                    </ul>
                    <button className="w-48 hover:bg-green-600 hover:text-white bg-white h-12 my-8 rounded-full shadow-md border text-xl font-semibold">Pay</button>
                </div>
                <div className="bg-green-500 text-center mx-4 rounded-md shadow-lg border hover:bg-white hover:text-green-600 my-4">
                    <h1 className="text-3xl py-4">SME Pack</h1>
                    <p className="text-2xl">Pricing</p>
                    <h1 className="text-2xl py-2">#30,000</h1>
                    <ul className="text-lg mt-5">
                        <li className="my-3">Social media buisness profile</li>
                        <li className="my-3">optimization</li>
                        <li className="my-3">Google business listing</li>
                        <li className="my-3 mx-4">Buisness documentation(video & photo coverage)</li>
                    </ul>
                    <button className="w-48 hover:bg-green-600 hover:text-white bg-white h-12 my-8 rounded-full shadow-md border text-xl font-semibold">Pay</button>
                </div>
                <div className="bg-green-500 text-center mx-4 rounded-md shadow-lg border hover:bg-white hover:text-green-600 my-4">
                    <h1 className="text-3xl py-4">Premium/Enterprise</h1>
                    <p className="text-2xl">Pricing</p>
                    <h1 className="text-2xl py-2">50k</h1>
                    <ul className="text-lg mt-5">
                        <li className="my-3">Social media buisness profile</li>
                        <li className="my-3">optimization</li>
                        <li className="my-3">Google business listing</li>
                        <li className="my-3 mx-4">Buisness documentation(video & photo coverage)</li>
                    </ul>
                    <button className="w-48 hover:bg-green-600 hover:text-white bg-white h-12 my-8 rounded-full shadow-md border text-xl font-semibold">Pay</button>
                </div>
            </div>
        </section>
    )
}
export default BuisnessPlan;