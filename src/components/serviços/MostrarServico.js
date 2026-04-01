import DeletarServico from "./DeletarServico";
import FetchServicos from "./FetchServicos";
import { Link } from "react-router-dom";

function MostrarServico() {
  const servicos = FetchServicos();

  return (
    <div>
      {servicos && (
        <div className="listaServicos">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="card mb-3 card-servico"
              style={{ maxWidth: "20rem", margin: "auto" }}
            >
              <h2 className="card-header">{servico.nome}</h2>
              <div className="card-body">
                <h5 className="card-text">Preço: R${servico.preco}</h5>
                <h5 className="card-text">
                  Tempo Gasto no Serviço: <br></br>
                  {servico.tempo} minutos
                </h5>
              </div>
              <div
                className="card-footer"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button className="btn btn-primary">
                  <Link className="text-light link-underline" to={'/servicos/' + servico.id}>Editar</Link>
                </button>
                <button className="btn btn-danger" onClick={() => DeletarServico(servico.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MostrarServico;
