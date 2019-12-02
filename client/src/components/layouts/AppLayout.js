import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Typography from '@material-ui/core/Typography';
import SideBar from '../Sidebar';
// App layout

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
}));

const AppLayout = ({ children }) => {
    const classes = useStyles();
    return(
        <div className="app">
        <SideBar/> 
        <div className="content">
        <AppBar position="static" className={clsx(classes.appBar)}>
                    <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    </Toolbar>
                </AppBar>
            <div className={classes.appBarSpacer} />
            {children}
        </div>                                       
      </div> 
    )          
};

  export default AppLayout;