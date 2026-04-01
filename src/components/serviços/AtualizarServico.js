import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header"
import Footer from "../Footer"
import supabase from "../../config/supabaseClient";
import '../FormAtualizar.css'

function AtualizarServico(){
    const {servicosId} = useParams()
    const navigate = useNavigate()

    const [nome, setNomeServico] = useState("")
    const [preco, setPrecoServico] = useState("")
    const [tempo, setTempoServico] = useState("")
    const [formError, setFormError] = useState(null)

    useEffect(() => {
        const fetchServicoUnico = async() => {
            const {data, error} = await supabase
                .from('Serviços')
                .select()
                .eq('id', servicosId)
                .single()

            if(error){
                console.log(error)
                navigate('/CriarServico', {replace: true})
            }
            if(data){
                setNomeServico(data.nome)
                setPrecoServico(data.preco)
                setTempoServico(data.tempo)
            }
        }
        fetchServicoUnico()
    }, [servicosId, navigate])

    const salvarAlteracaoServico = async(e) => {
        e.preventDefault()

        if(!nome || !preco || !tempo){
            setFormError("Preencha todos os campos corretamente!");
        return;
        }

        const data = await supabase
            .from('Serviços')
            .update({nome, preco, tempo})
            .eq('id', servicosId)

        console.log(data)
        setFormError(null)
        navigate('/CriarServico')
    }

    return(
        <div id="atualizarServico">
        <Header/>
        <div className="card text-center m-3 formAtualizar">
        <form onSubmit={salvarAlteracaoServico}>
            <div className="card-header">Alterar Serviço</div>
            <div className="card-body">
                <div>
                    <label htmlFor="nome">Nome Do Serviço:</label>
                    <input type="text" className="form-control" id="nome" value={nome}
                    onChange={(e) => setNomeServico(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="preco">Preço do Serviço: <br></br>(R$)</label>
                    <input type="number" className="form-control" id="preco" value={preco}
                    onChange={(e) => setPrecoServico(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="tempo">Tempo Gasto no Serviço: <br></br>(em Minutos)</label>
                    <input type="number" className="form-control" id="tempo" value={tempo} 
                    onChange={(e) => setTempoServico(e.target.value)} />
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                <button className="btn btn-primary btn-atualizar" type="submit">Salvar</button>
            </div>
            {formError && <p className="erro">{formError}</p>}
        </form>
        </div>
        <div id="a"></div>
        <Footer/>
        </div>
    )
}

export default AtualizarServico