import React from 'react';
import "./Styling/CalendarHeader.css"
const CalendarHeader = ({ selectedDate, onSelectDate }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [];
  const currentYear = new Date().getFullYear();

  for (let year = 1945; year <= 2145; year++) {
    years.push(year);
  }

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    const newDate = new Date(selectedDate);
    newDate.setMonth(months.indexOf(newMonth));
    onSelectDate(newDate);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10); 
    const newDate = new Date(selectedDate);
    newDate.setFullYear(newYear);
    onSelectDate(newDate);
  }; 

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onSelectDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onSelectDate(newDate);
  };

  return (
    <div className="calendar-header">
      <button onClick={handlePreviousMonth}>Previous Month</button>
      <select value={months[selectedDate.getMonth()]} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <button onClick={handleNextMonth}>Next Month</button>
    </div>
  );
}

export default CalendarHeader;
