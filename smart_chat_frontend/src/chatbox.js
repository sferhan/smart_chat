import React from 'react';
import styles from './styles/chatbox.module.css';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert'; 
// import { makeStyles } from '@mui/styles';


const Chatbox=()=>{
    const location=useLocation()
    console.log("location.state.id: ",location.state.id)
    const host=1
    const chatdata=[
        {
            sender:1,
            receiver:2,
            message:"AOA",
            time: "1:20:00",
        },
        {
            sender:2,
            receiver:1,
            message:"waalikum salam",
            time: "1:21:00",
        },
        {
            sender:1,
            receiver:2,
            message:"how you doing",
            time: "1:22:00",
        },
        {
            sender:2,
            receiver:1,
            message:"I am fine",
            time: "1:23:00",
        },
        {
            sender:2,
            receiver:1,
            message:"how are you",
            time: "1:24:00",
        },
        {
            sender:1,
            receiver:2,
            message:"ALLAH ka shukar",
            time: "1:25:00",
        },
        {
            sender:1,
            receiver:2,
            message:"kia chal raha he?",
            time: "1:26:00",
        },
        {
            sender:2,
            receiver:1,
            message:"kam",
            time: "1:27:00",
        }

    ]

    return(
        <Box sx={{ flexGrow: 1 }}>
        <div style={{width:"100%",height:"100%"}}>
            
            <div style={{width:"100%",height:"100%",background:"brown"}}>
                
                    <Toolbar style={{background:"#1976d2"}}>
                        <List disablePadding style={{width:"90%"}}>
                            <ListItem disablePadding>
                                <ListItemButton disablePadding style={{padding:"0px",height:"auto"}}>
                                <ListItemAvatar>
                                <Avatar sx={{width:40, height:40}}>
                                    <AccountCircle style={{fontSize:50}}/>
                                </Avatar>
                                </ListItemAvatar>
                                <div style={{width:"20px"}}></div>
                                <ListItemText primaryTypographyProps={{fontSize:"18px",color:"white"}} secondaryTypographyProps={{fontSize:"14px",color:"white"}} primary="Name" secondary="text" disablePadding/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    {/* <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                    </Toolbar>
                

                <div className={styles.chatbox}>{chatdata.map((msg)=>{
                    if(msg.sender===host){
                        return(
                            <div style={{backgroundColor:"blue",display:"flex",justifyContent:"right",width:"100%",padding:"20px",boxSizing:"border-box"}}><div style={{background:"white"}}>{msg.message}</div></div>
                        )
                    }
                    else{
                        return(
                            <div style={{backgroundColor:"pink",display:"flex",justifyContent:"left",width:"100px",padding:"20px",boxSizing:"border-box"}}><div style={{background:"orange"}}>{msg.message}</div></div>
                        )
                    }
                })}
                </div>
                <div class={styles.chat_input}>
                    <input type="text" id="user-input" placeholder="Type your message..." />
                    <button id="send-button">Send</button>
                </div>

            </div>
        </div>
        </Box>
    )
}
export default Chatbox;