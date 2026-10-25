import { useState } from "react"

export default function Informacion(){
    const [modulo, setModulo] = useState("")
    const [programa, setPrograma] = useState("")
    const [estado, setEstado] = useState("")

    async function Api(){
        let respuesta = await fetch("http://localhost:5000/informacion")
        let datos = await respuesta.json()
        console.log(datos)
        setModulo(datos.modulo)
        setPrograma(datos.programa)
        setEstado(datos.estado)
    }

    return(
        <div>
            <button onClick={Api}>consultar informacion</button>
            <p>{modulo}</p>
            <p>{programa}</p>
            <p>{estado}</p>
        </div>
    )
}