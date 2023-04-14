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
import Actacomite from "./views/Actacomite.jsx";
import Actapolitica from "./views/Actapolitica.jsx";
import Listachequeo from "./views/Listachequeo.jsx";
import Inventarios from "./views/Inventarios.jsx";
import Inicio7 from "./views/Inicio7.jsx";
import Encuestamovilidad from "./views/Encuestamovilidad.jsx";
import Inicio8 from "./views/Inicio8.jsx";
import Actalideres2 from "./views/Actalideres2.jsx";
import Informemovilidad from "./views/Informemovilidad.jsx";
import Steps from "./views/Steps.jsx";


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
                path: '/inicio',
                element: <Inicio />
            },
            {
                path: '/steps/:id',
                element: <Steps />
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
                path: '/actalideres2',
                element: <Actalideres2 />
            },
            {
                path: '/actacomite',
                element: <Actacomite />
            },
            {
                path: '/actapolitica',
                element: <Actapolitica />
            },
            {
                path: '/listachequeo',
                element: <Listachequeo />
            },
            {
                path: '/inventarios',
                element: <Inventarios />
            },
            {
                path: '/encuestamovilidad',
                element: <Encuestamovilidad />
            },
            {
                path: '/informemovilidad',
                element: <Informemovilidad />
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
                path: '/inicio7',
                element: <Inicio7 />
            },
            {
                path: '/inicio8',
                element: <Inicio8 />
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
