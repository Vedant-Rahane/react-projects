import React from 'react';
import Age from './Age';

const List = ({people}) => {
  return (
    people.map((person) => {
      const {id, name, date, image} = person;
      return <article key={id} className="person">
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <Age date={date}/>
        </div>
    </article>
    })
  );
};

export default List;
