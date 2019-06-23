import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from './ProfileCard';
import {Link as RouterLink} from 'react-router-dom';

configure({adapter: new Adapter})

describe('<Profile/>', () => {
  it('should render without a RouterLink element', () => {
    const wrapper = shallow(<ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/cat-default.jpg`}
                                         name="Testy cat"
                                         description="desc"/>);
    expect(wrapper.find(RouterLink).length).toEqual(0);
    // expect(wrapper.contains(RouterLink)).toEqual(true);
  })
});

// 1. add test for ProfileCard short
// 2. add beforeEach

// let wrapper;
// beforeEach(() => {
//   wrapper = <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/cat-default.jpg`}
//                          name="Testy cat"
//                          description="desc"/>
// });

// 3. use wrapper.setProps({short: true})



// expect(wrapper.find('img.profile-image-small').length).toEqual(0);
// expect(wrapper.find('img.profile-image-large').length).toEqual(1);