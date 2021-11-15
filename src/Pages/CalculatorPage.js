import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import { useForm } from "react-hook-form";

export default function CalculatorPage() {

    const aboveSix = (minutes: number) => minutes > 6;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const formValues = useState(null);
      const onSubmit = (data) => {
        console.log(data);

      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example"));
    return (
        <div>
            <Navigation />
            <p>Test for calculator page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input type="number" {...register("showerMinutes", { required: true, min: 1, max: 99, validate: aboveSix})} />
      {/* errors will return when field validation fails  */}
      {errors.showerMinutes && errors.showerMinutes.type === "min" && (<p>You must input a number greater than 0.</p>)}
      {aboveSix &&
      (<p>You need to reduce your shower time. You are wasting water.</p>)} 
      <input type="submit" />
    </form>
    <div>
    </div>
        </div>
    )
}