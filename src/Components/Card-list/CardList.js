import React from 'react'

import './CardList.css'
import { Card } from '../Card/Card'

export const CardList = (props) => {

	return (
		<div className="card-list">
			{
				props.users.map(user => {
					return <Card key={user.id} user={user} />
				})
			}
		</div>
	)
}
