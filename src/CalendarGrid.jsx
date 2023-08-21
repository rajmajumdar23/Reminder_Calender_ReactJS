import React, { useState } from 'react';
import './Styling/CalenderGrid.css';
import { RiCloseLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

const CalendarGrid = ({ selectedDate }) => {
  const [clickedDate, setClickedDate] = useState(null);
  const [reminderText, setReminderText] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminders, setReminders] = useState([]);
  const [reminderAddedDate, setReminderAddedDate] = useState(null);
  const [showReminderForm, setShowReminderForm] = useState(false);

  const handleDateClick = (day) => {
    setClickedDate(day);
    setShowReminderForm(true);
  };

  const handleAddReminder = () => {
    if (reminderText && reminderTime && clickedDate) {
      const newReminder = {
        date: clickedDate.getDate(),
        month: clickedDate.getMonth(),
        year: clickedDate.getFullYear(),
        text: reminderText,
        time: reminderTime,
      };

      setReminders([...reminders, newReminder]);
      setReminderText('');
      setReminderTime('');
      setReminderAddedDate(clickedDate);
    }
  };

  const handleCloseReminderForm = () => {
    setShowReminderForm(false);
  };

  const isDateColored = (date) => {
    return (
      reminderAddedDate &&
      date.getDate() === reminderAddedDate.getDate() &&
      date.getMonth() === reminderAddedDate.getMonth() &&
      date.getFullYear() === reminderAddedDate.getFullYear()
    );
  };

  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  };

  const getDaysInMonth = () => {
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    const days = [];
    const currentDate = new Date(firstDay);

    while (currentDate <= lastDay) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const daysInMonth = getDaysInMonth();

  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.date === clickedDate?.getDate() &&
      reminder.month === clickedDate?.getMonth() &&
      reminder.year === clickedDate?.getFullYear()
  );

  return (
    <div className="calendar-grid">
      <div className="calendar-row">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day)}
            className={`calendar-cell ${isDateColored(day) ? 'colored-date' : ''}`}
          >
            <div className="day">{getDayOfWeek(day)}</div>
            <div className="date">{day.getDate()}</div>
          </div>
        ))}
      </div>
      {showReminderForm && clickedDate && (
        <div className="reminder-form">
          <h2>{clickedDate.toDateString()}</h2>
          <input
            type="text"
            placeholder="Enter Reminder"
            value={reminderText}
            onChange={(e) => setReminderText(e.target.value)}
          />
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
          />
          <button id="close-button" onClick={handleCloseReminderForm}>
            <RiCloseLine />
          </button>
          <button id="add-button" onClick={handleAddReminder}>
            <FaPlus />
          </button>
        </div>
      )}
      <div className="reminder-list">
        <ul>
          {filteredReminders.map((reminder, index) => (
            <li key={index}>
              <strong>{reminder.time}</strong> - {reminder.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarGrid;
