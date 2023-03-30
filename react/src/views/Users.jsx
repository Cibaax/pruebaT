import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)

useEffect(() => {
    getUsers();
}, [])

const onDelete = (u) => {
    if(!window.confirm("Are you sure you want to delete this user???")) {
        return;
    }

    axiosClient.delete(`/users/${u.id}`)
    .then(() => {
        getUsers()
    })
}

const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
    .then(({data}) => {
        setLoading(false)
        setUsers(data.data)
    })
    .catch(() => {
        setLoading(false)
    })
}
    return (
        <div>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                    </div>{/* /.col */}
                </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                            <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-stats-bars" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-warning">
                            <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                            <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-pie-graph" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                            <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-stats-bars" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-warning">
                            <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                            <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-pie-graph" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                            <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-stats-bars" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-warning">
                            <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                            <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-pie-graph" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    )
}