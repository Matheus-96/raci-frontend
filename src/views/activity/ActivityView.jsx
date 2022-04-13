import React, { useEffect, useState } from "react";
import { ActivityCreate, LaunchModal } from "./ActivityCreate";
import { useNavigate, useParams } from "react-router-dom";

export const ActivityView = (props) => {
    
    let { id_activity } = useParams()
    const navigate = useNavigate()

    // const [users, setUsers] = useState([])
    const [activity, setActivity] = useState([])
    // const [activities, setActivities] = useState([])
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loggedUser'))
        let fetchOptions = {
            method: "get",
            mode: "cors",
        }
        console.log(`${process.env.REACT_APP_API}/activity/${id_activity}`)
        fetch(`${process.env.REACT_APP_API}/activity/${id_activity}`, fetchOptions)
            .then(res => {
                res.json().then((json) => {
                    setActivity(json)
                })
            })
        // fetch(`${process.env.REACT_APP_API}/user/all`, fetchOptions)
        //     .then((res) => {
        //         res.json().then((json) => {
        //             setUsers(json)
        //         })
        //     })

    }, [])


    return (
        <div className="container">
            {/* <ActivityCreate users={users} setActivities={setActivities} /> */}
            <header className="bg-light border-start border-end p-4 d-inline-flex justify-content-between w-100 mb-2">
                <h1 className="fs-1">
                    Activity View
                </h1>
                {/* <LaunchModal class='btn btn-success' /> */}
            </header>
            <section className="col-6 offset-3">
               {JSON.stringify(activity)}
            </section>
        </div>
    )
}