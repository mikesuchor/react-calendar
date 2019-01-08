import React, { Component } from 'react';
import './Calendar.css';
import Header from './Header';
import Day from './Day';

class Calendar extends Component {
  render() {
    return (
      <div>
        <Header />
        <Day />
      </div>
    );
  }
}

export default Calendar;
