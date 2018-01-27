import React from 'react';
import { connect } from 'react-redux';
import { getFormDetail } from '../../actions/forms';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router';

class TopBar extends React.Component {

    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                    
                        <Link to={`/`} style={{ textDecoration: 'none' }}>
                            Forms
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default TopBar;