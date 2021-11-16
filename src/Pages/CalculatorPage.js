import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import { useForm } from "react-hook-form";

function CalculatorPage() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let showerMinutes= 2.5 * parseInt(currentNum);
    setCurrentSum(showerMinutes);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <Navigation />
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Submit</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}
export default CalculatorPage;

// https://www.thewaterscrooge.com/blog/how-much-water-showers-use-and-why-you-should-care

// const aboveSix = (minutes: number) => minutes > 6;
// const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm({mode: "onChange"});
//   const formValues = useState(null);
//   const onSubmit = (data) => {
//     console.log(data);
//     if (data > 6) {
//       return (
//         <div>Cut down on your shower time.</div>
//       )
//     }


//   }; // your form submit function which will invoke after successful validation

//   console.log(watch("example"));
// return (
//     <div>
//         <Navigation />
//         <p>Test for calculator page</p>
//         <form onSubmit={handleSubmit(onSubmit)}>
//   {/* include validation with required or other standard HTML validation rules */}
//   <input name="showerminutes" type="number" {...register("showerMinutes", { required: true, min: 1, max: 99, validate: aboveSix})} />
//   {/* errors will return when field validation fails  */}
//   {errors.showerMinutes && errors.showerMinutes.type === "min" && (<p>You must input a number greater than 0.</p>)}
//   {aboveSix &&
//   (<p>You need to reduce your shower time. You are wasting water.</p>)} 
//   <input type="submit" />
// </form>
// <div>
//   {onSubmit ? (<p>test test test</p>) : '' }
// </div>
//     </div>
// )