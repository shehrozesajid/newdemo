import React from 'react'

function Map() {
 
  return (
<div>
   <div>
    <div className='container mb-5 mt-5'>
         <div className='row mainDiv'>
           <div className='col-12 a16'>
             <h2  className='mt-5 mb-5'>Address 1: RS Skills Hub</h2>
             <p>Gilistan Park Dr Ashraf Street <br /> Dr Naimat-Ullah House <br /><b>RS SKILLS HUB</b></p>
         
             <iframe className='mt-5 mb-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6788.890152047621!2d73.99174380155947!3d31.703734977575255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c29b4d423973%3A0xcbb3270354eb5618!2sGulistan%20Park%2C%20Sheikhupura!5e0!3m2!1sen!2s!4v1759382734094!5m2!1sen!2s" width="400" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
           </div>
         </div>
       </div>
       {/* .......................second div...................... */}
        <div className='container mb-5 mt-5 '>        <div className='row mainDiv'>
          <div className='col-12 a16'>
             <h2 className='mt-5 mb-5'>Address 2: Digital Ocean Institute </h2>
 <p>Real Chowk Near Liaqat Park <br /> Islamia School Sheikhupura <br /> <b >Digital Ocean Institute Sheikhupura</b></p>
       
 <iframe  className='mt-5 mb-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.147120676211!2d73.98550627391009!3d31.711875937658558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c3515499fea3%3A0x6ece407b66036ff4!2sArif%20law%20Associates!5e0!3m2!1sen!2s!4v1759383529115!5m2!1sen!2s" width="400" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          </div>
           </div>
         </div>

     </div>

    
</div>
  )
}

export default Map