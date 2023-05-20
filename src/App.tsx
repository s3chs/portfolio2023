import React from 'react';
import './sass/main.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
    return (
        <Layout>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </Layout>
    );
}

export default App;
