import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      {mostrar ? (
        <h4 style={{ color: "red" }}>
        Gracias {user.nombre}, te contactaremos cuando antes vía mail
      </h4>
      ) : (
      <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
          <input
            type="text" 
            value={user.nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, canFavorita: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
      </form>
      )}
    </div>
  );
};

export default Form;
