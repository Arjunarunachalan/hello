import React from 'react'
import Tools from '../components/Tools';
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

    OnActionchange(e){
        console.log(e.target.value);
        const value = e.target.value;
        const Newlist = Arr.filter((item)=>{
            if(value=="all"){
                return true
            }

            if(value == "active"){
                return item.isActive== true;
            }
            if(value == "non-active"){
                return item.isActive== false;
            }
            return false;
        });

        console.log(Newlist);
       
       


    }
    

    render(){
     return (
        <Tools onAction = {this.OnActionchange}>
        <div className='app-list'>
            {
                Arr.map((obj)=>{
                    return <ListItem  key= {obj.title} title = {obj.title} descr = {obj.descr} isActive = {obj.isActive} />
                })
            }


       

        </div>
        </Tools>
      );
    }
}
export default List