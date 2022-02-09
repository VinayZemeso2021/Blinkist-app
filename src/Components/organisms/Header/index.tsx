/* eslint-disable @typescript-eslint/no-unused-vars */

import Logo from '../../molecules/Logo';
import Icon from '../../atoms/Icons';
import Typography from '../../atoms/Typography';
import {Box,  Menu, MenuItem, Container} from '@mui/material';
import {Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '../../atoms/Button';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import AvatarComp from '../../atoms/Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const HeaderComponent = (props : any) => {

    const settings = ['Profile', 'Logout'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [searchState, setSearchState] = useState(false);
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
      };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar data-testid='box'  position="fixed" sx={{color: 'black', backgroundColor: 'white', boxShadow: 'none', display:'flex',justifyContent:'Center',alignItems: 'center', font: 'Cera Pro'}}>
            <Container >
                <Toolbar sx={{height: '86px', width:'100%',  display: 'flex', justifyContent: 'space-between'}}>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <Box sx={{height: '26px', width:'124.09px', marginLeft:"100px", marginRight:"40.91px"}}>
                        <Logo />
                    </Box>
                </NavLink>
                <Box sx={{height: '24px', width:'21'}} >
                <Search  data-testid='search-box'/>
                </Box>  
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                            <Button data-testid='handle-explore' onClick={props.handleExploreMenu}  key={1} sx={{display: 'flex', color:'#03314B', marginLeft:"30px", marginRight:"15px" ,fontSize:'16px',fontWeight:'500'}} children='Explore' endIcon={!props.exploreOption ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} />
                           
                            <NavLink to='/' style={{ textDecoration: 'none', }}>
                                <Button key={2} children='My Library' sx={{color:'#03314B' ,fontSize:'16px',fontWeight:'500'}}/>
                            </NavLink>
                    </Box>
                    <Box sx={{ flexGrow: 0.5, display:'flex',justifyContent:'Center',alignItems: 'center'}}>
                        <AvatarComp/>
                        <Icon icon={<KeyboardArrowDownIcon />}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderComponent;



