import React, { Component } from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
    
class CustomToastr extends Component {    
  render(){    
    return (    
      <div>          
        <button  className="btn btn-success btnspace" onClick={()=>toast.success("Success Message:Center", { position: toast.POSITION.TOP_CENTER })}>Top Center</button>    
        <ToastContainer />    
      </div>    
    );    
  }    
}    
    
export default CustomToastr   