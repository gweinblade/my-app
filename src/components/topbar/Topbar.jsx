import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar "+ (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+213 664 85 13 79 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail  className="icon"/>
                        <span>mmokrani514@gmail.com</span>
                    </div>
                </div>
                
                <div className="Right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
