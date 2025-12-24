import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Trophy, Users, Zap, Play, ArrowRight, MousePointer2, X } from 'lucide-react';
import './AboutUs.css';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const componentRef = useRef(null);
  const sliderRef = useRef(null);
  const heroTextRef = useRef(null);
  
  // STATE FOR VIDEO MODAL
  const [activeVideo, setActiveVideo] = useState(null);

  // DATA FOR HIGHLIGHTS
  const highlights = [
    { title: "MARATHON", videoId: "dlQJL3vGo9I" },
    { title: "CYCLOTHON", videoId: "dlQJL3vGo9I" },
    { title: "FITNESS", videoId: "dlQJL3vGo9I" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      // 0. GLOBAL: Fade in
      gsap.to(componentRef.current, { opacity: 1, duration: 1 });

      // 1. HERO ANIMATIONS
      const tl = gsap.timeline();
      tl.from(".zest-breadcrumbs", { y: -30, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".zest-hero-title span", {
          y: 150,
          skewY: 10,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out"
        }, "-=0.5")
        .from(".zest-hero-meta", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

      // 2. INFO SECTIONS (Parallax & Reveal)
      gsap.utils.toArray(".zest-info-section").forEach((section) => {
        gsap.from(section.querySelector(".zest-info-text"), {
          scrollTrigger: { trigger: section, start: "top 80%" },
          y: 50, opacity: 0, duration: 1, ease: "power3.out"
        });

        gsap.to(section.querySelector("img"), {
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
          yPercent: 20, scale: 1.05, ease: "none"
        });
      });

      // 3. STATS ANIMATION
      gsap.from(".zest-stat-box", {
        scrollTrigger: { trigger: ".zest-stats-container", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)"
      });

      gsap.utils.toArray(".zest-stat-number").forEach((el) => {
        gsap.from(el, {
          textContent: 0, duration: 2.5, ease: "power1.out", snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });

mm.add("(min-width: 900px)", () => {
  const slider = sliderRef.current;

  if (!slider) return;

  const getScrollAmount = () => {
    return -(slider.scrollWidth - window.innerWidth);
  };

  gsap.to(slider, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      end: () => `+=${slider.scrollWidth - window.innerWidth}`,
      invalidateOnRefresh: true,
    }
  });
});

mm.add("(max-width: 899px)", () => {
  // NO GSAP ON MOBILE
  // Native horizontal swipe via CSS only
});

    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="zest-main-wrapper" ref={componentRef}>
      <div className="zest-noise-overlay"></div>

      {/* SECTION 1: HERO */}
      <section className="zest-hero">
        
        {/* Background Video Wrapper */}
        <div className="zest-video-bg">
          <iframe
            className="zest-video-element"
            src="https://www.youtube.com/embed/dlQJL3vGo9I?autoplay=1&mute=1&loop=1&playlist=dlQJL3vGo9I&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&disablekb=1"
            title="Campus Tour Background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="zest-gradient-overlay"></div>
        </div>

        {/* Hero Content Layer */}
        <div className="zest-hero-content">
          
          {/* Breadcrumbs moved INSIDE content to prevent overlap */}
          <div className="zest-breadcrumbs">
            <span className="zest-home-link">HOME</span>
            <span className="zest-slash">/</span>
            <span className="zest-current-page">ABOUT US</span>
          </div>

          <h1 className="zest-hero-title" ref={heroTextRef}>
            <span className="outline-text">IGNITE</span> <br />
            <span>THE</span> <span className="text-orange glow-text">FUTURE</span>
          </h1>
          
          <div className="zest-hero-meta">
            <div className="zest-meta-pill">
              <Calendar size={16} /> JAN 24-25, 2026
            </div>
            <div className="zest-meta-pill">
              <MapPin size={16} /> COEP TECH
            </div>
          </div>

          <div className="zest-scroll-indicator">
            <p>SCROLL TO EXPLORE</p>
            <div className="zest-scroll-line"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE */}
      <div className="zest-marquee">
        <div className="zest-marquee-content">
           ZEST '26 • UNLEASH THE SPIRIT • COEP TECHNOLOGICAL UNIVERSITY • INDIA'S LARGEST COLLEGE FESTIVAL • 
           ZEST '26 • UNLEASH THE SPIRIT • COEP TECHNOLOGICAL UNIVERSITY • INDIA'S LARGEST COLLEGE FESTIVAL •
        </div>
      </div>

      {/* SECTION 3: INFO GRID */}
      <div className="zest-content-body">
        <section className="zest-info-section">
          <div className="zest-info-text">
            <h4 className="zest-label">// THE LEGACY</h4>
            <h2 className="zest-heading">COEP Technological <br/><span className="text-orange">University</span></h2>
            <p className="zest-desc">
              Standing tall as a monument to India's technical prowess since 1854, COEP Tech is the 
              <strong> third-oldest engineering institute in Asia</strong>. A hub of academic excellence 
              and innovation on the banks of the Mula River, it has been the alma mater of visionaries 
              like Bharat Ratna Sir M. Visvesvaraya. 
              <br/><br/>
              With a heritage spanning over <strong>170 years</strong>, the institute continues to 
              shape the future of engineering, fostering a culture where tradition meets cutting-edge technology.
            </p>
            <button className="zest-btn-modern" onClick={() => window.open("https://youtu.be/_q3H7Wnearc?si=W4XKCzgCQ7iEJ2-X", "_blank")}>
              <span>CAMPUS TOUR</span> <ArrowRight size={18} />
            </button>
          </div>
          <div className="zest-info-img-wrapper">
            <img src="https://www.coeptech.ac.in/wp-content/uploads/elementor/thumbs/COEP-Website-Pic-1-r4qfk1ygvn7y9y1tf4vppvonlurjzsbf6jrltou9w8.jpg" alt="COEP" />
            <div className="zest-img-overlay"></div>
          </div>
        </section>

        <section className="zest-info-section reverse">
          <div className="zest-info-text">
            <h4 className="zest-label">// THE PHENOMENON</h4>
            <h2 className="zest-heading">ZEST '26: <br/>Unleash The <span className="text-orange">Spirit</span></h2>
            <p className="zest-desc">
              Recognized as one of India's largest annual inter-collegiate sports festivals, 
              Zest is not merely a competition—it is a celebration of human potential. 
              Hosting over <strong>20,000+ athletes</strong> and <strong>50+ sporting events</strong>, 
              Zest transforms the campus into a high-octane arena where stamina meets strategy.
              <br/><br/>
              From the grueling Marathon to the precision of Chess, every event is a testament 
              to resilience. Zest '26 promises to be bigger, louder, and bolder, inviting 
              champions from across the nation to etch their names in history.
            </p>
          </div>
          <div className="zest-info-img-wrapper">
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000" alt="Zest Action" />
            <div className="zest-img-overlay"></div>
          </div>
        </section>
      </div>

      {/* SECTION 4: IMPACT STATS */}
      <section className="zest-stats-container">
        <div className="zest-stats-bg-blur"></div>
        <div className="zest-stat-box">
          <Users size={40} className="zest-stat-icon" />
          <h3 className="zest-stat-number">20000+</h3>
          <p>ANNUAL FOOTFALL</p>
        </div>
        <div className="zest-stat-box">
          <Zap size={40} className="zest-stat-icon" />
          <h3 className="zest-stat-number">55+</h3>
          <p>SPORTING EVENTS</p>
        </div>
        <div className="zest-stat-box">
          <Trophy size={40} className="zest-stat-icon" />
          <h3 className="zest-stat-number">170+</h3>
          <p>YEARS OF LEGACY</p>
        </div>
      </section>

      {/* SECTION 5: HIGHLIGHTS */}
      <section className="zest-highlights-wrapper" ref={sliderRef}>
        <div className="zest-highlights-intro">
          <h2 className="zest-big-text">PAST <br /> <span className="text-orange">GLORY</span></h2>
          <div className="zest-swipe-hint">
            <MousePointer2 className="animate-bounce" /> DRAG TO EXPLORE
          </div>
        </div>
        {highlights.map((item, index) => (
          <div className="zest-highlight-card" key={index}>
            <div className="zest-card-inner" onClick={() => setActiveVideo(item.videoId)}>
              <img src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`} alt={item.title} />
              <div className="zest-card-content">
                <h3>{item.title}</h3>
                <div className="zest-play-btn"><Play fill="currentColor" /></div>
              </div>
            </div>
          </div>
        ))}

        
        <div className="zest-highlight-card end-card">
           <h1 className="zest-final-msg">JOIN THE <br/> REVOLUTION</h1>
        </div>
          {/* EXTRA BLANK SPACE */}
  <div className="zest-highlight-spacer"></div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="zest-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="zest-video-container" onClick={(e) => e.stopPropagation()}>
            <button className="zest-close-btn" onClick={() => setActiveVideo(null)}><X size={28} /></button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=0&rel=0`}
              title="Highlight" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;