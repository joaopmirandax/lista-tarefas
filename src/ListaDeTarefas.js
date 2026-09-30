import { useState } from "react";

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") {
      return;
    }

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }

  return (
    <div className="lista">
      <h2>Lista de Tarefas</h2>

      <div className="entrada">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {tarefas.length > 0 ? (
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa para exibir.</p>
      )}
    </div>
  );
}

export default ListaDeTarefas;