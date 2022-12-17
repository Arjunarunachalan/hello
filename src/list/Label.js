import React from 'react'
import "./Label.css"




class Label extends React.Component{
    render(){
        const props= this.props;
        const style=  props.isActive?{background:'green'}:{background:"orange"}
        return <span onClick={props.OnAction}
         className='label-comp' style={style}>{props.isActive? 'Active' :'NotActive'}</span>
    }
}

export default Label