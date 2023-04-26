import { useState } from 'react'

const Editable62 = ({ newRow, eventosData, setEventosData }) => {
  const onChangeInput = (e, id) => {
    const { name, value } = e.target
    let val = value;
    if (['conductor', 'bici', 'moto', 'peaton', 'pasajero'].includes(name)) {
      val = e.target.checked
    }

    const editData = eventosData.map((item) => item.id === id && name ? { ...item, [name]: val } : item)
    const testData = editData.map(function (data) {
      if (data.nivel_impacto && data.probabilidad) {
        data.valoracion = parseInt(data.nivel_impacto) * parseInt(data.probabilidad)
        if (data.valoracion >= 6) {
          data.nivel_riesgo = (<span style={{ backgroundColor: "#FF0000", color: 'white', height: "100%", width: "100%", display: "block" }}>ALTO</span>)
        } else if (data.valoracion < 6 && data.valoracion >= 3) {
          data.nivel_riesgo = (<span style={{ backgroundColor: "#FFC000", height: "100%", width: "100%", display: "block" }}>MEDIO</span>)
        } else {
          data.nivel_riesgo = (<span style={{ backgroundColor: "#92D050", height: "100%", width: "100%", display: "block" }}>BAJO</span>)
        }
      }

      return data;
    });

    setEventosData(testData)
  }

  const addRow = () => {
    let counter = eventosData.length;
    newRow.id = counter + 1;
    eventosData.push(newRow)
    const editData = eventosData.map((item) => item)
    setEventosData(editData)
  }

  const deleteRow = (id) => {
    const editData = eventosData.filter((item) => item.id != id)
    setEventosData(editData)
  }

  return (
    <div>
      <div className="row">
        <span className='bg-warning h6'>Referencia a Actores Viales</span>
        <div className="offset-11">
          <div className="btn-group">
            <button title='Agregar un item a la tabla' className='btn btn-success' onClick={addRow}><i className='fa fa-plus'></i></button>
            <button title='Siguiente tab' className='btn btn-info' onClick={() => $('#custom-tabs-one-3-tab').click()}><i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <br />
      <table className='table table-bordered table-responsive text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th style={{width: 400}}>Causa</th>
            <th style={{width: 400}}>Evento</th>
            <th style={{width: 400}}>Impacto</th>
            <th className='bg-warning'>Conductor</th>
            <th className='bg-warning'>Bici usuario</th>
            <th className='bg-warning'>Motorizado</th>
            <th className='bg-warning'>Peatón</th>
            <th className='bg-warning'>Pasajero</th>
            <th>Nivel de probabilidad</th>
            <th>Nivel de impacto</th>
            <th>Valoración del riesgo</th>
            <th>Nivel de riesgo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {eventosData.map(({ id, causa, evento, impacto, conductor, bici, moto, peaton, pasajero, probabilidad, nivel_impacto, valoracion, nivel_riesgo }) => (
            <tr key={id}>
              <td>
                <input
                  name="id"
                  type="text"
                  value={id}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
              <td>
                <input
                  name="causa"
                  type="text"
                  value={causa}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
              <td>
                <input
                  name="evento"
                  type="text"
                  value={evento}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
              <td>
                <input
                  name="impacto"
                  type="text"
                  value={impacto}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
              <td>
                <input
                  name="conductor"
                  type="checkbox"
                  checked={conductor}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={1}
                />
              </td>
              <td>
                <input
                  name="bici"
                  type="checkbox"
                  checked={bici}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={1}
                />
              </td>
              <td>
                <input
                  name="moto"
                  type="checkbox"
                  checked={moto}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={1}
                />
              </td>
              <td>
                <input
                  name="peaton"
                  type="checkbox"
                  checked={peaton}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={1}
                />
              </td>
              <td>
                <input
                  name="pasajero"
                  type="checkbox"
                  checked={pasajero}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={1}
                />
              </td>
              <td>
                <select defaultValue={probabilidad} name="probabilidad" className='form-control form-control-sm' onChange={(e) => onChangeInput(e, id)}>
                  <option value="">-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td>
                <select defaultValue={nivel_impacto} name="nivel_impacto" className='form-control form-control-sm' onChange={(e) => onChangeInput(e, id)}>
                  <option value="">-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td>
                {valoracion}
              </td>
              <td>
                {nivel_riesgo}
              </td>
              <td>
                {id > 1 && (<button className='btn btn-default btn-sm' onClick={() => deleteRow(id)}><i className='fa fa-times'></i></button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Editable62