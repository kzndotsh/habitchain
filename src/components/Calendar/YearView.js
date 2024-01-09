import React from 'react';
import { Calendar, Views, DateLocalizer } from 'react-big-calendar';

const YearView = ({ events, localizer }) => {
  return (
    <div>
      <Calendar
        events={events}
        localizer={localizer}
        views={{ month: true }}
        defaultView={Views.MONTH}
        showMultiDayTimes
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default YearView;
