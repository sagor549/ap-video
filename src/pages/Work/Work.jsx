import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./Work.css";

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A cutting-edge web application with modern UI",
    video: "/work/vid1.mp4"
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Mobile-first e-commerce platform with AR features",
    video: "/work/vid2.mp4"
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Data visualization dashboard for financial analytics",
    video: "/work/vid3.mp4"
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Interactive educational platform for remote learning",
    video: "/work/vid4.mp4"
  }
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const carouselDescriptionRef = useRef(null);
  const carouselTitleRef = useRef(null);
  const workSliderImgRef = useRef(null);
  const descriptionTextRef = useRef(null);
  const titleTextRef = useRef(null);
  const videoRef = useRef(null); // Single persistent video reference
  const navigate = useNavigate();

  // Fixed: Simplified animation without DOM manipulation
  const animateCarouselInfo = (newProject) => {
    const tl = gsap.timeline();
    
    // Fade out current content
    tl.to([descriptionTextRef.current, titleTextRef.current, videoRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.1
    });
    
    tl.add(() => {
      // Update content while hidden
      setActiveProject(newProject);
    }, ">");
    
    // Fade in new content
    tl.to([descriptionTextRef.current, titleTextRef.current, videoRef.current], {
      opacity: 1,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.15
    }, ">+=0.1");
  };

  // Fixed: Initialize refs properly
  useEffect(() => {
    if (carouselDescriptionRef.current && carouselTitleRef.current) {
      descriptionTextRef.current = carouselDescriptionRef.current.querySelector("p");
      titleTextRef.current = carouselTitleRef.current.querySelector("h1");
    }
    
    // Set the persistent video reference
    if (workSliderImgRef.current) {
      videoRef.current = workSliderImgRef.current.querySelector("video");
    }
  }, []);

  // Fixed: Handle video source changes properly
  useEffect(() => {
    if (videoRef.current) {
      // Store current playback position
      const currentTime = videoRef.current.currentTime;
      
      // Change video source
      videoRef.current.src = activeProject.video;
      
      // Set playback position to avoid flicker
      videoRef.current.currentTime = currentTime;
      
      // Play the video
      videoRef.current.play().catch(e => {
        console.log("Video play error:", e);
      });
    }
  }, [activeProject]);

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      animateCarouselInfo(project);
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img" ref={workSliderImgRef}>
          {/* Persistent video element */}
          <video
            key={activeProject.id}
            ref={(el) => { if (el) videoRef.current = el }}
            src={activeProject.video}
            muted
            loop
            autoPlay
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="work-items-preview-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              onClick={() => handleWorkItemClick(project)}
            >
              <video
                src={project.video}
                muted
                loop
                autoPlay
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <div className="carousel-info">
         
          
        </div>
      </div>
    </div>
  );
};

export default Work;