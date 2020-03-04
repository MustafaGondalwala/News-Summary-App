import React, { Component } from 'react';
import {Route} from "react-router-dom"
// import HomePage from "./components/pages/HomePage"
import MainHomePage from "./components/pages/MainHomePage"
import HomePage from "./components/pages/HomePage"
import TopNavigation from "./components/navigation/TopNavigation"
import SearchNewsPage from "./components/pages/SearchNewsPage"
import SourcePage from "./components/pages/SourcePage"
import SourceNewsPage from "./components/pages/SourceNewsPage"


export default class MainRoutes extends Component {
	render() {
		return (
			<div>
				<TopNavigation />
				<Route path="/type/harvard" component={MainHomePage}  />
				<Route path="/type/techcrunch" component={MainHomePage}  />
				<Route path="/type/startup" component={MainHomePage}  />
				<Route path="/type/top10" component={MainHomePage}  />

				<Route path="/" exact   component={HomePage} />
				<Route path="/search" exact component={SearchNewsPage} />
				<Route path="/source" exact component={SourcePage} />
				<Route path="/all-blogs" exact component={MainHomePage} />
				<Route path="/source_news/:id" exact component={SourceNewsPage} />
			</div>
		);
	}
}
