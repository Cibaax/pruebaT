import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Inicio5() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="m-0">Línea de tiempo del proceso - Nivel Avanzado</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-2">
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
                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">27 Marzo 2023</span>
                                </div>
                                {/* /.timeline-label */}
                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                        <span className="time font-weight-bold">Finalizado 27/03/2023  <i className="fas fa-clock" />15:09</span>
                                        <h3 className="timeline-header font-weight-bold">Registro de la empresa</h3>
                                        <div className="timeline-body bg-green">
                                            Se ha registrado la información de la empresa con éxito
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}
                                
                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                    <span className="time font-weight-bold">Finalizado 27/03/2023  <i className="fas fa-clock" />17:42</span>
                                        <h3 className="timeline-header font-weight-bold">Preparación - Paso #1</h3>
                                        <div className="timeline-body bg-green">
                                            Carga del acta de asignación de líderes del PESV realizada con éxito.
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">28 Marzo 2023</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                    <span className="time font-weight-bold">Finalizado 28/03/2023  <i className="fas fa-clock" />08:30</span>
                                        <h3 className="timeline-header font-weight-bold">Preparación - Paso #2</h3>
                                        <div className="timeline-body bg-green">
                                            Cargar del acta de comité de seguridad vial realizada con éxito.
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">30 Marzo 2023</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                    <span className="time font-weight-bold">Finalizado 30/03/2023  <i className="fas fa-clock" />09:04</span>
                                        <h3 className="timeline-header font-weight-bold">Preparación - Paso #3</h3>
                                        <div className="timeline-body bg-green">
                                            Cargar del acta de comité de seguridad vial realizada con éxito.
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">31 Marzo 2023</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                    <span className="time font-weight-bold">Finalizado 31/03/2023  <i className="fas fa-clock" />14:08</span>
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #4</h3>
                                        <div className="timeline-body bg-green">
                                            Cargar del acta de comité de seguridad vial realizada con éxito.
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">03 Abril 2023</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                    <span className="time font-weight-bold">Finalizado 03/04/2023  <i className="fas fa-clock" />11:52</span>
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #5</h3>
                                        <div className="timeline-body bg-green">
                                            Cargar del acta de comité de seguridad vial realizada con éxito.
                                        </div>
                                        <div className="timeline-footer bg-green">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-info">05 Abril 2023</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user-check bg-blue" />
                                    <div className="timeline-item">
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #6</h3>
                                        <div className="timeline-body bg-red">
                                            Haga clic en el siguiente botón para cargar el acta de comité de seguridad vial del PESV.
                                        </div>
                                        <div className="timeline-footer bg-red">
                                            <a href="/actalideres" className="btn btn-primary btn-sm">Asignar Comité</a>
                                            &nbsp;&nbsp;
                                            <a href="/inicio6" className="btn btn-primary btn-sm">Siguiente paso</a>
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