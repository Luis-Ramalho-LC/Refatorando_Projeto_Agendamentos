import supabase from "../../config/supabaseClient";

function DeletarAgendamento(id){

    const Deletar = async() => {
        const data = await supabase
            .from('agendamentos')
            .delete()
            .eq('id', id)
            
    
            console.log(data)
            document.location.reload()
    }
    Deletar()
}

export default DeletarAgendamento