import React from 'react';
// import $ from 'jquery';
import axios from 'axios';
import Physicians from './Physicians.jsx';
// import Appointments from './Appointments.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      physicians: [],
      appointments: [],
      selected: ''
    }
  }

  componentDidMount(){
    this.getPhysicians();
  }

  getPhysicians(){
    axios.get('/physicians')
      .then(results => {
        // console.log(results)
        this.setState({
          physicians: results.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    // console.log(this.state.physicians)
    return (
      <div>
        <h1 className="title"> Notable Physicians </h1>
        {/* <Search onSearch={this.search.bind(this)}/> */}
  

        <div className='container' >
          <section className='physicians-container' >
            <Physicians
              physicians={this.state.physicians}
              // changePhysician={this.changePhysicianCalendar}
            />
          </section>
          <section className='appointments-container' >
            {/* <h1>{`Dr. ${this.state.selectedPhysician.first} ${this.state.selectedPhysician.last}`}</h1>
            <h4>{this.state.selectedPhysician.email}</h4> */}
            {/* <AppointmentTable appointments={this.state.appointments} /> */}
          </section>
        </div>
      </div>
    );
  }
}

export default App;