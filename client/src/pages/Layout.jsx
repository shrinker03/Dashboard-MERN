import {Box, useMediaQuery} from '@mui/material';
import NavBar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
