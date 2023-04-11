import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Encuestamovilidad() {
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
                                    <h3 className="card-title">Escoja los conductores faltantes de la encuesta para diligenciarla.</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                <div className="row">
                                        <div className="col-6">
                                            {/* select */}
                                            <div className="form-group">
                                                <label>1. Nombre Conductor</label>
                                                <select className="form-control">
                                                    <option>Cristian Castiblanco</option>
                                                    <option>Rene Alexander García Chavarro</option>
                                                    <option>Victor Manuel Niño Beltrán</option>
                                                    <option>Manuel Urbina Moreno</option>
                                                    <option>José Alfredo González Peña</option>
                                                    <option>Nemesio Zorrilla Montes</option>
                                                    <option>Wilson Orlando Lovera Alarcon</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="municipio">2. Municipio o Región</label>
                                                <input type="text" className="form-control" id="municipio" placeholder="Bogotá" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        <div className="form-group">
                                                <label htmlFor="contrato">3. Contrato</label>
                                                <input type="text" className="form-control" id="contrato" placeholder="Justicia y Convivencia" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="edad">4. Edad</label>
                                                <input type="text" className="form-control" id="edad" placeholder="53" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body table-responsive p-0" style={{height: 400}}>
                                                    <table className="table table-head-fixed">
                                                    <thead>
                                                        <tr>
                                                            <th>Pregunta</th>
                                                            <th>Respuesta&nbsp;&nbsp;&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>5. VEHICULO QUE CONDUCE
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>CAMIONETA</option>
                                                                    <option>CAMPERO</option>
                                                                    <option>MICROBUS</option>
                                                                    <option>VANS</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6. AÑOS DEEXPERIENCIA EN LA CONDUCCION DE TRANSPORTE PUBLICO
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                    <option>6</option>
                                                                    <option>7</option>
                                                                    <option>8</option>
                                                                    <option>9</option>
                                                                    <option>10</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7. HA TENIDO ACCIDENTES O INCIDENTES VIALES EN LOS ULTIMOS 2 AÑOS
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>SI</option>
                                                                    <option>NO</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8. CONOCE LA POLÍTICA Y OBJETIVOS DE SEGURIDAD VIAL DE LA EMPRESA
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>SI</option>
                                                                    <option>NO</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9. CONOCE LAS LECCIONES APRENDIDAS DE ACCIDENTES OCURRIDOS A OTROS COMPAÑEROS EN LA EMPRESA
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>SI</option>
                                                                    <option>NO</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10. CONOCE CÓMO ACTUAR ANTE CUALQUIER EMERGENCIA QUE SE PRESENTE DURANTE LA PRESTACIÓN DEL SERVICIO
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>SI</option>
                                                                    <option>NO</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11. USA EL CINTURÓN DE SEGURIDAD CUANDO EL VEHÍCULO ESTA CON EL MOTOR ENCENDIDO
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>Nunca</option>
                                                                    <option>Casi nunca</option>
                                                                    <option>Algunas veces</option>
                                                                    <option>Casi siempre</option>
                                                                    <option>Siempre</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.EXIGE LE USO DEL CINTURÓN DE SEGURIDAD A LOS PASAJEROS 
                                                            </td>
                                                            <td>
                                                                {/* select */}
                                                                <select className="form-control">
                                                                    <option>Nunca</option>
                                                                    <option>Casi nunca</option>
                                                                    <option>Algunas veces</option>
                                                                    <option>Casi siempre</option>
                                                                    <option>Siempre</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                {/* /.card-body */}
                                            </div>
                                            {/* /.card */}
                                        </div>
                                    </div>
                                    {/* /.row */}
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/encuestamovilidad" className="btn btn-primary btn-sm">Guardar y Continuar</a>
                                    &nbsp;&nbsp;
                                    <a href="/inicio8" className="btn btn-primary btn-sm">Guardar y Salir</a>
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