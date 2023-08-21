import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import "./Styling/Calender.css"
import a from "./assets/57379.jpg"
const Calendar = ({ selectedDate, onSelectDate }) => {
  return (
    <>
    <img id='image1' src={a} alt="" />
    <div className="calendar">
       <h1 className='h1'>Calendar</h1>
      <CalendarHeader selectedDate={selectedDate} onSelectDate={onSelectDate} />
      <CalendarGrid selectedDate={selectedDate} />
    </div>
    </>
  );
};

export default Calendar;
 