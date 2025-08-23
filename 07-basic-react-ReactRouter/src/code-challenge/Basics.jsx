import { Routes, Route, Link } from "react-router-dom";

function Home(){
    return <h1>🏠 Welcome, Home Page</h1>
}

function About(){
    return <h1>ℹ️ About Page</h1>
}

function Contact(){
    return <h1>📞 Contact Page</h1>
}

function Number(){
    return <h1>8️⃣ Pedri's Number: +88888</h1>
}

function Main(){
    return(
        <>
        <nav style={{marginBottom: "20px"}}>
            <Link to="/" style={{marginRight: "20px", fontSize: "30px"}}>Home</Link>
            <Link to="/About" style={{marginRight: "20px", fontSize: "30px"}}>About</Link>
            <Link to="/Contact" style={{marginRight: "20px", fontSize: "30px"}}>Contact</Link>
            <Link to="/Contact/Number" style={{marginRight: "20px", fontSize: "30px"}}></Link>
        </nav>


        <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Contact/Number" element={<Number />}></Route>
        </Routes>
        </>
    )
}


export default Main;