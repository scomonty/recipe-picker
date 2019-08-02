import React from 'react';
import '../styles/QuickIdeas.css';



const QuickIdeas = ({onButtonTap, items}) => {
    const itemsToArray = items.split(', ');
    const  IdeasMenu = itemsToArray.map( (item) => {
        return <button onClick={onButtonTap} className="ui basic button QIButton" key={item}>{item}</button>
      });
      return <div>{IdeasMenu}</div>
}

export default QuickIdeas;