import React from "react";
import { BrowserRouter, Routes, Route } from "react";
import Layout from "../containers/Layout";
import Home from "../pages/Home"


const App = () => {
    const initialState = useInitalState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}