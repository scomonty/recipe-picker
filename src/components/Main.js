import React from 'react';
import FoodList from './FoodList';
import SearchBar from './SearchBar';
import QuickIdeas from './QuickIdeas';


const Main = () => {
    return (
      <div className="App">
    <SearchBar onFormSubmit='tacos' searchTitle="What's For Dinner" placeHolder='tacos' />
    <div className="QuickIdeas">
      <h2 className="IdeasHeader">Quick Ideas</h2>
    <QuickIdeas items="hamburgers, tacos, spaghetti, milkshakes"/>
    <div className="bottom-cap"></div>
      <div className="bottom-trim"></div>
      </div>
    <FoodList />
      </div>
    );
  }
  
  export default Main;