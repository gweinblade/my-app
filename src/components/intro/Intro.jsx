import "./intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from "react"
export default function Intro() {
    const textref = useRef();
    
    useEffect(()=> {
        init(textref.current, 
            { 
                showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ["Developer", "Designer","Creator" ] })
    }, []);
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imagecontainer">
                    <img src="assets/logo.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Mokrani Mehdi</h1>
                    <h3> <span ref={textref}></span></h3>
                    <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                </div>
                

            </div>
        </div>
    )
}
