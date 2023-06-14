import React, { useEffect } from 'react';
import './sass/main.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import CustomCursorManager from './components/CustomCursor/context/manager';
import CustomCursor from './components/CustomCursor';
import { Introduction } from './components/Introduction/Introduction';

function App() {
    return (
        <Layout>
            <CustomCursorManager>
                <Navbar/>
                <CustomCursor/>
                <Introduction/>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </CustomCursorManager>
        </Layout>
    );
}

export default App;
