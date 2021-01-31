import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

import getImgWidthDynamically from "../helper/getImgWithDynamically";
import { Slider } from './Slider'

export const SliderContainer = () => {

    //
    let imageList = useRef(null);
    let testimonialList = useRef(null);

    //
    const [state, setstate] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });
    const [executing, setExecuting] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if ( executing ) {
                setExecuting(false)
            }
        }, 990);
    }, [executing]);

    //Declaring the animation Functions
    const slideLeft = (index, duration, multiplied = 1, imageWidth) => {
        gsap.to(imageList.current.children[index], {
            duration: duration,
            x: -imageWidth * multiplied,
            ease: "power3.inOut",

        });
        gsap.to(imageList.current.children[index], {
            duration: duration,
            x: -imageWidth * multiplied,
            ease: "power3.inOut",

        })
    }
    const slideRight = (index, duration, multiplied = 1, imageWidth) => {
        gsap.to(imageList.current.children[index],{
            duration: duration,
            x: imageWidth * multiplied,
            ease: "power3.inOut",

        });
        gsap.to(imageList.current.children[index], {
            duration: duration,
            x: imageWidth * multiplied,
            ease: "power3.inOut",

        })
    }
    const scale = (index, duration) => {
        gsap.from(imageList.current.children[index], {
            duration: duration,
            scale: 1.2,
            ease: "power3.inOut",

        });
    }
    const fadeOut = (index, duration) => {
        gsap.to(testimonialList.current.children[index], {
            duration: duration,
            alpha: 0
        });
    }
    const fadeIn = (index, duration) => {
        gsap.to(testimonialList.current.children[index], {
            duration: duration,
            alpha: 1,
            delay: 1
        });
    }

    //Declaring HOF to manage the previous functions
    const animate = (to, { previous, next, duration = 1, byMuchprev = 1, byMuchNext = 1, imageWidth, previousNext }) => {
        if (to === 'left') {
            slideLeft(previous, duration, byMuchprev, imageWidth);
            fadeOut(previous, duration);
            fadeOut(previousNext, 0);
            slideLeft(next, duration, byMuchNext, imageWidth);
            scale(next, duration);
            fadeIn(next, duration);
        } else if (to === 'right') {
            slideRight(previous, duration, byMuchprev, imageWidth);
            fadeOut(previous, duration);
            slideRight(next, duration, byMuchNext, imageWidth);
            scale(next, duration);
            fadeIn(next, duration);
        }
    }

    //Declaring the Even Handlers
    const nextSlide = () => {
        if ( executing ) {
            return;
        }
        //
        setExecuting(true);
        const imageWidth = getImgWidthDynamically(340, 1.6);
        //
        if (
                imageList.current.children[0].classList.contains('active')
            &&  !imageList.current.children[1].classList.contains('active')
            &&  !imageList.current.children[2].classList.contains('active')
        
        ) {
            setstate({ isActive1: false, isActive2: true, isActive3: false });
            slideLeft(1, 0, 0, imageWidth);
            animate('left', {
                previous: 0,
                previousNext: 2,
                next: 1,
                imageWidth


            });
        } else if (
                imageList.current.children[1].classList.contains('active')
            &&  !imageList.current.children[0].classList.contains('active')
            &&  !imageList.current.children[2].classList.contains('active')
        
        ) {
            setstate({ isActive1: false, isActive2: false, isActive3: true });
            //Moving the 3rd image in the background
            slideLeft(2, 0, 1, imageWidth);
            //Animating what the client can see
            animate('left', {
                previous: 1,
                previousNext: 0,
                next: 2,
                byMuchprev: 2,
                byMuchNext: 2,
                imageWidth

            });
        } else if (
                imageList.current.children[2].classList.contains('active')
            &&  !imageList.current.children[0].classList.contains('active')
            &&  !imageList.current.children[1].classList.contains('active')
        
        ) {
            setstate({ isActive1: true, isActive2: false, isActive3: false });
            slideRight(0, 0, 1, imageWidth);
            animate('left', {
                previous: 2,
                previousNext: 1,
                next: 0,
                byMuchprev: 3,
                byMuchNext: 0,
                imageWidth

            });
        }
    }
    const prevSlide = () => {
        if ( executing ) {
            return;
        }
        //
        setExecuting(true);
        //creating that new size
        const imageWidth = getImgWidthDynamically(340, 1.6);

        //doing the work
        if (imageList.current.children[0].classList.contains('active')) {
            setstate({ isActive1: false, isActive2: false, isActive3: true });
            //reseting the position of the images
            slideLeft(2, 0, 3, imageWidth);
            //animating
            animate('right', {
                previous: 0,
                previousNext: 1,
                next: 2,
                byMuchNext: -2,
                imageWidth

            });
        } else if (imageList.current.children[1].classList.contains('active')) {
            setstate({ isActive1: true, isActive2: false, isActive3: false });
            //reseting the position of the images
            slideLeft(0, 0, 1, imageWidth);
            //animating
            animate('right', {
                previous: 1,
                previousNext: 2,
                next: 0,
                byMuchprev: 0,
                byMuchNext: 0,
                imageWidth

            });
        } else if (imageList.current.children[2].classList.contains('active')) {
            setstate({ isActive1: false, isActive2: true, isActive3: false });
            //reseting the position of the images
            slideLeft(1, 0, 2, imageWidth);
            //animating
            animate('right', {
                previous: 2,
                previousNext: 0,
                next: 1,
                byMuchprev: -1,
                byMuchNext: -1,
                imageWidth

            });
        }
    }

    //Making the first child visible in first render
    useEffect(() => {
        gsap.to(testimonialList.current.children[0], {
            duration: 1,
            alpha: 1
        });
    }, []);

    return (
        <div>
            <Slider
                imageList={ imageList }
                testimonialList={ testimonialList }
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                state={state}
            />
        </div>
    )
}
