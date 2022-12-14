import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Content from './content'

const drawerWidth = 240;

const topBar = [
    { type:'EVERYDAY VALUE',postion: 'one'},
    { type:'BEST SELLERS',postion: 'two'},
    { type:'NEW LAUNCHES',postion: 'three'},
    { type:'PARATHA PIZZA',postion: 'four'},
    { type:'VEG PIZZA',postion: 'five'},
    { type:'BEVERAGES',postion: 'six'},
    { type:'NON-VEG PIZZA',postion: 'seven'},
    { type:'CHICKEN LOVERS PIZZA',postion:'eight'},
    { type:'SPECIALITY CHICKEN',postion:'nine'},
    { type:'SIDES',postion: 'ten'}, 
    { type:'PIZZA MANIA',postion: 'eleven'},
    { type:'MEAL FOR 1',postion: 'twelve'},
    { type:'MEAL FOR 2',postion: 'thirteen'},
    { type:'MEAL FOR 4',postion: 'fourteen'},
    { type:'PARTY COMBOS',postion: 'fifteen'},
    { type:'DESSERTS',postion: 'sixteen'}
]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Box sx={{ display: 'flex', backgroundColor: 'rgb(242, 242, 242)'}}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" className="flex">
                        {/* <img src="../src/assets/logo.svg" /> */}
                        <h1 >Domino's Pizza</h1>
                    </Typography>

                </Toolbar>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        sx={{
                            bgcolor: '#ffffff'
                        }}
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        {topBar.map((nod, index) => (
                        <Tab
                        key={index}
                        value={nod.postion}
                        label={nod.type}
                        sx={{
                            color: '#b4bfc4'
                        }}
                    />
                    ))} 
                    </Tabs>
                </Box>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Track current order', 'Order history', 'Home', 'Deals & offers', 'Menu', 'Everyday Value Offers', 'Terms & conditions', 'Feedback'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Main open={open} className="mt-28">
                <DrawerHeader /> 
                <Content />

            </Main>
        </Box>
    );
}



