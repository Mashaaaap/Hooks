import React from 'react'
import Header from './Components/Header/Header'
import Notes from './Components/Notes/Notes'
import Main from './Components/MainPage/Main'
import Posts from './Components/Post/Posts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

// useEffect - componentDidMount + componentDidUpdate + componentDidUnmount

const App = (props) => {
    return (
    <div>
            <Header/>
        <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path='/' element = {<Main/>}/>
            <Route path='/posts' element = {<Posts/>}/>
            <Route path='/notes' element = {<Notes/>}/>
        </Routes>

        </BrowserRouter>
    </div>
    )
}

export default App