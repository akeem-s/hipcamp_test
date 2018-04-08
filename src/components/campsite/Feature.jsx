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
    this.renderSubfeatures = this.renderSubfeatures.bind(this);
    this.state = {
      showSubfeatures: false,
    };
  }

  handleClick(){
    this.setState({
      showSubfeatures: !this.state.showSubfeatures,
    });
  }

  renderPresenceIcons(presence){
    if(presence){
      return <FontAwesome className='customFaCheck customFa' name='check'/>;
    }
    return <FontAwesome className='customFaBan customFa' name='ban'/>;
  }

  renderSubfeatures(){
    const { showSubfeatures } = this.state;
    const { subfeatures } = this.props;
    let html;
    if(subfeatures.length > 0 && showSubfeatures){
      html = subfeatures.map((f)=>{
        const { title, presence } = f;
        return (
          <div className='subfeaturesContainer' key={title}>
            <p className='subfeatureTitle'>{title}</p>
            {this.renderPresenceIcons(presence)}
          </div>
        );
      });
    }
    return html;
  }

  render(){
    const { presence, subfeatures, title } = this.props;
    const hasSubfeaturesClassName = subfeatures.length > 0 ? 'subfeaturesPresent' : null;
    return (
      <div className={`feature ${hasSubfeaturesClassName}` } onClick={()=>{ this.handleClick(subfeatures); }}>
        <div className='featureDetailsContainer'>
          <p className='featureTitle' >{title}</p>
          {this.renderPresenceIcons(presence)}
        </div>
        {this.renderSubfeatures()}
      </div>
    );
  }
}

Feature.propTypes = propTypes;
