import React from 'react'
import Tools from '../components/Tools';
import ListItem from './ListItem';


let Arr = [
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

constructor(props){
    super(props);

    this.state = {
        data:Arr
    };
}






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

        this.setState({
            data:Newlist
        })

       
    }
    

    render(){
        console.log("rendered");
     return (
        <Tools onAction = {this.OnActionchange.bind(this)}>
        <div className='app-list'>
            {
            this.state.data.map((obj)=>{
                    return <ListItem  key= {obj.title} title = {obj.title} descr = {obj.descr} isActive = {obj.isActive} />
                })
            }


       

        </div>
        </Tools>
      );
    }
}
export default List