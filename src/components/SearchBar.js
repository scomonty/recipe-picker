import '../styles/SearchBar.css';
import React from 'react';
import { connect } from 'react-redux';
import { _fetchFoods } from '../actions';

class SearchBar extends React.Component{
	state={term: ''};

	onInputChange = (e) => {
			this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props._fetchFoods(this.state.term);
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

const mapStateToProps = (state) => {
    return { foods: state.foods }
}


export default connect(mapStateToProps, { _fetchFoods })(SearchBar);