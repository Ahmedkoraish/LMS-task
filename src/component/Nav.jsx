import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


import React, { useState } from 'react'

export default function Nav() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // flexWrap: "wrap"
                }}>
                    <Typography variant="h2" sx={{ color: "primary.main", letterSpacing: 1 }} component="div" >
                        Learn.
                    </Typography>
                    <Box sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 3
                    }}>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ color: "black " }}
                            >
                                page
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}>Page1</MenuItem>
                                <MenuItem onClick={handleClose}>Page2</MenuItem>
                                <MenuItem onClick={handleClose}>page3</MenuItem>
                            </Menu>
                        </div>
                        <Typography variant="body1" color="initial">course</Typography>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ color: "black " }}
                            >
                                Home
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}>Home1</MenuItem>
                                <MenuItem onClick={handleClose}>Home2</MenuItem>
                                <MenuItem onClick={handleClose}>Home3</MenuItem>
                            </Menu>
                        </div>
                        <Typography variant="body1" color="initial">course</Typography>


                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                        <IconButton sx={{ color: "black" }}>
                            <SearchIcon />
                        </IconButton>
                        <Button sx={{ bgcolor: "primary.main", color: "#fff", px: 2 }}>
                            Sign Up
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>

                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Menu" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Course" />
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
