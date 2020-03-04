import React from "react"
import {Card,Image} from "semantic-ui-react"
const News = (props) => {
	return (
		<Card href={props.data.url}
    target="_blank">
				<Image size="big" src={props.data.urlToImage}/>
			<Card.Content>
				<h2>{props.data.title.trim()}</h2>
			</Card.Content>
			{ props.data.description && (
				<Card.Content>
					<p>
						{props.data.description}
					</p>
				</Card.Content>
				)
			}
			
		</Card>
	)
}

export default News