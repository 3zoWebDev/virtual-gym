import React, { Component } from 'react'
import moment from 'moment'
export default class TodayDate extends Component {

    render() {
  
        
        let today = new Date()
        let handleDate =async () => {
        console.log("....ll")
        let today_date = new Date()
        let class_date = moment(this.props.classDate);
        //
        if(today_date == class_date){
            //time
            let class_time = moment(this.props.timeStart, 'HH:mm');
            let today_time_houre = today_date.getHours();

            let today_time_minutes = today_date.getMinutes();

           
            console.log("show Component")
        }else{
            console.log("hide Component")
        }
    }
        return (
            <div>
            {console.log(today.getHours())}
            {/* {console.log(`class Date = ${this.props.classDate}`)}
            {console.log(`moment = ${momentDate}`)} */}
            {/* {handleDate()} */}
            </div>
        )
    }
}
