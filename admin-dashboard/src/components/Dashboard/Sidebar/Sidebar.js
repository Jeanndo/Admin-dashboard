import React from 'react'
import {Drawer, IconButton, Divider} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useTheme} from '@material-ui/core/styles'
import ListItems from './mainListItems '




const Sidebar = (props) => {
    let{classes,onClose,open}=props;
    const theme = useTheme();
    return (
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper:classes.drawerPaper,
            }}
            >
            <div className={classes.drawerHeader}>
             <IconButton onClick={onClose}>
                 {theme.direction==='ltr'?<ChevronLeftIcon/>:<ChevronRightIcon/>}
                 </IconButton>
            </div>
            <Divider/>
            <ListItems/>
            </Drawer>
    )
}

export default Sidebar
