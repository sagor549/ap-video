// src/components/PricingPackages/PricingPackages.jsx
import React, { useState, useEffect } from 'react';
import { MdArrowOutward, MdPlayCircle, MdPauseCircle } from 'react-icons/md';
import './PricingPackages.css';

const PackageCard = ({ pkg, isPlaying, togglePlay, pauseAllVideos }) => {
  const videoId = `video-${pkg.title.replace(/\s+/g, '-')}`;
  
  // Handle video play/pause when props change
  useEffect(() => {
    const video = document.getElementById(videoId);
    if (video) {
      if (isPlaying) {
        video.play().catch(e => console.log("Video play error:", e));
      } else {
        video.pause();
      }
    }
  }, [isPlaying, videoId]);

  const handlePlayClick = () => {
    if (!isPlaying) {
      pauseAllVideos(); // Pause all other videos first
    }
    togglePlay();
  };

  return (
    <div className="package-card">
      <div className="card-left">
        <div className="card-header">
          <h3 className="card-title">{pkg.title}</h3>
          <p className="card-subtitle">{pkg.subtitle}</p>
        </div>
        
        <div className="card-description">
          <p>{pkg.description}</p>
        </div>
        
        <div className="price-container">
          <span className="price">${pkg.price}</span>
          {pkg.originalPrice && (
            <span className="original-price">${pkg.originalPrice}</span>
          )}
          <p className="limited-offer">Limited Time Offer</p>
        </div>
        
        <div className="features-section">
          <div className="features-column">
            <h4>Who it's for:</h4>
            <ul>
              {pkg.who.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="features-column">
            <h4>What You Get:</h4>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="guarantee-box">
          <div className="guarantee-title">🎯 Guarantee:</div>
          <p>{pkg.guarantee}</p>
        </div>
        
        <button 
          className="cta-button"
        >
          Get {pkg.title.split(' ')[0]}
          <MdArrowOutward size={20} />
        </button>
      </div>
      
      <div className="card-right">
        <div className="video-container">
          <video 
            id={videoId}
            className="package-video"
            muted
            loop
            playsInline
            preload="metadata"
            poster={pkg.thumbnail}
          >
            <source src={pkg.video} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          
          <button 
            className={isPlaying ? "video-control-pause" : "video-control-play"}
            onClick={handlePlayClick}
          >
            {isPlaying ? <MdPauseCircle size={32} /> : <MdPlayCircle size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingPackages = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const pauseAllVideos = () => {
    setPlayingVideo(null);
  };

  const togglePlay = (title) => {
    setPlayingVideo(playingVideo === title ? null : title);
  };

  const packages = [
    {
      title: "STANDARD Video Package",
      subtitle: "The Scrappy Killer",
      description: "High-performing ads from your raw footage. Fast. Cheap. Deadly.",
      who: [
        "You've got an iPhone or someone who can film.",
        "You want real results without spending big.",
        "You want to test angles fast and start printing leads."
      ],
      features: [
        "3 short-form video ads (12-16 sec)",
        "We remix your footage (you shoot, or we guide you how)",
        "Custom AI voiceovers for each version",
        "Satisfying captions & motion text",
        "High-CTR music synced for engagement",
        "Optimized for TikTok, Meta, IG Reels"
      ],
      price: 899,
      originalPrice: 1299,
      guarantee: "If it doesn't beat your current best ad, we'll re-edit it for free or credit your money back.",
      color: "#FF4D6D",
      video: "/work/basic.mp4",
      thumbnail: "/work/basic.png"
    },
    {
      title: "PRO Video Package",
      subtitle: "The Sharpshooter",
      description: "We shoot. You save. You still hit hard.",
      who: [
        "You don't want DIY, but you're not ready for a full film crew.",
        "You want pro-level visuals with tight edits.",
        "You need quality fast—without excuses."
      ],
      features: [
        "1-day shoot with our videographer (no actors/models)",
        "You or your product/service is the star",
        "3 short-form video ads (12-16 sec)",
        "AI voiceovers, captions, high-performing music",
        "Light color correction and optimized cuts for all socials"
      ],
      price: 1399,
      originalPrice: 1799,
      guarantee: "If these don't outperform your last campaign in CTR or CPL, we'll shoot an extra edit free or credit your next batch.",
      color: "#6D4DFF",
      video: "/work/pro.mp4",
      thumbnail: "/work/pro.png"
    },
    {
      title: "EPIC Video Package",
      subtitle: "The Market Dominator",
      description: "Full production. Director. Models. Studio. You look like a 7-figure brand—even if you're not.",
      who: [
        "High-ticket brands, big launches, or founders ready to flex.",
        "You want elite visuals and ad creatives that sell hard.",
        "You want cinematic firepower that slaps across every platform."
      ],
      features: [
        "Full on-location shoot: Director, videographer, lighting, models, etc.",
        "Pre-production planning and casting",
        "3-5 high-end short-form video ads (12-20 sec)",
        "AI or pro voiceover, motion graphics, premium sound design",
        "Full delivery for TikTok, IG Reels, Facebook, and more"
      ],
      price: "3,000-6,000",
      originalPrice: null,
      guarantee: "If this doesn't outperform your current best campaign, we'll reshoot one version or credit your next creative. No hassle.",
      color: "#FF4D6D",
      video: "/work/epic.mp4",
      thumbnail: "/work/epic.png"
    }
  ];

  return (
    <section className="pricing-packages">
      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            We don't sell videos. <span>We sell clicks.</span>
          </h2>
          <p className="pricing-subtitle">
            You want leads? These are the ads that get them. Pick your weapon:
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.title} 
              pkg={pkg}
              isPlaying={playingVideo === pkg.title}
              togglePlay={() => togglePlay(pkg.title)}
              pauseAllVideos={pauseAllVideos}
            />
          ))}
        </div>
        
        <div className="recommendation">
          <h3 className="recommendation-title">Final Word</h3>
          <div className="recommendation-grid">
            <div className="recommendation-card">
              <div className="card-header">
                <div className="color-indicator" style={{ backgroundColor: packages[0].color }}></div>
                <div className="card-title">Pick STANDARD if</div>
              </div>
              <p>You've got footage, a budget, and a pulse.</p>
            </div>
            <div className="recommendation-card">
              <div className="card-header">
                <div className="color-indicator" style={{ backgroundColor: packages[1].color }}></div>
                <div className="card-title">Pick PRO if</div>
              </div>
              <p>You want us to film it—clean, fast, effective.</p>
            </div>
            <div className="recommendation-card">
              <div className="card-header">
                <div className="color-indicator" style={{ backgroundColor: packages[2].color }}></div>
                <div className="card-title">Pick EPIC if</div>
              </div>
              <p>You want your brand to hit like a heavyweight.</p>
            </div>
          </div>
          <div className="final-statement">
            This is short-form that <span>sells</span>, not entertains. We don't care about likes. We care about money.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;