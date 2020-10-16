import React, { useState } from "react";

const ClientForm = ({onClientAdd}) => {
  const [nouveauClient, setNouveauClient] = useState("")

  const handleChange = event => {
    setNouveauClient(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauClient;

    onClientAdd({ id, nom });
    setNouveauClient("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
          value={nouveauClient}
          onChange={handleChange}
          type="text"
          placeholder="add client"
        />
        <button className="greenButton">Confirmer</button>
      </form>
    );
}

export default ClientForm;
