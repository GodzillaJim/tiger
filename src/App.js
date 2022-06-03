import React from 'react';
import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomeScreen/>}/>
        </Routes>
    </BrowserRouter>
};
export default App;
