import { useParams, useNavigate } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { useEffect, useState } from "react"
import supabase from "../../config/supabaseClient"
import FetchServicos from "../serviços/FetchServicos"
import moment from "moment"

const AtualizarAgendamento = () => {
    const {agendamentosId} = useParams()
    const navigate = useNavigate()
    const servicos = FetchServicos()

    const [title, setTitle] = useState("");
    var [start, setStart] = useState("");
    var [end, setEnd] = useState("");
    const [formError, setFormError] = useState(null);
    var [dataAgendada, setDataAgendada] = useState("");
    var [horarioInicial, setHorarioInicial] = useState("");
    const [tipoDoServico, setTipoDoServico] = useState("");
    var arrayTipoDoServico = "";

    useEffect(() => {
        const fetchAgendamentoUnico = async() =>{
            const {data, error} = await supabase
                .from('agendamentos')
                .select()
                .eq('id', agendamentosId)
                .single()

            if(error){
                navigate('/CriarAgendamento', {replace: true})
            }
            if(data){
                setTitle(data.title)
                setStart(data.start)
                setEnd(data.end)
                setTipoDoServico(data.tipoDoServico)
                setDataAgendada(data.start.split("T")[0])
                setHorarioInicial(data.start.split("T")[1])
            }
        }

        fetchAgendamentoUnico()
    }, [agendamentosId, navigate])

    const salvarAlteracaoAgendamento = async(e) => {
        e.preventDefault()
        arrayTipoDoServico = tipoDoServico.split("/");
        
        start = dataAgendada + "T" + horarioInicial
        end = moment(start, "YYYY/M/D h:m").add(arrayTipoDoServico[0], "m");

        console.log(start)

        if (!title || !start || !end || tipoDoServico === "") {
            setFormError("Preencha todos os campos corretamente!");
        return;
        }

        const data = await supabase
            .from('agendamentos')
            .update({title, start, end, tipoDoServico})
            .eq('id', agendamentosId)
            
        console.log(data)
        setFormError(null)
        navigate('/CriarAgendamento')
    }
    
    return(
        <>
        <Header/>
        <div className="card text-center m-3">
            <form onSubmit={salvarAlteracaoAgendamento}>
            <div className="card-header">Alterar Agendamento</div>
            <div className="card-body">
                <div>
                    <label htmlFor="NomeCliente">Nome Do Cliente:</label>
                    <input type="text" className="form-control" id="NomeCliente" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="DiaDoAgendamento">Dia do agendamento:</label>
                    <input type="date" className="form-control" id="DiaDoAgendamento" value={dataAgendada}
                    onChange={(e) => setDataAgendada(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="HorarioInicial">Horário agendado:</label>
                    <input type="time" className="form-control" id="HorarioInicial" value={horarioInicial} 
                    onChange={(e) => setHorarioInicial(e.target.value)} />
                </div>
                <div>
                    <select id="SelecionarServico" className="form-select mt-2" 
                    onChange={(e) => setTipoDoServico(e.target.value)} >
                        <option value={tipoDoServico.split("/")[1]}>{tipoDoServico.split("/")[1]}</option>
                        {servicos && servicos.map((servico) => (
                            <option key={servico.id} value={servico.tempo + "/" + servico.nome} >{servico.nome}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                <button className="btn btn-primary">Salvar</button>
            </div>
            {formError && <p className="erro">{formError}</p>}
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default AtualizarAgendamento