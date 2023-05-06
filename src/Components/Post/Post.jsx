import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.post}>
            <p className={s.title}>{props.title}</p>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default Post