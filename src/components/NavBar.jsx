import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
  ListItem,
  ListItemText,
  Icon,
  ThemeProvider,
  Collapse,
  AccordionDetails
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  User as UserIcon,
  Key as KeyIcon,
  BookOpen as BookIcon,
  DollarSign as DollarIcon,
  Search as SearchIcon,
  Layers as LayerIcon,
  UserCheck as AccountIcon,
  Star as RecognitionIcon,
} from 'react-feather';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import NavItem from './NavItem';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import classNames from 'classnames';


const items = [
  // {
  //   href: '/app/dashboard',
  //   icon: BarChartIcon,
  //   title: 'Dashboard'
  // },
  // {
  //   href: '/app/global-clip-theme',
  //   icon: SettingsSystemDaydreamIcon,
  //   title: 'Clip Themes'
  // },
  
  {
    href: '/add',
    icon: AddBoxIcon,
    title: 'Add Item'
  },
  {
    href: '/items',
    icon: GroupWorkIcon,
    title: 'Items'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  },
];
const itemsTwo = [
  {
    href: '/login',
    icon: HeadsetMicIcon,
    title: 'Logout'
  },
];

const subItems = [
   {
    href: '/app/buy-credits',
    icon: DollarIcon,
    title: 'Buy Credits'
  },
  {
    href: '/app/usage-history',
    icon: BookIcon,
    title: 'Usage'
  },
  {
    href: '/app/payment-history',
    icon: LayerIcon,
    title: 'Payment History'
  },
  {
    href: '/app/account',
    icon: AccountIcon,
    title: 'My Account'
   },
    {
      href: '/app/change-password',
      icon: KeyIcon,
      title: 'Change Password'
  },
]

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({

 
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  font: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    color: '#57707c',
    fontWeight: '500'
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const [dropDownOpen, setDropDownOpen] = useState('');
  const [accountOpen, setAccountOpen] = React.useState(false);
  const handleClick = () => {
    setAccountOpen(!accountOpen);
  };

  const page = window.location.href.split('/').slice(-2)[0];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <ThemeProvider theme={theme}>
    <Box height="100%" display="flex" flexDirection="column">
      <Divider />
      <Box p={2}>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
         
           

          

          <Collapse in={accountOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div >
              {subItems.map(item => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
            ))}
                 
                      </div>
                </List>
          </Collapse>
        

{/* <ListItem button  >
                  <Icon style={{ position: 'relative', left: '-10px' }}>
                    <LockIcon style={{ color: '#637b86' }} />
                  </Icon>
                  <ListItemText
                    primary="Logout"
                    className={classes.font}
                    disableTypography
                  />
                      </ListItem> */}
        </List>

        {/* <SetupWizardSide /> */}
      </Box>
      <Box flexGrow={1} />
    </Box>
    </ThemeProvider>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
