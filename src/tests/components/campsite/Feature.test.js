import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Feature from '../../../components/campsite/Feature';
import { FEATURES } from '../../../assets/camp_features.js';

describe('Feature', () => {
  let wrapper;
  const { title, presence, subfeatures } = FEATURES[0];
  const getWrapper = () => {
    const component = shallow(<Feature key={title} title={title} presence={presence} subfeatures={subfeatures}/>);
    return component;
  };

  beforeEach(() => {
    wrapper = getWrapper();
  });

  test('component renders', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('receives props', () => {
    expect(wrapper.instance().props.title).toEqual(title)
  })

  test('snapshot should contain expected DOM elements', () => {
    const renderedValue = renderer.create(wrapper).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
