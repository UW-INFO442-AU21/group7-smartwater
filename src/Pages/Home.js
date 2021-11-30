import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import {NavBar} from '../Components/NavBar';
import pic1 from './img/homepic1.png';
import pic2 from './img/homepic2.png';
import pic3 from './img/homepic3.png';

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="firstsection">
            <h1>Let’s save water and our environment.</h1>
            <p className="waterparagraph">
                Water is a vital resource and essential for all of life. By wasting water, people are taking a vital resource for granted and limiting availability for those who actually need it. It is important that we take necessary actions in conserving it for our future.
            </p>
            <img id="waterdrop" src={pic1} alt="water drops" />
            </div>

            <div className="secondsection">
                <div id='freshwaterparagraph'>
                    <h1>Freshwater is being depleted.</h1>
                    <p>There is only a limited amount of freshwater in the world and it is currently getting depleted each day. Because many households in the United States have quick access to water, they often overlook the problem of water waste from their everyday habits, such as brushing teeth with the faucet on or leaving the water on while washing dishes. While it may seem like an
                    insignificant act, five gallons of water is lost each time an individual leaves their faucet running
                    when brushing their teeth. All these little actions will amount to an accumulation of water waste
                    over time and it is barely noticeable by the masses due to the fact that water is cheap and easily
                    accessible in the US.</p>
               </div>
               <img align = "left" id="waterpond" src={pic2} alt="water pond" />
            </div>

            <div className="thirdsection">
                <div id='dailyhabitsparagraph'>
                    <h1>Daily habits waste water.</h1>
                    <p>On average, someone from America can use 82 gallons of water each day and 30 of them can be done unknowingly by them. If you are from America, chances are, you have contributed to little actions that waste water over time. While this is certainly not your fault, it is important that you try to make changes to your behavior for the sake of the environment. 
                    You can start by making small changes throughout your day that can help conserve water. While this may sound like there is no juice, it will make a big difference. If you, your friends, and family adopt healthy water saving habits, we will be able to reach our long-term goal of reducing water waste. Water is a vital part of our ecosystem and by conserving it, 
                    people are able to contribute to acts that will sustain food production and sanitation.</p>
                </div>
                <img align = "right" id="shower" src={pic3} alt="shower" />
            </div>
        </div>
    )
}