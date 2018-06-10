import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
    },
    field: {
        fontSize: 22,
    },
    button: {
        marginLeft: 16,
    }
};

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.search
        };
    }

    handleTextChange = e => {
        var text = e.target.value;
        this.setState({
            text: text
            });
        
        setTimeout(()=>{
            this.props.onSearch(this.state.text);    
        }, 1000);

            }

    render() { 
        const { text } = this.state;

        return (
            <Paper style={styles.container}>
                <TextField
                    fullWidth
                    underlineShow={false}
                    style={styles.field}
                    hintText="Search"
                    value={text}
                    onChange={this.handleTextChange}
                />
            </Paper>
        );
    }
}
