import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowDownCircle, ArrowRightCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Gtatheme = () => {
    let [showContent, setShowContent] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        }).to(".vi-mask-group", {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: "Expo.easeInOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    document.querySelector(".svg").remove();
                    setShowContent(true);
                    this.kill();
                }
            },
        });
    });

    useGSAP(() => {
        if (!showContent) return;

        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-1",
            ease: "Expo.easeInOut",
        });

        gsap.to(".sky", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".bg", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".character", {
            scale: 1.4,
            x: "-30%",
            bottom: "0%",
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        }); gsap.to(".text", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        const main = document.querySelector(".main");

        main?.addEventListener("mousemove", function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".main .text", {
                x: `${xMove * 0.4}%`,
            });
            gsap.to(".sky", {
                x: xMove,
            });
            gsap.to(".bg", {
                x: xMove * 1.7,
            });
        });
    }, [showContent]);

    // About section animations with tension
    useGSAP(() => {
        if (!showContent) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Desktop animations
            gsap.from(".about-heading h1", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
                x: -200,
                opacity: 0,
                rotation: -10,
                stagger: 0.2,
            });
        });

        // mm.add("(max-width: 767px)", () => {
        //     // Mobile animations
        //     gsap.from(".about-heading h1", {
        //         scrollTrigger: {
        //             trigger: ".about-section",
        //             start: "top 80%",
        //             end: "top 50%",
        //             scrub: 1,
        //         },
        //         x: 0, // Keep it in place on mobile
        //         opacity: 0,
        //         rotation: -5,
        //         stagger: 0.2,
        //     });
        // });

        // Common animations for both mobile and desktop
        gsap.from(".about-para", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 70%",
                end: "top 20%",
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            stagger: 0.15,
        });

        gsap.from(".about-img", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
            },
            scale: 1.5,
            rotation: 15,
            opacity: 0,
        });

        // gsap.from(".download-btn", {
        //     scrollTrigger: {
        //         trigger: ".download-btn",
        //         start: "top 90%",
        //         end: "top 60%",
        //         scrub: 1,
        //     },
        //     scale: 0,
        //     rotation: 0,
        // });

        // Parallax effect on mouse move for about section
        const aboutSection = document.querySelector(".about-section");
        aboutSection?.addEventListener("mousemove", function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 30;
            const yMove = (e.clientY / window.innerHeight - 0.5) * 30;

            gsap.to(".about-img", {
                x: xMove * 1.5,
                y: yMove * 1.5,
                rotation: xMove * 0.05,
                duration: 0.5,
            });

            gsap.to(".about-heading", {
                x: xMove * 0.3,
                y: yMove * 0.3,
                duration: 0.5,
            });
        });
    }, [showContent]);


    return (
        <>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000000] ">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="50"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                >
                                    WELCOME
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./sky.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>
            {showContent && (
                <div className="main w-full md:rotate-[-10deg] md:scale-[1.7] rotate-0 scale-100">
                    <div className="landing overflow-hidden relative w-full h-screen bg-black">
                        <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 px-5 md:py-10 md:px-10">
                            <div className="logo flex gap-3 md:gap-7">
                                {/* <div className="lines flex flex-col gap-[3px] md:gap-[5px]">
                                    <div className="line w-8 md:w-15 h-1 md:h-2 bg-white"></div>
                                    <div className="line w-5 md:w-8 h-1 md:h-2 bg-white"></div>
                                    <div className="line w-3 md:w-5 h-1 md:h-2 bg-white"></div>
                                </div> */}
                                <h3 className="text-2xl md:text-4xl -mt-[4px] md:-mt-[8px] leading-none text-white [ -webkit-text-stroke:2px_#facc15 ]">
                                    Vishal
                                </h3>


                            </div>
                        </div>

                        <div className="imagesdiv relative overflow-hidden w-full h-screen">
                            <img
                                className="absolute sky scale-[1.5] md:rotate-[-20deg] rotate-0 top-0 left-0 w-full h-full object-cover"
                                src="./sky.png"
                                alt=""
                            />
                            <img
                                className="absolute scale-[1.8] md:rotate-[-3deg] rotate-0 bg top-0 left-0 w-full h-full object-cover"
                                src="./bg.png"
                                alt=""
                            />
                            <div className="text text-white flex flex-col gap-1 md:gap-3 absolute top-10 md:top-20 left-1/2 -translate-x-1/2 scale-[0.5] md:scale-[1.4] rotate-0 md:rotate-[-10deg]">
                                <h1 className="text-[6rem] md:text-[12rem] leading-none -ml-20 md:-ml-40">Welcome</h1>
                                <h1 className="text-[6rem] md:text-[12rem] leading-none ml-10 md:ml-20">To</h1>
                                <h1 className="text-[6rem] md:text-[12rem] leading-none -ml-20 md:-ml-40">Here!</h1>
                            </div>
                            <img
                                className="absolute character bottom-0 left-1/2 -translate-x-1/2 scale-[1.5] md:scale-[3] rotate-0 md:rotate-[-20deg]"
                                src="./pic.png"
                                alt=""
                            />
                        </div>
                        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 md:py-15 px-5 md:px-10 bg-gradient-to-t from-black to-transparent">
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <Button className="text-black h-[45px] md:h-[55px] px-5 md:px-8 bg-yellow-500 text-sm md:text-base hover:text-white hover:scale-105 transition-transform duration-300 ">
                                    Resume Download
                                    <ArrowDownCircle className="ml-2" />
                                </Button>
                                <Button className="h-[45px] md:h-[55px] px-5 md:px-8 text-sm md:text-base hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 hover:text-black">
                                    Hire Me
                                    <ArrowRightCircle className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* This is about me section */}
                    <div className="about-section w-full min-h-screen flex items-center justify-center bg-black py-10 md:py-20">
                        <div className="cntnr flex flex-col md:flex-row gap-6 md:gap-20 text-white w-[95%] md:w-[90%] min-h-[80vh]">
                            <div className="limg relative w-full md:w-1/2 flex items-center justify-center order-1 md:order-1 -mb-4 md:mb-0">
                                <div className="about-img relative">
                                    <img
                                        className="relative scale-[0.9] md:scale-[1.3] transform hover:scale-[0.95] md:hover:scale-[1.4] transition-transform duration-500 mix-blend-lighten"
                                        src="./pics.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="rg w-full md:w-1/2 py-0 md:py-10 flex flex-col justify-center gap-4 order-2 md:order-2">
                                <div className="about-heading mb-2 md:mb-4">
                                    <h1 className="text-4xl md:text-7xl leading-tight font-bold transform hover:skew-x-2 transition-transform duration-300">About, Me</h1>
                                </div>
                                <p className="about-para text-sm md:text-lg font-[Helvetica_Now_Display] leading-relaxed transform hover:translate-x-2 transition-transform duration-300 border-l-2 md:border-l-4 border-yellow-500 pl-3 md:pl-6 mb-0 ">
                                    As a B.Tech student in Artificial Intelligence & Data Science at GGSIPU, I am passionate about building intelligent, scalable web applications that solve real-world problems. With a solid foundation from my diploma in Computer Engineering and hands-on experience as a Software Developer intern, I bring expertise in Java, the MERN stack (MongoDB, Express.js, React.js, Node.js), data structures, and cloud computing.
                                    <br /><br />
                                    I've developed projects such as an online reservation system and a rendering website, demonstrating my ability to integrate AI concepts with full-stack development. My internships at Lokachakra and Oasis Infobyte and PHN Technology have honed my skills in secure application design, frontend/backend integration, and collaborative software engineering.
                                    <br /> <br />
                                    I thrive in dynamic, innovative environments and am always eager to learn and contribute. Let's connect if you're looking for a driven developer with a strong technical background and a passion for impactful technology.

                                </p>
                                <button className="download-btn bg-yellow-500 px-8 md:px-10 py-4 md:py-5 text-black mt-25 md:mt-25 text-lg md:text-2xl font-bold hover:bg-black hover:text-yellow-500 border-2 border-yellow-500 transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-yellow-500/50 w-full md:w-auto">
                                    Hire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gtatheme;
