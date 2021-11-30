import React from 'react';
import Navigation from '../Components/Navigation';
import {NavBar} from '../Components/NavBar';


export default function KitchenPage() {
  return (
    <div>
      <NavBar />
      <div className="firstsection">
      <h1>Let this sink in...</h1>
      <p>If you are viewing this page, you likely have access to a home with a kitchen. Similarly, you (or someone you know) either hand washes dishes or uses the dishwasher on a weekly basis. Did you know that washing a load of dishes by hand uses about 27 gallons of water? To give you a better picture, 27 gallons of water equates to 432 entire bottles of water. These were the findings of a survey conducted at the University of Bonn in Germany. Many do not know how much water they use with tasks that seem menial and small. And while it is well known that dishwashing is a better alternative to handwashing, there are still precautions you should take to conserve your water usage with this medium as well. While hand washing and dishwashing dishes might seem like little actions, wasteful habits like these accumulate over time to a large overuse of water. If you and your family would like to take steps to conserve water for our planet and environment, please look below for action items. </p>
      </div>
         <button id="myBtn" onClick={()=> {
          let modal = document.getElementById("myModal");
          modal.style.display = "block";
        }}>Hand-washing</button>

      <div id="myModal" class="modal">
        <div class="modal-content">
       
        
        <span class="close" onClick= {() => {
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
        }}>&times;</span>
        

          <p>Hand-washing dishes is the best practice to conserve water! 
          The best method for Hand-washing dishes is the 2 basin method!</p>
        </div>
      </div>
      <button id="mydishBtn" onClick={()=>{
        let modal = document.getElementById("mydishModal");
        modal.style.display = "block";
      }}>Dish</button>
      <div id="mydishModal" class="modal">
        <div class="modal-content">
        
        <span class="close" onClick= {() => {
            let modal = document.getElementById("mydishModal");
            modal.style.display = "none";
        }}>&times;</span>
        <p>Dishwashing uses more water, but these a great
           dishwashers that are more efficent!</p>
        </div>
      </div> 
     
    </div>
  )
}