import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';
class AddNewItem extends Component {
    state ={
        NewItems:[
            {              
            ResourceType:"",
            ResourceGroup:"",
            ResourceCode:"",
            ResourceQuantity:""
            }
        ]
    }
    OnChangeHandler(event,fieldName,index) {
        const updatedItems = [...this.state.NewItems];
        updatedItems[index][fieldName]= event.target.value;
       console.log("Add New ItemState",this.state.NewItems);
       this.setState({NewItems:updatedItems});
        }
    MandatoryValidationCheck(){
        if(this.state.NewItems.length>0)   
    {
        const addedItems =[...this.state.NewItems];
        const lastIndex=addedItems.length-1;
        //Do the Mandatory Check Validation
        if(this.state.NewItems[lastIndex]['ResourceType']==="")
        {
            alert("Please enter Resource Type.");
            return false;
        }
        else  if(this.state.NewItems[lastIndex]['ResourceGroup'] === "")
        {
            alert("Please enter Resource Group.");
            return false;
        }  
        else  if(this.state.NewItems[lastIndex]['ResourceCode'] === "")
        {
            alert("Please enter Resource Code.");
            return false;
        } 
        else
        {
            return true;   
        }
    } 
            
    }
    OnAddNewRowHandler = () =>{
        if(this.MandatoryValidationCheck())
        {       
            const existingItem= this.state.NewItems;
            const newItemRow= existingItem.concat([
                {              
                    ResourceType:"",
                    ResourceGroup:"",
                    ResourceCode:"",
                    ResourceQuantity:""
                }
            ])
            this.setState({NewItems:newItemRow});
        }
    }
    DeleteLinkHandler = (index) =>{
        const items= [...this.state.NewItems];
        items.splice(index,1);
        this.setState({NewItems:items});
    }
    OnAddItemHandler = () => {
    if(this.MandatoryValidationCheck())
        {
        this.props.onAddItemClick(this.state.NewItems);
        this.setState({NewItems:[
            {              
            ResourceType:"",
            ResourceGroup:"",
            ResourceCode:"",
            ResourceQuantity:""
            }
        ]});
        }
    }
    render (){
    if(this.state.NewItems.length>0)   
    {
    var trHead = <thead>
        <tr>
        <th>Resource Type</th>
        <th>Resource Group</th>
        <th>Resource Code</th>
        <th>Resource Quantity</th>
        </tr>
    </thead>;
    var trRow = this.state.NewItems.map( (stock,index) =>{

    return (
        <tr>
        <td><div>
          <input type="text" onChange={(event) => this.OnChangeHandler(event,"ResourceType",index)} value={stock.ResourceType}></input>
        </div></td>
        <td><div>
          <input type="text" onChange={(event) => this.OnChangeHandler(event,"ResourceGroup",index)} value={stock.ResourceGroup}></input>
        </div></td>
        <td><div>
          <input type="text" onChange={ (event) => this.OnChangeHandler(event,"ResourceCode",index)} value={stock.ResourceCode}></input>
        </div></td>
        <td><div>
          <input type="text" onChange={ (event) =>this.OnChangeHandler(event,"ResourceQuantity",index)} value={stock.ResourceQuantity}></input>
        </div></td>                     
        <td><div>
        <button onClick={()=>this.DeleteLinkHandler(index)}
            style={{color:'#944317','font-weight': 'bold','background-color': 'transparent',border: 'none'}}>Delete</button>        
        </div></td>  
      </tr>   
    );
  });
}

    return (
    <div>
    <h2>Add New Items</h2> 
    {trHead} 
    {trRow}
    
    <Button btntype="Danger" buttonClick={this.props.onCancelClick}>CANCEL</Button>
    
    <Button btntype="Success" buttonClick={this.OnAddNewRowHandler}>ADD ROW</Button>
    <br></br> 
    <Button btntype="Success" buttonClick={this.OnAddItemHandler}>ADD ITEMS</Button>
    </div>
    );
}
}
export default AddNewItem;