import React from 'react';
import Navigation from '../Components/Navigation';

export default function KitchenPage() {
    return (
      <div>
        <Navigation />
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
   


// Get the modal
//var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var modal = document.getElementById("myModal");
  console.log(modal)
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  var modal = document.getElementById("myModal")
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("myModal")
  if (event.target == modal) {
    console.log(modal)
    modal.style.display = "none";
  }
}
// Get the modal
//var modal = document.getElementById("mydishModal");

// Get the button that opens the modal
var btn = document.getElementById("mydishBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var modal = document.getElementById("mydishModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  var modal = document.getElementById("mydishModal");
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("mydishModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}