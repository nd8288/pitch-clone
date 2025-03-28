import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [videoSrc, setVideoSrc] = useState("/hero-analyze.mp4");
  const [videoSrc1, setVideoSrc1] = useState("/start.mp4");
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = window.scrollY * 1.5;
      const clampedScroll = Math.min(scrollAmount, 1500); // Increase limit if needed
      setScrollX(clampedScroll);
      console.log("ScrollX:", clampedScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id='home'>
      <div id="one">
        <div id="div1">
          <h1 className='heading'>Win more deals.</h1>
          <h1 className='heading'>Pitch.</h1>
        </div>
        <div id="extra-image"></div>
        <div id="extra-image2"></div>
        <div id="extra-image3"></div>

        <div id="div2">
          <h2 className='text'>Pitch turns presentations into your team’s superpower. Close deals, win</h2>
          <h2 className='text'>clients, and expand accounts — all while staying on brand.</h2>
        </div>

        <div id="div3">
          <button className='free_button'>Sign up for free</button>
          <button className='free_button1'>Get a demo</button>
        </div>

        {/* Icons to switch slides */}
        <div id="video">
          <div className="text1" onClick={() => setVideoSrc("/hero-analyze.mp4")}>
            <i className="fa-solid fa-rocket"></i>
            <h4>PITCH</h4>
          </div>
          <div className="text1" onClick={() => setVideoSrc("/hero-design.mp4")}>
            <i className="fa-solid fa-paintbrush"></i>
            <h4>DESIGN</h4>
          </div>
          <div className="text1" onClick={() => setVideoSrc("/hero-collaborate.mp4")}>
            <i className="fa-solid fa-user"></i>
            <h4>COLLABORATE</h4>
          </div>
          <div className="text1" onClick={() => setVideoSrc("/hero-analyze.mp4")}>
            <i className="fa-solid fa-chart-simple"></i>
            <h4>ANALYZE</h4>
          </div>
        </div>
      </div>

      <div id="div4"></div>

      {/* Video Section */}
      <div id="two">
        <div id="div5">
          <video key={videoSrc} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

    <div id="three">
      <h1 className='trusted'>Trusted by 2M+ teams worldwide</h1>
      <div id="moving_line">
  <div className="logos">
    <img src="/unsplash_pqnf1p.svg" alt="Logo" width="140" height="60" />
    <img src="/synthesia.svg" alt="Logo" width="140" height="60" />
    <img src="/thrive.svg" alt="Logo" width="140" height="60" />
    <img src="/primer.svg" alt="Logo" width="140" height="60" />
    <img src="/mad.svg" alt="Logo" width="140" height="60" />
    <img src="/linear.svg" alt="Logo" width="140" height="60" />
    <img src="/koto.svg" alt="Logo" width="140" height="60" />
    <img src="/feedly.svg" alt="Logo" width="140" height="60" />
    <img src="/depth.svg" alt="Logo" width="140" height="60" />
    <img src="/eqt_scl5eh.svg" alt="Logo" width="150" height="60" />
  </div>
</div>
      
      <div id="get">
      <h1 className='get'>Get a head start with</h1>
      <h1 className='get'>free templates</h1>
      </div>
      <h4 className='choose'>Choose from 100+ fully customizable templates crafted by subject matter</h4>
      <h4 className='choose'>experts and presentation design pros. Or upload your existing PPTX file.</h4>
    </div>

{/* Scroll Animation Section */}
<div id="four">
        <h3 className="explore">Explore the templates gallery</h3>
        <div id="moving_box">
          <div
            id="moving1"
            style={{ transform: `translateX(-${-1400 + scrollX}px)`,
            transition: "transform 0.2s ease-out",}} // Move left on scroll
          >
            <div className="mini_box"><img src="/Async_Sales_Deck.png" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Brand_Style_Guide.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Board_Deck.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Business_Proposal.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Concept_Proposal.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Creative_Brief_HG.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Creative_Brief.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
          </div>

          <div
            id="moving2"
            style={{   transform: `translateX(${ -1600 + scrollX}px)`, // Starts from Right
            transition: "transform 0.2s ease-out", }} 
          >
            <div className="mini_box"><img src="/Design_Pitch_Deck.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Design_Proposal.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Digital_Agency_Pitch.png" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Go-to-Market_Strategy.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Investor_Update.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Mutual_Action_Plan.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Product_Launch-1.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
          </div>

          <div
            id="moving3"
            style={{ transform: `translateX(-${-1200 + scrollX}px)`,
            transition: "transform 0.2s ease-out",}} // Move left on scroll
          >
            <div className="mini_box"><img src="/Product_Launch.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Quarterly_Business_Review.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Sales_Deck.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Sales_Proposal.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Series_B_Pitch_Deck.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Startup_Pitch_Deck.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/Tone_of_Voice_Guidelines.avif" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
            <div className="mini_box"><img src="/" alt="Image 1" /></div>
          </div>
        </div>
      </div>

<div id="five">
  <div id="part1">
    <div className="small_part">
    <video key={videoSrc1} autoPlay loop muted>
            <source src={videoSrc1} type="video/mp4" />
          </video>
    </div>
    <div className="small_part1">
      <h2>1 — Start</h2>
      <h1>Generate, discover, or</h1>
      <h1>build a template</h1>
      <h3><i class="fa-solid fa-check icon"></i>Start with AI or expert-made templates.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Create custom templates for your team.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Upload your own fonts and brand assets.</h3>
      <button className="part_button">Start exploring now</button>
    </div>
  </div>
</div>

<div id="five">
  <div id="part1">
    <div className="small_part1">
    <h2>2 — Edit</h2>
      <h1>Create sleek slides</h1>
      <h1>faster than ever</h1>
      <h3><i class="fa-solid fa-check icon"></i>Quickly add text, images, and interactive content.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Build elegant animations in seconds.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Collaborate with others in real time.</h3>
      <button className="part_button">Start creating now</button>
    </div>
    <div className="small_part">
    <video key={videoSrc1} autoPlay loop muted>
            <source src={videoSrc1} type="video/mp4" />
          </video>
    </div>
  </div>
</div><div id="five">
  <div id="part1">
    <div className="small_part">
    <video key={videoSrc1} autoPlay loop muted>
            <source src={videoSrc1} type="video/mp4" />
          </video>
    </div>
    <div className="small_part1">
      <h2>3 — Share</h2>
      <h1>Convince anyone,</h1>
      <h1>from anywhere</h1>
      <h3><i class="fa-solid fa-check icon"></i>Share your presentation with a live link.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Gather decks, links, and files in pitch rooms.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Present with notes, a timer, and other aids.</h3>
      <button className="part_button">Start sharing now</button>
    </div>
  </div>
</div><div id="five">
  <div id="part1">
    <div className="small_part1">
    <h2>4 — Measure</h2>
      <h1>Know what’s working</h1>
      <h1>and who’s engaged</h1>
      <h3><i class="fa-solid fa-check icon"></i>Manage your team’s outreach in one place.</h3>
      <h3><i class="fa-solid fa-check icon"></i>See when someone opens a deck or room.</h3>
      <h3><i class="fa-solid fa-check icon"></i>Track which slides your visitors view.</h3>
      <button className="part_button">Start gaining insights</button>
    </div>
    <div className="small_part">
    <video key={videoSrc1} autoPlay loop muted>
            <source src={videoSrc1} type="video/mp4" />
          </video>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
