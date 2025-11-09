import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Topic() {
    const [topics, setTopics] = useState(null)

    async function getTopics() {
        const { data } = await axios.get("http://localhost:5000/topics")
        console.log(data)
        setTopics(data)

    }
    useEffect(() => {
        getTopics()
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
                    <Typography variant="h3" color="secondary">
                        Popular Topics
                    </Typography>

                </Box>
                {/* images card */}
                <Box sx={{
                    // bgcolor: "green",
                    my: 3,
                    display: "flex",
                    gap: 3
                }}>
                    {topics?.map((topic) => (
                        <Card key={topic.id} sx={{ maxWidth: 345 , bgcolor:"transparent",boxShadow:"none"}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={topic.image}
                                    alt={topic.name}
                                    sx={{borderRadius:2}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body1" sx={{color:"secondary.main",textAlign:"center"}}>
                                        {topic.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}


                </Box>


            </Box>
        </>
    )
}
