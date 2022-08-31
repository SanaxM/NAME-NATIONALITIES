import {  React, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [name, enterName] = useState("");
    const navigate = useNavigate();
  
    function submitForm(event) {
      event.preventDefault();
      navigate('/name/' + name);
    }

    return (
        <div class="home-body">
        <div class="centered">
  
          <h1 class="home-title">NAMES AND NATIONALITIES</h1>
            <form>
              <input onChange={(event) => {enterName(event.target.value);console.log(name)}} class="search-input" type="search" placeholder='Enter a name'></input>
              <button onClick={submitForm} class="submit-btn" type="submit"> Search </button>
            </form>
  
        </div>
      </div>
    )
}

export default Home