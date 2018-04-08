import React, { Component } from 'react';
import './styles.scss';
// Components
import CampsiteContainer from './components/campsite/CampsiteContainer';
import Header from './shared/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='mainContentContainer'>
          <CampsiteContainer/>
        </div>
      </div>
    );
  }
}

export default App;
