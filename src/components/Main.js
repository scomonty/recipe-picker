import React from 'react';
import '../styles/app.css';
import FToF from '../API/FToF';
import FToFGet from '../API/FToFGet';
import SearchBar from './SearchBar';
import InfoButton from './InfoButton';
import QuickIdeas from './QuickIdeas';


class Main extends React.Component {
  state = { receipeResults: [], getReceipe: [], placeHolder: 'pizza' };

  componentDidMount() {
    this.onTermSubmit(this.state.placeHolder);
  }


  onTermSubmit = async (term) => {
      const response = await FToF.get('', {
        params: {
          q: term
        }
      });
      this.setState ({receipeResults: response.data.recipes})
    }

    onReceipeClick = async (e) => {
      const buttonId = e.target.id;
      const response = await FToFGet.get('', {
         params: {
          rId: buttonId
         }
       });
      this.setState ({getReceipe: response.data.recipe.ingredients})
    }


    onQuickIdeasClick = async (e) => {
            const whatWasPressed = e.target.innerText;
            const response = await FToF.get('', {
              params: {
                q: whatWasPressed
              }
            });
            this.setState ({receipeResults: response.data.recipes})
    }

    render() {
      console.log(this.state.receipeResults);
  return (
    <div className="App">
      <SearchBar onFormSubmit={this.onTermSubmit} searchTitle="What's For Dinner" placeHolder={this.state.placeHolder} />
      <div className="QuickIdeas">
      <h2 className="IdeasHeader">Quick Ideas</h2>
      <QuickIdeas onButtonTap={this.onQuickIdeasClick} items={'Hamburgers, Tacos, Spaghetti, Milkshakes'}/>
      <div className="bottom-cap"></div>
      <div className="bottom-trim"></div>
      </div>
      <InfoButton searchResults={this.state.receipeResults} ButtonText='Get Receipe' onButtonTap={this.onReceipeClick} />
    </div>
  );
}
}

export default Main;