import React, { Component } from 'react';
import {Container,Segment,Grid} from "semantic-ui-react"
import axios from "axios"
import News from "../view/News"

export default class MainHomePage extends Component {

	constructor(){
		super()
		this.state = {
			country: '',
			category: '',
			news : [],
			loading: false,
			query: ''
		}
		this.getNews = this.getNews.bind(this)
	}

	componentDidMount(){
		console.log("load",this.props.match.params.type)
		const type = this.props.match.path.split("/")[2]
		if(type){
			this.setState({type:this.Capitalize(type)})
		}else{
			this.setState({type:"Selected Blogs"})
		}
		this.getNews()
	}

	Capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	getNews = () => {
		var query;
		if(this.props.match.path.split("/")[2])
			 query = "https://m-app-ml-api.herokuapp.com/get/"+this.props.match.path.split("/")[2]
		else
			 query = "https://m-app-ml-api.herokuapp.com/get"


		
		this.setState({loading:true})
		axios.get(query)
			.then(res=>{
					this.setState({news:res.data.items,loading:false,query:"ok"})
			})
			.catch(err=>{
				console.log("Error Occur ",err)
			})
	}

	render() {
		return (
			<Container loading={this.state.loading}>
				<Segment.Group  raised>
					<Segment>
						<h1>{this.state.type} </h1>
					</Segment>
					{this.state.query &&
						<Segment loading={this.state.loading}>
							<Grid   stretched stackable columns={3} >
								{this.state.news  && this.state.news.map((news,i) => {
									return (
										<Grid.Column  style={{margin:"auto"}} key={i}>
											<News data={news} />
										</Grid.Column>
									)
								})}
							</Grid>
						</Segment>
					}
				</Segment.Group>
			</Container>			
		);
	}
}
