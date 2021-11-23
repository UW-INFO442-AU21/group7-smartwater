import React, {useState} from 'react';
import {NavBar} from '../Components/NavBar';

function CalculatorPage() {

  // contains the values inputted by the user 
  const [currentSum,setCurrentSum]=useState(0);


  // converts the minutes input into gallons
  const Add=(e)=>{
    e.preventDefault();
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let showerMinutes= 2.5 * parseInt(currentNum);
    setCurrentSum(showerMinutes);
    document.querySelector('#num').value="";
      
  }
  return (
    <div className="App">
      <NavBar />
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <p>The average shower uses 2.5 gallons per minute and lasts around 8 minutes. Put in the length of your daily shower time to find out how many gallons of water you use.</p>
      <form>   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Submit</button>
      </form>
      {/* <input type="number" id="result" value={currentSum}  readOnly /> */}
      {currentSum > 0 && <p>You are using {currentSum} gallons of water.</p>}
      {currentSum > 20 && <p>You are using too much water. Consider reducing the amount of time spent in the shower.</p>}
      {currentSum > 0  && currentSum <= 20 && <p>You are within the 8 minute timeframe. </p>}

    </div>
  );
}
export default CalculatorPage;
