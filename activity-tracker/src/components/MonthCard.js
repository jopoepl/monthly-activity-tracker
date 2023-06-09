import React from 'react'
import DateBlock from './DateBlock'

class MonthCard extends React.Component{
    constructor(props){
        super(props)
    }

    getDatesForCurrentMonth = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const numberOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        
        const dates = [];
        
        for (let day = 1; day <= numberOfDaysInMonth; day++) {
          dates.push(day);
        }
        return dates;
      }

      
      
    render(){
        const datesForCurrentMonth = this.getDatesForCurrentMonth();
        return (
            <div className='flex wrap m-0 my-4 m-auto w-4/5 border'>
                <div className=' flex flex-col p-10 bg-blue-100'>{this.props.title}<span className='my-3 bg-red-400 border rounded px-4'>June</span></div>
                <div  className='flex flex-wrap p-5'>
                    {datesForCurrentMonth.map((date, index) => {
                        return <DateBlock key={index} date={date}/>
                    })}
                </div>
                <div onClick={this.props.handleClose} title={this.props.title} className='flex justify-center items-center p-5 w-2 mx-4 my-4 font-bold bg-red-500 h-10 rounded-full'>X</div>
                
            </div>
        )
    }
}

export default MonthCard;