import logo from './logo.svg';
import './App.css';
import '../src/input.css';
import ActivityInput from './components/ActivityInput';
import MonthCard from './components/MonthCard'
import React from 'react'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: [],
  };
  }
  createTask = (e) => {
      if (e.keyCode === 13) {
      this.setState({ taskName: [...this.state.taskName, e.target.value] });
      e.target.value = '';
    }
  }

  handleClose = (e) => {
    let taskArray = this.state.taskName

    let index = taskArray.indexOf(e.target.title);
    console.log(index, "INDEX of selection")
    taskArray.splice(index, 1)
    if (index !== -1) {
      this.setState({
        taskName: taskArray,
      })
      ;
}
  }

  render(){
    return (
      <div className="App">
        <h2 className='p-10 text-4xl text-blue-500 font-bold'>Monthly Activity Tracker!</h2>
        <ActivityInput handleInput={this.createTask}/>
        {this.state.taskName.map(task => {
          return <MonthCard title = {task} handleClose={this.handleClose}/>
        })}
      </div>
    );

  }

}

export default App;
