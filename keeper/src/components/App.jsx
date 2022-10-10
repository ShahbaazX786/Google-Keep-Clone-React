import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx"
import "../public/styles.css"

function App(){
    return <div>
        <Header />
        <Note />
        <Footer />
    </div>
}

export default App;