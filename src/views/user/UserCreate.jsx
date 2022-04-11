import React from "react";
import { useState } from "react";
export const UserCreate = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (event, setState) => {
        console.log(event.target.value)
        setState(event.target.value)
    }

    const handleCadastro = async () => {
        if (name != "" && password != "") {
            let reqBody = {
                name: name,
                password: password
            }
            let fetchOptions = {
                method: "post",
                body: JSON.stringify(reqBody),
                mode: "cors",
                headers: {
                    'Content-type': 'application/json' // The type of data you're sending
                }
            }

            props.setIsLoading(true)
            fetch(`${process.env.REACT_APP_API}/user/create`, fetchOptions)
                .then((res) => res.json()
                    .then(json => {
                        props.getUsers()
                    }))
        }
    }

    return (
        <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg show">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Cadastrar Usuário</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Nome:</label>
                                <input className="form-control" required type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" required className="form-label">Senha:</label>
                                <input className="form-control" type="text" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleCadastro}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const LaunchModal = (props) => {
    return (
        <button type="button" class={props.class} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Cadastrar
        </button>
    )
}