import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import {AppBar, IconButton, InputBase, Toolbar, useTheme} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setThemeMode} from 'redux/slices/globalSlice';
import FlexBetween from './FlexBetween';

const NavBar = ({setIsSidebarOpen, isSideBarOpen}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{position: 'static', background: 'none', boxShadow: 'none'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        {/* Left-Side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSideBarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right-Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setThemeMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{fontSize: 25}} />
            ) : (
              <LightModeOutlined sx={{fontSize: 25}} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{fontSize: 25}} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
