import { createRoot } from "react-dom/client";
import {useState, useEffect } from "react";
import './style.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"; 

const Homepage = () => {

    const[puppybowl, setPuppybowl] = useState([]);

    useEffect(() => { 

        const nameOfPuppy = async () => {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players');

                const translatedData = await response.json();

                const actualPuppyData = translatedData.data.players

                console.log(translatedData.data.players)
                setPuppybowl(actualPuppyData);
            } catch (error) {
                console.log(error);
            

            }
        }
        nameOfPuppy ();
    }, [] )

    return (
        <BrowserRouter>
            <div>
                {/* <Routes>
                    <Route path="/" element={All}
                </Routes> */}
                { 
                    puppybowl.length ? puppybowl.map((singlePuppybowlElement, idx) => { 
                        return ( 
                            <div key={idx}>
                                <p id="name"> Name: {singlePuppybowlElement.name} </p>
                                <p id="breed">Breed: {singlePuppybowlElement.breed} </p>
                                <img id="image" src={singlePuppybowlElement.imageUrl} />
                            </div> 
                        )  
                    }) : <div> Puppy data not available </div>
                }
            </div>
        </BrowserRouter>
    )

}

const appElement = document.getElementById("app")
const root =createRoot(appElement)
root.render(<Homepage/>)