import React from 'react';

const Appointments = (props) => {
  return (
    <div className="appointments">
      <h1> {`Dr. ${props.selected.first} ${props.selected.last}`} </h1>
      <h4> {props.selected.email} </h4>
      <h3> Appointments List </h3>
      <p> {`There are ${props.appointments.length} appointment(s).`} </p>

      <table className="table">
        <thead >
          <tr className="labels">
            <th className="label num"> # </th>
            <th className="label name"> Patient Name </th>
            <th className="label time"> Time </th>
            <th className="label kind"> Kind </th>
          </tr>
        </thead>
        <tbody>
          {props.appointments.map((appointment, i) => {
            return (
              <tr className="label-body" value={appointment} key={i}>
                <td className="label id"> {appointment.appointmentId} </td>
                <td className="label name" > {`${appointment.patient.first} ${appointment.patient.last}`} </td>
                <td className="label time"> {appointment.time} </td>
                <td className="label kind"> {appointment.kind} </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;

// if (props.appointments.length === 0) {
//   getAppt = <p>There are no appointments here.</p>
// } else {
// }
