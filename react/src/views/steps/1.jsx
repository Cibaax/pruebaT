import { useState } from 'react'
import Select from 'react-select';
import axiosClient from '../../axios-client'
import { useForm } from "react-hook-form";

export default function Step1({ time_line }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ciudades, setCiudades] = useState(null)
    const [selectedCiudad, setSelectedCiudad] = useState({})

    const onSubmit = payload => {
        payload.ciudad = selectedCiudad?.value;

        axiosClient.post('/steps/1/update', payload)
            .then(() => {
                location.href = 'inicio';
            });
    };

    if (!ciudades) {
        axiosClient.get('/ciudades/all')
            .then(({ data }) => {
                setCiudades(data)
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
                                        <div className="col-6">
                                            <h3 className="card-title">{time_line?.step?.descripcion}</h3>
                                        </div>
                                        <div className="col-6" style={{ position: 'absolute', top: '10%', right: '-46%' }}>
                                            <a title="Descarga demo de Acta de líderes" href="https://api-transporto.herokuapp.com/templates/Guia Acta Asignacion Lider del PESV.docx" className="btn bg-secondary">
                                                <i className="fa fa-book" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" value={'lider'} {...register("cuerpo_acta", { required: true })} />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
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
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="fechaDocumento">Fecha en Documento</label>
                                                    <input type="date" className="form-control" id="fechaDocumento" placeholder="Fecha" {...register("fecha", { required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="destinatario">Destinatario</label>
                                                    <input type="text" className="form-control" id="destinatario" placeholder="Destinatario" {...register("destinatario", { required: true })} />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="cargo">Cargo</label>
                                                    <input type="text" className="form-control" id="cargo" placeholder="Cargo" {...register("cargo", { required: true })} />
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
                    <div className="modal fade" id="modal-lg">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Previsualización del archivo cargado</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="http://localhost:8000/templates/plantilla de ejemplo.png" style={{ width: 600 }} />
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
        </div >
    )
}