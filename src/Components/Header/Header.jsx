import React from "react";
import { AppBar,Toolbar,makeStyles,Typography,Box,withStyles} from '@material-ui/core'

//components names 
import { SearchBar } from "./SearchBar";
import { HeaderButton } from "./HeaderButton";

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
  },
  component:{
    marginLeft:"12%",
    lineHeight:0
  },
  subheading:{
    fontSize:10,
    fontStyle:"italic"
  }
})
const ToolBar = withStyles ({
         
    root:{
      minHeight:55
    }


})(Toolbar)


export const Header =()=>{

     const classes = useStyle();
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

       
    return(
    <AppBar className={classes.header}>
      <ToolBar>
        <Box className={classes.component}>
        <img src={logoURL} className={classes.logo}/>
        <box className={classes.container}>
        <Typography className={classes.subheading}>
          explore <Box component="span" style={{color:"#ffe500"}}>plus</Box>
        </Typography>
        <img src={subURL} className={classes.subURL} />
        </box>
        </Box>
        <SearchBar />
        <HeaderButton />
      </ToolBar>
    </AppBar>
    );
}