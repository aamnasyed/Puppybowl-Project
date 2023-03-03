import { createRoot } from "react-dom/client";
import {useState, useEffect } from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"; 

import {PuppyList, SinglePuppy } from "./components";

const Homepage = () => {

    const[puppyBowl, setPuppyBowl] = useState([]);

    useEffect(() => { 

        const nameOfPuppy = async () => {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players');

                const translatedData = await response.json();

                const actualPuppyData = translatedData.data.players

                console.log(translatedData.data.players)
                setPuppyBowl(actualPuppyData);
            } catch (error) {
                console.log(error);
            

            }
        }
        nameOfPuppy ();
    }, [] )

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/"> Homepage</Link>
                </nav>

                <Routes> 
                    <Route path="/" element={<PuppyList puppyProps={puppyBowl}/>} />
                    <Route path="/puppy/:id" element={<SinglePuppy puppyProps={puppyBowl}/>} />

                </Routes>
               
            </div>
        </BrowserRouter>
    )

}

const appElement = document.getElementById("app")
const root =createRoot(appElement)
root.render(<Homepage/>)