import React, { Component } from 'react';

import  * as Actions from '../Store/Actions/Index';
import {connect} from 'react-redux';
import Aux from '../hoc/Auxhoc';
import Modal from '../components/UI/Modal/Modal';
import AddNewItem from './AddNewItem/AddNewItem';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from '../axiosInstance';
import Spinner from '../components/UI/Spinner/Spinner';

import DisplayStockRecon from '../components/DisplayStockRecon/DisplayStockRecon';

export class StockReconcil extends Component { 
    state={
        ShowModel:false
    }
    OnTextChangeHandler = (event,fieldName,index) => {
        const updatedItems = [...this.props.StockReconcilData];
        updatedItems[index][fieldName]= event.target.value;
        this.props.OnTextChanged(updatedItems);
        }
    OnDeleteHandler = (index) => {
        this.props.OnDeleteStock(index);
        }
    OnAddNewStockHandler = () =>{
        this.setState({ShowModel:true})
    }
    OnModalCloseHandler = () =>{      
        this.setState({ShowModel:false});
    }
    onAddItemHandler = (newItem) =>{
        const existingItem= [...this.props.StockReconcilData];    
        const CombineItem =existingItem.concat(newItem);  
        this.setState({ShowModel:false })
        this.props.OnAddNewItemAdded(CombineItem)
        }
    OnSubmitHandler =() =>{
        this.props.OnSubmit(this.props.StockReconcilData)
    }
    componentDidMount(){
        this.props.onGetDataFromDB();
        console.log("data in didmount123",this.props.StockReconcilData);
    }

  render() {

let StockConcil=<Spinner/>
if(this.props.StockReconcilData)
{
    StockConcil=(
    <DisplayStockRecon StockReconcilData={this.props.StockReconcilData}
    OnTextChange={this.OnTextChangeHandler} 
    OnDelete={this.OnDeleteHandler}
    AddNewStock={this.OnAddNewStockHandler}
    Submit={this.OnSubmitHandler}
    />
    );
}
    return (
        <Aux>
            <Modal show={this.state.ShowModel} BackdropClosed={this.OnModalCloseHandler}>
            <AddNewItem onCancelClick={this.OnModalCloseHandler} 
                    onAddItemClick={this.onAddItemHandler.bind(this)} />
            </Modal>
            <h1>Stock Reconcilation </h1>            
           {StockConcil} 
      </Aux>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
      StockReconcilData:state.StockReconcilData   
    }
  }
  const mapDispatchToProps = (dispatch) =>{
  return {
    onGetDataFromDB: () => dispatch(Actions.initiateGetDataFromDB()),
    OnTextChanged: (updatedItems) => dispatch(Actions.OnTextChanged(updatedItems)),
    OnDeleteStock :(index) => dispatch(Actions.DeleteStock(index)),
    OnAddNewItemAdded :(newItems) => dispatch(Actions.AddItemToExisting(newItems)),
    OnSubmit :(updatedStockData) => dispatch(Actions.SubmitStoacktoDB(updatedStockData))
   }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(StockReconcil,axios));
