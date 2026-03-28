//import supabase from "../../config/supabaseClient";
import FetchAgendamentos from "./FetchAgendamentos";
//import {Modal} from 'react-bootstrap'
//import {Button} from 'react-bootstrap'
//import { useState } from "react";

function AtualizarAgendamento(){
    const agendamentos = FetchAgendamentos()
    
    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return(
        <div>
            {agendamentos && (agendamentos.map(agendamento => {
                return(<></>)
            }))}
        </div>
    )
}

export default AtualizarAgendamento