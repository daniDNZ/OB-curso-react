import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const initialUser = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  }
  const [user, setUser] = useState(initialUser);

  function tick() {
    setUser((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      }
    });
  }

  useEffect(() => {
    const timerID = setInterval(
      tick, 1000
    );
    
    return (() => clearInterval(timerID));
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>{user.nombre} {user.apellidos}</h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  )
}
export default Clock;