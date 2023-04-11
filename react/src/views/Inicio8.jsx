import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Inicio8() {
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #1</h3>
                                        <div className="timeline-body bg-green">
                                            Carga del acta de asignación de líderes del PESV realizada con éxito.
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #2</h3>
                                        <div className="timeline-body bg-green">
                                            Cargue del acta de comité de seguridad vial del PESV realizada con éxito.
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #3</h3>
                                        <div className="timeline-body bg-green">
                                            Cargue de la política de seguridad vial de la organización realizada con éxito.
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #4</h3>
                                        <div className="timeline-body bg-green">
                                            Diligenciamiento de la lista de chequeo realizado con éxito.
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #5</h3>
                                        <div className="timeline-body bg-green">
                                            Cargue de su inventario realizado con éxito. No quedan conductores pendientes por encuesta.
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
                                        <h3 className="timeline-header font-weight-bold">Planificación - Paso #6</h3>
                                        <div className="timeline-body bg-red">
                                            Haga clic en el botón para cargar el informe diagnóstico de la encuesta de movilidad.
                                        </div>
                                        <div className="timeline-footer bg-red">
                                            <a href="/informemovilidad" className="btn btn-primary btn-sm">Subir informe</a>
                                            &nbsp;&nbsp;
                                            <a href="/siguientepaso" className="btn btn-primary btn-sm">Siguiente paso</a>
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