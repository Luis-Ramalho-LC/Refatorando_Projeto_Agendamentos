import FullCalendar from '@fullcalendar/react'
//import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
//import timeGridPlugin from '@fullcalendar/timegrid'
import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

export default function Calendar() {
  const [agendamentos, setAgendamentos] = useState("")
    
    useEffect(() => {
        const fetchAgendamentos = async() => {
            const data = await supabase
                .from('agendamentos')
                .select()
    
                setAgendamentos(data.data)
        }
        fetchAgendamentos()
    }, []);

    return (
    <FullCalendar
      plugins = {[ listPlugin ]}
      initialView = "listDay"
      locale = 'pt-br'
      events = {agendamentos}
    />
  )
}