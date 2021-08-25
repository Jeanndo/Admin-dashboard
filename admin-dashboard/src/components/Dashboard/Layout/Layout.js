import React,{useState}from 'react'
import clsx from 'clsx';
import { makeStyles,useTheme} from '@material-ui/core/styles'
import Sidebar from '../Sidebar/mainListItems ';
import {CssBaseline} from '@material-ui/core';
import Header from '../Header/Header';
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    // toolbar: {
    //   paddingRight: 24, // keep right padding when drawer closed
    // },
    // toolbarIcon: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   padding: '0 8px',
    //   ...theme.mixins.toolbar,
    // },
    // appBar: {
    //   zIndex: theme.zIndex.drawer + 1,
    //   transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    // },
    appBar:{
     transition:theme.transitions.create(['margin','width'],{
         easing:theme.transitions.easing.sharp,
         duration:theme.transitions.duration.leavingScreen,
     })
    },
    appBarShift: {
      marginLeft:drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut, //sharp
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight:theme.spacing(2) , //36
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 0.2,
    },
    drawer:{
    width:drawerWidth,
    flexShrink:0,
    },
    drawerPaper: {
    //   position: 'relative',
    //   whiteSpace: 'nowrap',
      width: drawerWidth,
    //   transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    },
    drawerHeader:{
     display:'flex',
     alignItems:'center',
     padding:theme.spacing(0,1),
     // neccessary for content to be below app bar
     ...theme.mixins.toolbar,
     justifyContent:"fixed-end"
    },
    content:{
     flexGrow:1,
     padding:theme.spacing(3),
    //  marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
     marginLeft:-drawerWidth,
    },
    contentShift:{
     transition:theme.transitions.create('margin',{
         easing:theme.transitions.easing.easeOut,
         duration:theme.transitions.duration.enteringScreen,
     }),
     marginLeft:0,
    },

    // drawerPaperClose: {
    //   overflowX: 'hidden',
    //   transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    //   width: theme.spacing(7),
    //   [theme.breakpoints.up('sm')]: {
    //     width: theme.spacing(9),
    //   },
    // },
    // appBarSpacer: theme.mixins.toolbar,
    // content: {
    //   flexGrow: 1,
    //   height: '100vh',
    //   overflow: 'auto',
    // },
    // container: {
    //   paddingTop: theme.spacing(4),
    //   paddingBottom: theme.spacing(4),
    // },
    // paper: {
    //   padding: theme.spacing(2),
    //   display: 'flex',
    //   overflow: 'auto',
    //   flexDirection: 'column',
    // },
    // fixedHeight: {
    //   height: 240,
    // },
  }))

const Layout = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [open,setOpen]= useState(false);

    const handleDrawerOpen = ()=>{
        setOpen(true);
    }

    const handleDrawerClose = ()=>{
        setOpen(false);
    }
   
    return (
        <div className={classes.root}>
          <CssBaseline/>  
            {/* <AppBar
            position="fixed"
            className={clsx(classes.AppBar,{
             [classes.AppBar]:open, 
            })}
            > */}
            <Header
              classes={classes}
              sidebarIsOpened={open}
              onClick={handleDrawerOpen}
            />
            {/* </AppBar> */}
            <Sidebar
             open={open}
             onClose={handleDrawerClose}
             classes={classes}
            />
            <main
            className={clsx(classes.content,{
                [classes.contentShift]:open,
            })}
            >
               <div className={classes.drawerHeader}/>
               {props.children}
                  
            </main>
        </div>
    )
}

export default Layout
