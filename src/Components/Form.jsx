import  { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [client, setClient] = useState({
    nombre: "",
    email:""
  });
const [mostrar, setMostrar] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    if (
      client.nombre.trim().length >= 3 &&
      client.email.trim().length >= 6
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {mostrar ? (
        <h4 style={{ color: "green" }}>
        Gracias {client.nombre}, te contactaremos cuanto antes vía mail
      </h4>
      ) : (
      <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
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
          <button>Enviar</button>
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
