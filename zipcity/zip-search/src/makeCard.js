import React from 'react'

class MakeCard extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const {City, State, Lat, Long, EstimatedPopulation, TotalWages} = this.props.data
		return <div>
			       <h2>{City}, {State}</h2>
			       <ul>
			           <li>State: {State}</li>
			           <li>Location: ({Lat}, {Long})</li>
			           <li>Population (estimated): {EstimatedPopulation}</li>
			           <li>Total Wages: {TotalWages}</li>
			       </ul>
			   </div>
	}
}

export default MakeCard