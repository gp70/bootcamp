import React from 'react'

class MakeCard extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const {description, amount, date} = this.props.data
		return <div>
			       <ul>
			           <li>Item: {description}</li>
			           <li>Amount: {amount}</li>
			           <li>Date: {date}</li>
			       </ul>
			   </div>
	}
}

export default MakeCard