import React from 'react';
import {configure, shallow as EnzymeShallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from './ProfileCard';
import {Link as RouterLink} from 'react-router-dom';
import {createShallow} from '@material-ui/core/test-utils';

configure({adapter: new Adapter});

describe('<ProfileCard/>', () => {
  let shallow: typeof EnzymeShallow;
  let wrapper: ShallowWrapper;
  
  beforeAll(() => {
    shallow = createShallow();
  });
  
  beforeEach(() => {
    wrapper = shallow(<ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/cat-default.jpg`}
                                   id={'cat-id'}
                                   name="Testy cat"
                                   description="desc"/>);
  });
  
  it('should render without RouterLink element', () => {
    expect(wrapper.find(RouterLink).length).toEqual(0);
  });
  
  it('should render with 1 RouterLink element', () => {
    wrapper.setProps({ short: true});
    expect(wrapper.find(RouterLink).length).toEqual(1);
  });
  
  it('img class for short profile should be "profile-image-small"', () => {
    wrapper.setProps({ short: true});
    expect(wrapper.find('img.profile-image-small').length).toEqual(1);
    expect(wrapper.find('img.profile-image-large').length).toEqual(0);
  });
  
  it('img class for full profile should be "profile-image-large"', () => {
    expect(wrapper.find('img.profile-image-small').length).toEqual(0);
    expect(wrapper.find('img.profile-image-large').length).toEqual(1);
  });
  
  it('img title should be equal to name', () => {
    const name = 'This is a test cat';
    wrapper.setProps({ name });
    expect(wrapper.containsMatchingElement(<img title={name} />)).toEqual(true);
  });
});
