import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Layout from "../containers/Layout";

import "../../styles/global.css"


const App = () => {
    // const initialState = useInitalState();

    return (
        // <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        // </AppContext.Provider>
    )
}

export default App;