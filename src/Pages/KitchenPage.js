import React from 'react';
import Navigation from '../Components/Navigation';
import {NavBar} from '../Components/NavBar';
import faucet from './img/faucet.png';


export default function KitchenPage() {
  return (
    <div>
      <NavBar />
      <div className="firstsection">
      <h1>Let this sink in...</h1>
      <p>If you are viewing this page, you likely have access to a home with a kitchen. Similarly, you (or someone you know) either hand washes dishes or uses the dishwasher on a weekly basis. Did you know that washing a load of dishes by hand uses about 27 gallons of water? To give you a better picture, 27 gallons of water equates to 432 entire bottles of water. These were the findings of a survey conducted at the University of Bonn in Germany. Many do not know how much water they use with tasks that seem menial and small. And while it is well known that dishwashing is a better alternative to handwashing, there are still precautions you should take to conserve your water usage with this medium as well. While hand washing and dishwashing dishes might seem like little actions, wasteful habits like these accumulate over time to a large overuse of water. If you and your family would like to take steps to conserve water for our planet and environment, please look below for action items. </p>
      <img align = "right" src={faucet} alt="faucet" />
      </div>
         <button id="myBtn"  onClick={()=> {
          let modal = document.getElementById("myModal");
          modal.style.display = "block";
        }}><img src="img/homepic1.png"></img></button>

      <div id="myModal" class="modal">
        <div class="modal-content">
       
        
        <span class="close" onClick= {() => {
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
        }}>&times;</span>
        
          <h2>Handwashing</h2>
          <p>It is best practice to wash dishes in batches as opposed to right after using them. This can help preserve time and water. While it is generally better to utilize a dishwasher to conserve water, there are methods that exist within handwashing that can save you water. Something that many people find themselves doing is leaving the faucet running while washing each dish by hand. According to a 2020 dishwashing study conducted by the University of Michigan, the best water and energy-efficient way to wash dishes is with the two-basin method. With this method, you can use 3 times less water than if you had washed it while the faucet ran. This is equivalent to 22 gallons of water per wash! If you washed your dishes 4 times a week, this equals 352 gallons of water wasted each month. This is the tremendous size of the water used for a 6-person hot tub! With this in mind, it is better to adopt the two-basin method when hand washing your dishes. Here are the steps: 
Remove any leftover food into your compost bin. 
You can either gather 2 basins or use your two-basin sink for this step. You will need to fill one of them with hot water with dishwashing soap. If you do not have a two-basin sink, you can use a bucket as your 2nd basin. 
In the other basin or area, you will need to fill that with clean, cold water. 
Put some of your dirty dishes in soap-filled hot water and use a sturdy sponge to clean them off of any excess food scraps. 
After putting the dish in the hot water, remove it and place it into the cold water. 
When the dish is thoroughly clean, you can place them on a dish rack to air dry. 
Repeat this process until all of your dishes are done. Feel free to incrementally add water if you feel that the cold water basin is accumulating too many soap suds.
</p>
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
        <h2>The Dishwasher</h2>
        <p>Using a dishwasher is considered exponentially better for water conservation compared to handwashing. While it is better for the environment, there are certain ways to use the dishwasher and certain brands that you can be aware of that will help in saving water. For example, the best method to use the dishwasher is only when it's full. This is because the amount of dishes you load in does not change the amount of energy or water used for the appliance on each load. With this in mind, it is best to only use the dishwasher when it is completely full to maximize its use in an environmentally conscious way. By doing this, you are saving over 320 gallons of water each year.</p>
        </div>
      </div> 
     
    </div>
  )
}