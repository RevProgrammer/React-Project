import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme} from '@mui/material';
import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import DrawerComp from './DrawerComp';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '20ch',
      },
    },
  }));


const Header = () => {

const pages =  ['Categories','How it works'];  
const theme = useTheme();

const isMatch = useMediaQuery(theme.breakpoints.down('lg')); 
console.log(isMatch);    
const [value, setValue] = useState()
  return (
   <>
   <AppBar sx={{background: '#000',height: '120px'}}>
    <Toolbar>
    <Typography sx = {{fontWeight: '700', fontSize: '1.5rem' , marginLeft:'70px', pt:5}}>
        Chatflex.io
    </Typography>
    {
        isMatch ? (
            <>
                
                <DrawerComp sx= {{pt: 8}}/>
            </>
        ) :(
            <>
            <Tabs sx = {{marginLeft: '20px',pt:5}} textColor='white' value={value} onChange = {(e, value) => setValue(value)} indicatorColor='primary'>
            {
                pages.map((page, index) => (
                    <Tab key = {index} label = {page}/>
                ))
            }
        {/* <Tab sx= {{textTransform :"none"}} label="Categories" />
        <Tab sx= {{textTransform :"none"}} label="How it works" /> */}
    </Tabs>
    <Search sx= {{mt:5, width:'450px !important', borderRadius:"30px", background:'white'}}>
            <SearchIconWrapper>
              <SearchIcon sx= {{color:'#000000'}} />
            </SearchIconWrapper>
            <StyledInputBase
             sx={{color:'#ADAEB5'}}
              placeholder="Search for the Character"
              inputProps={{ 'aria-label': 'Search for the Character' }}
            />
          </Search>
          <Button variant="outlined" sx={{mt:5, fontSize:'13px', fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", pt: "10px", pr:"21.08", pb:'10px', pl:'20.5px',textTransform :"none" }}>Create a Character</Button>
            </>

           
        )
    }
    
    </Toolbar>
  
    
   </AppBar>
   </>
  )
}

export default Header;
