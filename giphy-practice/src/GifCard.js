import React from 'react'

class GifCard extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			'searchterm': this.props.string,
			'apikey' : "OekpDIX1a8y4ODOlTHV9CfGe2AtAFWUx",
			'imgUrl' : "",
			'type': this.props.type,
			'getnum': this.props.getnum
		}
	}

	getImgUrl = async() =>
	{
		let response = '';
		let json = null

		if(this.state.type === "search")
			response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchterm}&api_key=${this.state.apikey}`,{});
		if(this.state.type === "trending")
			response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${this.state.apikey}`,{});

		try
	 	{
			json = await response.json();
			console.log(json)
			await this.setState({'imgUrl': json.data[this.state.getnum].images.downsized.url})
			console.log(this.state.imgUrl)
		}
	 	catch(e)
	 	{
			console.log(e)
		}
	}
	
	componentDidMount()
	{
		this.getImgUrl()
	}

	render()
	{
		// console.log("test")
		return 	(
					<img src={this.state.imgUrl} alt=""/>
				)
	}
}

export default GifCard;