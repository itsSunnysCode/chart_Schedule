import React, { Component } from 'react'

class Assign extends Component {
    //component lifecycle hook added to fetch API 
    UNSAFE_componentWillMount(){
        let proxyURL = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://totalcloud-static.s3.amazonaws.com/intern.json';
        fetch(proxyURL+url)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({dataFromAPI:data});
        }
        )
        .catch((error)=> console.log('there was some problems in fetching some data')
        )

    }
    constructor(props){
        super(props);
        this.state = {
            dataFromAPI:[],
            startDate: '',
            dueDate:''
        };
    }
    
    render() {
        return (
            <div>
                <h1>TotalCloud Incorporation Assignment</h1>
                { this.state.dataFromAPI.map((singleData)=>{
                    return <p key={singleData.id}>{singleData.name} {singleData.start} {singleData.end}</p>
                })}
               
            </div>
        )
    }
}

export default Assign
