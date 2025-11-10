import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Topic() {
    const [course, setCourse] = useState(null)

    async function getCourses() {
        const { data } = await axios.get("http://localhost:5000/courses")
        console.log(data)
        setCourse(data)
    }

    useEffect(() => {
        getCourses()
    }, [])



    return (
        <>
            {/* container */}
            <Box sx={{
                // bgcolor: "red",
                px: { xs: 2, md: 5 },
                mt: { xs: 2 }

            }}>
                {/* title and arrow  */}
                <Box sx={{
                    // bgcolor: "blue"
                }}>
                    <Typography variant="h4" color="secondary">
                        Latest Courses
                    </Typography>

                </Box>
                {/* images card */}
                <Box sx={{
                    // bgcolor: "green",
                    my: 3,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3
                }}>
                    {
                        course?.map((course) => (

                            <Card key={course.id} sx={{ width: { xs: '100%', md: '30%' }, maxWidth: 345, bgcolor: "transparent", boxShadow: "none" }}>
                                <Box sx={{
                                    position: "relative"
                                }}>
                                    <CardMedia
                                        component="img"
                                        alt={course.name}
                                        height="auto"
                                        image={course.image}
                                        sx={{
                                            borderRadius: 2,
                                            height: { xs: 180, sm: 220, md: 250 },
                                            transition: "color 0.3s",
                                            "&:hover .courseName": {
                                                color: "primary.main"
                                            },
                                            cursor: "pointer",
                                            width: "100%",

                                        }}
                                    />

                                    <Box sx={{
                                        bgcolor: "primary.main",
                                        position: "absolute",
                                        top: { xs: "70%", md: "80%" },
                                        left: "8px",
                                        px: "8px",
                                        // py: 1,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center"


                                    }}>
                                        <IconButton aria-label="delete">
                                            <MenuBookIcon />
                                        </IconButton>

                                        <Typography variant="body1" color="#fff" >7 lesson</Typography>
                                    </Box>
                                </Box>

                                <CardContent sx={{
                                    px: 0
                                }}
                                >
                                    <Typography gutterBottom variant="h5" component="div" className="courseName" sx={{
                                        transition: "color 0.3s",
                                        "&:hover": {
                                            color: "primary.main"
                                        },
                                        cursor: "pointer"
                                    }}>
                                        {course.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {course.des}
                                    </Typography>
                                </CardContent>
                                <Divider sx={{ width: "90%", mx: "auto" }} />
                                <CardContent sx={{
                                    display: "flex",
                                    gap: 2,
                                    px: 0
                                }}>

                                    <img src={course.icon} alt="" style={{ borderRadius: "50%", width: "10%" }} />
                                    <Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {course.title1}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {course.country}
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </Card>

                        ))
                    }

                </Box>


            </Box>
        </>
    )
}