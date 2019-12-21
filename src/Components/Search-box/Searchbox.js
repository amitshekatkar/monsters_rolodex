import React from 'react'
import "./Searchbox.css"

export const Searchbox = (props) => {
	const onSearch = (e) => {
		props.searchUser(e.target.value)
	}

	return (
		<div className="searchbox">
			<input
				className="input"
				value={props.searchText}
				onChange={onSearch}
			/>
		</div>
	)
}
