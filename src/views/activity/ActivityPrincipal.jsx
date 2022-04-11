import React, { useEffect, useState } from "react";
import { ActivityCreate, LaunchModal } from "./ActivityCreate";
export const ActivityPrincipal = (props) => {

    const [users, setUsers] = useState([])
    const [activities, setActivities] = useState([])

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loggedUser'))
        let fetchOptions = {
            method: "get",
            mode: "cors",
        }

        fetch(`${process.env.REACT_APP_API}/activity/getAll/${user._id}`, fetchOptions)
            .then(res => {
                res.json().then((json) => {
                    setActivities(json)
                })
            })
        fetch(`${process.env.REACT_APP_API}/user/all`, fetchOptions)
            .then((res) => {
                res.json().then((json) => {
                    setUsers(json)
                })
            })

    }, [])


    return (
        <div className="container">
            <ActivityCreate users={users} setActivities={setActivities} />
            <header className="bg-light border-start border-end p-4 d-inline-flex justify-content-between w-100 mb-2">
                <h1 className="fs-1">
                    Atividades
                </h1>
                <LaunchModal class='btn btn-success' />
            </header>
            <section className="col-6 offset-3">
                {
                    activities.map((e, i) => {
                        return (
                            <div className="border p-2 row mt-2">
                                <div className="col-md-8">
                                    <small>
                                        {e.activity_id.dateCreated}
                                    </small>
                                    <div className="fs-5 mb-3 mt-1">
                                        {e.activity_id.title} - <small>{e.role}</small>
                                    </div>
                                    <div>
                                        {e.activity_id.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </div>
    )
}