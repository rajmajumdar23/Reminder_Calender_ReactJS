import React, { useState } from 'react';

const ReminderForm = ({ selectedDate }) => {
  const [reminderText, setReminderText] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    if (reminderText && reminderTime) {
      const newReminder = {
        date: selectedDate.getDate(),
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
        text: reminderText,
        time: reminderTime
      };

      setReminders([...reminders, newReminder]);
      setReminderText('');
      setReminderTime('');
    }
  };

  return (
    <div className="reminder-form">
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
      <button onClick={handleAddReminder}></button>
      <div className="reminder-list">
        <h2>{selectedDate.toDateString()}</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              <strong>{reminder.time}</strong> - {reminder.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReminderForm;
