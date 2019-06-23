import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {Profile, RParams} from './Profile';
import {match} from 'react-router';

configure({adapter: new Adapter});

describe('<Profile/>', () => {
  it('should render a single ProfileCard element', () => {
  });
});



describe('<Profile/>', () => {
  it('should render a single ProfileCard element', () => {
    const m = {
      params: {id:"c2"},
    };
    const cat = {
      "id": "c2",
      "name": "Sylvester",
      "description": "  Hi, I\"m Sylvester. Like so many other humans, you might find cats to be mysterious creatures.\n  But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.",
      "age": 7,
      "imgFile": "c2-sylvester.jpg"
    };
    const mock: any = jest.fn();
  
    // @ts-ignore
    // const wrapper = shallow(<Profile match={m as match<RParams>} getCat={() => cat}/>);
    
    const wrapper = shallow(<Profile
      match={m as match<RParams>}
      location = {mock}
      history= {mock}
      getCat={() => cat}/>);
    
    expect(wrapper.find(ProfileCard).length).toEqual(1);
  })
});
