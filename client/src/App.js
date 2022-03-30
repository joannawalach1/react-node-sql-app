import React from 'react';
import "./App.css";

const App = () => {
    return (
        <div>
            <h1>Car Rental App</h1>
            <form className="form">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder=""></input>
                <label htmlFor="email"> Surname:  </label>
                <input type="text" name="email" placeholder=""></input>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default App;