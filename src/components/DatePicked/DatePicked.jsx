import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicked () {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date ();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    
      <div>
        <label htmlFor="date">Select a Date:</label>
        <br />
        <DatePicker
          id="date"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={today}
        />
      </div>
    
  );
};

