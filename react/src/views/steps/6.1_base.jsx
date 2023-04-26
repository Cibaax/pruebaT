import React, { Component, useState } from 'react';
import axiosClient from '../../axios-client';

const Base61 = ({ steps, baseExportable, setBaseExportable }) => {

  const [selectedFile, setSelectedFile] = useState(null);

  console.log(steps)
  const step5 = JSON.parse(steps[4]?.charts?.contratos?.payload ?? '{}');
  let siete = 0, sieteNo = 0, ocho = 0, ochoNo = 0, nueve = 0, nueveNo = 0, diez = 0, diezNo = 0;
  let respuestas = step5.conductores.map((row) => {
    row.encuesta.accidentes == "SI" ? siete++ : sieteNo++;
    row.encuesta.politica == "SI" ? ocho++ : ochoNo++;
    row.encuesta.lecciones == "SI" ? nueve++ : nueveNo++;
    row.encuesta.actuar == "SI" ? diez++ : diezNo++;
    console.log(siete, sieteNo)
  }).filter((row) => {
    return row
  })
  //console.log(respuestas)
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <a href="/public/templates/6.1_informe_diagnostico_encuestas_movilidad.docx" className="btn btn-app bg-secondary" style={{ height: 100 }}>
              <i className="fa fa-book" /> Descargar plantilla<br />Guía Informe Diagnóstico<br /> Encuesta de Movilidad
          </a>
          <a href="/public/templates/Tablas_de_datos.xlsx" className="btn btn-app bg-secondary" style={{ height: 100 }}>
              <i className="fa fa-book" /> Descargar Tabla<br />Antecedentes en materia<br /> de Seguridad Vial
          </a>
        </div>
        <div className="col-md-12">
          <br /><br />
          <img src='contratos.png' />
        </div>
        <div className="col-md-12">
          <br /><br />
          <img src='edad_promedio.png' />
        </div>
        <div className="col-md-12">
          <br /><br />
          <img src='tipologia_vehiculos.png' />
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{width: 400}}>PREGUNTA</th>
                    <th style={{width: 30}}>SI</th>
                    <th style={{width: 40}}>NO</th>
                    <th>OBSERVACIÓN</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>7. HA TENIDO ACCIDENTES O INCIDENTES VIALES EN LOS ULTIMOS 2 AÑOS</td>
                    <td className='bg-danger'>{siete}</td>
                    <td>{sieteNo}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8. CONOCE LA POLÍTICA Y OBJETIVOS DE SEGURIDAD VIAL DE LA EMPRESA</td>
                    <td>{ocho}</td>
                    <td className='bg-danger'>{ochoNo}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>9. CONOCE LAS LECCIONES APRENDIDAS DE ACCIDENTES OCURRIDOS A OTROS COMPAÑEROS EN LA EMPRESA</td>
                    <td>{nueve}</td>
                    <td className='bg-danger'>{nueveNo}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10. CONOCE CÓMO ACTUAR ANTE CUALQUIER EMERGENCIA QUE SE PRESENTE DURANTE LA PRESTACIÓN DEL SERVICIO</td>
                    <td>{diez}</td>
                    <td className='bg-danger'>{diezNo}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        {/* /.card */}
        </div>
        <div className="form-group">
            <label>Cargar archivo Informe Diagnóstico</label>
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    <label className="custom-file-label">{selectedFile?.name ?? 'Seleccione el archivo'}</label>
                </div>
            </div>
            <br />
            <button title='Cargar archivo' className='btn btn-info' onClick={() => $('#custom-tabs-one-2-tab').click()}>Cargar archivo</button>
        </div>
      </div>
    </>
  );
}

export default Base61