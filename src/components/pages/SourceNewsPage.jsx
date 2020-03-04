import React, { Component } from 'react';
import {Container,Segment,Grid} from "semantic-ui-react"
import axios from "axios"
import News from "../view/News"
import {Link} from "react-router-dom"
export default class SourceNewsPage extends Component {
	
	constructor(){
		super()
		this.state = {
			query: '',
			news: []
		}
		this.getIdNews = this.getIdNews.bind(this)
	}
	componentDidMount = () => {
		this.getIdNews(this.props.match.params.id)
	}

	getIdNews = (id) => {
		let apiKey = "7d5d60170a5f446cb2cf116cf31aefe7"
		let query = "https://newsapi.org/v2/top-headlines?sources="+id+"&apiKey="+apiKey
			axios.get(query)
			.then(res=>{	
				this.setState({news:res.data.articles,query:"ok"})
			})
				.catch(err=>{
					console.log("Error Occur ",err)
				})
	}
	render() {
		return (
			<Container>
				{this.state.query && (
					<Segment>
						<h1>News</h1>
						<Link to="/source">Go Back</Link>
						<br />
						<br />
						<br />
						<Grid stretched stackable columns={3} >
								{this.state.news  && this.state.news.map((news,i) => {
									return (
										<Grid.Column key={i}>
											<News data={news} />
										</Grid.Column>
									)
								})}
							</Grid>
					</Segment>
			   )}
			</Container>
		);
	}
}
