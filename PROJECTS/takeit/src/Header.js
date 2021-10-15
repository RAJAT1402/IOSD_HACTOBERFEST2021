import {CgDarkMode} from "react-icons/cg"
const Header=({handleToggleDarkMode})=>{
    return (
        <div className="header">
            <h1>Notes</h1>
            <CgDarkMode onClick={()=>handleToggleDarkMode((previousmode)=>!previousmode)} size="2em" className="dark-icon"/>
        </div>  
    )
}
export default Header;