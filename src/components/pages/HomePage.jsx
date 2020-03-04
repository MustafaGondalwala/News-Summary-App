import React, { Component } from 'react';
import {Container,Segment,Select,Form,Grid} from "semantic-ui-react"
import axios from "axios"
import News from "../view/News"

export default class HomePage extends Component {

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
		this.getNews('in','general')
		this.setState({country:'in',category:'general'})
	}

	getNews = (country,category) => {
		let API_KEY = "7d5d60170a5f446cb2cf116cf31aefe7"
		let query = "https://newsapi.org/v2/top-headlines?pageSize=100&country="+country+"&category="+category+"&apiKey="+API_KEY
		this.setState({loading:true})
		axios.get(query)
			.then(res=>{	
				this.setState({news:res.data.articles,loading:false,query:"ok"})
				console.log(res.data.articles)
			})
				.catch(err=>{
					console.log("Error Occur ",err)
				})
	}

	changeCountry = (event,data) => {
		event.preventDefault()
		this.setState({country:data.value})
		this.getNews(data.value,this.state.category)
	}

	changeCategory = (event,data) => {
		event.preventDefault()
		this.setState({category:data.value})
		this.getNews(this.state.country,data.value)
	}

	render() {
		return (
			<Container>
				<Segment.Group raised>
					<Segment>
						<h1>Top HeadLine</h1>
						<Form>	
							<Form.Field>
								<label>Country:</label>
								<Form.Dropdown fluid  search selection  placeholder="Select your Country:"  onChange={this.changeCountry} defaultValue='in' options=
									{[
										{ key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates'},
										{ key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
										{ key: 'at', value: 'at', flag: 'at', text: 'Austria'},
										{ key: 'au', value: 'au', flag: 'au', text: 'Australia'},
										{ key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
										{ key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria'},
										{ key: 'br', value: 'br', flag: 'br', text: 'Brazil'},
										{ key: 'ca', value: 'ca', flag: 'ca', text: 'Canada'},
										{ key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland'},
										{ key: 'cn', value: 'cn', flag: 'cn', text: 'China'},
										{ key: 'co', value: 'co', flag: 'co', text: 'Colombia'},
										{ key: 'cu', value: 'cu', flag: 'cu', text: 'Cuba'},
										{ key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic'},
										{ key: 'de', value: 'de', flag: 'de', text: 'Germany'},
										{ key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt'},
										{ key: 'fr', value: 'fr', flag: 'fr', text: 'France'},
										{ key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom'},
										{ key: 'gr', value: 'gr', flag: 'gr', text: 'Greece'},
										{ key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong'},
										{ key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary'},
										{ key: 'id', value: 'id', flag: 'id', text: 'Indonesia'},
										{ key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland'},
										{ key: 'il', value: 'il', flag: 'il', text: 'Israel'},
										{ key: 'in', value: 'in', flag: 'in', text: 'India'},
										{ key: 'it', value: 'it', flag: 'it', text: 'Italy'},
										{ key: 'jp', value: 'jp', flag: 'jp', text: 'Japan'},
										{ key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea'},
										{ key: 'lt', value: 'lt', flag: 'lt', text: 'Lithuania'},
										{ key: 'lv', value: 'lv', flag: 'lv', text: 'Latvia'},
										{ key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco'},
										{ key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico'},
										{ key: 'my', value: 'my', flag: 'my', text: 'Malaysia'},
										{ key: 'ng', value: 'ng', flag: 'ng', text: 'Nigeria'},
										{ key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands'},
										{ key: 'no', value: 'no', flag: 'no', text: 'Norway'},
										{ key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand'},
										{ key: 'pn', value: 'pn', flag: 'pn', text: 'Philippines'},
										{ key: 'pl', value: 'pl', flag: 'pl', text: 'Poland'},
										{ key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal'},
										{ key: 'ro', value: 'ro', flag: 'ro', text: 'Romania'},
										{ key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia'},
										{ key: 'se', value: 'se', flag: 'se', text: 'Sweden'},
										{ key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore'},
										{ key: 'si', value: 'si', flag: 'si', text: 'Slovenia'},
										{ key: 'sk', value: 'sk', flag: 'sk', text: 'Slovakia'},
										{ key: 'th', value: 'th', flag: 'th', text: 'Thailand'},
										{ key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey'},
										{ key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan'},
										{ key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine'},
										{ key: 'us', value: 'us', flag: 'us', text: 'America'},
										{ key: 've', value: 've', flag: 've', text: 'Venezuela'},
										{ key: 'za', value: 'za', flag: 'za', text: 'South Africa'}		
									]}
								 />
							</Form.Field>
							<Form.Field>
								<label>Category:</label>
								<Select placeholder="Select any Category" defaultValue='general' onChange={this.changeCategory}  options={
									[
										{key:'business',value:'business',text:'Business'},
										{key:'entertainment',value:'entertainment',text:'Entertainment'},
										{key:'general',value:'general',text:'General'},
										{key:'health',value:'health',text:'Health'},
										{key:'science',value:'science',text:'Science'},
										{key:'sports',value:'sports',text:'Sports'},
										{key:'technology',value:'technology',text:'Technology'}
									]
								} />
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
