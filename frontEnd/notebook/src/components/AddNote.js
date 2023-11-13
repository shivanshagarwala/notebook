import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import { useState } from 'react';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", desc: "", tag: "" })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();

        addNote(note.title, note.desc, note.tag);
        setNote({ title: "", desc: "", tag: "" });
    }
    return (
        <><div className="container my-3">
            <h2>Add a Note</h2>

            <form className='my-3'>
                <div className="form-group">
                    <label htmfor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"
                        value={note.title} onChange={onChange} />

                </div>
                <div className="form-group">
                    <label htmfor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" onChange={onChange} value={note.desc} />
                </div>

                <div className="form-group">
                    <label htmfor="exampleInputPassword1">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div></>
    )
}

export default AddNote