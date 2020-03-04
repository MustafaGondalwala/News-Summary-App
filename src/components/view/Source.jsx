import React from "react"
import {Card} from "semantic-ui-react"
import {Link} from "react-router-dom"
const Source = (props) => {
	return (
		<Card as={Link} to={"/source_news/"+props.data.id}>
			<Card.Content>
				<h2>{props.data.name}</h2>
			</Card.Content>
			<Card.Content>
				<p>
					{props.data.description}
				</p>
			</Card.Content>
		</Card>
	)
}

export default Source