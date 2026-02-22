import React from 'react'
import { useLocation } from "react-router-dom";

function Outlines() {
      const location = useLocation();
  const params = new URLSearchParams(location.search);
  const course = params.get("course"); // e.g. 'mern', 'youtube', etc.
  return (
    <div>
   {
    course ==='mern' &&(
              <div id="outline_page">
      <h1 id="outline_heading">Full Stack / MERN Stack Outline (6 Months)</h1>

      <div id="outline_container">
        {/* Introductory Part */}
        <div className="outline_module">
          <h2 className="outline_title">Introductory Part</h2>
          <ul className="outline_list">
            <li>Introduction Of Web Dev / Web Design / SEO</li>
            <li>What Is Front / Back-End?</li>
            <li>HTML ⅘ Difference</li>
            <li>CSS 3</li>
            <li>Bootstrap 5</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </div>

        {/* Module 1: HTML5 */}
        <div className="outline_module">
          <h2 className="outline_title">Module 1: HTML5</h2>
          <ul className="outline_list">
            <li>Html Tag, Paragraph, Property, Value, Attribute, Div</li>
            <li>Html Text Formatting</li>
            <li>Universal Selector, Html Character Entities, Comment</li>
            <li>HTML Table</li>
            <li>HTML Links</li>
            <li>HTML Image</li>
            <li>HTML List</li>
            <li>HTML Audio / Video</li>
            <li>HTML Form</li>
            <li>HTML Map</li>
          </ul>
        </div>

        {/* Module 2: CSS */}
        <div className="outline_module">
          <h2 className="outline_title">Module 2: CSS</h2>
          <ul className="outline_list">
            <li>CSS Color / Background Color</li>
            <li>CSS Border / Outline</li>
            <li>CSS Margin / Padding</li>
            <li>CSS Height / Width</li>
            <li>HTML / CSS Table</li>
            <li>CSS Display</li>
            <li>CSS Position</li>
            <li>CSS Float</li>
            <li>CSS Pseudo-Classes</li>
            <li>CSS Pseudo-Elements</li>
            <li>CSS Opacity</li>
            <li>CSS Navigation Bar</li>
            <li>CSS Combinators</li>
            <li>CSS Button</li>
            <li>CSS FlexBox</li>
            <li>CSS Animation</li>
            <li>CSS Media Query</li>
            <li>HTML, CSS Project</li>
          </ul>
        </div>

        {/* Module 3: Bootstrap */}
        <div className="outline_module">
          <h2 className="outline_title">Module 3: Bootstrap 5</h2>
          <ul className="outline_list">
            <li>Introduction / CDNs</li>
            <li>BS5 Containers</li>
            <li>BS5 Colors</li>
            <li>Alignments, Font Size, Height, Width</li>
            <li>BS5 Grid System</li>
            <li>BS5 Images</li>
            <li>BS5 Buttons</li>
            <li>BS5 Progress Bar</li>
            <li>BS5 Spinners</li>
            <li>BS5 Tables</li>
            <li>BS5 Card</li>
            <li>BS5 Dropdown</li>
            <li>BS5 Carousel</li>
            <li>BS5 Nav / Navbar</li>
            <li>BS5 Form</li>
            <li>Bootstrap Project</li>
          </ul>
        </div>

        {/* Module 4: JavaScript */}
        <div className="outline_module">
          <h2 className="outline_title">Module 4: JavaScript (ES6)</h2>
          <ul className="outline_list">
            <li>Introduction</li>
            <li>JS Writing Methods</li>
            <li>JS Let, Var, Const</li>
            <li>JS Template Literal Method</li>
            <li>JS String Method</li>
            <li>JS Mathematical Operators</li>
            <li>JS Boolean Operator</li>
            <li>JS Assignment Operator</li>
            <li>JS Ternary Operators</li>
            <li>JS Comparison Operator</li>
            <li>JS Conditional Operator</li>
            <li>JS Logical Operator</li>
            <li>JS Spread Operator</li>
            <li>JS Rest Operator</li>
            <li>JS Primitive Data Types</li>
            <li>JS Non-Primitive Data Types</li>
            <li>JS String</li>
            <li>JS Function Types</li>
            <li>JS Built-In Functions</li>
            <li>JS Parameters / Arguments</li>
            <li>JS User-Defined Functions</li>
            <li>JS Function Declaration</li>
            <li>JS Anonymous / Expression Function</li>
            <li>JS Data Structure</li>
            <li>JS Arrow Function</li>
            <li>JS Truthy / Falsy Values</li>
            <li>JS Arrays</li>
            <li>JS Array Methods</li>
            <li>JS Object</li>
            <li>JS Object Methods</li>
            <li>JS Loops</li>
            <li>JS For / While / Do-While Loops</li>
            <li>JS DOM</li>
            <li>JS DOM Manipulation</li>
            <li>OOP</li>
            <li>JS 2 Projects (1 is Compulsory)</li>
          </ul>
        </div>

        {/* Module 5: MERN */}
        <div className="outline_module">
          <h2 className="outline_title">Module 5: MERN Stack</h2>
          <ul className="outline_list">
            <li>React Introduction</li>
            <li>UI / UX in React</li>
            <li>React Components</li>
            <li>CSS in React</li>
            <li>React Images</li>
            <li>Bootstrap in React</li>
            <li>React Routing</li>
            <li>React Event Handling</li>
            <li>Fetching Fake API and Showing in Table</li>
            <li>Creating Dynamic API and Showing in Table</li>
            <li>UserForm Project (Data Sending Through Form and Showing On Same Page in Table)</li>
            <li>Ecommerce Project</li>
            <li>Node.js & Express.js: Server Setup, REST API Creation</li>
            <li>MongoDB & Mongoose: Database Setup, CRUD Operations</li>
            <li>JWT Authentication: Secure Login & Authentication</li>
            <li>Mini Project: User Authentication System</li>
            <li>Connecting React with Node.js & MongoDB</li>
            <li>State Management with Redux (Optional Advanced Topic)</li>
            <li>Deploying MERN Apps (Vercel/Netlify Frontend, Heroku Backend)</li>
            <li>Final Project: Full-Stack MERN Application</li>
          </ul>
        </div>
      </div>
    </div>
    )
   }

    {/* // ...for youtube automation.... */}

   {
    course ==='youtube' &&(
         <div id="ytoutline_page">
      <h1 id="ytoutline_heading">YouTube Automation Course Outline — 2 Months</h1>

      <div id="ytoutline_container">
        {/* Week 1 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 1 — Introduction & Channel Setup</h2>
          <ul className="ytoutline_list">
            <li>What is YouTube Automation?</li>
            <li>How automated channels make money</li>
            <li>Manual vs automated content creation</li>
            <li>YouTube Partner Program overview</li>
            <li>Selecting a profitable niche (finance, tech, education, etc.)</li>
            <li>Competitor research & niche validation</li>
            <li>Choosing a catchy, brandable channel name</li>
            <li>Creating and setting up a professional channel</li>
            <li>Channel customization: logo, banner, About, links</li>
            <li>Basic channel SEO setup (keywords, tags)</li>
          </ul>
        </section>

        {/* Week 2 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 2 — Branding & Graphic Designing</h2>
          <ul className="ytoutline_list">
            <li>Branding importance for automation</li>
            <li>Designing channel logo & banner (Canva / Photoshop)</li>
            <li>Thumbnail psychology & CTR optimization</li>
            <li>Creating high-quality thumbnail templates</li>
            <li>Consistent color scheme & fonts</li>
            <li>Designing intros, outros, and watermark graphics</li>
          </ul>
        </section>

        {/* Week 3 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 3 — Content Planning & Script Writing</h2>
          <ul className="ytoutline_list">
            <li>Understanding audience & content types</li>
            <li>Topic research with VidIQ, TubeBuddy, Google Trends</li>
            <li>Creating viral-friendly titles & hooks</li>
            <li>Writing effective scripts for retention</li>
            <li>Script structure: Hook → Body → CTA</li>
            <li>Using AI tools for script assistance (ChatGPT, etc.)</li>
            <li>Planning a 30-day content calendar</li>
          </ul>
        </section>

        {/* Week 4 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 4 — Voiceover & Audio Production</h2>
          <ul className="ytoutline_list">
            <li>Human vs AI voiceovers — pros & cons</li>
            <li>Voiceover tools (Murf, ElevenLabs, Speechelo, Audacity)</li>
            <li>Choosing voice tone & accent</li>
            <li>Recording clean audio: mic setup & noise reduction</li>
            <li>Background music & sound effects selection</li>
            <li>Syncing voice with visuals and timing</li>
            <li>Audio editing and enhancement</li>
          </ul>
        </section>

        {/* Week 5 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 5 — Video Editing & Creation</h2>
          <ul className="ytoutline_list">
            <li>Editing workflow overview</li>
            <li>Editing tools: CapCut, Filmora, Premiere Pro, DaVinci Resolve</li>
            <li>Using stock footage & B-roll</li>
            <li>Adding text, subtitles & animations</li>
            <li>Color correction & audio balancing</li>
            <li>Export settings for YouTube (1080p/4K)</li>
            <li>AI video tools: Pictory, Lumen5, Runway ML</li>
          </ul>
        </section>

        {/* Week 6 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 6 — YouTube SEO & Upload Optimization</h2>
          <ul className="ytoutline_list">
            <li>YouTube SEO fundamentals: title, description, tags</li>
            <li>Keyword research & placement strategy</li>
            <li>Using TubeBuddy / VidIQ for optimization</li>
            <li>Writing SEO-optimized descriptions</li>
            <li>Hashtags, metadata, and file naming</li>
            <li>Playlists, cards, and end screens</li>
            <li>Uploading & scheduling for maximum reach</li>
            <li>Engagement tactics (comments, likes, shares)</li>
          </ul>
        </section>

        {/* Week 7 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 7 — Monetization & Growth Strategies</h2>
          <ul className="ytoutline_list">
            <li>Monetization policies & AdSense setup</li>
            <li>Meeting YouTube requirements (watch time & subscribers)</li>
            <li>Understanding ad types (skippable, non-skippable, display)</li>
            <li>Boosting retention & watch time</li>
            <li>Using analytics to improve performance</li>
            <li>Affiliate marketing & sponsorships</li>
            <li>Passive income strategies for automated channels</li>
            <li>Copyright, reuse, and fair use best practices</li>
          </ul>
        </section>

        {/* Week 8 */}
        <section className="ytoutline_module">
          <h2 className="ytoutline_title">Week 8 — Automation & Final Project</h2>
          <ul className="ytoutline_list">
            <li>Building an automation team (script, voice, edit, upload)</li>
            <li>Task management: Trello, Notion, Google Sheets</li>
            <li>Outsourcing & scaling production</li>
            <li>Automating workflow with AI & tools</li>
            <li>Cross-platform promotion (Shorts, Instagram, TikTok)</li>
            <li>Final project: create, upload & optimize an automated video</li>
            <li>Present strategy, analytics plan, and scaling steps</li>
          </ul>
        </section>
      </div>
    </div>
    )
   }

   {/* .......................digital marketing..................... */}
   {
    course==='dm' &&(
    <div id="dm_outline_page">
      <h1 id="dm_outline_heading">📘 Digital Marketing Course Outline — 2 Months</h1>

      <div id="dm_outline_container">
        <p className="dm_outline_intro">
          <strong>Duration:</strong> 2 Months <br />
          <strong>Goal:</strong> Master all the essential skills of digital marketing — from Meta Ads and SEO to social media, content, and creative design — to plan, launch, and optimize online marketing campaigns.
        </p>

        {/* ----------- Week 1 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 1 — Introduction to Digital Marketing</h2>
          <ul className="dm_outline_list">
            <li>What is Digital Marketing and Why It Matters</li>
            <li>Digital vs Traditional Marketing</li>
            <li>Key Marketing Channels (Search, Social, Email, Display)</li>
            <li>Understanding the Marketing Funnel (Awareness → Conversion)</li>
            <li>Setting SMART Marketing Goals</li>
            <li>Understanding Customer Journey & Buyer Personas</li>
            <li>Basics of Online Branding & Brand Voice</li>
          </ul>
        </div>

        {/* ----------- Week 2 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 2 — Meta Ads (Facebook & Instagram Advertising) — Part 1</h2>
          <ul className="dm_outline_list">
            <li>Setting Up Meta Business Suite & Ad Account</li>
            <li>Campaign Objectives (Traffic, Leads, Sales, Engagement)</li>
            <li>Audience Targeting: Core, Custom & Lookalike Audiences</li>
            <li>Ad Formats: Image, Carousel, Story, and Video Ads</li>
            <li>Budgeting & Scheduling Campaigns</li>
            <li>Writing High-Converting Ad Copy</li>
            <li>Installing and Using Facebook Pixel for Tracking</li>
          </ul>
        </div>

        {/* ----------- Week 3 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 3 — Meta Ads — Part 2</h2>
          <ul className="dm_outline_list">
            <li>Retargeting & Remarketing Strategies</li>
            <li>Creating and Testing Multiple Ad Variations (A/B Testing)</li>
            <li>Understanding Ad Metrics (CTR, CPC, CPM, ROAS)</li>
            <li>Optimizing Campaigns for Conversions</li>
            <li>Running Ads for Facebook & Instagram Marketplace</li>
            <li>Reporting and Analyzing Ad Performance</li>
          </ul>
        </div>

        {/* ----------- Week 4 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 4 — Social Media Marketing (SMM)</h2>
          <ul className="dm_outline_list">
            <li>Importance of Social Media in Brand Growth</li>
            <li>Platform Strategy: Facebook, Instagram, LinkedIn, TikTok</li>
            <li>Creating a Monthly Content Calendar</li>
            <li>Building Engaging Communities & Increasing Reach</li>
            <li>Hashtag Strategy and Viral Post Tactics</li>
            <li>Using Scheduling Tools (Meta Planner, Buffer, Hootsuite)</li>
            <li>Measuring SMM Success with Insights & Analytics</li>
          </ul>
        </div>

        {/* ----------- Week 5 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 5 — Search Engine Optimization (SEO)</h2>
          <ul className="dm_outline_list">
            <li>Introduction to SEO and How Search Engines Work</li>
            <li>On-Page SEO: Titles, Meta Tags, Keywords, URLs</li>
            <li>Off-Page SEO: Backlinks, Guest Posting, Citations</li>
            <li>Technical SEO Basics: Site Speed, Mobile Optimization, Indexing</li>
            <li>Keyword Research Tools (Google Keyword Planner, Ubersuggest)</li>
            <li>Writing SEO-Optimized Content</li>
            <li>Understanding Google Analytics & Search Console</li>
            <li>Local SEO & Google Business Profile Setup</li>
          </ul>
        </div>

        {/* ----------- Week 6 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 6 — Content & Influencer Marketing</h2>
          <ul className="dm_outline_list">
            <li>Understanding Content Marketing Strategy</li>
            <li>Creating Engaging Social Media Content (Reels, Posts, Stories)</li>
            <li>Copywriting for Social Media Ads & Captions</li>
            <li>Storytelling Techniques for Brands</li>
            <li>Planning 30-Day Content Campaigns</li>
            <li>Influencer Marketing Basics</li>
            <li>Finding and Collaborating with Influencers</li>
            <li>Measuring Influencer Campaign ROI</li>
          </ul>
        </div>

        {/* ----------- Week 7 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 7 — Video Editing for Marketing</h2>
          <ul className="dm_outline_list">
            <li>Introduction to Video Marketing & Storytelling</li>
            <li>Video Editing Tools: CapCut, Filmora, VN, Premiere Rush</li>
            <li>Adding Text, Transitions, and Music</li>
            <li>Creating Reels & Short-Form Videos</li>
            <li>Tips for Hook, Retention, and Call-to-Action</li>
            <li>Export Settings for Social Media Platforms</li>
            <li>AI Tools for Quick Edits (Pictory, Runway ML)</li>
          </ul>
        </div>

        {/* ----------- Week 8 ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">📅 Week 8 — Post Designing & Final Project</h2>
          <ul className="dm_outline_list">
            <li>Principles of Design for Marketing (Color, Typography, Layout)</li>
            <li>Designing Posts, Carousels, and Thumbnails (Canva / Photoshop)</li>
            <li>Brand Identity and Visual Consistency</li>
            <li>Designing Ad Creatives that Convert</li>
            <li>Creating Marketplace Product Visuals</li>
            <li><strong>Final Project:</strong></li>
            <ul className="dm_outline_list">
              <li>Develop a 360° Digital Marketing Campaign for a Brand</li>
              <li>Include Meta Ads, SEO Strategy, and Designed Posts</li>
              <li>Present Campaign Report & Analytics</li>
            </ul>
          </ul>
        </div>

        {/* ----------- Outcome ----------- */}
        <div className="dm_outline_module">
          <h2 className="dm_outline_title">✅ Outcome</h2>
          <ul className="dm_outline_list">
            <li>Create and manage effective Meta ad campaigns</li>
            <li>Optimize websites and content for SEO ranking</li>
            <li>Build a strong presence on major social platforms</li>
            <li>Design and edit marketing visuals and videos</li>
            <li>Collaborate with influencers and run end-to-end campaigns</li>
          </ul>
        </div>
      </div>
    </div>


)
}
{/* // .................................ethical hacking..................... */}
{
  course==='ethical' &&(
        <div id="ethical_outline_page">
      <h1 id="ethical_outline_heading">Ethical Hacking Course Outline 2-Months</h1>

      <div id="ethical_outline_container">

        {/* Week 1 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 1 – Introduction to Ethical Hacking & Lab Setup</h2>
          <ul className="ethical_list">
            <li>What is Ethical Hacking & its importance</li>
            <li>Types of Hackers (White / Black / Grey Hat)</li>
            <li>Phases of Hacking (Reconnaissance, Scanning, etc.)</li>
            <li>Legal & Ethical Aspects</li>
            <li>Lab Setup with Kali Linux & VirtualBox</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 2 – Networking & Cybersecurity Basics</h2>
          <ul className="ethical_list">
            <li>Networking Fundamentals (IP, DNS, MAC, Subnet)</li>
            <li>OSI & TCP/IP Model</li>
            <li>Firewalls, VPNs & Proxies</li>
            <li>Packet Analysis with Wireshark</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 3 – Footprinting & Information Gathering</h2>
          <ul className="ethical_list">
            <li>Passive vs Active Reconnaissance</li>
            <li>WHOIS, DNS Enumeration & Google Dorking</li>
            <li>Social Engineering Basics</li>
            <li>OSINT Tools</li>
          </ul>
        </div>

        {/* Week 4 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 4 – Scanning & Enumeration</h2>
          <ul className="ethical_list">
            <li>Network Scanning with Nmap</li>
            <li>Port Scanning Techniques</li>
            <li>Vulnerability Scanning (Nessus/OpenVAS)</li>
            <li>Enumeration of SMB, SNMP & FTP</li>
          </ul>
        </div>

        {/* Week 5 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 5 – System Hacking Fundamentals</h2>
          <ul className="ethical_list">
            <li>Password Cracking (Hydra / John the Ripper)</li>
            <li>Privilege Escalation</li>
            <li>Keyloggers & Backdoors</li>
            <li>Clearing Tracks</li>
          </ul>
        </div>

        {/* Week 6 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 6 – Web Application Hacking (Basics)</h2>
          <ul className="ethical_list">
            <li>Web Architecture Overview</li>
            <li>OWASP Top 10 Basics</li>
            <li>SQL Injection & XSS</li>
            <li>Burp Suite Introduction</li>
          </ul>
        </div>

        {/* Week 7 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 7 – Wireless & Mobile Hacking</h2>
          <ul className="ethical_list">
            <li>Wi-Fi Security & Encryption (WEP, WPA, WPA2)</li>
            <li>Evil Twin Attacks</li>
            <li>Mobile OS Security (Android/iOS)</li>
            <li>Common Mobile Threats</li>
          </ul>
        </div>

        {/* Week 8 */}
        <div className="ethical_module">
          <h2 className="ethical_title">Week 8 – Cyber Defense, Reporting & Career Guidance</h2>
          <ul className="ethical_list">
            <li>Incident Response & Cyber Defense</li>
            <li>Penetration Testing Report Writing</li>
            <li>Tools & Certifications (CEH, OSCP, Security+)</li>
            <li>Career Path in Ethical Hacking</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="ethical_module">
          <h2 className="ethical_title">🧰 Tools Covered</h2>
          <p className="ethical_text">
            Kali Linux, Nmap, Wireshark, Burp Suite, Metasploit, Hydra, Aircrack-ng, Nessus/OpenVAS
          </p>
        </div>

        {/* Final Project */}
        <div className="ethical_module">
          <h2 className="ethical_title">📄 Final Project</h2>
          <p className="ethical_text">
            Complete a full penetration test and submit a detailed report of vulnerabilities found and solutions suggested.
          </p>
        </div>

      </div>
    </div>
  )
}
{/* ...................graphic designing..................... */}
{
  course==='graphic' &&(
       <div id="graphic_outline_page">
      <h1 id="graphic_outline_heading">
      Graphic Designing Course Outline — 2 Months
      </h1>

      <div id="graphic_outline_container">
        {/* Week 1 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 1 – Introduction to Graphic Design</h2>
          <ul className="graphic_list">
            <li>What is graphic design?</li>
            <li>Role of a graphic designer in the industry</li>
            <li>Types of design (print, digital, branding, UI/UX)</li>
            <li>Overview of tools (Photoshop, Illustrator, Canva, Figma)</li>
          </ul>
          <p className="graphic_text"><b>Activity:</b> Explore good design examples, install software, and create your first Canva design.</p>
          <p className="graphic_text"><b>Assignment:</b> Create a social media post for a fictional brand.</p>
        </div>

        {/* Week 2 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 2 – Design Principles & Elements</h2>
          <ul className="graphic_list">
            <li>Elements of design: line, shape, color, texture, space, form</li>
            <li>Principles: balance, contrast, alignment, repetition, hierarchy</li>
            <li>Layout, composition & color theory</li>
          </ul>
          <p className="graphic_text"><b>Activity:</b> Analyze designs & experiment with color palettes.</p>
          <p className="graphic_text"><b>Assignment:</b> Design a poster applying all principles.</p>
        </div>

        {/* Week 3 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 3 – Typography Mastery</h2>
          <ul className="graphic_list">
            <li>Understanding typography</li>
            <li>Font types, hierarchy, spacing & alignment</li>
            <li>Font pairing & branding techniques</li>
          </ul>
          <p className="graphic_text"><b>Activity:</b> Experiment with font combinations.</p>
          <p className="graphic_text"><b>Assignment:</b> Create a typographic quote poster.</p>
        </div>

        {/* Week 4 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 4 – Adobe Photoshop Essentials</h2>
          <ul className="graphic_list">
            <li>Photoshop interface overview</li>
            <li>Layers, masks & adjustments</li>
            <li>Image editing & retouching</li>
            <li>Creating web/social media graphics</li>
          </ul>
          <p className="graphic_text"><b>Assignment:</b> Design a promotional social media banner.</p>
        </div>

        {/* Week 5 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 5 – Adobe Illustrator Essentials</h2>
          <ul className="graphic_list">
            <li>Vector graphics basics</li>
            <li>Shapes, paths & pen tool</li>
            <li>Logo & icon creation</li>
            <li>Gradients & patterns</li>
          </ul>
          <p className="graphic_text"><b>Assignment:</b> Design a logo and explain its concept.</p>
        </div>

        {/* Week 6 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 6 – Branding & Identity Design</h2>
          <ul className="graphic_list">
            <li>Understanding branding and identity</li>
            <li>Logo design process</li>
            <li>Business cards, flyers, and letterheads</li>
            <li>Maintaining brand consistency</li>
          </ul>
          <p className="graphic_text"><b>Assignment:</b> Create a full brand kit for a sample company.</p>
        </div>

        {/* Week 7 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 7 – Digital & Social Media Design</h2>
          <ul className="graphic_list">
            <li>Designing for platforms (Facebook, Instagram, YouTube, LinkedIn)</li>
            <li>Ad design principles</li>
            <li>Image dimensions & export formats</li>
            <li>Creating branded templates</li>
          </ul>
          <p className="graphic_text"><b>Assignment:</b> Create a full social media kit for your brand.</p>
        </div>

        {/* Week 8 */}
        <div className="graphic_module">
          <h2 className="graphic_title">📍 Week 8 – Portfolio Development & Career Guidance</h2>
          <ul className="graphic_list">
            <li>Building your design portfolio</li>
            <li>Freelance platforms & job opportunities</li>
            <li>Resume & Behance/Dribbble setup</li>
          </ul>
          <p className="graphic_text"><b>Final Project:</b> Design a complete brand package — logo, business card, poster, and social media posts.</p>
        </div>

        {/* Tools Section */}
        <div className="graphic_module">
          <h2 className="graphic_title">🧰 Tools Covered</h2>
          <p className="graphic_text">Adobe Photoshop, Illustrator, Canva, Figma</p>
        </div>

        {/* Outcome */}
        <div className="graphic_module">
          <h2 className="graphic_title">🏁 Outcome</h2>
          <p className="graphic_text">
            By the end of 8 weeks, students will understand design theory, master professional tools,
            and build a complete design portfolio ready for freelance or job opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}
{/* .......................................Social Media Marketing................. */}
{
  course==='social' &&(
     <div id="social_outline_page_fixed">
      <h1 id="social_outline_heading_fixed">
        2-Month Social Media Marketing & Content Creation Course Outline
      </h1>

      <div id="social_outline_container_fixed">
        {/* Week 1 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 1 – Introduction to Social Media Marketing</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>What is social media marketing?</li>
              <li>Major social platforms (Facebook, Instagram, TikTok, YouTube, LinkedIn)</li>
              <li>Understanding your audience and niche</li>
              <li>Personal branding fundamentals</li>
              <li>Overview of tools (Canva, Meta Business Suite, CapCut, etc.)</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Set up professional profiles and identify your target audience.</p>
            <p className="outline_note"><strong>Assignment:</strong> Create and optimize your own Instagram/Facebook page.</p>
          </div>
        </section>

        {/* Week 2 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 2 – Branding & Logo Design</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Basics of branding and brand identity</li>
              <li>Logo design fundamentals (colors, fonts, symbols)</li>
              <li>Using Canva Pro for logo design</li>
              <li>Creating brand kits (color palette, fonts, variations)</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Design logos for two fictional brands using Canva Pro.</p>
            <p className="outline_note"><strong>Assignment:</strong> Create a brand identity kit (logo, fonts, colors).</p>
          </div>
        </section>

        {/* Week 3 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 3 – Content Strategy & Planning</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Building a social media content strategy</li>
              <li>Content pillars: educational, entertaining, promotional</li>
              <li>Creating a content calendar</li>
              <li>Maintaining consistency and engagement</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Create a one-week content calendar for a brand.</p>
            <p className="outline_note"><strong>Assignment:</strong> Submit a 7-day content plan for your chosen brand.</p>
          </div>
        </section>

        {/* Week 4 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 4 – Video Editing & Reels Creation</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Short-form video marketing (Reels, TikToks, Shorts)</li>
              <li>Storytelling and trends</li>
              <li>Editing with Canva Pro & CapCut</li>
              <li>Text, transitions, captions, export settings</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Create a trending reel with transitions and music.</p>
            <p className="outline_note"><strong>Assignment:</strong> Upload a 30-second promotional video or reel.</p>
          </div>
        </section>

        {/* Week 5 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 5 – Platform Deep Dive: Facebook, Instagram & TikTok</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Business pages & post scheduling (Meta Business Suite)</li>
              <li>Analytics & insights</li>
              <li>TikTok trends & algorithm tips</li>
              <li>Paid promotion basics</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Plan a mini campaign for Instagram & TikTok.</p>
            <p className="outline_note"><strong>Assignment:</strong> Design a 3-post campaign with visuals and captions.</p>
          </div>
        </section>

        {/* Week 6 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 6 – Platform Deep Dive: YouTube & LinkedIn</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>YouTube SEO: titles, descriptions, tags, thumbnails</li>
              <li>Thumbnail design with Canva Pro</li>
              <li>Optimizing video uploads</li>
              <li>LinkedIn for networking & client hunting</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Create a thumbnail & write a LinkedIn post.</p>
            <p className="outline_note"><strong>Assignment:</strong> Publish a LinkedIn post promoting your skills.</p>
          </div>
        </section>

        {/* Week 7 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 7 – Client Hunting & Freelancing Skills</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Finding clients (LinkedIn, FB groups, Fiverr)</li>
              <li>Writing proposals & pitching</li>
              <li>Portfolio building & pricing strategies</li>
            </ul>
            <p className="outline_note"><strong>Activity:</strong> Optimize LinkedIn and prepare outreach messages.</p>
            <p className="outline_note"><strong>Assignment:</strong> Identify 3 potential clients and prepare outreach.</p>
          </div>
        </section>

        {/* Week 8 */}
        <section className="outline_card">
          <div className="outline_card_header">
            <h2>📍 Week 8 – Campaign Execution & Portfolio Building</h2>
          </div>
          <div className="outline_card_body">
            <ul className="outline_points">
              <li>Combining brand, content & strategy</li>
              <li>Mock campaign & analytics</li>
              <li>Portfolio setup for freelancing/agency</li>
            </ul>
            <p className="outline_note"><strong>Final Project:</strong> Plan a 1-month campaign — logo, 1-week calendar, 3 posts, 1 video, and report.</p>
          </div>
        </section>

        {/* Tools */}
        <section className="outline_card">
          <div className="outline_card_header"><h2>🧰 Tools Covered</h2></div>
          <div className="outline_card_body">
            <p className="outline_note">Canva Pro, CapCut, Adobe Express, Meta Business Suite, LinkedIn, TikTok, Facebook, Instagram, YouTube</p>
          </div>
        </section>

        {/* Outcome */}
        <section className="outline_card">
          <div className="outline_card_header"><h2>🏁 Course Outcome</h2></div>
          <div className="outline_card_body">
            <p className="outline_note">
              Master major social platforms, create graphics & videos, design logos, find clients & build a professional portfolio.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
{/* .................................mern................. */}
{
    
    course ==='mern' &&(
              <div id="outline_page">
      <h1 id="outline_heading">Full Stack / MERN Stack Outline (6 Months)</h1>

      <div id="outline_container">
        {/* Introductory Part */}
        <div className="outline_module">
          <h2 className="outline_title">Introductory Part</h2>
          <ul className="outline_list">
            <li>Introduction Of Web Dev / Web Design / SEO</li>
            <li>What Is Front / Back-End?</li>
            <li>HTML ⅘ Difference</li>
            <li>CSS 3</li>
            <li>Bootstrap 5</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </div>

        {/* Module 1: HTML5 */}
        <div className="outline_module">
          <h2 className="outline_title">Module 1: HTML5</h2>
          <ul className="outline_list">
            <li>Html Tag, Paragraph, Property, Value, Attribute, Div</li>
            <li>Html Text Formatting</li>
            <li>Universal Selector, Html Character Entities, Comment</li>
            <li>HTML Table</li>
            <li>HTML Links</li>
            <li>HTML Image</li>
            <li>HTML List</li>
            <li>HTML Audio / Video</li>
            <li>HTML Form</li>
            <li>HTML Map</li>
          </ul>
        </div>

        {/* Module 2: CSS */}
        <div className="outline_module">
          <h2 className="outline_title">Module 2: CSS</h2>
          <ul className="outline_list">
            <li>CSS Color / Background Color</li>
            <li>CSS Border / Outline</li>
            <li>CSS Margin / Padding</li>
            <li>CSS Height / Width</li>
            <li>HTML / CSS Table</li>
            <li>CSS Display</li>
            <li>CSS Position</li>
            <li>CSS Float</li>
            <li>CSS Pseudo-Classes</li>
            <li>CSS Pseudo-Elements</li>
            <li>CSS Opacity</li>
            <li>CSS Navigation Bar</li>
            <li>CSS Combinators</li>
            <li>CSS Button</li>
            <li>CSS FlexBox</li>
            <li>CSS Animation</li>
            <li>CSS Media Query</li>
            <li>HTML, CSS Project</li>
          </ul>
        </div>

        {/* Module 3: Bootstrap */}
        <div className="outline_module">
          <h2 className="outline_title">Module 3: Bootstrap 5</h2>
          <ul className="outline_list">
            <li>Introduction / CDNs</li>
            <li>BS5 Containers</li>
            <li>BS5 Colors</li>
            <li>Alignments, Font Size, Height, Width</li>
            <li>BS5 Grid System</li>
            <li>BS5 Images</li>
            <li>BS5 Buttons</li>
            <li>BS5 Progress Bar</li>
            <li>BS5 Spinners</li>
            <li>BS5 Tables</li>
            <li>BS5 Card</li>
            <li>BS5 Dropdown</li>
            <li>BS5 Carousel</li>
            <li>BS5 Nav / Navbar</li>
            <li>BS5 Form</li>
            <li>Bootstrap Project</li>
          </ul>
        </div>

        {/* Module 4: JavaScript */}
        <div className="outline_module">
          <h2 className="outline_title">Module 4: JavaScript (ES6)</h2>
          <ul className="outline_list">
            <li>Introduction</li>
            <li>JS Writing Methods</li>
            <li>JS Let, Var, Const</li>
            <li>JS Template Literal Method</li>
            <li>JS String Method</li>
            <li>JS Mathematical Operators</li>
            <li>JS Boolean Operator</li>
            <li>JS Assignment Operator</li>
            <li>JS Ternary Operators</li>
            <li>JS Comparison Operator</li>
            <li>JS Conditional Operator</li>
            <li>JS Logical Operator</li>
            <li>JS Spread Operator</li>
            <li>JS Rest Operator</li>
            <li>JS Primitive Data Types</li>
            <li>JS Non-Primitive Data Types</li>
            <li>JS String</li>
            <li>JS Function Types</li>
            <li>JS Built-In Functions</li>
            <li>JS Parameters / Arguments</li>
            <li>JS User-Defined Functions</li>
            <li>JS Function Declaration</li>
            <li>JS Anonymous / Expression Function</li>
            <li>JS Data Structure</li>
            <li>JS Arrow Function</li>
            <li>JS Truthy / Falsy Values</li>
            <li>JS Arrays</li>
            <li>JS Array Methods</li>
            <li>JS Object</li>
            <li>JS Object Methods</li>
            <li>JS Loops</li>
            <li>JS For / While / Do-While Loops</li>
            <li>JS DOM</li>
            <li>JS DOM Manipulation</li>
            <li>OOP</li>
            <li>JS 2 Projects (1 is Compulsory)</li>
          </ul>
        </div>

        {/* Module 5: MERN */}
        <div className="outline_module">
          <h2 className="outline_title">Module 5: MERN Stack</h2>
          <ul className="outline_list">
            <li>React Introduction</li>
            <li>UI / UX in React</li>
            <li>React Components</li>
            <li>CSS in React</li>
            <li>React Images</li>
            <li>Bootstrap in React</li>
            <li>React Routing</li>
            <li>React Event Handling</li>
            <li>Fetching Fake API and Showing in Table</li>
            <li>Creating Dynamic API and Showing in Table</li>
            <li>UserForm Project (Data Sending Through Form and Showing On Same Page in Table)</li>
            <li>Ecommerce Project</li>
            <li>Node.js & Express.js: Server Setup, REST API Creation</li>
            <li>MongoDB & Mongoose: Database Setup, CRUD Operations</li>
            <li>JWT Authentication: Secure Login & Authentication</li>
            <li>Mini Project: User Authentication System</li>
            <li>Connecting React with Node.js & MongoDB</li>
            <li>State Management with Redux (Optional Advanced Topic)</li>
            <li>Deploying MERN Apps (Vercel/Netlify Frontend, Heroku Backend)</li>
            <li>Final Project: Full-Stack MERN Application</li>
          </ul>
        </div>
      </div>
    </div>
    )
   }

{/* ............................videoediting.................... */}
{
  course==='editig' && (
       <div className="main-container">
      <h1 className="title">
        🎬 1-Month Video Editing & Client Hunting Course Outline
      </h1>

      {/* Week 1 */}
      <div className="week-box">
        <div className="week-header">
          📍 Week 1 – Introduction to Video Editing & Tools
        </div>
        <ul>
          <li>What is video editing and why it matters</li>
          <li>Understanding different video types (Reels, Shorts, Ads, YouTube videos)</li>
          <li>Overview of Canva Pro and CapCut interfaces</li>
          <li>Importing clips, audio, and media assets</li>
          <li>Basic editing workflow</li>
        </ul>
        <p><b>Activity:</b> Set up Canva Pro & CapCut, trim and merge clips, add text, music, and transitions.</p>
        <p><b>Assignment:</b> Edit a 30-second short video using CapCut (any topic).</p>
      </div>

      {/* Week 2 */}
      <div className="week-box">
        <div className="week-header">
          📍 Week 2 – Creative Video Editing in Canva Pro
        </div>
        <ul>
          <li>Using Canva Pro for video templates</li>
          <li>Adding animations, text effects, and transitions</li>
          <li>Adding voiceovers and background music</li>
          <li>Creating social media video ads and reels</li>
          <li>Export settings for Instagram, TikTok, and YouTube</li>
        </ul>
        <p><b>Activity:</b> Edit a short promotional video using Canva Pro templates.</p>
        <p><b>Assignment:</b> Create a Reel or TikTok video for a fictional brand using Canva Pro.</p>
      </div>

      {/* Week 3 */}
      <div className="week-box">
        <div className="week-header">
          📍 Week 3 – Advanced Editing & Content Strategy
        </div>
        <ul>
          <li>Storytelling in short-form videos</li>
          <li>Adding captions, subtitles, and trending audio</li>
          <li>Creating engaging hooks and CTAs</li>
          <li>Branding your videos (logo, colors, consistency)</li>
          <li>Content strategy for social platforms</li>
        </ul>
        <p><b>Activity:</b> Create a branded intro/outro in CapCut and edit a complete short-form video.</p>
        <p><b>Assignment:</b> Edit a 1-minute promotional or educational video for a brand.</p>
      </div>

      {/* Week 4 */}
      <div className="week-box">
        <div className="week-header">
          📍 Week 4 – Client Hunting, Portfolio & Freelancing
        </div>
        <ul>
          <li>Building your personal brand as a video editor</li>
          <li>Finding clients on Facebook Groups and LinkedIn</li>
          <li>Writing outreach messages and proposals</li>
          <li>Creating a simple video editing portfolio</li>
          <li>Pricing your work and communicating professionally</li>
        </ul>
        <p><b>Activity:</b> Optimize your LinkedIn profile, join freelance groups, and write sample client messages.</p>
        <p><b>Final Project:</b> Create a professional portfolio with two edited videos and a client outreach post.</p>
      </div>

      {/* Outcome */}
      <div className="week-box outcome">
        <div className="week-header">🏁 Course Outcome</div>
        <ul>
          <li>Edit short videos, reels, and ads using Canva Pro & CapCut</li>
          <li>Understand video storytelling and branding</li>
          <li>Create platform-ready content (TikTok, Instagram, YouTube)</li>
          <li>Find real clients through Facebook and LinkedIn</li>
          <li>Build a professional video editing portfolio</li>
        </ul>
      </div>
    </div>
  )
}
{/* .........................shopify.................. */}

 {course === 'shopify' && (
  <div id="shopify_outline_page">
    <header id="shopify_outline_header">
      <div>
        <h1 id="shopify_outline_heading">Shopify Course — 8 Weeks (2 Months)</h1>
      </div>
    </header>

    <main id="shopify_outline_container">
      <section className="shopify_weeks_grid">

        <article className="shopify_module">
          <h3 className="shopify_title">Week 1: Introduction to Shopify</h3>
          <ul className="shopify_list">
            <li>Introduction to Ecommerce and the Role of Shopify</li>
            <li>Shopify vs Other Platforms (WooCommerce, Daraz, Wix)</li>
            <li>Setting Up Your Shopify Store: Account Creation, Plans & Pricing</li>
            <li>Understanding the Shopify Dashboard & User Interface</li>
            <li>Theme Selection & Customization: Creating Your Brand Identity</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 2: Adding Products & Content</h3>
          <ul className="shopify_list">
            <li>Product Hunting (Manual + Tools like Sell The Trend, Minsta, Pexda)</li>
            <li>How to Identify Winning Products (Local + Global Trends)</li>
            <li>Product Management: Adding Products, Variants, Images & Descriptions</li>
            <li>Inventory Management: Tracking Stock Levels & Orders</li>
            <li>Collections & Navigation: Organizing Products for Easy Browsing</li>
            <li>Page Creation: About Us, Contact, Privacy Policy, FAQs</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 3: Payments, Shipping & Taxes</h3>
          <ul className="shopify_list">
            <li>Payment Gateways Integration (Payoneer, 2Checkout, Manual Methods in PK)</li>
            <li>Shipping Options & Rates: Domestic & International Delivery Setup</li>
            <li>Introduction to Local & International Dropshipping</li>
            <li>Choosing Suppliers: AliExpress, CJDropshipping, Local Vendors</li>
            <li>Understanding Tax Laws & Setting Up Sales Tax</li>
            <li>Discounts & Promotions: Creating Coupon Codes & Sales Events</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 4: Marketing & SEO</h3>
          <ul className="shopify_list">
            <li>Introduction to SEO for Shopify - Basics of Ranking</li>
            <li>Optimizing Product Listings & Pages for Search Engines</li>
            <li>Social Media Marketing (Facebook, Instagram Essentials)</li>
            <li>Email Marketing Basics (Mailchimp / Klaviyo Setup & Strategies)</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 5: Launching Your Store & Analytics</h3>
          <ul className="shopify_list">
            <li>Preparing Your Store Launch: Essential Checklist</li>
            <li>Connecting & Using Google Analytics for Shopify</li>
            <li>Understanding Key Metrics: Conversion Rate, Traffic, Bounce Rate</li>
            <li>Customer Relationship Management (CRM) Tools Overview</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 6: Apps & Integrations</h3>
          <ul className="shopify_list">
            <li>Exploring Shopify App Store - Essential Free & Paid Apps</li>
            <li>Automating Marketing & Customer Follow-Ups</li>
            <li>Customer Service Apps - Chat, FAQs, Feedback</li>
            <li>Integrating with Facebook Shop, TikTok, Amazon (Basic Overview)</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 7: Advanced Topics & Optimization</h3>
          <ul className="shopify_list">
            <li>Abandoned Cart Recovery: Emails & Popups</li>
            <li>Conversion Rate Optimization (CRO): Boosting Sales with Design</li>
            <li>Mobile Optimization - Speed, Layout & Responsiveness</li>
            <li>Advanced SEO Tips for Product & Blog Pages</li>
          </ul>
        </article>

        <article className="shopify_module">
          <h3 className="shopify_title">Week 8: Scaling & Future Growth</h3>
          <ul className="shopify_list">
            <li>Growth Strategies: Cross-Selling, Upselling, Bundling</li>
            <li>Running Paid Ads: Facebook Ads Manager Introduction</li>
            <li>Dropshipping Strategy Basics (Local & International)</li>
            <li>Subscription & Repeat Customer Strategy</li>
          </ul>
        </article>
      </section>

      <section className="shopify_extras">
        <div className="shopify_module">
          <h3 className="shopify_title">Bonus Week (Optional)</h3>
          <ul className="shopify_list">
            <li>Case Studies: Successful Shopify Store Examples</li>
            <li>Industry Trends & Market Insights</li>
            <li>Final Q&A and Project Review Session</li>
          </ul>
        </div>

        <div className="shopify_module">
          <h3 className="shopify_title">Final Student Project</h3>
          <ul className="shopify_list">
            <li>Build and present their own Shopify store</li>
            <li>Integrate basic SEO, branding, and product setup</li>
            <li>Demonstrate at least one winning product</li>
            <li>Receive feedback and certificate upon completion</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
)}

{/* .......................taxation law.................. */}
{course === 'tax' && (
  <div id="taxlaw_outline_page">
    <header id="taxlaw_outline_header">
      <h1 id="taxlaw_outline_heading">Taxation Law — 3-Month Course (12 Weeks)</h1>
      <p id="taxlaw_outline_subtitle">
        Duration: 12 Weeks | 3–4 Hours per Week (Lectures + Tutorials + Discussions)
      </p>
    </header>

    <main id="taxlaw_outline_container">
      {/* Objectives */}
      <section className="taxlaw_outline_section">
        <h2 className="taxlaw_outline_title">Course Objectives</h2>
        <ul className="taxlaw_outline_list">
          <li>Explain the basic principles and purposes of taxation.</li>
          <li>Identify and apply the major heads of income and exemptions.</li>
          <li>Understand the operation of indirect taxes (e.g., GST/VAT).</li>
          <li>Recognize procedures for tax assessment, appeals, and penalties.</li>
          <li>Appreciate emerging issues in domestic and international taxation.</li>
        </ul>
      </section>

      {/* Month 1 */}
      <section className="taxlaw_outline_section">
        <h2 className="taxlaw_outline_title">Month 1 – Foundations of Taxation</h2>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 1: Introduction to Taxation</h3>
          <ul className="taxlaw_outline_list">
            <li>Concept and objectives of taxation</li>
            <li>Types of taxes: direct and indirect</li>
            <li>Principles of a good tax system (equity, certainty, convenience, efficiency)</li>
            <li>Overview of national tax structure</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 2: Sources and Constitutional Framework</h3>
          <ul className="taxlaw_outline_list">
            <li>Constitutional basis of taxing powers</li>
            <li>Important tax statutes and authorities</li>
            <li>Hierarchy of tax laws and case law interpretation</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 3: Basic Concepts in Tax Law</h3>
          <ul className="taxlaw_outline_list">
            <li>Meaning of income, assessee, previous year, assessment year</li>
            <li>Residential status and scope of total income</li>
            <li>Distinction between capital and revenue</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 4: Exemptions and Deductions</h3>
          <ul className="taxlaw_outline_list">
            <li>Tax-free incomes</li>
            <li>Common deductions and allowances</li>
            <li>Overview of tax computation</li>
          </ul>
        </div>
      </section>

      {/* Month 2 */}
      <section className="taxlaw_outline_section">
        <h2 className="taxlaw_outline_title">Month 2 – Income Tax and Indirect Tax</h2>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 5: Heads of Income – Part I</h3>
          <ul className="taxlaw_outline_list">
            <li>Salaries</li>
            <li>Income from house property</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 6: Heads of Income – Part II</h3>
          <ul className="taxlaw_outline_list">
            <li>Profits and gains from business or profession</li>
            <li>Capital gains</li>
            <li>Income from other sources</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 7: Computation and Filing</h3>
          <ul className="taxlaw_outline_list">
            <li>Tax computation and rates</li>
            <li>Return filing procedures</li>
            <li>Advance tax and TDS/TCS</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 8: Indirect Taxation (GST/VAT Basics)</h3>
          <ul className="taxlaw_outline_list">
            <li>Concept and structure of GST/VAT</li>
            <li>Supply, input tax credit, registration, and filing</li>
            <li>Customs duties (if relevant)</li>
          </ul>
        </div>
      </section>

      {/* Month 3 */}
      <section className="taxlaw_outline_section">
        <h2 className="taxlaw_outline_title">
          Month 3 – Administration, International, and Policy Issues
        </h2>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 9: Tax Administration and Compliance</h3>
          <ul className="taxlaw_outline_list">
            <li>Powers of tax authorities</li>
            <li>Assessment, audit, and collection of taxes</li>
            <li>Penalties, offences, and prosecution</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 10: Tax Avoidance and Evasion</h3>
          <ul className="taxlaw_outline_list">
            <li>Difference between avoidance and evasion</li>
            <li>Anti-avoidance measures</li>
            <li>Ethical aspects of tax planning</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 11: International and Contemporary Taxation</h3>
          <ul className="taxlaw_outline_list">
            <li>Basics of international taxation</li>
            <li>Double Taxation Avoidance Agreements (DTAAs)</li>
            <li>Emerging issues: digital economy, environmental taxes</li>
          </ul>
        </div>

        <div className="taxlaw_outline_week">
          <h3 className="taxlaw_outline_weektitle">Week 12: Review and Case Studies</h3>
          <ul className="taxlaw_outline_list">
            <li>Practical exercises and case analysis</li>
            <li>Tax planning scenarios</li>
            <li>Course review and final assessment</li>
          </ul>
        </div>
      </section>

      {/* Assessment and Readings */}
      <section id="taxlaw_outline_extras">
        <div className="taxlaw_outline_extra_card">
          <h2 className="taxlaw_outline_title">Assessment Structure</h2>
          <ul className="taxlaw_outline_list">
            <li>Class participation / quizzes – 10%</li>
            <li>Midterm test (Week 6) – 20%</li>
            <li>Research paper or case study – 20%</li>
            <li>Final exam (Week 12) – 50%</li>
          </ul>
        </div>

        <div className="taxlaw_outline_extra_card">
          <h2 className="taxlaw_outline_title">Recommended Readings</h2>
          <ul className="taxlaw_outline_list">
            <li>Relevant national tax code or act (e.g., Income Tax Act, GST Act)</li>
            <li><em>Kanga & Palkhivala, The Law and Practice of Income Tax</em></li>
            <li><em>OECD, Model Tax Convention (selected readings)</em></li>
            <li>Government circulars, case law, and policy papers</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
)}
{/* .....................seo........................ */}
{course === 'seo' && (
  <div id="seo_outline_page">
    <header id="seo_outline_header">
      <h1 id="seo_outline_heading">Search Engine Optimization (SEO) Fundamentals</h1>
      <p id="seo_outline_subtitle">
        Duration: 1.15 Months (≈5 Weeks) | 3–4 Sessions per Week | Certification Program
      </p>
    </header>

    <main id="seo_outline_container">
      {/* Objectives */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Course Objectives</h2>
        <ul className="seo_outline_list">
          <li>Understand how search engines work.</li>
          <li>Perform keyword research and on-page optimization.</li>
          <li>Optimize websites for better ranking and visibility.</li>
          <li>Analyze website performance using SEO tools.</li>
          <li>Develop and implement a basic SEO strategy.</li>
        </ul>
      </section>

      {/* Week 1 */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Week 1: Introduction to SEO & Search Engines</h2>
        <ul className="seo_outline_list">
          <li>What is SEO and why it matters</li>
          <li>How search engines work (crawling, indexing, ranking)</li>
          <li>Types of SEO: On-page, Off-page, Technical</li>
          <li>Understanding SERPs (Search Engine Results Pages)</li>
          <li>White-hat vs. Black-hat SEO</li>
          <li>Setting up Google Search Console and Google Analytics</li>
        </ul>
        <p className="seo_outline_practical">
          <strong>Practical:</strong> Set up a demo website or blog and verify site ownership in Search Console.
        </p>
      </section>

      {/* Week 2 */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Week 2: Keyword Research & On-Page SEO</h2>
        <ul className="seo_outline_list">
          <li>Importance of keyword research</li>
          <li>Keyword types: short-tail vs. long-tail</li>
          <li>Tools for keyword research (Google Keyword Planner, SEMrush, Ahrefs, Ubersuggest)</li>
          <li>
            On-page optimization factors:
            <ul>
              <li>Title tags, meta descriptions, headings</li>
              <li>URL structure, keyword placement</li>
              <li>Image SEO (alt text, compression)</li>
            </ul>
          </li>
          <li>Content optimization and readability</li>
        </ul>
        <p className="seo_outline_practical">
          <strong>Practical:</strong> Perform keyword research and optimize a webpage using proper on-page SEO elements.
        </p>
      </section>

      {/* Week 3 */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Week 3: Technical SEO</h2>
        <ul className="seo_outline_list">
          <li>Website structure and crawlability</li>
          <li>XML sitemaps and robots.txt</li>
          <li>Mobile optimization and Core Web Vitals</li>
          <li>Page speed optimization techniques</li>
          <li>HTTPS and site security</li>
          <li>Schema markup (structured data)</li>
        </ul>
        <p className="seo_outline_practical">
          <strong>Practical:</strong> Use tools like Google PageSpeed Insights, Screaming Frog, and GTmetrix to identify and fix SEO issues.
        </p>
      </section>

      {/* Week 4 */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Week 4: Off-Page SEO & Link Building</h2>
        <ul className="seo_outline_list">
          <li>Importance of backlinks and link quality</li>
          <li>Link-building strategies (guest posting, broken link building, outreach)</li>
          <li>Social signals and local citations</li>
          <li>Introduction to Local SEO (Google Business Profile optimization)</li>
          <li>Managing online reputation</li>
        </ul>
        <p className="seo_outline_practical">
          <strong>Practical:</strong> Build backlinks for your project and optimize a business listing for Local SEO.
        </p>
      </section>

      {/* Week 5 */}
      <section className="seo_outline_section">
        <h2 className="seo_outline_title">Week 5: SEO Analytics, Trends & Strategy</h2>
        <ul className="seo_outline_list">
          <li>Measuring SEO success (KPIs: traffic, CTR, bounce rate, conversions)</li>
          <li>Using Google Analytics and Search Console reports</li>
          <li>Competitor analysis</li>
          <li>SEO trends: voice search, AI, featured snippets, E-E-A-T</li>
          <li>Developing an SEO action plan for a website</li>
        </ul>
        <p className="seo_outline_practical">
          <strong>Practical:</strong> Create an SEO report and action plan for a demo website.
        </p>
      </section>

      {/* Assessment & Tools */}
      <section id="seo_outline_extras">
        <div className="seo_outline_extra_card">
          <h2 className="seo_outline_title">Assessment & Certification</h2>
          <ul className="seo_outline_list">
            <li>Weekly assignments – 30%</li>
            <li>Practical project / mini case study – 40%</li>
            <li>Final quiz or presentation – 30%</li>
          </ul>
        </div>

        <div className="seo_outline_extra_card">
          <h2 className="seo_outline_title">Recommended Tools</h2>
          <ul className="seo_outline_list">
            <li>Google Analytics & Search Console</li>
            <li>Ahrefs / SEMrush / Moz (trial versions)</li>
            <li>Ubersuggest</li>
            <li>Screaming Frog SEO Spider</li>
            <li>Google Keyword Planner</li>
          </ul>
        </div>

        <div className="seo_outline_extra_card">
          <h2 className="seo_outline_title">Suggested Readings / Resources</h2>
          <ul className="seo_outline_list">
            <li><em>The Art of SEO</em> by Eric Enge et al.</li>
            <li>Google SEO Starter Guide</li>
            <li>Moz Beginner’s Guide to SEO</li>
            <li>Ahrefs Blog, Search Engine Journal, Neil Patel Blog</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
)}


    </div>
  )
}

export default Outlines