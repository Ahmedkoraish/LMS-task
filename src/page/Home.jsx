import React from 'react'
import Hero from '../component/Hero'
import Topic from '../component/Topic'
import Course from '../component/Course'
import Articals from '../component/Articals'
import Subscripe from '../component/Subscripe'
import Nav from '../component/Nav'

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Topic />
            <Course />
            <Articals />
            <Subscripe />
        </>
    )
}
