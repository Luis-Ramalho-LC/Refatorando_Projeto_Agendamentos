import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

function FetchServicos() {
    const [servicos, setServicos] = useState("");
    
    useEffect(() => {
        const fetchServicos = async () => {
            const data = await supabase
                .from("Serviços")
                .select();
            
                setServicos(data.data);
        };
        fetchServicos();
    }, []);
    return servicos;
}

export default FetchServicos;