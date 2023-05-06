import s from './Posts.module.css'
import Post from './Post'
import {  useState, useEffect, useRef } from "react";

const Posts = () => {
    const [user, setUser] = useState ([
        {
            id: 1,
            title: 'John',
            text: '16'
        },
        {
            id: 2,
            title: 'Jeremy',
            text: '20'
        }
    ])

    useEffect(() => {
        acc.btn.current.addEventListener("click", () => {
            setUser([
                ...user,
                {
                    id: user[user.length -1].id + 1,
                    title: acc.title.current.value,
                    text: acc.text.current.value
                }
            ])
            acc.title.current.value = ''
            acc.text.current.value = ''
        })
    })

    let acc = {
        title: useRef(null),
        text: useRef(null),
        btn: useRef(null)
    }

    let userCollection = user.map((props) => <Post key={props.id} title = {props.title} text = {props.text}/>)


    return (
        <div classtitle={s.post_box}>
            {userCollection}
            <input type="text" placeholder='write your title' ref={acc.title} />
            <textarea title="" id="" placeholder='write your text' ref={acc.text} cols="30" rows="10"></textarea>
            <button ref={acc.btn}>Create</button>
        </div>
    )
}

export default Posts