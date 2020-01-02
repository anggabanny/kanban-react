import React from 'react';

function Task(props) {
    let tasks = props.taskList;
    let status = props.status;

    function moveRight(data) {
        if (data.status === 'Todo') {
            props.move(data, 'Doing');
        } else if (data.status === 'Doing') {
            props.move(data, 'Done');
        }
    }

    function moveLeft(data) {
        if (data.status === 'Doing') {
            props.move(data, 'Todo');
        } else {
            props.move(data, 'Doing');
        }
    }

    function deleteTask(data) {
        props.deleteTask(data);
    }

    return tasks
        .filter(task => task.status === status)
        .map((task, index) => {
            if (task.status === 'Todo') {
                return (
                    <div
                        key={index}
                        className="p-3 my-4 bg-orange-700 text-white border-red-300 flex flex-col mx-auto"
                    >
                        <div className="mx-auto text-xl">{task.title}</div>
                        <div className="flex flex-row justify-between mt-5">
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={() => deleteTask(task)}
                                ></i>
                            </div>
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-arrow-circle-right"
                                    onClick={() => moveRight(task)}
                                ></i>
                            </div>
                        </div>
                    </div>
                );
            } else if (task.status === 'Doing') {
                return (
                    <div
                        key={index}
                        className="p-3 my-4 bg-orange-700 text-white border-red-300 flex flex-col mx-auto"
                    >
                        <div className="mx-auto text-xl">{task.title}</div>
                        <div className="flex flex-row justify-between mt-5">
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-arrow-circle-left"
                                    onClick={() => moveLeft(task)}
                                ></i>
                            </div>
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={() => deleteTask(task)}
                                ></i>
                            </div>
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-arrow-circle-right"
                                    onClick={() => moveRight(task)}
                                ></i>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div
                        key={index}
                        className="p-3 my-4 bg-orange-700 text-white border-red-300 flex flex-col mx-auto"
                    >
                        <div className="mx-auto text-xl">{task.title}</div>
                        <div className="flex flex-row justify-between mt-5">
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-arrow-circle-left"
                                    onClick={() => moveLeft(task)}
                                ></i>
                            </div>
                            <div className="cursor-pointer hover:text-green-400">
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={() => deleteTask(task)}
                                ></i>
                            </div>
                        </div>
                    </div>
                );
            }
        });
}

export default Task;
