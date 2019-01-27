import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';

configure({adapter :new Adapter()});

describe("<Backdrop>",() =>{
    let wrapper;
    beforeEach( () =>{
        wrapper=shallow(<Modal/>);
    });
    it('Should have none <Backdrop> if show is false', () =>{
        expect(wrapper.find(Backdrop))
    });

    it('Should have one <Backdrop> if show is true', () =>{
    // wrapper = shallow(<Modal show/>);
    wrapper.setProps({show:true});
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });

});