
import React, { useState } from 'react';

const Formulario = () => {
  const [funcao, setFuncao] = useState("x**2 + y**2");
  const [variaveis, setVariaveis] = useState("x y");
  const [pontoInicial, setPontoInicial] = useState([1, 1]);
  const [resultado, setResultado] = useState(null);
  const [imagemUrl, setImagemUrl] = useState("");
  const [historico, setHistorico] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar para /otimizar
    const resposta = await fetch("http://localhost:5000/otimizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        funcao,
        variaveis,
        ponto_inicial: pontoInicial,
        tolerancia: 1e-6,
        max_iter: 100
      })
    });

    const dados = await resposta.json();
    setResultado(dados);

    // Gerar gráfico em /visualizar
    await fetch("http://localhost:5000/visualizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        funcao,
        variaveis,
        ponto_inicial: pontoInicial,
        nome_arquivo: "grafico_newton.png"
      })
    });

    setImagemUrl("http://localhost:5000/static/grafico_newton.png");
  };

  const carregarHistorico = async () => {
    const resposta = await fetch("http://localhost:5000/historico");
    const historicoData = await resposta.json();
    setHistorico(historicoData);
  };

  return (
    <div>
      <h2>Otimização Não Linear</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Função:</label>
          <input value={funcao} onChange={(e) => setFuncao(e.target.value)} />
        </div>
        <div>
          <label>Variáveis:</label>
          <input value={variaveis} onChange={(e) => setVariaveis(e.target.value)} />
        </div>
        <div>
          <label>Ponto Inicial (ex: 1,2):</label>
          <input
            value={pontoInicial.join(",")}
            onChange={(e) =>
              setPontoInicial(e.target.value.split(",").map(Number))
            }
          />
        </div>
        <button type="submit">Executar</button>
        <button type="button" onClick={carregarHistorico} style={{ marginLeft: 10 }}>
          Ver Histórico
        </button>
      </form>

      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <p>Mínimo: [{resultado.minimo?.join(", ")}]</p>
          <p>Valor da função: {resultado.valor_funcao}</p>
          <p>Iterações: {resultado.iteracoes}</p>
        </div>
      )}

      {imagemUrl && (
        <div>
          <h3>Gráfico:</h3>
          <img src={imagemUrl} alt="Gráfico gerado" width="400" />
        </div>
      )}

      {historico.length > 0 && (
        <div>
          <h3>Histórico:</h3>
          <ul>
            {historico.map((item, idx) => (
              <li key={idx}>
                <strong>Função:</strong> {item.entrada.funcao} |
                <strong> Mínimo:</strong> [{item.resultado.minimo.join(", ")}]
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Formulario;
