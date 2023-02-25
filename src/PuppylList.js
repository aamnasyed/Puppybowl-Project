import {Link} from "react-router-dom";

import {useState} from "react";

const PuppyList = (props) => {
    const {puppyProps} = props;

    const [searchQuery, setSearchQueary] = useState("");

}

let filteredPuppy = puppyProps.filter((singlePuppyElement) => { 
    let lowercasedName = singlePokemonElement.name.toLowerCase();

    return lowercasedName.includes(searchQueary.toLowerCase())
})

    return (
        <div>
            <p>List of Puppy</p>
            <input 
                type="text" 
                onChange={(event) => { 
                    setSearchQueary(event.target.value)
                }}
            >
            </input>
            <section>
                {
                    filteredPuppy.length ? filteredPokemon.map((singlePuppyElement, idx) => {
                        return (
                            <div key={idx}>
                                <p> Name: {singlePuppyElement.name}</p>
                                <Link to={"/puppy/" + idx}> Go to {singlePuppyElement.name} </Link>
                            </div>
                        )
                    }) : <div> Data Loading </div>
                }
            </section>
        </div>
    )


export default PuppyList;