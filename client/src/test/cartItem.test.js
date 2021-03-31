import {shallow, mount,render} from 'enzyme';
import React from 'react';
import StripeCheckOutButton from '../components/stripeButton/stripeButton.component';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import Adapter from 'enzyme-adapter-react-16';

if('expect to render StripChekcOut',()=>{
    const mockRobots=[{
        price:10000
    }]
    expect(shallow(<StripeCheckOutButton price={price}/>)).toMatchSnapshot(1)
});


if('expect to render StripChekcOut',()=>{

    expect(shallow(<StripeCheckOutButton price={price}/>)).toMatchSnapshot(1)
})