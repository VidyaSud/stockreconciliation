
import * as ActionType from '../Actions/ActionTypes';
const initialState ={
    ShowModel:false,
    StockReconcilData:null,
    error:false
}

const StockReconcilReducer = ( state=initialState, action ) =>{
    switch(action.type){
        case ActionType.GETRECONCILATION :
            return{
                ...state,
                StockReconcilData:action.DBData
                
            }; 
        case ActionType.ONTEXTCHANGED :
            return{
                ...state,
                StockReconcilData:action.StockRecoData
                
            };
        case ActionType.ONDELETESTOCK :
        const deleteItem=[...state.StockReconcilData];
        deleteItem.splice(action.deleteItemIndex,1);
            return{
                ...state,
                StockReconcilData:deleteItem
            };     
        case ActionType.ONSUBMITSTOCK :
            return{
                ...state,
                StockReconcilData:action.getSubmitedData
            }  
        case ActionType.ADDITEMS:
        return{
            ...state,            
            StockReconcilData:action.newItems
        }    
        case ActionType.ERROR_HANDLING:
        return{
            ...state,
            error:true
        }
            default :
            return state;
        }
      
    
    }
    
export default StockReconcilReducer;