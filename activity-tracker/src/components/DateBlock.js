import React from 'react'

class DateBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: false,
        }
    }
    handleSelect = (e) => {
        this.setState({
            selected: !this.state.selected,
        })
    }
    render(){
        return (
            <div className={`flex justify-center items-center w-20 m-2 h-10 border-2 rounded ${this.state.selected ? 'selected': ''}`} onClick={this.handleSelect}>
                <span>{this.props.date}</span>
            </div>
        )
    }
}

export default DateBlock;
