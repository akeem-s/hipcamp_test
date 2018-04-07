import React, { Component } from 'react';
// components
import Feature from './Feature';

export default class CampsiteContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      features:[],
    }
  }

  componentDidMount(){
    // Note: I am setting state here because I am treating this data like an api response
    // and the React docs suggest instantiating API calls in componentDidMount. Setting state
    // here can have performance implications, which I would consider if dealing with real
    // data.
    this.setState({
      features: window.FEATURES,
    })
  }

  render(){
    return (
      <div className='campsiteContainer'>
        <h2 className='campsiteName'>Campsite Name Placeholder</h2>
        {this.state.features.map((f)=>{return <Feature key={f.title} title={f.title} presence={f.presence} subfeatures={f.subfeatures}/>})}
      </div>
    )
  }
}
