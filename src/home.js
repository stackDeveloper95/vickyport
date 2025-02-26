import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactsIcon from '@mui/icons-material/Contacts';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="img">
        <img src="/image/profile.jpg" alt="profile"/>
        <div className="cont">
          <h1>HAI I AM A </h1><h1>WEB DESIGNER</h1>
          <ul className='logi'><li><FacebookIcon/></li>
          <li><a href='https://instagram.com/sanjai_kumar.95?igshid=MzMyNGUyNmU2YQ==' target="# "><InstagramIcon/></a></li>
          <li><a href="https://www.linkedin.com/in/sanjai-kumar-r-102365294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="# "><LinkedInIcon/></a></li><li><a href="https://youtube.com/@im_Explanation?si=IAR9cmfpfjmLW76c" target="#"><YouTubeIcon/></a></li>
          <li><Link to="/cont"><ContactsIcon/></Link></li></ul>
          <p>! A web designer is a creative professional who focuses on the visual aesthetics and user experience of websites. They have a keen eye for design principles, color schemes, typography, and layout techniques, all of which are essential for creating visually appealing and intuitive websites. Web designers use various graphic design software tools to craft website elements, such as logos, images, and buttons, ensuring they align with the overall branding and purpose of the site. Collaboration with clients and web developers is common, as designers translate client requirements and ideas into stunning visual concepts. </p>
          <button>Learn...</button>
        </div>
      </div>
    </div>
  )
}

export default Home