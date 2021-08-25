import { Collapse, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import React,{useState}from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from "react-router-dom";

const items = [
    {
        text:'Some Text',
        icon:'',
        route:'/'
    },
    {
        text:'Some Text',
        icon:'',
        route:'/'
    },
    {
        text:'Some Text',
        icon:'',
        route:'/'
    }
];

const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%',
        maxWidth:200,
        backgroundColor:theme.palette.background.paper,
    },
    nested:{
        paddingLeft:theme.spacing(4),
    },
}));

const SidebarNestedList = ()=>{

const classes = useStyles();
const [open,setOpen]=useState(false)

const handleClick = ()=>{
    setOpen(!open);
};

return (

    <List 
    component="nav"
    aria-labelledby="nested-list-subheader"
    className={classes.root}
    >
      {/* <Link to="/"> */}
      <ListItem button>
       <ListItemIcon>
       <SupervisorAccountIcon/>
       </ListItemIcon>
       <ListItemText primary="Account"/>
       </ListItem>
       {/* </Link> */}
       {/* <Link to="/"> */}
       <ListItem button>
       <ListItemIcon>
       <DraftsIcon/>
       </ListItemIcon>
       <ListItemText primary="Draft"/>
       </ListItem>
       {/* </Link> */}
       <ListItem button onClick={handleClick}>
       <ListItemIcon>
       <InboxIcon/>
       </ListItemIcon>
       <ListItemText primary="Inbox"/>
       {open?<ExpandLessIcon/>:<ExpandMoreIcon/>}
       </ListItem>
       <Collapse in={open} timeout="auto"unmountOnExit>
       {/* <Link to="/"> */}
       <List component="div" disablePadding>
           <ListItem button>
               <ListItemIcon>
                 <StarBorderIcon/>
               </ListItemIcon>
               <ListItemText primary="stared"/>
           </ListItem>
        </List>
        {/* </Link> */}
       </Collapse>

       <ListItem button onClick={handleClick}>
       <ListItemIcon>
       <InboxIcon/>
       </ListItemIcon>
       <ListItemText primary="Inbox"/>
       {open?<ExpandLessIcon/>:<ExpandMoreIcon/>}
       </ListItem>
       <Collapse in={open} timeout="auto"unmountOnExit>
       {/* <Link to="/"> */}
       <List component="div" disablePadding>
           <ListItem button>
               <ListItemIcon>
                 <StarBorderIcon/>
               </ListItemIcon>
               <ListItemText primary="stared"/>
           </ListItem>
        </List>
        {/* </Link> */}
       </Collapse>

       <ListItem button onClick={handleClick}>
       <ListItemIcon>
       <InboxIcon/>
       </ListItemIcon>
       <ListItemText primary="Inbox"/>
       {open?<ExpandLessIcon/>:<ExpandMoreIcon/>}
       </ListItem>
       <Collapse in={open} timeout="auto"unmountOnExit>
       {/* <Link to="/"> */}
       <List component="div" disablePadding>
           <ListItem button>
               <ListItemIcon>
                 <StarBorderIcon/>
               </ListItemIcon>
               <ListItemText primary="stared"/>
           </ListItem>
        </List>
       {/* </Link> */}
       </Collapse>
      </List>
)
}

export default SidebarNestedList;