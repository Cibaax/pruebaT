import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Base61 = ({ steps, baseExportable, setBaseExportable }) => {


  const step5 = steps[4]?.data?.payload ?? '{}';
  console.log(JSON.parse(step5))
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3 className='text-center'>INTRODUCCION</h3>
          <CKEditor
            editor={ClassicEditor}
            data={baseExportable?.introduccion ?? "<p>En primer lugar, es necesario señalar que la seguridad vial “se define como la disciplina&nbsp;que estudia y aplica las acciones y mecanismos tendientes&nbsp;a garantizar el buen&nbsp;funcionamiento&nbsp;de&nbsp;la&nbsp;circulación&nbsp;en&nbsp;la&nbsp;vía&nbsp;pública,&nbsp;previniendo&nbsp;los&nbsp;accidentes&nbsp;de&nbsp;tránsito”&nbsp;es&nbsp;así&nbsp;como,&nbsp;el&nbsp;conceptode&nbsp;seguridad&nbsp;vial&nbsp;hace&nbsp;referencia&nbsp;a&nbsp;todos&nbsp;aquelloscomportamientos que las personas deben tener en la vía pública, tanto como peatones,&nbsp;conductores o pasajeros los cuales se encuentran orientadas a propiciar su seguridad&nbsp;integraly&nbsp;la de los&nbsp;otros.</p><p>Para garantizar esto y teniendo en cuenta la reciente Resolución 4004595 de 2022, se&nbsp;ha&nbsp;realizadouna&nbsp;nueva&nbsp;encuestade&nbsp;movilidad&nbsp;con&nbsp;el&nbsp;objetivode&nbsp;actualizar&nbsp;el&nbsp;diagnóstico&nbsp;de la seguridad vial de la empresa, caracterizando a la población encuestada, losdesplazamientos que realizan,&nbsp;los medios de&nbsp;transporte que&nbsp;utilizan,y&nbsp;los riesgos&nbsp;percibidos; en este informe se registra la información delos resultados obtenidos de laencuesta&nbsp;para&nbsp;determinar&nbsp;recomendaciones&nbsp;de&nbsp;acuerdoa&nbsp;la&nbsp;información&nbsp;recopilada,&nbsp;con&nbsp;el objetivo de proponer acciones&nbsp;de mejorar a la gestión de prevención vial de laorganización.</p><p>&nbsp;</p>"}
            onChange={(event, editor) => {
              baseExportable.introduccion = editor.getData()
              setBaseExportable(baseExportable)
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 mt-2">
          <h4 className='text-center'>1.	Objetivo General</h4>
          <CKEditor
            editor={ClassicEditor}
            data={baseExportable?.objetivo_general ?? "<p>Procesar&nbsp;y&nbsp;analizar&nbsp;la&nbsp;información&nbsp;registrada&nbsp;por&nbsp;el&nbsp;personala&nbsp;quien&nbsp;se&nbsp;le&nbsp;aplicóla&nbsp;encuesta&nbsp;de&nbsp;movilidad,&nbsp;para laactualización&nbsp;PESV.</p>"}
            onChange={(event, editor) => {
              baseExportable.objetivo_general = editor.getData()
              setBaseExportable(baseExportable)

              console.log(baseExportable)
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 mt-2">
          <h4 className='text-center'>2.	Objetivos Específicos</h4>
          <CKEditor
            editor={ClassicEditor}
            data={baseExportable?.objetivos_especificos ?? "<ul><li>Determinar&nbsp;por&nbsp;gruposde&nbsp;trabajo&nbsp;la&nbsp;percepción&nbsp;del&nbsp;riesgo</li><li>Tabular&nbsp;y&nbsp;analizarlos&nbsp;resultados&nbsp;obtenidos</li><li>Dar&nbsp;recomendaciones&nbsp;de&nbsp;acuerdo&nbsp;a&nbsp;la&nbsp;calidadde&nbsp;la&nbsp;información</li></ul>"}
            onChange={(event, editor) => {
              baseExportable.objetivos_especificos = editor.getData()
              setBaseExportable(baseExportable)
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 mt-2">
          <h4 className='text-center'>3.	Diagnostico</h4>
          <CKEditor
            editor={ClassicEditor}
            data={baseExportable?.diagnostico ?? ""}
            onChange={(event, editor) => {
              baseExportable.diagnostico = editor.getData()
              setBaseExportable(baseExportable)
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 mt-2">
          <h5 className='text-center'>3.1.	Información General</h5>
          <CKEditor
            editor={ClassicEditor}
            data={baseExportable?.diagnostico ?? ""}
            onChange={(event, editor) => {
              baseExportable.diagnostico = editor.getData()
              setBaseExportable(baseExportable)
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Base61