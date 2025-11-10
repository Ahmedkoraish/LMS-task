import React from 'react'
import Hero from '../component/Hero'
import Topic from '../component/Topic'
import Course from '../component/Course'
import Articals from '../component/Articals'
import Subscripe from '../component/Subscripe'
import Nav from '../component/Nav'
import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Topic />
            <Course />
            <Articals />
            <Subscripe />
            <Button variant="contained" color="primary" sx={{ position: "fixed", bottom: 20, right: 20, px: 2, py: 1, borderRadius: 6 }}>
                <IconButton >
                    <AddIcon sx={{ color: "#fff" }}/>
                </IconButton>
                Subscribe
            </Button>
        </>
    )
}
