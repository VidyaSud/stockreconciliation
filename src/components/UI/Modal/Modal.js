import React,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{  
    shouldComponentUpdate(nextProps,nextstate){
      return nextProps.show !== this.props.show || nextProps.children !==this.props.children;
       
    }
    componentDidUpdate(){
        console.log("model");
    }
   
    render(){
        return(
            <Aux>   
                <Backdrop BackDropClicked={this.props.BackdropClosed} show={this.props.show} />          
                <div className={classes.Modal}
                style={{
                    transform:this.props.show?'translateY(0)': 'translateY(-100vh)',
                    opacity:this.props.show?'1' :'0'
                    }}>
                {this.props.children}
                 {/* Recon ID: {this.props.StockReconID} */}
                </div>
            </Aux>
        );
    }
} 

export default Modal;