import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
    const {user, token, rol, setUser, setToken, setRol} = useStateContext()

    if(!token) {
        return <Navigate to="/login" />
    }

    const pathname = window.location.pathname

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
            setRol(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    return (
        <div id="defaultLayout">
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="https://transporto.com.co/" className="brand-link">
                <img src="adminlte/dist/img/miniLogo.png" alt="Transporto Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Transporto</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">{user.name}</a>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item">
                    <a href="/inicio" className={`nav-link ${pathname == '/inicio' ? "active" : ""}`}>
                        <i className="nav-icon fa fa-map-marker" />
                        <p>
                        Inicio
                        </p>
                    </a>
                    </li>
                    {rol == 1 &&
                        <li className="nav-item menu-is-opening menu-open">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fa fa-th-large" />
                            <p>
                            Módulos PESV
                            <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="/preparacion" className={`nav-link ${pathname == '/preparacion' ? "active" : ""}`}>
                                <i className="nav-icon fa fa-list-alt" />
                                <p>Preparación</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/planificacion" className={`nav-link ${pathname == '/planificacion' ? "active" : ""}`}>
                                <i className="nav-icon fa fa-columns" />
                                <p>Planificación</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/implementacion" className={`nav-link ${pathname == '/implementacion' ? "active" : ""}`}>
                                <i className="nav-icon fa fa-cogs" />
                                <p>Implementación</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/seguimiento" className={`nav-link ${pathname == '/seguimiento' ? "active" : ""}`}>
                                <i className="nav-icon fa fa-eye" />
                                <p>Seguimiento</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/mejora" className={`nav-link ${pathname == '/mejora' ? "active" : ""}`}>
                                <i className="nav-icon fa fa-check-square" />
                                <p>Mejora</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                    }
                    <li className="nav-item">
                    <a href="/informes" className={`nav-link ${pathname == '/informes' ? "active" : ""}`}>
                        <i className="nav-icon fa fa-file" />
                        <p>
                        Informes
                        </p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/calendario" className={`nav-link ${pathname == '/calendario' ? "active" : ""}`}>
                        <i className="nav-icon fa fa-calendar" />
                        <p>
                        Calendario
                        </p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <a href="#" onClick={onLogout} className="nav-link">Cerrar Sesión</a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                    <i className="fas fa-search" />
                </a>
                <div className="navbar-search-block">
                    <form className="form-inline">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                            <i className="fas fa-times" />
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </li>
                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-comments" />
                    <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                        <img src="adminlte/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                    </div>
                    {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                        <img src="adminlte/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                    </div>
                    {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                        <img src="adminlte/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                    </div>
                    {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
                </li>
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell" />
                    <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" /> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2" /> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2" /> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                    <i className="fas fa-th-large" />
                </a>
                </li>
            </ul>
            </nav>
            {/* /.navbar */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <Outlet />
            </div>
            <footer className="main-footer">
                <strong>Copyright © 2023 <a href="https://transporto.com.co">Transporto</a>.</strong>
                Todos los derechos reservados.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0
                </div>
            </footer>
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
            <div className="p-3">
                <a href="./" className=""><i className="fas fa-truck" /> Capacitación</a>
                <br /><br />
                <a href="./" className=""><i className="fas fa-truck" /> Manual</a>
                <br /><br />
                <a href="./" className=""><i className="fas fa-truck" /> Documentación</a>
            </div>
            </aside>
            {/* /.control-sidebar */}
        </div>
    )
}