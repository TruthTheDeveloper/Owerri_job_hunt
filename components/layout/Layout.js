import Head from "next/head"
import NavBar from "../page/landingPage/Navbar"


const Layout = (props) => {
    return <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&display=swap" rel="stylesheet"/>
        </Head>
        <NavBar/>
        {props.children}
    </>
}
export default Layout