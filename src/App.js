import React, { useState, useEffect } from 'react';
import axios from './axios';
import Calendar from './components/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('week');

  useEffect(() => {
    const fetchCompletionEvents = async () => {
      try {
        const response = await axios.get('/completions');
        setEvents(
          response.data.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          }))
        );
      } catch (error) {
        console.error('Error fetching completion events:', error);
      }
    };
    fetchCompletionEvents();
  }, []);

  const onNavigate = (newDate) => {};

  const onViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className='App container'>
      <nav className='navbar navbar-light bg-light mb-4'>
        <span className='navbar-brand mb-0 h1'>Habit Tracker</span>
      </nav>
      <div className='view-toggle-buttons btn-group mb-3'>
        <button
          className='btn btn-outline-primary'
          onClick={() => setView('week')}>
          Weekly
        </button>
        <button
          className='btn btn-outline-secondary'
          onClick={() => setView('month')}>
          Monthly
        </button>
        <button
          className='btn btn-outline-success'
          onClick={() => setView('year')}>
          Yearly
        </button>
      </div>
      <Calendar
        events={events}
        setEvents={setEvents}
        view={view}
        onNavigate={onNavigate}
        onViewChange={onViewChange}
      />
    </div>
  );
}

export default App;
