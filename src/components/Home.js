import { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import pfp from '../assets/person.png'



export default function Home() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    useEffect(() => {
        const elts = {
            text1: ref1.current,
            text2: ref2.current
        };
        textChange(elts);
    }, [ref1, ref2])

    

    
    return<div className='media_container'>
            <div className='home_text_container'>
                <h3>Hello,</h3>
                <div id="container">
                    <span ref={ref1 } id="text1"></span>
                    <span ref={ref2} id="text2"></span>
                </div>
                <svg id="filters">
                    <defs>
                        <filter id="threshold">
                            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 255 -140" />
                        </filter>
                    </defs>
                </svg>
            </div>   
            <div className='home_image_container'>
                <img src={pfp} alt='pfp' />
            </div>
         </div>
}

const textChange = (elts) => {
    const texts = [
        "I'm Shubhdeep Singh",
        "A front end",
        "and a back end",
        "fullstack Developer",
        "I do many creative things",
        "Scroll down to know more about me"
    ];
    
    const morphTime = 1;
    const cooldownTime = 2;
    
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    
    function doMorph() {
        morph -= cooldown;
        cooldown = 0;
    
        let fraction = morph / morphTime;
    
        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }
    
        setMorph(fraction);
    }
    
    function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }
    
    function doCooldown() {
        morph = 0;
    
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
    
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }
    
    function animate() {
        requestAnimationFrame(animate);
    
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
    
        cooldown -= dt;
    
        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }
    
            doMorph();
        } else {
            doCooldown();
        }
    }
    
    animate();
}