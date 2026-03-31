import DeletarAgendamento from "./DeletarAgendamento";
import FetchAgendamentos from "./FetchAgendamentos";
import { Link } from "react-router-dom";

function MostrarAgendamentos(){
    const agendamentos = FetchAgendamentos()
    var arrayTipoDoServico = ''

    return(
        <div>
            {agendamentos && (
                <div className="listaAgendamentos">
                    {agendamentos.map(agendamento => (
                        arrayTipoDoServico = agendamento.tipoDoServico.split('/'),
                            
                        <div key={agendamento.id} className="card text-bg-secondary mb-3" style={{maxWidth: "20rem", margin: "auto"}}>
                            <h2 className="card-header">{agendamento.title}</h2>
                            <div className="card-body">
                                <h5 className="card-text">Data: {agendamento.start.slice(0, 10)}</h5>
                                <h5 className="card-text">Inicío: {agendamento.start.slice(11)}</h5>
                                <h5 className="card-text">Fim: {(parseInt(agendamento.end.slice(11, 13)) - 3) + agendamento.end.slice(13, 16)}</h5>
                                <h5 className="card-text">Serviço: {arrayTipoDoServico[1]}</h5>
                            </div>
                            <div className="card-footer" style={{display: "flex", justifyContent: "space-between"}}>
                                <button className="btn btn-primary" /*data-bs-toggle="modal" data-bs-target={`#${agendamento.id}`}*/ >
                                <Link to={'/' + agendamento.id}>
                                    Editar
                                </Link>
                                </button>
                                <button className="btn btn-danger" onClick={() => DeletarAgendamento(agendamento.id)}>Excluir</button>
                            </div>
                        
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MostrarAgendamentos