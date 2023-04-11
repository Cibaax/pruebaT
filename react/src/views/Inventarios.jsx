import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Inventarios() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Planificación - Paso #5</h1>
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
                                    <h3 className="card-title">Descargue el archivo correspondiente al inventario que desee completar. 
                                        Edítelo en local y luego súbalo a la plataforma mediante las siguientes opciones.</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia de Diagnostico e Inventario Sedes.xlsx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Inventarios<br /> Sedes
                                                </a>
                                            
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia de Diagnostico e Inventario Contratistas.xlsx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Inventarios<br /> Contratistas y Empresas Usuarias
                                                </a>
                                            
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia de Diagnostico e Inventario Conductores.xlsx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Inventarios<br /> Conductores
                                                </a>
                                            
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia de Diagnostico e Inventario Vehiculos.xlsx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Inventarios<br /> Datos de Vehículos
                                                </a>
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia de Diagnostico e Inventario Rutas.xlsx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Inventarios<br /> Rutas
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="sedes">Cargar archivo Sedes</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="sedes" />
                                                        <label className="custom-file-label" htmlFor="sedes">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="contratistas">Cargar archivo Contratistas</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="contratistas" />
                                                        <label className="custom-file-label" htmlFor="contratistas">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="conductores">Cargar archivo Conductores</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="conductores" />
                                                        <label className="custom-file-label" htmlFor="conductores">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="vehiculos">Cargar archivo Vehículos</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="vehiculos" />
                                                        <label className="custom-file-label" htmlFor="vehiculos">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="rutas">Cargar archivo Rutas</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="rutas" />
                                                        <label className="custom-file-label" htmlFor="rutas">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/inicio7" className="btn btn-primary btn-sm">Guardar</a>
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