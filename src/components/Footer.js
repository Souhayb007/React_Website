import React from 'react';
import InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon  from '@mui/icons-material/Twitter';
import FacebookIcon  from '@mui/icons-material/Facebook';
import TiktokIcon  from '@mui/icons-material/tiktok';
import LinkdeInIcon  from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer(){
  return (
    <div className='Footer'>
      <div className='socialMedia'>   
        <InstagramIcon />
        <TwitterIcon/>
        <FacebookIcon/>
        <TiktokIcon/>
        <LinkdeInIcon/>
      </div>
       <p>
            &copy;2025 ELamritechpizza.com
        </p>
    </div>
  ); 
}

export default Footer;