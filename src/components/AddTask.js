import React from 'react';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    submitData = () => {
        let name = this.state.name;
        this.props.setName(name);
        this.setState({
            name: ''
        });
    };

    render() {
        return (
            <div className="p-2 m-5">
                <input
                    className="shadow appearance-none border rounded md:w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Task"
                    value={this.state.name}
                    onChange={this.handleChange}
                ></input>
                <button
                    className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none"
                    type="button"
                    onClick={this.submitData}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default AddTask;
