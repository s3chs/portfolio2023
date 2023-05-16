import React from 'react';
import './sass/main.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';

function App() {
    return (
        <>
            <Navbar/>
            <Layout>
                <Home/>
            </Layout>
        </>
    );
}

export default App;
