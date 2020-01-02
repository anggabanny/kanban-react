import React from 'react';
import Task from './Task';

function Board(props) {
    function move(data, status) {
        props.move(data, status);
    }

    function deleteTask(data) {
        props.deleteTask(data);
    }

    return (
        <div className={`${props.width} bg-green-200 mx-4 h-auto`}>
            <h1 className="text-center bg-green-800 p-2 text-white text-2xl">
                {props.status}
            </h1>
            <div className="p-3">
                <Task
                    status={props.status}
                    taskList={props.taskList}
                    move={(data, status) => move(data, status)}
                    deleteTask={val => deleteTask(val)}
                />
            </div>
        </div>
    );
}

export default Board;
