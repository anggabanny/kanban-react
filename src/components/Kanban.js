import React from 'react';
import Navbar from './Navbar';
import AddTask from './AddTask';
import Board from './Board';
import uuidv4 from 'uuid/v4';

class Kanban extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    addValue = val => {
        let taskList = this.state.taskList;
        let value = {
            id: uuidv4(),
            title: val,
            status: 'Todo'
        };
        this.setState({
            taskList: taskList.concat([value])
        });
    };

    changeStatus = (data, status) => {
        let taskList = this.state.taskList;
        for (let i = 0; i < taskList.length; i++) {
            if (data.id === taskList[i].id) {
                taskList[i].status = status;
                break;
            }
        }
        let newTask = taskList.slice();
        this.setState({
            taskList: newTask
        });
    };

    deleteTask = data => {
        let taskList = this.state.taskList;
        for (let i = 0; i < taskList.length; i++) {
            if (data.id === taskList[i].id) {
                taskList.splice(i, 1);
                break;
            }
        }
        let newTask = taskList.slice();
        this.setState({
            taskList: newTask
        });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="text-center md:text-left">
                    <AddTask setName={val => this.addValue(val)} />
                </div>
                <div className="flex flex-col items-center md:items-start md:flex-row">
                    <Board
                        width="w-2/3 md:w-1/3"
                        status="Todo"
                        taskList={this.state.taskList}
                        move={(data, status) => this.changeStatus(data, status)}
                        deleteTask={val => this.deleteTask(val)}
                    />
                    <Board
                        width="w-2/3 md:w-1/3 mt-4 md:mt-0"
                        status="Doing"
                        taskList={this.state.taskList}
                        move={(data, status) => this.changeStatus(data, status)}
                        deleteTask={val => this.deleteTask(val)}
                    />
                    <Board
                        width="w-2/3 md:w-1/3 mt-4 md:mt-0"
                        status="Done"
                        taskList={this.state.taskList}
                        move={(data, status) => this.changeStatus(data, status)}
                        deleteTask={val => this.deleteTask(val)}
                    />
                </div>
            </div>
        );
    }
}

export default Kanban;
