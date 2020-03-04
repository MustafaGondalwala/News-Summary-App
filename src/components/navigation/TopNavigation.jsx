import React, { Component } from 'react';
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

export class TopNavigation extends Component {
	  state = {}
	  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	  componentDidMount = () => {
	  	this.setState({activeItem:this.props.name})
	  }
	  render() {
	    const { activeItem } = this.state
	    return (
	      <Menu fluid  stackable>
	        <Menu.Item
	          name='Home'
	          as={Link}
	          to="/"
	          active={activeItem === 'Home'}
	          onClick={this.handleItemClick}
	        >
	          Home
	        </Menu.Item>


	        <Menu.Item
	          name='Harvard'
	          as={Link}
	          to="/type/harvard"
	          active={activeItem === 'Harvard'}
	          onClick={this.handleItemClick}
	        >
	        Harvard
	        </Menu.Item>
	        <Menu.Item
	          name='Startup'
	          as={Link}
	          to="/type/startup"
	          active={activeItem === 'Startup'}
	          onClick={this.handleItemClick}
	        >
	        Startup
	        </Menu.Item>
	        
	        <Menu.Item
	          name='Techcrunch'
	          as={Link}
	          to="/type/techcrunch"
	          active={activeItem === 'Techcrunch'}
	          onClick={this.handleItemClick}
	        >
	        Techcrunch
	        </Menu.Item>

	        <Menu.Item
	          name='Top 10'
	          as={Link}
	          to="/type/top10"
	          active={activeItem === 'Top 10'}
	          onClick={this.handleItemClick}
	        >
	        Top 10
	        </Menu.Item>

	        <Menu.Item
	          name='Selected Blogs'
	          as={Link}
	          to="/all-blogs"
	          active={activeItem === 'Top Headline'}
	          onClick={this.handleItemClick}
	        >
	        Selected Blogs
	        </Menu.Item>
	        <Menu.Item
	          name='sources'
	            as={Link}
	          to="/source"
	          active={activeItem === 'sources'}
	          onClick={this.handleItemClick}
	        >
	           Sources
	        </Menu.Item>
	        <Menu.Item  
	          name='search'
	            as={Link}
	          to="/search"
	          active={activeItem === 'search'}
	          onClick={this.handleItemClick} >
	       		Search News
	        </Menu.Item>
	      </Menu>
	    )
	  }
}

export default TopNavigation