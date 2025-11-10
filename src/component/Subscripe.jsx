import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Subscripe() {
    return (
        <>
            <Box sx={{
                px: { xs: 2, md: 5 },
                bgcolor: "#fff"
            }}>
                {/* text Area */}
                <Box sx={{
                    // bgcolor: "blue"
                }}>
                    <Box sx={{
                        width: { xs: '100%', md: '60%' },
                    }}>
                        <Typography variant="h4" color="initial">Subscribe to Learn</Typography>
                        <Typography variant="body1" color="initial" sx={{ p: 1 }}>Periodically, we share brand new articles, important information about the tech industry and notify you of all course updates.</Typography>
                    </Box>
                    <Box>

                    </Box>

                </Box>
                <Divider sx={{ width: "80%", m: "auto" }} />
                {/* link Area */}
                <Box sx={{
                    // bgcolor: "green",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    p: 5
                }}>

                    <NavLink style={{ textDecoration: "none" }}>
                        <Typography variant="body1" color="initial" sx={{
                            transition: "color 0.3s",
                            "&:hover": {
                                color: "primary.main"
                            }
                        }}>Sign up</Typography>
                    </NavLink >
                    <NavLink style={{ textDecoration: "none" }}>
                        <Typography variant="body1" color="initial" sx={{
                            transition: "color 0.3s",
                            "&:hover": {
                                color: "primary.main"
                            }
                        }}>Blog</Typography>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none" }}>
                        <Typography variant="body1" color="initial" sx={{
                            transition: "color 0.3s",
                            "&:hover": {
                                color: "primary.main"
                            }
                        }}>All Topic</Typography>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none" }}>
                        <Typography variant="body1" color="initial" sx={{
                            transition: "color 0.3s",
                            "&:hover": {
                                color: "primary.main"
                            }
                        }}>All Course</Typography>
                    </NavLink>

                </Box>

            </Box>
        </>
    )
}
