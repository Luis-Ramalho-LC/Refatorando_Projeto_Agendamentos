import supabase from "../../config/supabaseClient";

function DeletarServico(id){
    const Deletar = async() =>{
        const data = await supabase
            .from('Serviços')
            .delete()
            .eq('id', id)

            console.log(data)
            document.location.reload()
    }
    Deletar()
}

export default DeletarServico