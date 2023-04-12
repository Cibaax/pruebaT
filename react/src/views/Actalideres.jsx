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
                                            
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <div className="form-group">
                                                <a href="https://api-transporto.herokuapp.com/templates/Guia Acta Asignacion Lider del PESV.docx" className="btn btn-app bg-secondary" style={{height: 100}}>
                                                    <i className="fa fa-book" /> Descargar plantilla<br />Guía Acta Asignación<br /> Líder del PESV
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                        <textarea id="summernote" defaultValue={"Bucaramanga, XX de XXXXXXXXX de 2023<br /><br />Señor(a)<br /><strong>XXXXXXXXX XXXXXXXX<br />Cargo: XXXXXXXXXXX</strong><br /><br />Ref: Asignación como líder para la implementación del PESV<br /><br />Cordial saludo.<br /><br />Considerando lo establecido en la resolución... "} />

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
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
        </div>
    )
}