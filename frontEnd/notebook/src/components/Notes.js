import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    return (<>
        <AddNote></AddNote>

        <h2>Your Notes</h2>
        <div className="container row my-3">
            <div className="container mx-3">
                {notes.length == 0 && "no notes to display"}
            </div>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note}></NoteItem>
            })}
        </div>
    </>)
}

export default Notes;