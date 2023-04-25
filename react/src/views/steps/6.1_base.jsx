import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Base61 = ({ steps, baseExportable, setBaseExportable }) => {

  /* const getGraph1 = () => {
    axiosClient.get('/users')
    .then(({data}) => {

        setUsers(data.data)
    })
    .catch(() => {

    })
  } */


  const step5 = steps[4]?.data?.payload ?? '{}';
  console.log(JSON.parse(step5))
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <a href="/public/templates/5.1_inventario_conductores.csv" className="btn btn-app bg-secondary" style={{ height: 100 }}>
              <i className="fa fa-book" /> Descargar plantilla<br />Guía Informe Diagnóstico<br /> Encuesta de Movilidad
          </a>
        </div>
        <div className="col-md-12">
          <a href="/public/templates/5.1_inventario_conductores.csv" className="btn btn-app bg-secondary" style={{ height: 100 }}>
              <i className="fa fa-book" /> Descargar plantilla<br />Guía Informe Diagnóstico<br /> Encuesta de Movilidad
          </a>
        </div>

      </div>
    </>
  );
}

export default Base61