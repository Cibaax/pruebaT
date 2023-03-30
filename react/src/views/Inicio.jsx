import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Inicio() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)

useEffect(() => {
    getUsers();
}, [])

const onDelete = (u) => {
    if(!window.confirm("Are you sure you want to delete this user???")) {
        return;
    }

    axiosClient.delete(`/users/${u.id}`)
    .then(() => {
        getUsers()
    })
}

const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
    .then(({data}) => {
        setLoading(false)
        setUsers(data.data)
    })
    .catch(() => {
        setLoading(false)
    })
}
    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Bienvenido(a)</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Inicio</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                    {/* Timelime example  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* The time line */}
                            <div className="timeline">
                                
                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                        <h3 className="timeline-header font-weight-bold">Registro de la empresa</h3>
                                        <div className="timeline-body bg-red">
                                            Haga clic en el siguiente botón para empezar a registrar los datos de la empresa.
                                        </div>
                                        <div className="timeline-footer bg-red">
                                            <a href="/registrarempresa" className="btn btn-primary btn-sm">Registrar</a>
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}
                                
                                <div>
                                    <i className="fas fa-clock bg-gray" />
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.timeline */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
        </div>
    )
}