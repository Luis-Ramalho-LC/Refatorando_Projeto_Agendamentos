import supabase from "../config/supabaseClient";
import {useEffect, useState} from 'react'

function MostrarServico(){
    const [servicos, setServicos] = useState('')

    useEffect(() => {
        const fetchServicos = async() =>{
            const data = await supabase
                .from('Serviços')
                .select()
        
                setServicos(data.data)
        }
        fetchServicos()
    }, [])
    
    return(
        <div>
            {servicos && (
                <div className="listaServicos">
                    {servicos.map(servico => (
                        <div key={servico.id} className="card text-bg-secondary mb-3" style={{maxWidth: "20rem", margin: "auto"}}>
                            <div className="card-header">{servico.nome}</div>
                            <div className="card-body">
                                <h5 className="card-title">Preço: R${servico.preco}</h5>
                                <p className="card-text">Tempo Gasto no Serviço: {servico.tempo} minutos</p>
                            </div>
                            <div className="card-footer" style={{display: "flex", justifyContent: "space-between"}}>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MostrarServico