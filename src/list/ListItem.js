import React from 'react'
import Label from './Label';
import "./ListItem.css"





    function ListItem(props){
        return(
          <div className="list-item">
                <hr />
                <hr />
                <div className="list-title">
                  <h4>hello {props.title}</h4>
                  
                </div>
                <div className="list-disc">{props.descr}</div>
                <div className="list-label">
                 
                  <Label OnAction = {()=>{
                    console.log("parent clicked");
                  }} isActive = {props.isActive}/>
                 
                </div>
              </div>
        
        );
      }


export default ListItem 