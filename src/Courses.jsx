import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"; 

function Courses() {
  
  return (
    <div>
      {/* ..............row 1 cards.................. */}
      <div className='container'>
  <div className='row mt-3'>
  {/* .............card 1...................... */}
   <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="web dev.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Web Development</h3> <hr />
          <p className='card-text'>Build responsive websites. Master HTML, CSS, and job-ready JavaScript skills.</p>
          <Link to="/outline?course=mern" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .......................card 2............................... */}
     <div className='col-3 '  id='a13' >
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="digital marketing.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Digital Marketing</h3> <hr />
          <p className='card-text'>Drive high-value traffic and sales. Master SEO, social media,paid advertising.</p>
          <Link to="/outline?course=dm" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* ....................crd 3.............................. */}
      <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="youtube automation.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Youtube Automation</h3> <hr />
          <p className='card-text'>DGenerate passive income automating content. Launch your cash-cow channel.</p>
          <Link to="/outline?course=youtube" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .........................card 4......................... */}
    <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="ethical hacking.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Ethical Hacking</h3> <hr />
          <p className='card-text'>Learn offensive security. Legally test and defend systems like a pro.</p>
          <Link to="/outline?course=ethical" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* ..............row 2 cards.................. */}
 <div className='container'>
  <div className='row mt-3'>
  {/* .............card 1...................... */}
   <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="graphic designing.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Graphic Designing</h3> <hr />
          <p className='card-text'>Design stunning visuals. Turn creative ideas into professional branding assets.</p>
          <Link to="/outline?course=graphic" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .......................card 2............................... */}
     <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="SMM.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Social Media Marketing</h3> <hr />
          <p className='card-text'>	Dominate social media. Create profitable ad campaigns and viral content.</p>
          <Link to="/outline?course=social" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* ....................crd 3.............................. */}
      <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="mern.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>MERN <br /> Stack</h3> <hr />
          <p className='card-text'>Launch full-stack web apps. Use MongoDB, Express, React, and Node.js.</p>
          <Link to="/outline?course=mern" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .........................card 4......................... */}
    <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="video editing.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Video <br /> Editing</h3> <hr />
          <p className='card-text'>Produce cinematic content. Master editing software and visual storytelling skills.</p>
          <Link to="/outline?course=editig" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* ..............row 3 cards.................. */}
    <div className='container'>
  <div className='row mt-3'>
  {/* .............card 1...................... */}
   <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="shopify.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Shopify</h3> <hr />
          <p className='card-text'>	Launch a profitable e-commerce store. Scale your business on Shopify.</p>
          <Link to="/outline?course=shopify" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .......................card 2............................... */}
     <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="tax.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Taxation Law</h3> <hr />
          <p className='card-text'>	Master tax compliance. Navigate complex law for business and wealth.</p>
          <Link to="/outline?course=tax" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* ....................crd 3.............................. */}
      <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="seo.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>SEO</h3> <hr />
          <p className='card-text'>Rank #1 on Google. Master on-page, technical SEO for organic growth.</p>
          <Link to="/outline?course=seo" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .........................card 4......................... */}
    <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="trading.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Forex Trading</h3> <hr />
          <p className='card-text'>Learn professional trading strategies. Analyze markets and trade with confidence.</p>
          <Link to="/outline?course=forex" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* ..............row 4 cards.................. */}
   <div className='container'>
  <div className='row mt-3'>
  {/* .............card 1...................... */}
   <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="computer course.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Computer Course</h3> <hr />
          <p className='card-text'>Achieve office mastery: Excel, Word, and PowerPoint for career impact.</p>
          <Link to="/outline?course=computer" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .......................card 2............................... */}
     <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="cyber security.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Cyber <br /> Security</h3> <hr />
          <p className='card-text'>Protect digital assets. Become a certified network defender against modern threats.</p>
          <Link to="/outline?course=cyber" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* ....................crd 3.............................. */}
      <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="full stack.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Full Stack Web Development</h3> <hr />
          <p className='card-text'>Go from zero to full-stack developer. Build, deploy, and manage web apps.</p>
          <Link to="/outline?course=mern" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .........................card 4......................... */}
    <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="frelancing.png" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Freelancing <br />Course</h3> <hr />
          <p className='card-text'>Launch a profitable freelancing career. Master client acquisition and retention.</p>
          <Link to="/outline?course=freelancing" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* ..........................row 5 cards...................... */}
   <div className='container'>
  <div className='row mt-3'>
  {/* .............card 1...................... */}
   <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img id='a13_1' src="resin.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>Art <br /> And Craft</h3> <hr />
          <p className='card-text'>Unleash your creativity. Learn hands-on techniques in diverse art and craft mediums..</p>
          <Link to="/outline?course=art" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .......................card 2............................... */}
     <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img src="web dev.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>pending <br /> course...</h3> <hr />
          <p className='card-text'>Protect digital assets. Become a certified network defender against modern threats.</p>
          <Link to="/outline?course=panding" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* ....................crd 3.............................. */}
       <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img src="web dev.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>pending <br /> course...</h3> <hr />
          <p className='card-text'>Protect digital assets. Become a certified network defender against modern threats.</p>
          <Link to="/outline?course=pending" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
    {/* .........................card 4......................... */}
     <div className='col-3 '  id='a13'>
      <div className='card  bg-dark text-white'>
        <img src="web dev.jpg" alt="" className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title' id='a11'>pending <br /> course...</h3> <hr />
          <p className='card-text'>Protect digital assets. Become a certified network defender against modern threats.</p>
          <Link to="/outline?course=pending" className='btn  w-100 ' id='a12'>Click To View Outline</Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Courses