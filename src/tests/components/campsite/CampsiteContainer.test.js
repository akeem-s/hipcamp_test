import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CampsiteContainer from '../../../components/campsite/CampsiteContainer';
import Feature from '../../../components/campsite/Feature';
import { FEATURES } from '../../../assets/camp_features.js';

describe('CampsiteContainer', () => {
  let wrapper;
  const getWrapper = () => {
    const component = shallow(<CampsiteContainer/>);
    return component;
  };

  beforeEach(() => {
    wrapper = getWrapper();
  });

  test('component renders', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('includes Feature', () => {
    expect(wrapper.find(Feature).length).toEqual(FEATURES.length);
  });

  test('snapshot should contain expected DOM elements', () => {
    const renderedValue = renderer.create(wrapper).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
