import React from 'react';
import { connect } from 'react-redux';
import { _fetchFoods } from '../actions';
import '../styles/QuickIdeas.css';



class QuickIdeas extends React.Component {


  onQuickIdeasClick = async (e) => {
    const whatWasPressed = e.target.innerText;
    this.props._fetchFoods(whatWasPressed);
}

render() {
    const itemsToArray = this.props.items.split(', ');
    const  IdeasMenu = itemsToArray.map( (item) => {
       return <button onClick={this.onQuickIdeasClick} className="ui basic button QIButton" key={item}>{item}</button>
      });
      return <div>{IdeasMenu}</div>
}
}


const mapStateToProps = (state) => {
  return { foods: state.foods }
}


export default connect(mapStateToProps, { _fetchFoods })(QuickIdeas);