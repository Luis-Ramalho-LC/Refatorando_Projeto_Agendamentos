import {useState} from 'react'
import supabase from '../config/supabaseClient'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const CriarAgendamento = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    var [start] = useState('')
    var [end] = useState('')
    const [formError, setFormError] = useState(null)
    const [dataAgendada, setDataAgendada] = useState('')
    const [horarioInicial, setHorarioInicial] = useState('')
    const [tipoDoServico, setTipoDoServico] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        start = dataAgendada
        end = dataAgendada
        //end = dataAgendada + "T" + horarioInicial + tipoDoServico.tempoGasto            --essa parte dependo do crud de servicos
        
        if(!title || !start || /*!end ||*/ !tipoDoServico){
            setFormError('Preencha todos os campos corretamente!')
            return
        }
        
        const data = await supabase
            .from('agendamentos')
            .insert([{title, start, end, tipoDoServico}])

            setFormError(null)
            navigate('/')
    }

    return(
        <div className="Form-agendamento">
            <Header/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="NomeCliente" className="form-label">Nome Do Cliente:</label>
                    <input type="text" className="form-control" id="NomeCliente" placeholder="Fulano Da Silva" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="DiaDoAgendamento" className="form-label">Dia do agendamento:</label>
                    <input type="date" className="form-control" id="DiaDoAgendamento" value={dataAgendada} onChange={(e) => setDataAgendada(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="HorarioInicial" className="form-label">Horário agendado:</label>
                    <input type="time" className="form-control" id="HorarioInicial" value={horarioInicial} onChange={(e) => setHorarioInicial(e.target.value)}/>
                </div>
                <select id="SelecionarServico" className="form-select" aria-label="Default select example" onChange={(e) => setTipoDoServico(e.target.value)}>
                    <option value={tipoDoServico}>Isso deve ser preenchido dinamicamente</option>
                    <option value="cabelo">exemplo cabelo</option>
                    <option value="2">exemplo barba</option>
                    <option value="3">exemplo sobrancelha</option>
                </select>
                <button className="btn btn-primary" type="submit">Salvar</button>
                {formError && <p className="erro">{formError}</p>}
            </form>
            <Footer/>
        </div>
    )
}

export default CriarAgendamento