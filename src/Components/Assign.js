import React, { Component } from 'react'
import StudentChart from './StudentChart'
import '../App.css';


class Assign extends Component {
    //component lifecycle hook added to fetch API 
    UNSAFE_componentWillMount(){
        let proxyURL = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://totalcloud-static.s3.amazonaws.com/intern.json';
        fetch(proxyURL+url)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({students:data});
        }
        )
        .catch((error)=> console.log('there was some problems in fetching some data')
        )

    }
    Table() {
        return this.state.students.map((student) => {
           const { id, name, start, end } = student //destructuring
           let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let dateNumber = start.substring(0,2);
            let  temp = start.substring(4,5);
            let month = monthNames[temp-1];
            let startDate = `${dateNumber}/${month}`;
            let end_dateNumber = end.substring(0,2);
            let  end_temp = end.substring(4,5);
            let end_month = monthNames[end_temp-1];
            let endDate = `${end_dateNumber}/${end_month}`;

           return (
              <tr key={id}>
                 <td className="id">{id-1}</td>
                 <td>{name}</td>
                 <td>{startDate}</td>
                 <td>{endDate}</td> 
              </tr>
           )
        })
     }
    constructor(props){
        super(props);
        this.state = {
            students:[],
            startDate: '',
            dueDate:''
        };

        this.Table = this.Table.bind(this);
    }
    
    render() {
        return (
            <div>
            <h1 id='title'>Totalcloud Assignment</h1>
            <table id='students'>
                    <thead>
                    <tr>
                    <th></th>
                    <th>intern-Assignment</th>
                    <th>start date</th>
                    <th>due date</th>
                    </tr>
                    </thead>
               <tbody>
                  {this.Table()}
               </tbody>
            </table>
              
            <StudentChart students={this.state.students}/>
            </div>
        )
    }
}

export default Assign
