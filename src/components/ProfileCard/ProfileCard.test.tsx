import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from './ProfileCard';
import {Link as RouterLink} from 'react-router-dom';

configure({adapter: new Adapter});

describe('<ProfileCard/>', () => {
  it('should render without a RouterLink element', () => {
    const wrapper = shallow(<ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/cat-default.jpg`}
                                         name="Testy cat"
                                         description="desc"/>);
    expect(wrapper.find(RouterLink).length).toEqual(0);
    // expect(wrapper.contains(RouterLink)).toEqual(true);
  })
});
