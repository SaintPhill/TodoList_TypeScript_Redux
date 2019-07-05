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

    handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({inputValue: e.target.value})
    };

    addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(this.state.inputValue) {
            this.props.confirmInput(this.state.inputValue);
            this.setState({inputValue: ''})
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input
                        value={this.state.inputValue}
                        placeholder={'inter your todo'}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}