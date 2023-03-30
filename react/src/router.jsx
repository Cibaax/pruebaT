import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/Notfound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import UserForm from "./views/UserForm.jsx";
import Preparacion from "./views/Preparacion.jsx";
import Planificacion from "./views/Planificacion.jsx";
import Implementacion from "./views/Implementacion.jsx";
import Seguimiento from "./views/Seguimiento.jsx";
import Mejora from "./views/Mejora.jsx";
import Informes from "./views/Informes.jsx";
import Calendario from "./views/Calendario.jsx";
import Inicio from "./views/Inicio.jsx";
import Inicio2 from "./views/Inicio2.jsx";
import Registrarempresa from "./views/Registrarempresa.jsx";
import Actalideres from "./views/Actalideres.jsx";
import Inicio3 from "./views/Inicio3.jsx";
import Inicio4 from "./views/Inicio4.jsx";
import Inicio5 from "./views/Inicio5.jsx";
import Inicio6 from "./views/Inicio6.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/inicio" />
            },
            {
                path: '/preparacion',
                element: <Preparacion />
            },
            {
                path: '/planificacion',
                element: <Planificacion />
            },
            {
                path: '/implementacion',
                element: <Implementacion />
            },
            {
                path: '/seguimiento',
                element: <Seguimiento />
            },
            {
                path: '/mejora',
                element: <Mejora />
            },
            {
                path: '/informes',
                element: <Informes />
            },
            {
                path: '/calendario',
                element: <Calendario />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/inicio',
                element: <Inicio />
            },
            {
                path: '/registrarempresa',
                element: <Registrarempresa />
            },
            {
                path: '/inicio2',
                element: <Inicio2 />
            },
            {
                path: '/actalideres',
                element: <Actalideres />
            },
            {
                path: '/inicio3',
                element: <Inicio3 />
            },
            {
                path: '/inicio4',
                element: <Inicio4 />
            },
            {
                path: '/inicio5',
                element: <Inicio5 />
            },
            {
                path: '/inicio6',
                element: <Inicio6 />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }, {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
