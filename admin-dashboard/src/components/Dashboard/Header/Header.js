import React,{Component}from 'react'
import { Toolbar,AppBar} from '@material-ui/core';
import MenuIcon from "@material-ui/core/Menu";
import { Typography } from '@material-ui/core';
// import ReactorComponent from "reactor/components/reactor.components";
import { PropTypes } from 'prop-types';
import clsx from 'clsx'
import { IconButton } from '@material-ui/core';

class Header extends Component{
    /**
     * {@inheritDoc}
     * @param {any} 
     * @param {*} div 
     */
    render(){
        let classes= this.props.classes,
        sidebarIsOpened=this.props.sidebarIsOpened;

        return (
            <AppBar
            position="fixed"
            className={clsx(classes.AppBar,{
                [classes.appBarShift]:sidebarIsOpened,
            })}
            >
              <Toolbar>
                  <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.props.onClick}
                  edge="start"
                  className={clsx(classes.menuButton,sidebarIsOpened && classes.menuButtonHidden)}
                  >
                  <MenuIcon/>
                  </IconButton>
                  <Typography variant="h6" noWrap>
                      Dashboard
                  </Typography>
                  </Toolbar>
            </AppBar>
        )
    }
}

export default Header
