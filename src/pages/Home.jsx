import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import Img1 from '../assets/img/testimg.png'

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const maskRef = useRef(null);
    const baseFrequencyRef = useRef(null);

    // text1, text2
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const maskAnimation = gsap.to([maskRef.current, baseFrequencyRef.current], {
            attr: { r: 350, baseFrequency: 0 },
            scrollTrigger: {
                trigger: ".contents",
                start: "top 25%",
                end: "bottom bottom",
                scrub: 1,
                markers: true,
            }
        });

        // text1, text2에 ScrollTrigger 애니메이션 적용
        gsap.fromTo(text1Ref.current, {
            opacity: 0,
            yPercent: 50
        }, {
            opacity: 1,
            yPercent: 0,
            scrollTrigger: {
                trigger: ".contents",
                start: "top 25%",
                end: "bottom bottom",
                ease: 'none',
                scrub: 1,
                markers: true
            }
        });

        gsap.fromTo(text2Ref.current, {
            opacity: 0,
            xPercent: 0,
            yPercent: -50,
        }, {
            opacity: 1,
            xPercent: 100,
            scrollTrigger: {
                trigger: ".contents",
                start: "top 25%",
                end: "bottom bottom",
                scrub: 1,
                ease: 'none',
                markers: true,
            }
        });

        return () => {
            maskAnimation.kill();
        };
    }, []);

    return (
        <div>
            <section id='section1'>
                <div className='sec1__cont'>
                    <h1>Hellow My PortFolio</h1>
                    <p>Developer MyeongHun</p>
                </div>

                <div className="contents">
                    <div className='cont__box'>
                        <svg width="100%" viewBox="0 0 500 500">
                            <defs>
                                <mask id="circleMask">
                                    <circle cx="250" cy="250" r="0" fill="#fff" ref={maskRef} />
                                </mask>
                                <filter id="displacementFilter">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.10" numOctaves="3" result="noise" ref={baseFrequencyRef} />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
                                </filter>
                            </defs>
                            <image href={Img1} width="500px" height="500px" preserveAspectRatio="xMidYMid slice" mask="url(#circleMask)" style={{ filter: 'url(#displacementFilter)' }} />
                        </svg>
                        <div className='text'>
                            <div className='text1' ref={text1Ref}>REACT</div>
                            <div className='text2' ref={text2Ref}>BLOG</div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home
