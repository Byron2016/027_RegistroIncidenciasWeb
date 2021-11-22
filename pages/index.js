import { useState } from "react";
import Head from "next/head";

import { Heading, Input, Button, Spacer } from "@super2016/components_a";

export default function Home() {
  const [formValues, setFormValues] = useState({});

  // Función que retorna una función.
  // Se ejecuta la primera vez recibe un key
  // se ejecuta segunda vez recibe un evento.
  const onChange = (key) => (event) => {
    const { value } = event.target;
    console.log({ value });
    setFormValues({ ...formValues, [key]: value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading size="xl">Cuentame sobre ti</Heading>
      <Spacer.Horizontal size="md" />
      <Input
        value={formValues.name}
        onChange={onChange("name")}
        placeholder="Nombres"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.lastname}
        onChange={onChange("lastname")}
        placeholder="Apellidos"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.email}
        onChange={onChange("email")}
        placeholder="Correo electrónico"
      />
      <Spacer.Horizontal size="lg" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button type="primary">Completa tu perfil</Button>
        <Spacer.Horizontal size="md" />
        <Button type="tertiary">Saltar este paso por ahora</Button>
      </div>
    </div>
  );
}
