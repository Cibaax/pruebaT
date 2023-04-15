import { useState } from 'react'
import Select from 'react-select';
import axiosClient from '../../axios-client'
import { useForm } from "react-hook-form";
import { useStateContext } from '../../contexts/ContextProvider';

export default function Planeacion({ time_line }) {
    const { setSteps } = useStateContext()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ciudades, setCiudades] = useState(false)
    const [selectedCiudad, setSelectedCiudad] = useState({})
    const time_line_id = time_line?.id;
    const onSubmit = payload => {
        payload.ciudad = selectedCiudad?.value;
        payload.cuerpo_acta = time_line?.step?.descripcion;
        if (time_line_id) {
            axiosClient.post(`/steps/${time_line_id}/update`, {
                payload: payload
            })
                .then(({ data }) => {
                    setSteps(data)
                    location.href = 'inicio';
                });
        }
    };

    if (ciudades === false) {
        setCiudades(null)
        axiosClient.get('/ciudades/all')
            .then(async ({ data }) => {
                let _ciudades = await data.map((ciudad) => {
                    return { value: ciudad.label, label: ciudad.label }
                })
                setCiudades(_ciudades)
            })
    }

    return (
        <div>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">{time_line?.step?.fase} - Paso #{time_line?.step?.numero}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Inicio</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <h3 className="card-title">{time_line?.step?.descripcion}</h3>
                                        </div>
                                        <div className="col-md-6" style={{ position: 'absolute', top: '10%', right: '-46%' }}>
                                            <a title="Descarga demo de Acta de líderes" href="https://api-transporto.herokuapp.com/templates/Guia Acta Asignacion Lider del PESV.docx" className="btn bg-secondary">
                                                <i className="fa fa-book" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Ciudad</label>
                                                    <Select
                                                        id={'ciudad'}
                                                        placeholder={'Seleccione una ciudad'}
                                                        isClearable={true}
                                                        options={ciudades}
                                                        onChange={(e) => setSelectedCiudad(e ?? null)}
                                                        isDisabled={ciudades === null}
                                                        isLoading={ciudades === null}
                                                        required={true}
                                                    />
                                                    <small>{(selectedCiudad === null) && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="fechaDocumento">Fecha en Documento</label>
                                                    <input type="date" className="form-control" id="fechaDocumento" placeholder="Fecha" {...register("fecha_acta", { required: true })} />
                                                    <small>{errors.fecha_acta && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="destinatario">Destinatario</label>
                                                    <input type="text" className="form-control" id="destinatario" placeholder="Destinatario" {...register("destinatario", { required: true })} />
                                                    <small>{errors.destinatario && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="cargo">Cargo</label>
                                                    <input type="text" className="form-control" id="cargo" placeholder="Cargo" {...register("cargo", { required: true })} />
                                                    <small>{errors.cargo && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="btn btn-primary btn-sm">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}