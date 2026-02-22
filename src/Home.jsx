import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
function Home() {
  return (
    <div>
  <h1 className='a5'>Welcome to RS Skills Hub </h1>
  {/* ........carosal............. */}
<div className='row ' style={{backgroundColor:'whitesmoke'}}>
<div className='col-3 a8'>
  <img src="bg1.png" alt="" />
</div>
<div className='col-6 a9'>
    <div id="carouselExampleAutoplaying" className="carousel slide a6" data-bs-ride="carousel"  data-bs-interval="2000" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* Replace "..." with your actual image path */}
      <img src="computer course.png" className="d-block a7" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="cyber security.png" className="d-block a7" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="digital marketing.png" className="d-block a7" alt="Slide 3" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="ethical hacking.jpg" className="d-block a7" alt="Slide 4" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="frelancing.png" className="d-block a7" alt="Slide 5" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="full stack.png" className="d-block a7" alt="Slide 7" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="graphic designing.png" className="d-block a7" alt="Slide 8" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="mern.png" className="d-block a7" alt="Slide 9" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="seo.png" className="d-block a7" alt="Slide 10" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="shopify.png" className="d-block a7" alt="Slide 11" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="SMM.png" className="d-block a7" alt="Slide 12" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="tax.png" className="d-block a7" alt="Slide 13" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="trading.png" className="d-block a7" alt="Slide 14" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="video editing.png" className="d-block a7" alt="Slide 15" />
    </div>
     <div className="carousel-item">
      {/* Replace "..." with your actual image path */}
      <img src="youtube automation.png" className="d-block a7" alt="Slide 16" />
    </div>
     
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='col-3 a10' >
  <img src="bg6.png" alt="" />
</div>
</div>
{/* ........................carosal complete............... */}
{/* .................... Home cards.................. */}
 <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-center mb-4 mt-4 bg-dark text-white a5">Why RS Skills Hub is the Right Choice ?????</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We are committed to providing you with the best learning environment and career support.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <i data-lucide="award" className="w-10 h-10 mx-auto mb-4 text-indigo-600"></i>
            <h3 className="text-xl font-bold mb-2 text-gray-900 a5">Certified Experts</h3>
            <p className="text-gray-600">Learn directly from industry leaders with decades of real-world experience.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <i data-lucide="infinity" className="w-10 h-10 mx-auto mb-4 text-indigo-600"></i>
            <h3 className="text-xl font-bold mb-2 text-gray-900 a5">Lifetime Access</h3>
            <p className="text-gray-600">Revisit lessons and enjoy free updates to your enrolled courses forever.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <i data-lucide="briefcase" className="w-10 h-10 mx-auto mb-4 text-indigo-600"></i>
            <h3 className=" mb-2  a5">Dedicated Job Support</h3>
            <p className="text-gray-600">Get portfolio reviews, interview prep, and career guidance after graduation.</p>
          </div>

        </div>
      </div>
    </section>
     <section className="bg-indigo-700 py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="mb-4 a5" >Ready to Start Your Journey?</h2>
                <p className="text-indigo-200 text-lg mb-8">Join thousands of successful students who launched their careers with RS Skills Hub.</p>
                <h2 className="mb-4 a5" ><a  href="https://www.facebook.com/p/RS-Skills-Hub-61563342476841">Click Here To Visit Fb Page</a></h2>
                <Link to="/registration" className=" text-decoration-none btn btn-dark">
                    Register Today & Get 20% Off!
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Home