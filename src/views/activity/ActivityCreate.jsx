import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ActivityCreate = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [r, setR] = useState("")
    const [a, setA] = useState("")
    const [c, setC] = useState("")
    const [i, setI] = useState("")
    

    const handleCadastro = async () => {
        if (title != "" && description != "") {
            let reqBody = {
                title: title,
                description: description,
                responsible: r,
                accountable: a,
                consulted: c,
                informed: i
            }
            let fetchOptions = {
                method: "post",
                body: JSON.stringify(reqBody),
                mode: "cors",
                headers: {
                    'Content-type': 'application/json' // The type of data you're sending
                }
            }

            fetch(`${process.env.REACT_APP_API}/activity/create`, fetchOptions)
                .then((res) => res.json()
                    .then(json => {

                    }))
        }
    }

    const mapUsers = props.users.map((e, i) => {
        return (
            <option value={e._id}>{e.name}</option>
        )
    })
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Cadastrar Atividade</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">Título:</label>
                                <input className="form-control" required type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" required className="form-label">Descrição:</label>
                                <input className="form-control" type="text" name="description" id="" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="d-inline-flex col-12 align-items-stretch justify-content-around">
                                <div className="form-group col-2">
                                    <label htmlFor="">
                                        Responsible
                                    </label>
                                    <select name="responsible" onChange={(e)=> setR(e.target.value)}  id="" className="form-control">
                                        <option selected disabled value="Selecione"></option>
                                        { mapUsers }
                                    </select>
                                </div>

                                <div className="form-group col-2">
                                    <label htmlFor="">
                                        Accountable
                                    </label>
                                    <select name="accountable" onChange={(e)=> setA(e.target.value)}  id="" className="form-control">
                                        <option selected disabled value="Selecione"></option>
                                    { mapUsers }
                                    </select>
                                </div>

                                <div className="form-group col-2">
                                    <label htmlFor="">
                                        Consultant
                                    </label>
                                    <select name="consulted" onChange={(e)=> setC(e.target.value)} id="" className="form-control">
                                        <option selected disabled value="Selecione"></option>
                                    { mapUsers }
                                    </select>
                                </div>

                                <div className="form-group col-2">
                                    <label htmlFor="">
                                        Informed
                                    </label>
                                    <select name="informed" onChange={(e)=> setI(e.target.value)}  id="" className="form-control">
                                        <option selected disabled value="Selecione"></option>
                                    { mapUsers }
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleCadastro}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const LaunchModal = (props) => {
    return (
        <button type="button" className={props.className} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Cadastrar
        </button>
    )
}