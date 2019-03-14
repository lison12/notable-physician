import React from 'react';
// import $ from 'jquery';
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
          selected: results.data[1]
        })
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
        {/* <Search onSearch={this.search.bind(this)}/> */}
  
        <div className='container' >
          <section className='physicians-container' >
            <Physicians physicians={this.state.physicians} selectDoc={this.selectDoc} />
          </section>

          <section className='appointments-container' >
            <Appointments selected={this.state.selected} appointments={this.state.appointments} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;