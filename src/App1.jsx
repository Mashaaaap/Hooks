import { useState } from "react";
import React from "react";

const App = () => {
    const [profile, setProfile] = useState ({
        name: "John",
        email: "john@example.com",
        password: "password"
    })
    // const [countClick, setCount] = useState(0);
    // const [theme, setTheme] = useState('dark');
    const addCountClick = () => {
        // setTheme(countClick % 2 == 0? 'white' : 'dark')
        // setCount(countClick+1)
        setProfile ({
            ...profile,
            city: "Paris",
        })

    }

    let inputName = React.createRef()
    let inputAge = React.createRef()

    return (
        <>
        {/* <p>Theme: {theme} </p> */}
        <p>You clicked to btn: {profile.name} count</p>
        <input type="text" ref={inputName} placeholder="Write your name"/>
        <input type="text" ref={inputAge} placeholder="Write your age"/>
        <button onClick={addCountClick}>Create</button>
        </>
    )

}

export default App;