import supabase from "../../config/supabaseClient"
import { useEffect, useState } from "react"

function FetchAgendamentos(){
    const [agendamentos, setAgendamentos] = useState("")
    
    useEffect(() => {
        const fetchAgendamentos = async() => {
            const data = await supabase
                .from("agendamentos")
                .select()
    
                setAgendamentos(data.data)
        }
        fetchAgendamentos()
    }, []);
    return agendamentos;
}

export default FetchAgendamentos