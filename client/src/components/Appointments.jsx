import React from 'react';

const Appointments = (props) => (
  <div className="appointments">
    <h1> {`Dr. ${props.selected.first} ${props.selected.last}`} </h1>
    <h4> {props.selected.email} </h4>
    <h3> Appointments List </h3>
    There are {props.appointments.length} appointments.

    <table className="table">
	    <thead className="labels">
	    	<tr>
			    <th className="label num"> # </th>
			    <th className="label name"> Patient Name </th>
			    <th className="label time"> Time </th>
			    <th className="label kind"> Kind </th>
		    </tr>
	    </thead>
	    {/* <tbody>
		    {props.repos.map((repo, i) => {
		    	return (
		    		<tr value={repo} key={i}>
		    			<td className="user"> {repo.owner_login} </td>
		    			<td><a className="url" href={repo.html_url}> {repo.name} </a></td>
		    			<td className="desc"> {repo.description} </td>
		    			<td className="forks"> {repo.forks} </td>
		    		</tr>
		    	)}
		    )}
	    </tbody> */}
    </table>
  </div>
)

export default Appointments;

// if (appointments.length === 0) {
//   getAppt = <p>There are no appointments here.</p>
// } else {

// }
