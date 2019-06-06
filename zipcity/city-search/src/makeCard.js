import React from 'react'

class MakeCard extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const {zip} = this.props.num
		console.log(this.props.num);
		return <div>
			       <h3>{zip}</h3>
			   </div>
	}
}

export default MakeCard