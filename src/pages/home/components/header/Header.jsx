import React from 'react';
import logo from './assets/images/logo.png'
import asideimge from './assets/images/asideimg.png'
import './assets/style/Header.css'

const Header = () => {
  return (
    <>
       <nav className='nav-bar'>
        <img src={logo} alt="logo"  width={'80px'} height={'80px'} />

        <div>
        <button className='nav-btn'>Get started free</button>
        </div>
       </nav>

    <header className='header-main'>
        <section>
            <div>
              <h1>Get Started With HubSpot</h1>
            </div>
            <p>Whether you want to increase your leads, accelerate sales, or simplify your process, HubSpot has a solution to help you grow.</p>

            <button>Get started free</button>
        </section>

         <aside>
          <img src={asideimge} alt="asideimg" />

         </aside>
    </header>
    

    </>
  );
}

export default Header;
