import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Articals() {
    const [article, setArticle] = useState(null)

    async function getArticle() {
        const { data } = await axios.get("http://localhost:5000/articals")
        console.log(data)
        setArticle(data)
    }

    useEffect(() => {
        getArticle()
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
                       Latest Articles
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
                        article?.map((article) => (

                            <Card key={article.id} sx={{ width: { xs: '100%', md: '30%' }, maxWidth: 345, bgcolor: "transparent", boxShadow: "none" }}>
                                <Box sx={{
                                    position: "relative"
                                }}>
                                    <CardMedia
                                        component="img"
                                        alt={article.name}
                                        height="auto"
                                        image={article.image}
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
                                        {article.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {article.des}
                                    </Typography>
                                </CardContent>
                            </Card>

                        ))
                    }

                </Box>


            </Box>
        </>
    )
}
