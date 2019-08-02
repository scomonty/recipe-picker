import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component{
	state={term: ''};

	onInputChange = (e) => {
			this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	}

	render(){
		return(
				<div className="search-bar ui segment" id="search">
					<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
					<label><h1>{this.props.searchTitle}</h1></label>
					<input className="searchInput" type="text" value={this.state.term} onChange={this.onInputChange} placeholder={this.props.placeHolder}/>
					</div>
					</form>
					<div className="bottomWave"></div>
				</div>
			)
	}
}

export default SearchBar;