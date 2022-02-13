import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm(note);
    const { title, body, id } = values;

    const idRef = useRef(note.id);

    useEffect(() => {
      
        if(note.id !== idRef.current ){
            reset(note);
            idRef.current = note.id 
        }

    }, [note, reset])
    

    useEffect(() => {
      
        dispatch( activeNote(values.id, {...values}) );
      
    }, [dispatch, values])
    

    const handleDelete = () => {
        dispatch( startDeleteNote(id) );
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

            <div 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Borrar
            </div>

        </div>
    )
}
