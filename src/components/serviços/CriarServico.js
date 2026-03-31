import supabase from '../../config/supabaseClient'
import {useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MostrarServico from './MostrarServico'

const CriarServico = () => {
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
            console.log(data)
            setFormError(null)
            document.location.reload()
    }

    return(
        <div>
            <Header/>
            <form onSubmit={salvarServico}>
                <div className="mb-3">
                    <label htmlFor="inputNomeServico">Nome Do Servico:</label>
                    <input id="inputNomeServico" className="form-control" type="text" placeholder="Exemplo" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                </div>
                 <div className="mb-3">
                    <label htmlFor="inputPrecoServico">Preço Do Serviço:</label>
                    <input id="inputPrecoServico" className="form-control" type="number" placeholder='Preço em R$' value={preco} onChange={(e) => setPreco(e.target.value)}></input>
                </div>
                 <div className="mb-3">
                    <label htmlFor="inputTempoServico">Tempo Gasto no Serviço:</label>
                    <input id="inputTempoServico" className="form-control" type="number" placeholder='Tempo em Minutos' value={tempo} onChange={(e) => setTempo(e.target.value)}></input>
                </div>
                <button className="btn btn-primary" type="submit">Salvar</button>
                {formError && <p className="erro">{formError}</p>}
            </form>
            <MostrarServico/>
            <Footer/>
        </div>
    )
}

export default CriarServico