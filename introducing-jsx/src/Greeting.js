import React, { Component } from 'react';
import './Greeting.css'

const user = {
  firstName: 'Eddie',
  lastName: 'Prislac'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element =
  `Hello, ${formatName(user)}!`

class Greeting extends Component {
  render() {
   return (<div className="Greeting">
            <h1>{element}</h1>
          </div>);
  }
}

export default Greeting;
