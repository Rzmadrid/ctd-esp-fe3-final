import  { useState } from "react";


const Form = () => {
 
  const [client, setClient] = useState({
    nombre: "",
    email:""
  });
const [mostrar, setMostrar] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // [0-9]
    if (
      client.nombre.trim().length > 5 && 
      regexMail.test(client.email.trim())
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className = "divForm" >
      {mostrar ? (
        <h4 style={{ color: "#4CAF50" }}>
        Gracias {client.nombre}, te contactaremos cuanto antes vía mail
      </h4>
      ) : (
      <form onSubmit={handleSubmit}>
      <label>Nombre Completo:</label>
          <input
            type="text" 
            value={client.nombre}
            onChange={(event) =>
              setClient({ ...client, nombre: event.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="email"
            value={client.email}
            onChange={(event) =>
              setClient({ ...client, email: event.target.value })
            }
          />
          <button className="btnForm">Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor verifique su información nuevamente
            </h4>
          ) : null}
      </form>
      )}
    </div>
  );
};

export default Form;
