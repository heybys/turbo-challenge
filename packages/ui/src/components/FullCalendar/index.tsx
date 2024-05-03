import React from 'react';
import FcFullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 1000px;

  ${(props) => ({
    color: props.theme.color.blue50,
  })}

  .fc-toolbar-title {
    text-transform: uppercase;
  }

  .fc-today-button,
  .fc-button-group button {
    text-transform: capitalize;
  }
`;

export const FullCalendar = () => {
  return (
    <StyledDiv>
      <FcFullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        }}
        eventClick={(arg) => {
          console.log(arg);
          arg.jsEvent.preventDefault();
        }}
        views={{
          dayGridMonth: {
            titleFormat: {
              year: 'numeric',
              month: 'long',
            },
            dayHeaderFormat: {
              weekday: 'narrow',
            },
          },
          timeGridWeek: {
            titleFormat: {
              month: 'long',
              day: 'numeric',
            },
          },
          timeGridDay: {
            titleFormat: {
              month: 'long',
              day: 'numeric',
            },
          },
          listMonth: {
            titleFormat: {
              month: 'long',
            },
          },
        }}
        events={[
          {
            title: 'All Day Event',
            start: '2024-03-01',
          },
          {
            title: 'Long Event',
            start: '2024-03-07',
            end: '2024-03-10',
            // color: 'purple',
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2024-03-09T16:00:00',
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2024-03-16T16:00:00',
          },
          {
            title: 'Conference',
            start: '2024-03-11',
            end: '2024-03-13',
          },
          {
            title: 'Meeting',
            start: '2024-03-12T10:30:00',
            end: '2024-03-12T12:30:00',
          },
          {
            title: 'Lunch',
            start: '2024-03-12T12:00:00',
          },
          {
            title: 'Meeting',
            start: '2024-03-12T14:30:00',
          },
          {
            title: 'Birthday Party',
            start: '2024-03-13T07:00:00',
          },
          {
            title: 'Click for Google',
            url: 'https://google.com/',
            start: '2024-03-28',
          },
        ]}
      />
    </StyledDiv>
  );
};
