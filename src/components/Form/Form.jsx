
import React from 'react';
import { connect } from 'react-redux';
import { getFormDetail } from '../../actions/forms';
import TopBar from "../TopBar/TopBar.jsx";
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import './style.css';

class Form extends React.Component {

    componentDidMount() {
        const { state, ownProps } = this.props;
        this.props.onGetFormDetail(Number(ownProps.params.id));
    }

    componentWillUnmount(){
        this.props.removeState();
    }


    render(){
        const { state, ownProps, form} = this.props;
        console.log(this.props);
        if (form.length > 0) {
            return (
                <div className="container">
                    <div className="wrapper">
                            <Button raised color="default" onClick={e => this.props.router.goBack()} className="section">
                                Back
                            </Button>
                        {form.map((form, index) => {
                            switch (form.type) {
                                case 'list':
                                    var list = form.values.map(function (value, i) {
                                        return <ListItem className="list-item" key={i}>{value}</ListItem>;
                                    });
                                    return (
                                        <Paper key={index} className="section">
                                            <List  subheader={<ListSubheader>{form.label}</ListSubheader>}>
                                                {list}
                                            </List>
                                        </Paper>
                                    );
                                    break;

                                case 'integer':
                                    return (
                                        <FormControl fullWidth key={index}>
                                            <InputLabel htmlFor="amount">{form.label}</InputLabel>
                                            <Input
                                                id="adornment-amount"
                                                defaultValue={+form.value}
                                                type="number"
                                            />
                                        </FormControl>
                                      
                                    )
                                    break;

                                case 'text':
                                    return (
                                        <TextField
                                            key={index}
                                            label={form.label}
                                            type="text"
                                            defaultValue={form.value}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin="normal"
                                        />
                                    )
                                    break;

                                case 'double':
                                    return (
                                        <FormControl fullWidth key={index}>
                                            <InputLabel htmlFor="amount">{form.label}</InputLabel>
                                            <Input
                                                id="adornment-amount"
                                                defaultValue={+form.value}
                                                type="number"
                                            />
                                        </FormControl>
                                    )
                                    break;

                                case 'bool':
                                    return (
                                        <TextField
                                            key={index}
                                            label={form.label}
                                            type="text"
                                            defaultValue={form.value.toString()}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin="normal"
                                        />
                                    )
                                    break;
                            
                                default:
                                    break;
                            }
                            <div>{form.label}</div>
                        })}
                    
                    </div>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        form: state.formDetail,
        ownProps
    }),

    dispatch => ({
        onGetFormDetail: (id) => {
            dispatch(getFormDetail(id));
        },

        removeState: () =>{
            dispatch({ type: 'REMOVE_FORM_DETAIL' });
        }
    })
)(Form);