import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
    const a = useContext(NoteContext);
    return (
        <>
            <h1>This is about page {a.user}</h1></>
    )
}

export default About;