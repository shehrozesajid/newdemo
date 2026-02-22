import { React } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer>
        <hr />

        <div className="row m-0 p-0">

          <div className="col-4 ps-5">
            <Link to="/home"><i className="fa-solid fa-house"></i> Home</Link><br />
            <Link to="/courses"><i className="fa-solid fa-list"></i> Courses</Link><br />
            <Link to="/fee"><i className="fa-solid fa-money-bill"></i> Fee</Link><br />
            <Link to="/timetable"><i className="fa-solid fa-calendar-days"></i> Time Table</Link>
          </div>

          <div className="col-4">
            <Link to="/map"><i className="fa-solid fa-location-dot"></i> Map</Link><br />
            <Link to="/about"><i className="fa-solid fa-address-card"></i> About Us</Link><br />
            <Link to="/contact"><i className="fa-solid fa-square-phone-flip"></i> Contact Us</Link><br />
            <Link to="/registration"><i className="fa-solid fa-download"></i> Registration</Link>
          </div>

          <div className="col-4">
            <h3 id="a4">RS Skills Hub</h3>

            <div className="ratio ratio-16x9 mb-2 " style={{ maxWidth: "350px", height: "170px" }}>
              <iframe className='mt-2'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.147286771489!2d73.9880812!3d31.711871399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c3515499fea3%3A0x6ece407b66036ff4!2sArif%20law%20Associates!5e0!3m2!1sen!2s!4v1760302160855!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RS Skills Hub Map"
              ></iframe>
            </div>

            <a href="https://www.facebook.com/p/RS-Skills-Hub-61563342476841">
              <span style={{ fontSize: '20px' }}>RS Skills Hub</span>{' '}
              <span style={{ fontSize: '10px' }}>(Fb Page)</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
