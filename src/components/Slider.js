import React from "react";

//
import testimonials from '../components/SliderState';

//
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

import "reset-css";
import "../App.scss";

export const Slider = ({ imageList ,testimonialList, nextSlide, prevSlide, state }) => {
    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <div
                    onClick={ prevSlide }
                    className='arrows left'>
                    <span>
                        <img src={ '.' + leftArrow } alt="Left Arrow" />
                    </span>
                </div>

                <div className="inner">
                    <div className="t-image">
                        <ul
                            ref={ imageList }
                        >
                            <li
                                className={ state.isActive1 ? 'active' : '' }
                            ><img src={ '.' + testimonials[0].image} alt={testimonials[0].name + " image"} /></li>
                            <li
                                className={ state.isActive2 ? 'active' : ''}
                            ><img src={ '.' + testimonials[1].image} alt={testimonials[1].name + " image"} /></li>
                            <li
                                className={ state.isActive3 ? 'active' : ''}
                            ><img src={ '.' + testimonials[2].image} alt={testimonials[2].name + " image"} /></li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul
                            ref={ testimonialList }
                        // ref={ el => { imageWith = el } }
                        >
                            <li
                                className={ state.isActive1 ? 'active' : '' }
                            >
                                <div className = "content-inner">
                                <p   className = "quote">{testimonials[0].quote}</p>
                                <h3  className = "">{testimonials[0].name}</h3>
                                <h4  className = "title">{testimonials[0].title}</h4>
                                </div>
                            </li>
                            <li
                                className={ state.isActive2 ? 'active' : ''}
                            >
                                <div className = "content-inner">
                                <p   className = "quote">{testimonials[1].quote}</p>
                                <h3  className = "">{testimonials[1].name}</h3>
                                <h4  className = "title">{testimonials[1].title}</h4>
                                </div>
                            </li>
                            <li
                                className={ state.isActive3 ? 'active' : ''}
                            >
                                <div className = "content-inner">
                                <p   className = "quote">{testimonials[2].quote}</p>
                                <h3  className = "">{testimonials[2].name}</h3>
                                <h4  className = "title">{testimonials[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    onClick={ nextSlide }
                    className='arrows right'>
                    <span>
                        <img src={ '.' + rightArrow } alt="right Arrow" />
                    </span>
                </div>
            </div>
        </div>
    )
}
