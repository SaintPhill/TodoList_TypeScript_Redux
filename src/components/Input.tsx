import * as React from 'react';

interface Props {
    submit: (text: string) => void;
}

interface State {
    value: string
}

export default class Input extends React.Component<Props, State> {
    state = {
        value: ''
    };

    handleChanges = (e: any) => {
      this.setState({value: e.target.value})
    };

    addTodo = (e: any) => {
        e.preventDefault();
        if(this.state.value) {
            this.props.submit(this.state.value);
            this.setState({value: ''})
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        value={this.state.value}
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