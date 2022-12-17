import React from 'react'
import ListItem from './ListItem';


const Arr = [
    {
        title:"Appointmen for october",
        descr:"appointment was resheduled",
        isActive:true
    
    },
    {
        title:"Appointment for octobe",
        descr:"appointment was resheduled",
        isActive:false
    
    },
    {
        title:"Appintment for october",
        descr:"appointment was resheduled",
        isActive:true
    
    }
]
class List extends React.Component{
    

    render(){
     return (
        <div className='app-list'>
            {
                Arr.map((obj)=>{
                    return <ListItem  key= {obj.title} title = {obj.title} descr = {obj.descr} isActive = {obj.isActive} />
                })
            }


       

        </div>
      );
    }
}
export default List