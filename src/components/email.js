
import '../css/navbar.css';

const Email = ({open,close}) =>{

    if(!open) return null;

    return(
        <div className="email">
            <input placeholder='Email'/><br/>
            <input placeholder='Message'/><br/>
            <button>Send</button>
        </div>
    )
}

export default Email;