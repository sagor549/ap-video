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
            <p className="primary lg">What<br />We<br />Deliver</p>
          </div>
          <div className="services-col">
            <h4>
              Every video is crafted with purpose — clear messaging, captivating visuals, and storytelling that resonates in seconds.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5 className="gold-title">Short Form Video Ads</h5>
                </div>
                <div className="service-list-col">
                  <p className="service-desc">
                    Twelve to sixteen second ads engineered for platforms like TikTok, Meta, and YouTube Shorts. Built to capture attention fast and drive measurable results.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5 className="gold-title">Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p className="service-desc">
                    From concept and scripting to production and editing, we shape every creative detail to spark engagement and strengthen brand impact.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5 className="gold-title">Post Production</h5>
                </div>
                <div className="service-list-col">
                  <p className="service-desc">
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
              We use Adobe Premiere Pro for video editing and Adobe After Effects for motion graphics and visual effects to deliver high-quality ads, fast.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/adobe.jpg" alt="Adobe Premiere Pro" />
                </div>
                <h4>Adobe Premiere Pro</h4>
                <p className="primary sm">Video Editing</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/work/after.jpg" alt="Adobe After Effects" />
                </div>
                <h4>Adobe After Effects</h4>
                <p className="primary sm">Motion Graphics & Visual Effects</p>
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