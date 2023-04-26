import React, { useState ,useEffect} from "react";
import axiosClient from "../axios-client";


export default function Conductores() {

    
    const [drivers, setDriver] = useState([])

    useEffect(() => {
        refreshDrivers();
      }, [])
    
      function refreshDrivers() {
        const ProjectAPI =  axiosClient.get('/drivers')
          .then(res => {
            setDriver(res.data),
            console.log(res.data)
          })
          .catch(err => console.log(err))
      }




    return (

    
       
        <table class="table">
                            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>                                                                       
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Identificación</th>
            <th scope="col">Empresa</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Género</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
        {
drivers.map((project,i) => (
  <tr key={i}>
    <td>{i+1}</td>
    <td>{project.value}</td>
    <td>{project.label}</td>
    <td>{project.label1}</td>
    <td>{project.fecha_nacimiento}</td>
    <td>{project.genero}</td>
    <td>{project.edad}</td>
  </tr>
  ))
}
        </tbody>
      </table>


    )
}