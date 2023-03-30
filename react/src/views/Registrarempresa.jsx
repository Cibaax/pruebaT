import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Registrarempresa() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Nueva Empresa</h1>
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
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Digite los datos de la empresa</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">
                                                <label>Actividad Principal (CIIU)</label>
                                                <select className="form-control">
                                                    <option>4911</option>
                                                    <option>4912</option>
                                                    <option>4921</option>
                                                    <option>4922</option>
                                                    <option>4923</option>
                                                    <option>4930</option>
                                                    <option>5011</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <label>Actividad Secundaria (CIIU)</label>
                                                <select className="form-control">
                                                    <option>301</option>
                                                    <option>302</option>
                                                    <option>303</option>
                                                    <option>304</option>
                                                    <option>305</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <br />
                                                <label htmlFor="vehiculosPropios">Vehículos propios</label>
                                                <input type="number" className="form-control" id="vehiculosPropios" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <label htmlFor="vehiculosContratados">Veh. contratados o administrados</label>
                                                <input type="number" className="form-control" id="vehiculosContratados" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <br />
                                                <label htmlFor="conductoresPropios">Conductores propios</label>
                                                <input type="number" className="form-control" id="conductoresPropios" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <label htmlFor="conductoresContratados">Conductores contratados</label>
                                                <input type="number" className="form-control" id="conductoresContratados" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="nombreEmpresa">Nombre y/o Razón Social</label>
                                                <input type="text" className="form-control" id="nombreEmpresa" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="nit">NIT</label>
                                                <input type="text" className="form-control" id="nit" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="direccion">Dirección</label>
                                                <input type="text" className="form-control" id="direccion" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="telefono1">Teléfono #1</label>
                                                <input type="text" className="form-control" id="telefono1" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="telefono2">Teléfono #2</label>
                                                <input type="text" className="form-control" id="telefono2" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Correo Electrónico</label>
                                                <input type="email" className="form-control" id="email" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                        <div className="form-group">
                                                <label>Ciudad</label>
                                                <select className="form-control">
                                                    <option>Bogotá D.C</option>
                                                    <option>Bucaramanga</option>
                                                    <option>Cali</option>
                                                    <option>Medellín</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/inicio2" className="btn btn-primary btn-sm">Registrar</a>
                                </div>
                            </div>
                            {/* /.card */}
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