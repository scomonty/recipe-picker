import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _fetchIngredients } from '../actions';
import { getRId } from '../actions';
import Loader from './Loader';

let loadLoader = true;


class Ingredients extends React.Component{

    componentDidMount = () => {
        this.props._fetchIngredients(this.props.rId.slice(-1)[0]);
        window.scrollTo(0, 0);
    }

    componentWillUnmount = () => {
        loadLoader = true;
    }

    renderRecipe() {
        // create helper function and map to bild list

        if(loadLoader) {

        }
       if (this.props.recipeIngredients.length === 0 ) { 
           console.log('still fetching');
           return <Loader errorText="Getting Ingredients" />;
        }
        const lastInArray = (Object.entries(this.props.recipeIngredients.slice(-1)[0]));
            return lastInArray.map(post => {   
                return post[1].ingredients.map(ingredient => {
                    return (
                         <h3 key={ingredient}>{ingredient}</h3>
                    )
                })
            })
        }   


    renderTitle() {
        // create helper function and map to bild list
        if(loadLoader) {
            loadLoader = false;
            return <Loader errorText="Getting Ingredients" />;
        }
       if (this.props.recipeIngredients.length !== 0 ) {
            const lastInArray = (Object.entries(this.props.recipeIngredients.slice(-1)[0]));
            return lastInArray.map(post => {   
                    return (
                        <div key={post[1].title}>
                            <h2>{post[1].title}</h2>
                            <img src={post[1].image_url} alt={post[1].title}></img>
                        </div>
                    )
                })
            }
        }   

    render() {
        return ( 
            <div id="ingredientsPage">
                <div className="search-bar ui segment ingredientsBanner" id="search"> 
                    <h1 className="ItemTitle">Whats For Dinner</h1>
                    <div className="bottomWave"></div>
                </div>
                <div className="QuickIdeas">
                    <Link to="/" className="ui button home">back to home</Link>
                    <div className="bottom-cap"></div>
                    <div className="bottom-trim"></div>
                </div>
                <div className="col-ld-3 col-md-6 col-dd-4 center">
                    <div>{this.renderTitle()}</div>
                    <div>{this.renderRecipe()}</div>    
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return { recipeIngredients: state.ingredients, rId: state.rId }
}

export default connect(mapStateToProps, { _fetchIngredients, getRId })(Ingredients);