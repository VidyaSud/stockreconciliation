import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const displayStockRecon = (props) =>{
    console.log("here");
 if(props.StockReconcilData){
    var trHead = <thead>
    <tr>
      <th>Resource Type</th>
      <th>Resource Group</th>
      <th>Resource Code</th>
      <th>Resource Quantity</th>
    </tr>
  </thead>;
    var trRow = props.StockReconcilData.map( (stock,index) => {
    return(
    <tr>
    <td><div>
        <input type="text" onChange={(event) => props.OnTextChange(event,"ResourceType",index)} value={stock.ResourceType} key={stock.ResourceType}></input>
    </div></td>
    <td><div>
        <input type="text" onChange={(event) => props.OnTextChange(event,"ResourceGroup",index)} value={stock.ResourceGroup} key={stock.ResourceGroup}></input>
    </div></td>
    <td><div>
        <input type="text" onChange={ (event) => props.OnTextChange(event,"ResourceCode",index)} value={stock.ResourceCode} key={stock.ResourceCode}></input>
    </div></td>
    <td><div>
        <input type="text" onChange={ (event) =>props.OnTextChange(event,"ResourceQuantity",index)} value={stock.ResourceQuantity} key={stock.ResourceQuantity}></input>
    </div></td>
    <td><div>
    <button onClick={() => props.OnDelete(index)} 
        style={{color:'#944317','font-weight': 'bold','background-color': 'transparent',border: 'none'}}>Delete</button>    
    </div></td>
    </tr>   
    )
 });
}
return (
        <Aux>
                {trHead}
                {trRow}
                <Button btntype="Success" buttonClick={props.AddNewStock}>ADD NEW STOCK</Button>
                <br></br> 
                <Button btntype="Success" buttonClick={props.Submit}>SUBMIT</Button>
                {/* <h1>Stock Reconcilation </h1>
                 <Button btntype="Success" buttonClick={props.Submit}>SUBMIT</Button>
               
                */}
        </Aux>
);

}

export default displayStockRecon;