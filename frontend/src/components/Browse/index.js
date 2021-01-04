import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import SearchBar from '../SearchBar'
import './Browse.css';

function Browse() {
	const history = useHistory();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="browseWrapper">
			<div className="searchBar">
				{showSearch && <SearchBar />}
				<button
					onClick={() => setShowSearch(!showSearch)}
					className="searchButton"
					>
						{showSearch ? "Hide Availability" : "Search Availability"}
				</button>
			</div>
			<div className="description">
				<h2>Reserve Your Favorite BBQ Pit Today!</h2>
				<p>
					Planning for your next great barbeque party doesn't stop at marinating
					your meat. Reserve your favorite pit now!{' '}
				</p>
				<button onClick={() => history.push('./search')}>Browse All Pits</button>
			</div>
		</div>
	);
}

export default Browse;
