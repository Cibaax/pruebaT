import { useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Inicio() {
    const [empresa, setEmpresa] = useState(false)
    const { steps } = useStateContext()

    if (!empresa) {
        axiosClient.get('/compania/show')
            .then(({ data }) => {
                setEmpresa(data)
            })
    }

    const PreEmpresa = () => {
        return (!empresa ? (
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
        ) : (
            <div>
                <i className="fas fa-user-check bg-blue" />
                <div className="timeline-item">
                    <span className="time font-weight-bold">Finalizado el {empresa.fecha} <i className="fas fa-clock" /> {empresa.hora}</span>
                    <h3 className="timeline-header font-weight-bold">Registro de la empresa</h3>
                    <div className="timeline-body bg-green pt-3 pb-3">
                        Se ha registrado la información de la empresa '<strong>{empresa.razon_social}</strong>' con éxito
                    </div>
                </div>
            </div>
        ))
    }

    const Pasos = () => {
        return ((empresa && steps?.length > 0) &&
            steps.map((line, key_line) => {
                let color = line.estado === 3 ? 'bg-green' : 'bg-red';
                let estado = line.estado === 3 ? 'Completado' : 'Pendiente';
                return (
                    <div key={key_line}>
                        <i className="fas fa-user-check bg-blue" />
                        <div className="timeline-item">
                            {line.fecha_finalizacion &&
                                <span className="time font-weight-bold">Finalizado el {line.fecha} <i className="fas fa-clock" /> {line.hora}</span>
                            }
                            <h3 className="timeline-header font-weight-bold">{line.step.fase} - Paso #{line.step.numero}</h3>
                            <div className={"timeline-footer bg-red " + color}>
                                {line.step.descripcion} <br /> <strong>Estado:</strong> {estado}
                            </div>
                            <div className={"timeline-footer bg-red " + color} hidden={line.estado === 3}>
                                <a href={"/steps/" + line.step.numero} className="btn btn-primary btn-sm">Realizar este paso</a>
                                &nbsp;&nbsp;
                                <a href="/siguientepaso" className="btn btn-primary btn-sm">Siguiente paso</a>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">{!empresa ? 'Bienvenido(a)' : 'Línea de tiempo del proceso - Nivel ' + empresa.nivel}</h1>
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

                                {empresa &&
                                    <div className="time-label">
                                        <span className="bg-info">{empresa.label_fecha}</span>
                                    </div>
                                }


                                <PreEmpresa />
                                <Pasos />

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