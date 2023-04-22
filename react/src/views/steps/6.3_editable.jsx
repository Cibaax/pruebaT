const Editable63 = ({ sendPayload, eventosData, setEventosData}) => {
  const onChangeInput = (e, id) => {
    const { name, value } = e.target
    const editData = eventosData.map((item) => item.id === id && name ? { ...item, [name]: value } : item)
    setEventosData(editData)
    console.log(editData)
  }

  return (
    <div>
      <div className="row">
        <div className="offset-11">
          <div className="btn-group">
            <button title='Siguiente tab' className='btn btn-success' onClick={() => sendPayload()}>Completar paso</button>
          </div>
        </div>
      </div>
      <br />
      <table className='table table-bordered table-responsive-sm table-responsive-xs text-center'>
        <thead>
          <tr>
            <th>Valoración del riesgo</th>
            <th>Nivel de riesgo</th>
            <th>ID</th>
            <th>Causa</th>
            <th>Evento</th>
            <th>Impacto</th>
            <th>Estrategia de gestión</th>
            <th>Acción de Respuesta</th>
            <th>Responsable</th>
            <th>Evidencia</th>
          </tr>
        </thead>
        <tbody>
          {eventosData.filter((item) => item.nivel_riesgo != '-' && item?.nivel_riesgo?.props?.children !== 'BAJO').map(({ id, causa, evento, impacto, valoracion, nivel_riesgo, estrategia, accion, responsable, evidencia }) => (
            <tr key={id}>
              <td>
                {valoracion}
              </td>
              <td>
                {nivel_riesgo}
              </td>
              <td>
                {id}
              </td>
              <td>
                {causa}
              </td>
              <td>
                {evento}
              </td>
              <td>
                {impacto}
              </td>
              <td>
                <select defaultValue={estrategia} name="estrategia" className='form-control form-control-sm' onChange={(e) => onChangeInput(e, id)}>
                  <option value="">-</option>
                  <option value="ASUMIR">ASUMIR</option>
                  <option value="MITIGAR">MITIGAR</option>
                  <option value="EVITAR">EVITAR</option>
                </select>
              </td>
              <td>
                <input
                  name="accion"
                  type="text"
                  value={accion}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
              <td>
                <select defaultValue={responsable} name="responsable" className='form-control form-control-sm' onChange={(e) => onChangeInput(e, id)}>
                  <option value="">-</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="H&S">H&S</option>
                  <option value="MANTTO">MANTTO</option>
                  <option value="OPERA">OPERA</option>
                  <option value="RRHH">RR HH</option>
                </select>
              </td>
              <td>
                <input
                  name="evidencia"
                  type="text"
                  value={evidencia}
                  onChange={(e) => onChangeInput(e, id)}
                  className='form-control form-control-sm table-w-input'
                  maxLength={250}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Editable63