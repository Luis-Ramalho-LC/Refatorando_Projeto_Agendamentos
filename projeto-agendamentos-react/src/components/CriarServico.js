import supabase from '../config/supabaseClient'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MostrarServico from './MostrarServico'

const CriarSevico = () => {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [tempo, setTempo] = useState('')
    const [formError, setFormError] = useState(null)
    
    const salvarServico = async (e) =>{
        e.preventDefault()

        if(!nome || !preco || !tempo){
            setFormError('Preencha todos os campos corretamente!')
            return
        }

        const data = await supabase
            .from('Serviços')
            .insert([{nome, preco, tempo}])

            setFormError(null)
            navigate('/')
    }

    return(
        <div>
            <Header/>
            <form onSubmit={salvarServico}>
                <div className="mb-3">
                    <label htmlFor="inputNomeServico">Nome Do Servico:</label>
                    <input id="inputNomeServico" className="form-control" type="text" placeholder="Nome do Serviço" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                </div>
                 <div className="mb-3">
                    <label htmlFor="inputPrecoServico">Preço Do Serviço:</label>
                    <input id="inputPrecoServico" className="form-control" type="number" placeholder='Preço Do Serviço' value={preco} onChange={(e) => setPreco(e.target.value)}></input>
                </div>
                 <div className="mb-3">
                    <label htmlFor="inputTempoServico">Tempo Gasto no Serviço:</label>
                    <input id="inputTempoServico" className="form-control" type="number" placeholder='Tempo Gasto no Serviço' value={tempo} onChange={(e) => setTempo(e.target.value)}></input>
                </div>
                <button className="btn btn-primary" type="submit">Salvar</button>
                {formError && <p className="erro">{formError}</p>}
            </form>
            <MostrarServico/>
            <Footer/>
        </div>
    )
}

export default CriarSevico