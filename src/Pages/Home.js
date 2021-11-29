import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import {NavBar} from '../Components/NavBar';

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 className = "bluecolored">Let’s save water and our environment.</h1>
            <p className = "bluecolored">Water is a vital resource and essential for all of life. By wasting water, people are taking a vital resource for granted and limiting availability for those who actually need it. It is important that we take necessary actions in conserving it for our future.</p>
            <h1>Freshwater is being depleted.</h1>
            <p>There is only a limited amount of freshwater in the world and it is currently getting depleted each day. Because many households in the United States have quick access to water, they often overlook the problem of water waste from their everyday habits, such as brushing teeth with the faucet on or leaving the water on while washing dishes. While it may seem like an
insignificant act, five gallons of water is lost each time an individual leaves their faucet running
when brushing their teeth. All these little actions will amount to an accumulation of water waste
over time and it is barely noticeable by the masses due to the fact that water is cheap and easily
accessible in the US.</p>
        </div>
    )
}