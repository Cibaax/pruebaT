import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client";

export default function Colaboradores() {
  const [drivers, setDriver] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      $('#colaboradores').DataTable().destroy();
    },100);
    refreshDrivers();
  }, []);
  useEffect(() => {
    $('#colaboradores').DataTable();
},[drivers]);


  function refreshDrivers() {
    const ProjectAPI = axiosClient
      .get("/drivers")
      .then((res) => {
        setDriver(res.data), console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <h1 className="m-0">PLANIFICACIÓN - Paso #5 - Colaboradores</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <table id="colaboradores" className="table table-bordered table-hover">
                  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Identificación</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Fecha de Nacimiento</th>
                      <th scope="col">Género</th>
                      <th scope="col">Edad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((project, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{project.value}</td>
                        <td>{project.label}</td>
                        <td>{project.label1}</td>
                        <td>{project.fecha_nacimiento}</td>
                        <td>{project.genero}</td>
                        <td>{project.edad}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Identificación</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Fecha de Nacimiento</th>
                      <th scope="col">Género</th>
                      <th scope="col">Edad</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
