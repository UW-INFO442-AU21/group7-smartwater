import React from 'react';
import Navigation from '../Components/Navigation';
import {NavBar} from '../Components/NavBar';


export default function KitchenPage() {
  return (
    <div>
      <NavBar />
      <p>Test for Kitchen Page</p>
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