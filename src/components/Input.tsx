import * as React from 'react';

interface Props {
    confirmInput: (text: string) => void;
}

interface State {
    inputValue: string
}

export default class Input extends React.Component<Props, State> {
    state = {
        inputValue: ''
    };

    handleChanges = (e: any) => {
      this.setState({inputValue: e.target.value})
    };

    addTodo = (e: any) => {
        e.preventDefault();
        if(this.state.inputValue) {
            this.props.confirmInput(this.state.inputValue);
            this.setState({inputValue: ''})
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        value={this.state.inputValue}
                        type="text"
                        placeholder={'inter your todo'}
                        onChange={(e) => this.handleChanges(e)}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}