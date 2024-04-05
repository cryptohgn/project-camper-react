import { useState } from "react";
import users from "../../data/users.json";
import { useNavigate } from "react-router-dom";


const initial_state = {
    email: "",
    password: ""
}
function Login({ changeUser }) {

    const [fdata, setfdata] = useState(initial_state);
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleInput = (ev) => {
        const idInput = ev.target.id; 
        const valueInput = ev.target.value;
        
        if (idInput === "email") {
            setfdata({ ...fdata, email: valueInput })
        }
        else if (idInput === "password") {
            setfdata({ ...fdata, password: valueInput })
        }
    }

    const handleClick = (ev) => {
        ev.preventDefault()
        
        const userFind = users.find((user) => user.email === fdata.email && user.password === fdata.password)
        
        if (userFind) {
            changeUser(userFind)
            navigate("/")
        }
      
        else {
            setError("Email o contraseña incorrecto")
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={handleInput} />
                </div>
                <div>
                    <input type="submit" value="login" onClick={handleClick} />
                </div>
            </form>

            <h3>{error}</h3>
        </div>
    )
}

export default Login