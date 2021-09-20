import React, { useState, useEffect } from 'react';
import './App.css';

// Comentario
/* COMENTARIO */ 
function App() {
  const [contador, setContador] = useState(0)
  const [tareas, setTareas] = useState([])

  const incrementar = () => {
    setContador(prevContador => prevContador + 1)
  }

  const incrementarTareas = () => {
    setTareas(["Nueva tarea", ...tareas])
  }

  //Component mount
  useEffect(() => {
    cargarListaPaises()
  }, [])

  useEffect(() => {
    console.log("Nueva tarea ha sido añadida")
  }, [tareas])

  //Llamada a una api externa
  const cargarListaPaises = async () => {
    const data = await fetch('https://covid19.mathdro.id/api/countries')
    const paises = await data.json()
    console.log(paises)
  }

  return (
    <div className="App">
      {/*  COMENTARIO */}
      <header className="App-header">
      {contador}
      <button onClick={incrementar}>Sumar</button>    
      <button onClick={incrementarTareas}>Añadir tarea</button>
      </header>
    </div>
  );
}

export default App;
