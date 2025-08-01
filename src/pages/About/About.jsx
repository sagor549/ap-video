import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";


const About = () => {
  
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>About Us</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="AP Agency team" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              We are AP Agency, a Toronto based video ad agency built for the fast moving digital world.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              With over seven years in the industry, we deliver the highest quality productions and result driven content.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Attention is everything. People do not watch long commercials anymore — they scroll. That is why we craft sharp, captivating short form videos that stop thumbs and drive action.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Each shoot delivers three unique ads, each twelve to sixteen seconds. Distinct hooks, tailored scripts, crafted captions. All designed to capture attention in the very first second and keep it.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              We do not just make ads. We create work that elevates your brand, engages your audience, and delivers measurable results.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="Creative production" />
            </div>
            <p className="primary lg">What We Deliver</p>
          </div>
          <div className="services-col">
            <h4>
              Every video is crafted with purpose — clear messaging, captivating visuals, and storytelling that resonates in seconds.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Short Form Video Ads</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    Twelve to sixteen second ads engineered for platforms like TikTok, Meta, and YouTube Shorts. Built to capture attention fast and drive measurable results.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From concept and scripting to production and editing, we shape every creative detail to spark engagement and strengthen brand impact.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Post Production</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    Polished edits, refined color grading, immersive sound design, and dynamic motion graphics — all combined to create content that stops the scroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="Production process" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Our Stack
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Favourite Tools
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              From Blackmagic cameras to DaVinci Resolve, Premiere Pro, and
              Frame.io — we use industry-leading tools to deliver high-quality
              ads, fast.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/davi.jpg" alt="DaVinci Resolve" />
                </div>
                <h4>DaVinci Resolve</h4>
                <p className="primary sm">Color Grading</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/adobe.jpg" alt="Adobe Premiere Pro" />
                </div>
                <h4>Adobe Premiere Pro</h4>
                <p className="primary sm">Video Editing</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/black.jpg" alt="Blackmagic Pocket" />
                </div>
                <h4>Blackmagic Pocket</h4>
                <p className="primary sm">Cinematic Shooting</p>
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/shot.jpg" alt="ShotDeck" />
                </div>
                <h4>ShotDeck</h4>
                <p className="primary sm">Visual References</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/may.png" alt="Frame.io" />
                </div>
                <h4>Frame.io</h4>
                <p className="primary sm">Remote Collaboration</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/celtx.jpg" alt="Celtx" />
                </div>
                <h4>Celtx</h4>
                <p className="primary sm">Scriptwriting Tool</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default About;