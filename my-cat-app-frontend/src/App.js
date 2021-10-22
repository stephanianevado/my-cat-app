import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {CreateCat} from "./components/pages/CreateCat/CreateCat";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Cats} from "./components/pages/CatsListEditDelete/Cats";
import {HomePage} from "./components/pages/HomePage/HomePage";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {EditCat} from "./components/pages/CatsListEditDelete/EditCat";


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                    <Route exact path='/create'>
                        <CreateCat/>
                    </Route>
                    <Route exact path='/cats'>
                        <Cats/>
                    </Route>
                    <Route exact path='/edit/:id'>
                        <EditCat/>
                    </Route>
                    <Route exact path='/contact'>
                        <Contact/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
