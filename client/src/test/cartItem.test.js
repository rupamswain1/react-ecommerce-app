import {shallow, mount,render} from 'enzyme';
import React from 'react';
import CollectionsPreview from '../components/collections-preview/collections-preview.component';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

it('expect to render StripChekcOut',()=>{
    const mockRobots=[{
        title:'hats',
        items:[]
    }]
    expect(shallow(<CollectionsPreview title={mockRobots[0].title} items={mockRobots[0].items}/>)).toMatchSnapshot('1')
});


