import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CampsiteContainer from '../components/campsite/CampsiteContainer';

describe(App.name, () => {
  let wrapper;
  const getWrapper = () => {
    const component = <App />;
    return shallow(component);
  };

  beforeEach(() => {
    wrapper = getWrapper();
  });

  test('component renders', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('includes CampsiteContainer', () => {
    expect(wrapper.find(CampsiteContainer).length).toEqual(1);
  });

  test('snapshot should contain expected DOM elements', () => {
    const renderedValue = renderer.create(wrapper).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
