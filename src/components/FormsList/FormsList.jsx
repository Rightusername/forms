import React from 'react';
import { bindActionCreators } from 'redux'
import Form from "../Form/Form.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import * as formsListActions from '../../actions/forms';
import './style.css';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(formsListActions, dispatch)
})

class FormsList extends React.Component{
    

    componentDidMount(){
        this.props.actions.getForms();
    }

    render(){
        const { forms } = this.props;
        return (
            <div>
            <div className="container">
                <div className="wrapper">
                    <Grid container spacing={24}>
                    {forms.map((form, index) =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card>
                                <CardMedia
                                    image={form.image}
                                    className="image"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography type="headline" component="h2" className="title">
                                        {form.name} 
                                    </Typography>
                                    <Typography component="p" className="description">
                                        {form.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense color="primary" onClick={this.props.actions.deleteForm.bind(this, form)}>
                                        Delete
                                    </Button>
                                    <Link to={`/form/${form.id}`} style={{ textDecoration: 'none' }}>
                                        <Button dense color="primary" >
                                            View
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                    </Grid>
                </div>

            </div>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        forms: state.forms,
        ownProps
    }),
    mapDispatchToProps
)(FormsList);