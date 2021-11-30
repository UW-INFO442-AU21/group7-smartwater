import React, {useState} from 'react';
import {NavBar} from '../Components/NavBar';
import duck from './img/duck.png';

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
      <div className="firstsection">
        <h1>Get scrubby...</h1>
        <p>How long do you shower? How often do you shower? Are you aware of the amount of water used when showering for even just a single minute? We have the convenience of having access to fresh, clean, water whenever we want it and need it. However, the amount of water we are wasting is endless, and soon enough, we will not have enough fresh water left on this planet. One of the largest methods in wasting water is through the showers. The average American showers for 8.2 minutes and uses about 17.2 gallons. While this does not sound like much, or is hard to visualize, this is actually a tremendous amount of water. Our calculator allows us to visualize how much water we are using to solely shower, and educates us on our water usage habits.</p>
        <img align = "right" src={duck} alt="duck" />
      </div>
      <div className="app-title">
        <h1> Enter Shower Time</h1>
      </div>
      <p>The average shower uses 2.5 gallons per minute and lasts around 8 minutes. Put in the length of your daily shower time to find out how many gallons of water you use.</p>
      <form>   
            <input type="text" id="num" placeholder="Minutes" />
            <button onClick={Add}>Submit</button>
      </form>
      {/* <input type="number" id="result" value={currentSum}  readOnly /> */}
      {currentSum > 0 && <p>You are using {currentSum} gallons of water.</p>}
      {currentSum > 20 && <p>You are using too much water. Consider reducing the amount of time spent in the shower.</p>}
      {currentSum > 0  && currentSum <= 20 && <p>You are within the 8 minute timeframe. </p>}

      <div className="firstsection">
        <h1>Tips & Suggestions </h1>
        <li>Turn off water when not rinsing (Navy shower method)</li>
<li>Change showerhead to Watersense one (only about $5) This not only helps conserve water, but also helps with the water bill. </li>
<li>The duration of the shower also affects the water wasted greatly. Having a shower timer can be very helpful. It allows you to be aware of the time.</li>
<li> Collect grey water in the shower when warming up the shower to water plants and lawn. </li>
<li> Insulate your hot water pipes. This guarantees that you don’t need to wait longer to wait for the water to heat up. </li>
<li> Create a playlist for showering! This will allow you to have an estimate of time and be aware of the approximate time you are spending in the shower. </li>
      </div>

    </div>
  );
}
export default CalculatorPage;
