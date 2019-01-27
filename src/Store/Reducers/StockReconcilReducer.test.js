import StockReconReducer from './StockReconcilReducer';
import * as actionTypes from '../Actions/ActionTypes';

describe("Stock Recon Reducer",() =>{

    it('Should return initial state', () =>{
        expect(StockReconReducer(undefined,{})).toEqual({
            ShowModel:false,
            StockReconcilData:null,
            error:false
        });
    });

    it('should have Stock recon data', () =>{
        expect(StockReconReducer({
            ShowModel:false,
            StockReconcilData:null,
            error:false
        },{
            type:actionTypes.GETRECONCILATION,
            DBData:{ResourceCode: "CM01"}
        })).toEqual({
            ShowModel:false,
            StockReconcilData:{ResourceCode: "CM012"},
            error:false
        })
    })

});