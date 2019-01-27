import * as ActionTypes from './ActionTypes';
import axios from '../../axiosInstance';

export const initiateGetDataFromDB = () =>{
    return dispatch =>{
      axios.get("/CDSHUB/-LVB4gR6tP9uTuB5jitK.json")
         .then(res => {
             console.log("dd oooooo",res.data);
          dispatch(GetDataFromDB(res.data));
        } )
        .catch(error =>{
          dispatch(FailureHandling())
        });
    }  
}

const GetDataFromDB = (StockRecondata) =>{
    return {
        type:ActionTypes.GETRECONCILATION,
        DBData:StockRecondata
    }
}
export const OnTextChanged = (StockRecoData) =>{
    return {
        type:ActionTypes.ONTEXTCHANGED,
        StockRecoData:StockRecoData
    }
}
export const DeleteStock = (index) =>{
    return {
        type:ActionTypes.ONDELETESTOCK,
        deleteItemIndex:index
    }
}
export const AddItemToExisting = (StockRecondata) =>{
    return {
        type:ActionTypes.ADDITEMS,
        newItems: StockRecondata
    }
}

export const SubmitStoacktoDB = (newItems) =>{
    return dispatch =>{
      axios.post("/CDSHUB/-LVB4gR6tP9uTuB5jitK.json",newItems)
       .then(res => {       
           const getSubmitedData=[];
           for(let key in res.data)
           {
               getSubmitedData.push({
                        ...res.data[key],
                        ID: key
                    });
           }     
        dispatch(SubmitStock(getSubmitedData));
        } )
        .catch(error =>{
          dispatch(FailureHandling())
        });
    }  
}

const SubmitStock = (StockRecondata) =>{
    return {
        type:ActionTypes.ONSUBMITSTOCK,
        getSubmitedData:StockRecondata
    }
}
export const FailureHandling = () =>{
    return {
        type:ActionTypes.ERROR_HANDLING
    }
}