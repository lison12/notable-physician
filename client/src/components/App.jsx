import React from 'react';
import axios from 'axios';
import Physicians from './Physicians.jsx';
import Appointments from './Appointments.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      physicians: [],
      appointments: [],
      selected: {},
    }
    this.getAppointments = this.getAppointments.bind(this);
    this.selectDoc = this.selectDoc.bind(this);
  }

  componentDidMount(){
    this.getPhysicians();
  }

  getPhysicians(){
    axios.get('/physicians')
      .then(results => {
        this.setState({
          physicians: results.data,
          selected: results.data[0]
        },
        this.getAppointments(results.data[0].id)
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  getAppointments(DocId){
    axios.get(`/physician/${DocId}`)
      .then(results => {
        this.setState({
          appointments: results.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  selectDoc(event, data){
    this.setState(
      {
        selected: data.physician,
      },
      function(){
        const DocId = this.state.selected.id;
        this.getAppointments(DocId);
      }
    )
  }

  render () {
    // console.log(this.state.physicians)
    // console.log(this.state.selected)
    return (
      <div>
        <h1 className="title"> notable Physician </h1>
  
        <div className='container' >
          <div className='phys-container' >
            <Physicians physicians={this.state.physicians} selectDoc={this.selectDoc} />
          </div>
          <div className='appt-container' >
            <Appointments selected={this.state.selected} appointments={this.state.appointments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;