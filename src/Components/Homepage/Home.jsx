import React from "react";
import { AppBar,Toolbar,makeStyles,Typography,Box } from "@material-ui/core";

const useStyle= makeStyles({
  header:{
       background:"#2874f0",
       height:55
  },
  logo:{
    width:75
  },
  subURL:{
    width:10,
    marginLeft:4,
    height:10
  },
  container:{
    display:"flex"
  }
})


export const Home =()=>{

     const classes = useStyle();
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

       
    return(
    <AppBar className={classes.header}>
      <Toolbar>
        <Box className={classes.container}>
        <img src={logoURL} className={classes.logo}/>
        <box className={classes.container}>
        <Typography>
          explore plus
        </Typography>
        <img src={subURL} className={classes.subURL} />
        </box>
        </Box>
      </Toolbar>
    </AppBar>
    );
}