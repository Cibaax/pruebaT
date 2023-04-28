import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Inicio() {
  const [empresa, setEmpresa] = useState(null)
  const { steps } = useStateContext()
  console.log(steps)
  let colorEmpresa = steps[0]?.steps_id == 1 ? 'bg-green' : 'bg-red';
  let colorLider = steps[1]?.steps_id == 2 ? 'bg-green' : 'bg-red';
  let colorComite = steps[2]?.steps_id == 3 ? 'bg-green' : 'bg-red';
  let colorPolitica = steps[3]?.steps_id == 4 ? 'bg-green' : 'bg-red';
  let colorChequeo = steps[4]?.steps_id == 5 ? 'bg-green' : 'bg-red';
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-10">
              <h1 className="m-0">
                Módulos PESV - Nivel Avanzado
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-2">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Inicio</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}

          {/* Default box */}
          <div className="card card-solid">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0 lead">
                      <i className="fas fa-lg fa-building" />
                      &nbsp;&nbsp;
                      <b>Registro de la empresa</b>
                    </div>
                    <div className={"card-body pt-0 " + colorEmpresa}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Datos de la empresa.
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        { colorEmpresa == "bg-red" &&
                        <a
                          href="/registrarempresa"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Registrar Empresa
                        </a>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #1</b>
                    </div>
                    <div className={"card-body pt-0 " + colorLider}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Líder de diseño e implementación PESV
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      { colorLider == "bg-red" &&
                        <a
                            href="/steps/1"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #2</b>
                    </div>
                    <div className={"card-body pt-0 " + colorComite}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Comité de seguridad vial
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      { colorComite == "bg-red" &&
                        <a
                            href="/steps/2"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      }
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #3</b>
                    </div>
                    <div className={"card-body pt-0 " + colorPolitica}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Política de Seguridad Vial de la Organización
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      { colorPolitica == "bg-red" &&
                        <a
                            href="/steps/3"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #4</b>
                    </div>
                    <div className={"card-body pt-0 " + colorChequeo}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Liderazgo, compromiso y correspondencia del nivel directivo
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      { colorChequeo == "bg-red" &&
                        <a
                            href="/steps/4"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #5</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Diagnóstico
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            5.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            5.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #6</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Caracterización, evaluación y control de riesgos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            6.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            6.2.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            6.2.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #7</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Objetivos y metas del PESV
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                      <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            7.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            7.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #8</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Programas de gestión de riesgos críticos y factores de desempeño
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #9</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Plan anual de trabajo
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #10</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Competencia y plan anual de formación
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #11</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Responsabilidades y comportamiento seguro
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            11.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            11.2
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            11.3
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            11.4
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #12</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Plan de preparación y respuesta ante emergencias vitales
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #13</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Investigación interna de siniestros
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #14</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Vías seguras administradas por la organización
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #15</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Planificación de desplazamientos laborales
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #16</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Inspección de vehículos y equipos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #17</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mantenimiento y control de vehículos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #18</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Gestión de cambios y gestión de contratistas
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            18.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="/steps/5"
                            className="btn btn-sm btn-primary"
                        >
                            18.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #19</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Archivos y retención documental
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #20</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Definición de indicadores
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #21</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Registro y análisis estadístico de accidentes de tránsito
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #22</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Auditoria Anual
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #23</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mejora Continua, acciones preventivas y correctivas
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #24</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mecanismos de comunicación
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                            href="/registrarempresa"
                            className="btn btn-sm btn-primary"
                        >
                            <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  );
}
