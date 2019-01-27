import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {StockReconcil} from './StocReconcil';
import DisplayStockRecon from '../components/DisplayStockRecon/DisplayStockRecon';

configure({adapter :new Adapter()});

describe('<StockReconcilation/>', () =>{
    let wrapper;
    beforeEach(() =>{
        wrapper= shallow(<StockReconcil onGetDataFromDB={() =>{}}/>);
    });
    it('Should render <DisplayStockRecon/> when receiving Stock Reconcilation Data.',() =>{
        wrapper.setProps({StockReconcilData:{ResourceCode: "CM01"}});
        expect(wrapper.find(DisplayStockRecon)).toHaveLength(1);
    });
});
