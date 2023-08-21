import React, { useState } from 'react';
import Calendar from './Calender';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
    </div>
  );
}

export default App;
