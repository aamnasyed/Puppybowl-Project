import { useParams } from "react-router-dom"

const SinglePuppy = (props) => {
    const { id } = useParams ();
    const { puppyProps } = props; 

    const mySelectedPuppy = puppyProps[id]

    return (
        <div>
            
            <p> Here you can find more information about your selected puppy!</p>
            <p> Id: {mySelectedPuppy.id} </p>
            <p> Name: {mySelectedPuppy.name} </p>
            <p> Breed: {mySelectedPuppy.breed}</p>
            <p> Status: {mySelectedPuppy.status} </p>
             <img id="image" src={mySelectedPuppy.imageUrl} style={{ width: 250, height: 400}}/>
  
            
        </div>
    )
}

export default SinglePuppy;