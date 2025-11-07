import { Box, Typography, Button } from '@mui/material'
import firstImg from "../assets/first.jpg"
import React from 'react'

export default function Hero() {
    return (
        <>
            <Box sx={{
                height:"100vh",
                display:'flex',
                justifyContent:"space-between",
                flexDirection:{xs:"column-reverse",md:"row"},
                px:{xs:2,md:5},  
            }}>
                {/* text Area */}
                <Box sx={{
                    width:{xs:"100%",md:"60%"},
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center"
                }}>
                    <Typography variant="h3" color="secondary" sx={{fontFamily:"Stack Sans Headline",fontSize:{xs:"2.5rem",md:"4rem"}}}>
                        Ghost Learning <br /> Management System
                    </Typography>
                    <Typography variant="body1" color="#808080" sx={{py:2}}>
                        Discover the Ghost LMS Theme, a modern and versatile solution for creating and managing online courses. Featuring a clean design, customizable layouts, and user-friendly navigation
                    </Typography>

                    {/* button box */}
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 3
                    }}>
                        <Button sx={{
                            borderRadius: 2,
                            boxShadow: 4,
                            bgcolor: "primary.main",
                            color: "#fff",
                            px: 2,
                            py: 1,
                            transition:"1s",
                            "&:hover": {
                                bgcolor: "secondary.main",
                                color: "#fff",
                            }
                        }} variant="text" color="primary">
                            Contact Us
                        </Button>
                        <Button sx={{
                            borderRadius: 2,
                            boxShadow: 4,
                            bgcolor: "#fff",
                            color: "secondary.main",
                            px: 2,
                            py: 1,
                            transition:"1s",
                            "&:hover": {
                                bgcolor: "primary.main",
                                color: "#fff",
                            }
                        }} variant="text" color="primary">
                            View Courses
                        </Button>
                    </Box>

                </Box>
                {/* image Area */}
                <Box sx={{
                    width:{xs:"100%",md:"40%"},
                    display:'flex',
                    alignItems:"center",
                    justifyContent:"center",  
                }}>
                    <img src={firstImg} alt="academic student image" style={{width:"100%",borderRadius:"12px"}} />
                </Box>

            </Box>
        </>
    )
}
