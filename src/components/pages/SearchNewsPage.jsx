import React, { Component } from 'react';
import {Container,Segment,Grid,Form} from "semantic-ui-react"
import axios from "axios"
import News from "../view/News"

export default class SearchNewsPage extends Component {
	
	constructor(){
		super()
		this.state = {
			query: '',
			searchQuery: '',
			sorted_by : '',
			news: [],
			loading:false,
			inputloading:false
		}
		this.getSearch = this.getSearch.bind(this)
		this.getSorted = this.getSorted.bind(this)
		this.SearchResults = this.SearchResults.bind(this)
		this.getSearchResults = this.getSearchResults.bind(this)
	}


	getSorted = event => {
		let sorted_by = event.target.value
		this.setState({sorted_by:sorted_by})
		this.SearchResults(this.state.searchQuery,sorted_by)
	}

	getSearch = event => {
		let searchQuery = event.target.value
		this.setState({searchQuery:searchQuery})
		this.SearchResults(searchQuery,this.state.sorted_by)
	}

	SearchResults = (searchQuery,sorted_by) => {

		clearTimeout(this.timer)
		if (!searchQuery) {
			this.setState({query:''})
			return
		}
		this.setState({inputloading:true})
		this.timer = setTimeout(this.getSearchResults(searchQuery,sorted_by),3000)	
	}

	getSearchResults = (searchQuery,sorted_by) => {
		let API_KEY = "7d5d60170a5f446cb2cf116cf31aefe7"
		let query = "https://newsapi.org/v2/everything?q="+searchQuery+"&sortBy="+sorted_by+"&apiKey="+API_KEY
		axios.get(query)
			.then(res=>{	
				this.setState({query:searchQuery,news:res.data.articles,loading:false,inputloading:false})
			})
				.catch(err=>{
					console.log("Error Occur ",err)
				})
	}


	render() {
		return (
			<Container>
				<Segment.Group raised>
					<Segment>
						<h1>Topic Search</h1>
						<Form>
							<Form.Field>
								<label>Search: </label>
								<Form.Input loading={this.state.inputloading} onChange={this.getSearch} placeholder="Search for Topic" />
							</Form.Field>
							<Form.Field>
								<label>Sorted By</label>
								<Form.Select onChange={this.getSorted} options={[{key:"newest",value:"publishedAt",text:"Newest"},{key:"relevancy",value:"relevancy",text:"Relevancy"},{key:"popularity",value:"popularity",text:"Popularity"}]}mplaceholder="Sort by" />
							</Form.Field>
						</Form>	
					</Segment>
					{this.state.query &&
						<Segment loading={this.state.loading}>
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
					}
				</Segment.Group>
			</Container>
		);
	}
}
