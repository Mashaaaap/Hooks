import s from "./Note.module.css"

const Note = (props) => {
    return (
        <div className={s.note}>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default Note