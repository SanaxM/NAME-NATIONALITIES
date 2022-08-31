import {  React,useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function Searched() {
    const [searchedName, setSearchedName] = useState([]);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        function getSearch(e) {
            axios.get('https://api.nationalize.io/?name=' + params.term)
            .then(function (response) {
                console.log(response.data.country)
                setSearchedName(response.data.country)
            })
            .catch(function (error) {
                console.log(error)
            })
        }

        getSearch();
    }, [params.term])

    return (
        <div class="searched-page">
            <header class='search-header'>{params.term}
                <button onClick={() => navigate(-1)} class='return-button'>Back</button>
            </header>
            
            <div class="body">

                <div class="item-container">

                    {searchedName.map((item) => {
                        return (
                            <div class="card"> 

                                <div class="card-body">
                                    <h2>Country Origin: {item.country_id} </h2>
                                    <p>Probability: {item.probability}</p>
                                </div>
                            </div>
                        )

                    })}

                </div>

            </div>




        </div>
    )
}

export default Searched