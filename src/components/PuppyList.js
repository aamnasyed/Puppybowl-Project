import { Link } from "react-router-dom";

import { useState } from "react";

const PuppyList = (props) => { 
    const { puppyProps } = props 

    const [searchQueary, setSearchQueary ] = useState ("");

    function onChangeCallbackFunc (event) { 

    }
    
    let filteredPuppy = puppyProps.filter((singlePuppyElement) => { 
        let lowercasedName = singlePuppyElement.name.toLowerCase();

        return lowercasedName.includes(searchQueary.toLowerCase())
    })
    return (
        <div>
            <p> List of Puppy</p>

            <input
                type = "text"
                placeholder="Search Engine"
                onChange = {(event) => {
                    setSearchQueary(event.target.value)
                }}
            >
            </input>    
                <section> 
                    {
                        filteredPuppy.length ? filteredPuppy.map((singlePuppyElement, idx) => {
                            return (
                                <div key={idx}>
                                    <p> Name: {singlePuppyElement.name} </p>
                                    <Link to= {"/puppy/" + idx}> Go to {singlePuppyElement.name}</Link>
                                    <img id="image" src={singlePuppyElement.imageUrl} style={{ width: 250, height: 400}}/>
                                </div>
                            )
                        }) : <div> Loading Data ... </div>
                    }
                </section>
        </div>
    )
}

export default PuppyList;
























// import {Link} from "react-router-dom";

// import {useState} from "react";

// const PuppyList = (props) => {
//     const {puppyProps} = props;

//     const [searchQuery, setSearchQueary] = useState("");

// }

// let filteredPuppy = puppyProps.filter((singlePuppyElement) => { 
//     let lowercasedName = singlePuppyElement.name.toLowerCase();

//     return lowercasedName.includes(searchQueary.toLowerCase())
// })

//     return (
//         <div>
//             <p>List of Puppy</p>
            
//             <input 
//                 type="text" 
//                 placeholder="search engine"
//                 onChange={(event) => { 
//                     setSearchQueary(event.target.value)
//                 }}
//             >
//             </input>
//             <section>
//                 {
//                     filteredPuppy.length ? filteredPokemon.map((singlePuppyElement, idx) => {
//                         return (
//                             <div key={idx}>
//                                 <p> Name: {singlePuppyElement.name}</p>
//                                 <Link to={"/puppy/" + idx}> Go to {singlePuppyElement.name} </Link>
//                             </div>
//                         )
//                     }) : <div> Data Loading </div>
//                 }
//             </section>
//         </div>
//     )
// }


// export default PuppyList;