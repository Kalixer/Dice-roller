import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home"
import NormalDice from "../pages/NormalDice";
import NotFound from "../pages/NotFound"

import "../../styles/global.css"


const App = () => {
    // const initialState = useInitalState();

    return (
        // <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/normal" element={<NormalDice/>} />
					    <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        // </AppContext.Provider>
    )
}

export default App;