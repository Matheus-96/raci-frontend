import React, { useEffect, useState } from "react";

export function UserPrincipal() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function deleteUser(id) {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API}/user/delete/${id}`, { mode: "cors", method: 'delete' })
            .then(() => {
                getUsers()
            })
    }

    function getUsers() {
        fetch(`${process.env.REACT_APP_API}/user/all`, { mode: "cors" })
            .then((res) => {
                res.json().then((json) => {
                    setIsLoading(false)
                    setUsers(json)
                }
                )

            })
    }

    useEffect(
        () => {
            setIsLoading(true)
            getUsers()
        }, []
    )



    return (

        <div className="container">
            {
                isLoading == true && (
                    <div className="position-absolute start-50 top-50 translate-middle card p-5 d-flex align-items-center">
                        <div class="spinner-grow start-50" role="status" />
                        <h1 className="fs-4 mt-4">Loading...</h1>
                    </div>
                )
            }

            <header className="bg-light border-start border-end p-4 d-inline-flex justify-content-between w-100">
                <h1 className="fs-1">
                    Usuários
                </h1>
                <button className="btn btn-success">
                    Cadastrar
                </button>
            </header>
            <content>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Senha</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((e, i) => {
                                return (

                                    <tr >
                                        <th scope="row">{i + 1}</th>
                                        <td>{e.name}</td>
                                        <td>{e.password}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => deleteUser(e._id)}>Excluir</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </content>
        </div >
    )
}