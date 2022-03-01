import React, {useState, useEffect} from 'react';
import SuggestionCard from './components/Card.js';




function Listeidee() {

    const [suggestions, setSuggestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( ()=> {
        fetch('https://api-boite-idee.herokuapp.com/api/idee')
            .then( res => res.json())
            .then( data => {
                setSuggestions(data);
                setIsLoaded(true);
            })
    });
    return (
        <div   className="d-flex justify-content-beween align-item-center flex-wrap mt-5 ms-5">{
            isLoaded && suggestions.map(suggestion => 
                    <SuggestionCard suggestion={suggestion}/>
            )
        }</div>
    );
  

}
export default Listeidee