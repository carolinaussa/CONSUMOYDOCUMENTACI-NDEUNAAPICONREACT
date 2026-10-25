import { useState } from "react"

export default function Solicitudes(){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    
    const [datoNombre, setDatoNombre] = useState("")
    const [datoApellido, setDatoApellido] = useState("")
    const [datoCorreo, setDatoCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")

    async function Api(e){
        if (e) e.preventDefault()

        let respuesta = await fetch("http://localhost:5000/solicitudes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, apellido, correo })
        })
        let datos = await respuesta.json()
        console.log(datos)

        if (!respuesta.ok) {
            setMensaje(datos.error)
            setDatoNombre("")
            setDatoApellido("")
            setDatoCorreo("")
        } else {
            setMensaje(datos.mensaje)
            // Imprimimos en pantalla exactamente lo que digitaste
            setDatoNombre(nombre)
            setDatoApellido(apellido)
            setDatoCorreo(correo)
        }
    }

    return(
        <div>
            <h2>Formulario de Solicitudes (POST)</h2>
            <input type="text" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Ingrese el apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <button onClick={Api}>Enviar</button>
            
            <div>
                <p>Nombre recibido: {datoNombre}</p>
                <p>Apellido recibido: {datoApellido}</p>
                <p>Correo recibido: {datoCorreo}</p>
                <p>Mensaje: {mensaje}</p>
            </div>
        </div>
    )
}