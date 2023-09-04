import React, { Component } from 'react';
import HeroImage from '../photos/hero.jpeg';
import '../App.css';
import CardBody from './CardBody';

export default function HeroComponent() {
    return (
        <div>

            <section className='hero'>
                <img src={HeroImage} className='hero--image' />
                <h1 className='hero--header my-4'>Online Experiences</h1>
                <p className='hero--para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sapiente vel dicta iure tempore nihil aliquid ut, illum ipsa sequi quae minima iste ratione tempora esse dolores modi. Magni, dolor!</p>
            </section>
            <CardBody 
            reviewCount={6}
            />
        </div>

    )
}
