import { useState, useEffect, useRef } from "react";
import style from './Notes.module.css';
import Note from "./Note/Note";

const Notes = () => {
 const [notesStore, setNotes] = useState ([
    {
        id:1,
        text: "Hello"
    },
    {
        id:2,
        text: "Bye"
    }
 ])

 useEffect(() => {
    form.btnref.current.addEventListener("click", () => {
        setNotes([
            ...notesStore,
            {
                id: notesStore[notesStore.length - 1].id + 1,
                text: form.input.current.value
            }
        ])
        form.input.current.value = ''
        alert("Go to your account")
    })
})

 let form = {
    input: useRef(null),
    btnref: useRef(null)
 }

 let notesCollection = notesStore.map((el ) => <Note key={el.id} text = {el.text} />);

 return (
     <div>
        {notesCollection}
        <input ref={form.input} className={style.input} type="text" placeholder="Write new title"/>
        <button ref={form.btnref} className={style.btn}>Create</button>
    </div>
 )
}

export default Notes