import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InfoButton.css';
import '../styles/grid.css';

const InfoButton = ({searchResults, ButtonText, onButtonTap}) => {
  if(searchResults === undefined) {
    return <div><h2 className="maxSubmit">sorry, you have reached your daily limit of submissions</h2></div>
  }
const GetSearchButtons = searchResults.map( (searchResult) => {
  return  (
  <div className="col-ld-3 col-md-6 col-dd-4 center" key={searchResult.recipe_id}>
    <div className="image-container">
  <img className="InfoImg" src={searchResult.image_url} alt={searchResult.title}/>
  </div>
  <h2 className="ItemTitle">{searchResult.title}</h2>
  <div className="ui buttons">
  <Link to="/components/Ingredients" className="ui button" id={searchResult.recipe_id} onClick={onButtonTap}>{ButtonText}</Link>
  <div className="or"></div>
  <a className="ui positive button" href={searchResult.source_url} target="_blank" rel="noopener noreferrer">See More Info</a>
</div>
  </div>
  );
});

  return <div className="ui grid twelve ResultsContainer">{GetSearchButtons}</div>;
}

export default InfoButton;