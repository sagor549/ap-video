import React, { useState, useRef, useEffect } from "react";
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
  },
  {
    id: 5,
    title: "Project Delta",
    description: "Interactive educational platform for remote learning",
    video: "/work/pro.mp4"
  },
  {
    id: 6,
    title: "Project Delta",
    description: "Interactive educational platform for remote learning",
    video: "/work/epic.mp4"
  }
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef(null);
  const previewVideoRefs = useRef([]);

  // Play all preview videos on mount
  useEffect(() => {
    previewVideoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(e => console.log("Preview video play error:", e));
      }
    });
  }, []);

  // Handle main video playback when changing projects
  useEffect(() => {
    const playVideo = async () => {
      if (mainVideoRef.current) {
        try {
          // Reset video to ensure proper playback
          mainVideoRef.current.pause();
          mainVideoRef.current.currentTime = 0;
          
          // Add slight delay to allow browser to handle video change
          await new Promise(resolve => setTimeout(resolve, 50));
          
          // Play the new video
          await mainVideoRef.current.play();
        } catch (error) {
          console.error("Error playing main video:", error);
          
          // Fallback: Try playing again with a longer delay
          setTimeout(() => {
            if (mainVideoRef.current) {
              mainVideoRef.current.play().catch(e => console.error("Retry failed:", e));
            }
          }, 300);
        }
      }
    };

    playVideo();
  }, [activeProject]);

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      setActiveProject(project);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img">
          <div className="video-container">
            <video
              ref={mainVideoRef}
              key={activeProject.id}
              src={activeProject.video}
              muted={isMuted}
              loop
              playsInline
              className="main-video"
            />
          </div>
          
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            )}
          </button>
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