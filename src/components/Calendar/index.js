import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import YearView from './YearView';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ events, setEvents, view, onNavigate, onViewChange }) => {
  const handleSelectEvent = async (event) => {
    const r = window.confirm('Would you like to remove this event?');
    if (r === true) {
      try {
        await deleteEvent(event.id);
        const newEvents = events.filter((e) => e.id !== event.id);
        setEvents(newEvents);
      } catch (error) {
        console.error('Error removing event', error);
      }
    }
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: '80vh' }}
      selectable
      onNavigate={onNavigate}
      onView={view}
      onViewChange={onViewChange}
      onSelectEvent={handleSelectEvent}
      views={{ week: true, month: true, year: YearView }}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: event.color,
        },
      })}
    />
  );
};

export default Calendar;

// import React from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import YearView from './YearView';
// import { deleteCompletion } from '../../api/completionsApi';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const Calendar = ({ events, setEvents, view, onNavigate, onViewChange }) => {
//   const handleSelectEvent = async (event) => {
//     if (window.confirm('Do you want to remove this completion?')) {
//       await deleteCompletion(event.id);
//       setEvents(events.filter(e => e.id !== event.id));
//     }
//   };

//   return (
//     <BigCalendar
//       localizer={localizer}
//       events={events}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: '80vh' }}
//       selectable
//       onNavigate={onNavigate}
//       onView={view}
//       onViewChange={onViewChange}
//       onSelectEvent={handleSelectEvent}
//       views={{ week: true, month: true, year: YearView }}
//       eventPropGetter={(event) => ({
//         style: {
//           backgroundColor: event.color,
//         },
//       })}
//     />
//   );
// };

// export default Calendar;
