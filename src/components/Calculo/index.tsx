import { useState } from "react";
import "./styles";
import { Container, Content } from "./styles";

function calculoImc(peso: string, altura: string) {
  let mensage: string = "";

  const imcResult = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

  if (imcResult < 18.5) mensage = "Abaixo do peso";
  if (imcResult >= 18.5 && imcResult < 25) mensage = "Peso ideal";
  if (imcResult >= 25 && imcResult < 30) mensage = "Sobrepeso";
  if (imcResult >= 30 && imcResult < 35) mensage = "Obesidade tipo 1";
  if (imcResult >= 35 && imcResult < 40) mensage = "Obesidade tipo 2";
  if (imcResult >= 40) mensage = "Obesidade Mórbida";

  return mensage;
}

export function Calculo() {
  const [resultado, setResultado] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function calcular() {
    setResultado(calculoImc(peso, altura));
  }
  return (
    <Container>
      <Content>
        <form>
          <div>
            <label>Peso</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => {
                setPeso(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Altura</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => {
                setAltura(e.target.value);
              }}
            />
          </div>
          <button type="button" onClick={calcular}>
            Calcular
          </button>
        </form>
        <h1>{resultado}</h1>
      </Content>
    </Container>
  );
}
