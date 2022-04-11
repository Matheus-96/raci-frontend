import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()
    const login = () => {
        if (user != "" && password != "") {
            let fetchOptions = {
                body: JSON.stringify({
                    name: user,
                    password: password
                }),
                method: "post",
                mode: "cors",
                headers: {
                    'Content-type': 'application/json' // The type of data you're sending
                }
            }

            fetch(`${process.env.REACT_APP_API}/user/auth`, fetchOptions
            ).then(res => {
                res.json().then(
                    json => {
                        if (!json.error) {
                            localStorage.setItem('loggedUser', JSON.stringify(json))
                            navigate('/usuarios')
                        }
                    }
                )
            })
        }
    }
    return (
        <div className="offset-4 col-md-4 mt-5">
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input className="form-control" value={user} onChange={(e) => setUser(e.target.value)} type="text" name="name" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Senha</label>
                <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="name" id="" />
            </div>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success mt-2" onClick={() => login()}>Login</button>
            </div>
        </div>
    )
}