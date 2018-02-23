import React, { Component } from 'react';
import "../css/Task.css";


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewTasks: false,
            checked: false,
            items: [],
            text: "",
            txt: "",
            filterText: "",
            dat: '',
            timeChange: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
    }
    handleClick() {
        this.setState({
            NewTasks: true
        });
    }
    handleTime(value) {
        this.setState({
            timeChange: value
        });
    }
    handleDate(value) {
        this.setState({
            dat: value
        });
    }
    renderDefault() {
        return(
            <div className="content">
                <div>
                    <button className="btn-green" onClick={this.handleClick}>ADD TASKS</button><br />
                </div><br />
                <p>Results</p>
                <hr />
                <TodoList items={this.state.items}  />
            </div>
        );
    }
    handleChangeDate = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    renderAddNewTask() {
        return(
            <div className="content backgraund-blue">
                <h3 className="padding-text">New Tasks</h3>
                <p className="padding-text">Input please task name:</p> 
                <input className="nameTask padding-text" ref="valueName" onChange={this.handleChange} value={this.state.text} /><br /><br />
                <p className="padding-text">Tell about this task</p>
                <textarea className="aboutTask padding-text" ref="aboutTask" placeholder="Text about this task..." onChange={this.handleChangeText} value={this.state.txt}></textarea>
                <p className="padding-text">Hide date and time:{" "}<input type="checkbox" value={this.state.checked} onChange={this.handleChangeDate} /></p>
                <DateFinish onHandleDate={this.handleDate} onHandleTime={this.handleTime} dateTime={this.state.checked} />
                <button className="margin-text backgraund-red" onClick={this.handleCancel}>Cancel</button>
                <button className="margin-text backgraund-green" onClick={this.handleSubmit}>Save</button>
            </div>
        );
    }
    handleChangeText(e) {
        this.setState({ 
            txt: e.target.value,
        });
    }
    handleChange(e) {
        this.setState({ 
            text: e.target.value
        });
    }
    
      handleSubmit(e) {
        e.preventDefault();
        let NameTask = this.refs.valueName.value;
        let aboutTask = this.refs.aboutTask.value;
        if(NameTask === "" || NameTask === " ")
            return;
        else if(aboutTask === "" || aboutTask === " ")
            return;

        const newItem = {
          text: this.state.text,
          txt: this.state.txt,
          dat: this.state.dat,
          timeChange: this.state.timeChange,
          id: Date.now(),
          dateADD: Date()
        };
        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: '',
          txt: '',
          dat: '',
          timeChange: '',
          NewTasks: false,
          checked: false
        }));
        
      }
    handleCancel = () => this.setState({NewTasks: false});
    render() {
        if(this.state.NewTasks)
            return (this.renderAddNewTask());
        else
            return (this.renderDefault());
    }
}
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items: this.props.items,

        };
    }
    delete(item1) {
        const newState = this.state.items;
        if (newState.indexOf(item1) > -1) {
            newState.splice(newState.indexOf(item1), 1);
            this.setState({items: newState});
        }
    }
    render() {
        let d = new Date();
        console.log(d.getFullYear());
        return(
            <div className="TaskBlock">
            {console.log(this.state.items)}
                {this.state.items.map(item => (
                    <div className="newTaskBlock" key={item.id}>
                        <h3>Task Name</h3>
                        <div>{item.text}</div>
                        <h3>About task</h3>
                        <div className='width'>{item.txt}</div>
                        <p><input type="checkbox" onChange={this.delete.bind(this, item)}/>{" "}Task is ready</p>
                        <div>Expiration date: {item.dat}, Expiration time: {item.timeChange}</div>
                        <div>Date add: {"Years: " + d.getFullYear() + " Mouth: " + d.getMonth() + " Day: " + d.getDay()}</div>
                    </div>
                ))}
            </div>
        );
    }
}
class DateFinish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingDate: '',
            settingTime: ''
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }
    handleChangeTime(event) {
        var Time = event.target.value;
        this.props.onHandleTime(Time);
        this.setState({
            settingTime: event.target.value

        })
    }
    handleChangeDate(event) {
        var DateChange = event.target.value;
        this.props.onHandleDate(DateChange);
        this.setState({
            settingDate: event.target.value,
        })
    }
    renderNorm = (props) => {
        if(!this.props.dateTime) {
            return (
                <form>
                    <input className="date-text" onChange={this.handleChangeDate} ref="d" type="date" value={this.state.settingDate} /><br />
                    <input className="date-text" type="time" onChange={this.handleChangeTime} value={this.state.settingTime} />
                </form>
            );
        }
        else {
            return null;
        }
    }
    render() {

        if(!this.props.dateTime)
            return this.renderNorm();
        else
            return null;
    }
    
    
}
export default Tasks;