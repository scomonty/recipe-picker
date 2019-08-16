import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _fetchFoods } from '../actions';
import { getRId } from '../actions';
//import Loader from './Loader';
import '../styles/InfoButton.css';
import '../styles/grid.css';

let onlyRunOnce = 0;

class FoodList extends React.Component {

    componentDidMount = () => {
        if(!onlyRunOnce) {
            this.props._fetchFoods('tacos');
            onlyRunOnce ++;
        }
    }

    onButtonTap = (e) => {
       this.props.getRId(e.target.id);
    }

    renderList() {
        // create helper function and map to bild list
       if (this.props.foods.length !== 0 ) {
           if(this.props.foods.count === 0 ) {
               return <div className="noresults"><h2>No results found.  Try another search term.</h2></div>
           }
           if(this.props.foods.error) {
            return <div><h2 className="maxSubmit">sorry, you have reached your daily limit of submissions</h2></div>
           }
        return this.props.foods.recipes.map(post => {
            const { recipe_id, image_url, title, source_url } = post
             return (
                <div className="col-ld-3 col-md-6 col-dd-4 center" key={recipe_id}>
                <div className="image-container">
              <img className="InfoImg" src={image_url} alt={title}/>
              </div>
              <h2 className="ItemTitle">{title}</h2>
              <div className="ui buttons">
              <Link to="/components/Ingredients" id={recipe_id} onClick={this.onButtonTap} className="ui button">Get Receipe<span className="hidden">{recipe_id}</span></Link>
              <div className="or"></div>
              <a className="ui positive button" href={source_url} target="_blank" rel="noopener noreferrer">See More Info</a>
            </div>
              </div>
              )
         })
    }
    }

    render() {
        return (
            <div className="container row twelve">{this.renderList()}</div>
        )
    }
}


const mapStateToProps = (state) => {
    return { foods: state.foods, rId: state.rId  }
}


export default connect(mapStateToProps, { _fetchFoods, getRId })(FoodList);
