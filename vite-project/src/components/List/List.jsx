import React from 'react';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon4.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/casa.png';
import './List.css';

const List = () => {
  return (
    <div className="list-container">
      <ul>
        <li>
          <img src={icon1} alt="Icon 1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive Uls</p>
        </li>
        <li>
          <img src={icon2} alt="Icon 2" />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers. </p>
        </li>
        <li>
          <img src={icon4} alt="Icon 4" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state. </p>
        </li>
        <li>
          <img src={icon3} alt="Icon 3" />
          <h2>Single-Way</h2>
          <p>A set of inmutable values are passed to the component's.</p>
        </li>
      </ul>
    </div>
  );
}

export default List;
