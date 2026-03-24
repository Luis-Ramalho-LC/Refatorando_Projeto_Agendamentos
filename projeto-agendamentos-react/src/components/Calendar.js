import FullCalendar from '@fullcalendar/react'
//import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
//import timeGridPlugin from '@fullcalendar/timegrid'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react';

export default function Calendar() {
  const [agendamentos, setAgendamentos] = useState(null)

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const {data} = await supabase
        .from('agendamentos')
        .select()

        setAgendamentos(data)
      }
      fetchAgendamentos()
    }, [])
    
    return (
    <FullCalendar
      plugins = {[ listPlugin ]}
      initialView = "listDay"
      locale = 'pt-br'
      events = {agendamentos}
    />
  )
}