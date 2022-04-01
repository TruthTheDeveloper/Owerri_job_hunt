import Link from "next/link";

const Login = () => {

    return (
        <section className="pt-96">
            <div className="flex flex-col md:flex-row">
                <Link href="/candidate/login">
                    <div className="flex justify-center text-green-600 border-2 cursor-pointer hover:bg-green-500 hover:text-white border-green-500 w-80 rounded-full py-2 mx-auto">
                        <h1 className="">Login as Candidate</h1>
                    </div>
                </Link>
                <Link href="/buisness/login">
                    <div className="flex justify-center text-green-600 border-2 cursor-pointer hover:bg-green-500 hover:text-white border-green-500 w-80 rounded-full py-2 mx-auto">
                        <h1 className="">Login as buisness</h1>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Login;