import React, { useState } from "react";
import Select from 'react-select'
import axiosClient from "../axios-client";

export default function Registrarempresa() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [ciiu, setCiiu] = useState(null)
    const [departamentos, setDepartamentos] = useState(null)
    const [ciudades, setCiudades] = useState(null)
    const [selectedCity, setSelectedCity] = useState({})

    if (ciiu === null) {
        axiosClient.get('/ciiu')
            .then(({ data }) => {
                setCiiu(data)
            })
    }

    if (departamentos === null) {
        axiosClient.get('/departamentos')
            .then(({ data }) => {
                setDepartamentos(data)
            })
    }

    const refreshCiudades = (e) => {
        if (e) {
            const { value } = e;
            axiosClient.get('/ciudades/' + value)
            .then(({ data }) => {
                setCiudades(data)
            })
        } else {
            setCiudades(null)
        }
        setSelectedCity(null)
    }


    return (
        <div>

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Nueva Empresa</h1>
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
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Digite los datos de la empresa</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="nit">NIT</label>
                                                    <input type="text" className="form-control" id="nit" placeholder="Nit" />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="nombreEmpresa">Nombre y/o Razón Social</label>
                                                    <input type="text" className="form-control" id="nombreEmpresa" placeholder="Nombre y/o Razón Social" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="nit">Representante Legal</label>
                                                    <input type="text" className="form-control" id="representante" placeholder="Nombre completo" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="col-sm-12">
                                                {/* select */}
                                                <div className="form-group">
                                                    <label>Actividad Principal (CIIU)</label>
                                                    <Select
                                                        id={'actP'}
                                                        placeholder={'Seleccione actividad principal'}
                                                        isClearable={true}
                                                        options={ciiu}
                                                        isDisabled={ciiu === null}
                                                        isLoading={ciiu === null}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Actividad Secundaria (CIIU)</label>
                                                    <Select
                                                        id={'actS'}
                                                        placeholder={'Seleccione actividad secundaria'}
                                                        isClearable={true}
                                                        options={ciiu}
                                                        isDisabled={ciiu === null}
                                                        isLoading={ciiu === null}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="vehiculosPropios">Vehículos propios</label>
                                                <input type="number" className="form-control" id="vehiculosPropios" placeholder="0" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="vehiculosContratados">Veh. contratados o administrados</label>
                                                <input type="number" className="form-control" id="vehiculosContratados" placeholder="0" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="conductoresPropios">Conductores propios</label>
                                                <input type="number" className="form-control" id="conductoresPropios" placeholder="0" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="conductoresContratados">Conductores contratados</label>
                                                <input type="number" className="form-control" id="conductoresContratados" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="direccion">Dirección</label>
                                                <input type="text" className="form-control" id="direccion" placeholder="Dirección" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="telefono1">Teléfono #1</label>
                                                <input type="text" className="form-control" id="telefono1" placeholder="Telefono principal" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="telefono2">Teléfono #2</label>
                                                <input type="text" className="form-control" id="telefono2" placeholder="Telefono secundario" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Departamento</label>
                                                <Select
                                                    id={'departamento'}
                                                    placeholder={'Seleccione el departamento'}
                                                    isClearable={true}
                                                    options={departamentos}
                                                    isDisabled={departamentos === null}
                                                    isLoading={departamentos === null}
                                                    onChange={(e) => refreshCiudades(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Ciudad</label>
                                                <Select
                                                    id={'ciudad'}
                                                    placeholder={'Seleccione una ciudad'}
                                                    isClearable={true}
                                                    options={ciudades}
                                                    isDisabled={ciudades === null}
                                                    value={selectedCity}
                                                    onChange={(e) => setSelectedCity(e ?? null)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <a href="/inicio2" className="btn btn-primary btn-sm">Registrar</a>
                                </div>
                            </div>
                            {/* /.card */}
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