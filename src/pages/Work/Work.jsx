import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./Work.css";

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
    video: "/work/basic.mp4"
  }
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const carouselDescriptionRef = useRef(null);
  const carouselTitleRef = useRef(null);
  const descriptionTextRef = useRef(null);
  const titleTextRef = useRef(null);
  const previewVideoRefs = useRef([]);
  const navigate = useNavigate();

  // Initialize text refs
  useEffect(() => {
    if (carouselDescriptionRef.current && carouselTitleRef.current) {
      descriptionTextRef.current = carouselDescriptionRef.current.querySelector("p");
      titleTextRef.current = carouselTitleRef.current.querySelector("h1");
    }
  }, []);

  // Play all preview videos on mount
  useEffect(() => {
    previewVideoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(e => console.log("Preview video play error:", e));
      }
    });
  }, []);

  const animateCarouselInfo = (newProject) => {
    const tl = gsap.timeline();
    
    // Fade out current content
    tl.to([descriptionTextRef.current, titleTextRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
    
    tl.add(() => {
      // Update content while hidden
      setActiveProject(newProject);
    }, ">");
    
    // Fade in new content
    tl.to([descriptionTextRef.current, titleTextRef.current], {
      opacity: 1,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.15
    }, ">+=0.1");
  };

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      animateCarouselInfo(project);
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img">
          <video
            key={activeProject.id}
            src={activeProject.video}
            muted
            loop
            autoPlay
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="work-items-preview-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`work-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              onClick={() => handleWorkItemClick(project)}
            >
              <video
                ref={el => previewVideoRefs.current[index] = el}
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

      </div>
    </div>
  );
};

export default Work;