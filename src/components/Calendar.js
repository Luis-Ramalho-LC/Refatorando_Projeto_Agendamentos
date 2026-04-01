import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';
import './HomePage.css'

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
      headerToolbar = {
        {
          start: 'title',
          end: 'today prev,next'
        }
      }
    />
  )
}