import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Actacomite() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Planificación - Paso #2</h1>
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
                                    <h3 className="card-title">Digite los datos para el cargue del acta de comité.</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="actaComite">Cargar archivo</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="actaComite" />
                                                        <label className="custom-file-label" htmlFor="actaComite">Elija el archivo</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Subir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <div className="form-group">
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia Acta Conformacion Comite PESV .docx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Acta Conformación<br /> Comité PESV
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="referencia">Referencia</label>
                                                <input type="text" className="form-control" id="referencia" placeholder="Confirmación del Comité PESV" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="destinatario">Destinatario</label>
                                                <input type="text" className="form-control" id="destinatario" placeholder="Juanita Corzo" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="fechaDocumento">Fecha en Documento</label>
                                                <input type="text" className="form-control" id="fechaDocumento" placeholder="05/04/2023" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/inicio4" className="btn btn-primary btn-sm">Guardar</a>
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