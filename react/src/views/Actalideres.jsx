import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Actalideres() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Preparación - Paso #1</h1>
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
                                    <h3 className="card-title">Digite los datos para el cargue del acta de líderes.</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group">
                                            <label htmlFor="actaLideres">Cargar archivo</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="actaLideres" />
                                                    <label className="custom-file-label" htmlFor="actaLideres">Elija el archivo</label>
                                                </div>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Subir</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="referencia">Referencia</label>
                                                <input type="text" className="form-control" id="referencia" placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="destinatario">Destinatario</label>
                                                <input type="text" className="form-control" id="destinatario" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="fechaDocumento">Fecha en Documento</label>
                                                <input type="text" className="form-control" id="fechaDocumento" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/inicio3" className="btn btn-primary btn-sm">Guardar</a>
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