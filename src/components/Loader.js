import '../styles/loader.css';
import React from 'react';

const Loader = (props) => {
    return <div className="ui loadScreen">
  <div className="ui active dimmer">
    <div className="ui text loader">{props.errorText}</div>
  </div>
  <p></p>
</div>
}

Loader.defaultProps = {
	message: 'Loading...'
}

export default Loader;
