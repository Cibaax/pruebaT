import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Actalideres2() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Planificación - Paso #1</h1>
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
                                        <div className="col-sm-6">
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
                                                <br />
                                                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-lg">
                                                    Previsualizar documento
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <div className="form-group">
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia Acta Asignacion Lider del PESV.docx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar archivo subido<br />Guía Acta Asignación<br /> Líder del PESV
                                                </a>
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia Acta Asignacion Lider del PESV.docx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Acta Asignación<br /> Líder del PESV
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="referencia">Referencia</label>
                                                <input type="text" className="form-control" id="referencia" placeholder="Líder de Diseño e Implementación PESV" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="destinatario">Destinatario</label>
                                                <input type="text" className="form-control" id="destinatario" placeholder="Pedro González" />
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
                                    <a href="/inicio3" className="btn btn-primary btn-sm">Guardar</a>
                                </div>
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.timeline */}
                    <div className="modal fade" id="modal-lg">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Previsualización del archivo cargado</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="http://localhost:8000/templates/plantilla de ejemplo.png" style={{width: 600}} />
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
        </div>
    )
}