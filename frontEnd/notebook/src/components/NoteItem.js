import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <>   <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItem;