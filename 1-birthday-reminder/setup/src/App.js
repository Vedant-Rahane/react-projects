import React, { useState } from 'react';
import todayData from "./todayBirthdays";
import List from './List';
import Heading from "./Heading";
function App() {

const [people, setPeople] = useState(todayData);

return (
  <main>
    <Heading />
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </section>
  </main>
);
}

export default App;
