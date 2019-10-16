import React, { Component } from 'react'
import Chart from 'react-google-charts'

class StudentChart extends Component {


    //function runs for objective 4
     checkAvailability(){
       let avail = !this.state.Availability;
       this.setState({Availability: avail});
    
       
     }
    
    
  
  
      constructor(props){
        super(props);
        this.state = {
          chart123: [
            { type: 'string', id: 'Term' },
            { type: 'string', id: 'Name' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
          ],
         Availability: false
        };
        this.checkAvailability = this.checkAvailability.bind(this);       }
        
  render() {
  
    
    var temp_Array;
    temp_Array=this.props.students.map((student)=>{
      const { id, name, start, end } = student;
         
            let dateNumber = start.substring(0,2);
            let  temp = start.substring(3,5);
            let month = temp-1;
            console.log(month);
            
            let year = start.substring(6,10)          
            let end_dateNumber = end.substring(0,2);
            let  end_temp = end.substring(3,5);
            let end_month = end_temp-1;
            let end_year = end.substring(6,10);
            let id_string = id.toString();
            
            return[id_string, name, new Date(year, month, dateNumber), new Date(end_year, end_month, end_dateNumber)];
    });
    //adding chart data in data array
    temp_Array.unshift(this.state.chart123);
    
   

 return(
      <div>
      <br />
      <br />
      <Chart
  width={'100%'}
  height={'800px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={temp_Array}
  options={

   { timeline: {
      singleColor: '#f88',
    }
    
}
}/>
<button onClick={this.checkAvailability}>Check Availability</button>
      </div>
    )
  }
}
export default StudentChart




