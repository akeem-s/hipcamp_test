import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  presence: PropTypes.bool,
  subfeatures: PropTypes.array,
  title: PropTypes.string,
};

export default class Feature extends Component {
  constructor(props){
    super(props);
    this.renderPresenceIcons = this.renderPresenceIcons.bind(this);
    this.handleClick = this.handleClick.bind(this);
    state:{
      showSubfeatures: false;
    }
  }

  renderPresenceIcons(presence){
    if(presence){
      return <FontAwesome className='customFaCheck customFa' name='check'/>;
    }
    return <FontAwesome className='customFaBan customFa' name='ban'/>;
  };

  handleClick(subfeatures){

  };

  renderSubfeatures(){
    const { subfeatures } = this.props;
    if(subfeatures.length > 0){
      subfeatures.map((f)=>{
        return (
          <div className='subfeaturesContainer' key={f.title}>
            <p className='subfeatureTitle'>{f.title}</p>
            <p className='subfeaturePresence'>{f.presence}</p>
          </div>
        )
      })
    }
  };

  render(){
    const { presence, subfeatures, title } = this.props;
    return (
      <div className='feature' >
        <p className='featureTitle' onClick={()=>{this.handleClick(subfeatures)}}>{title}</p>
        {this.}
        {this.renderPresenceIcons(presence)}
      </div>
    )
  }
};

Feature.propTypes = propTypes;
