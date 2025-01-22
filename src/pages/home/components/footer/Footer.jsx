
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#2e475d] h-screen text-white'>
      

      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col items-center'>
          <h1>
            Start Growing With HubSpot Today
          </h1>
          <p>
            With HubSpot, customers come first, customization is simple, and teams are unified through a smart CRM. Now you can create a delightful customer experience with ease.
          </p>
        </div>
        <div className='flex justify-center'>
          <img className='w-fit' src="https://www.hubspot.com/hs-fs/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_1.png?width=340&name=_cta_contentblock_headshots_headshot_1.png" alt="" />

        </div>

      </div>
        <p>Copyright © 2025 HubSpot, Inc.</p>
        <div className='flex flex-wrap text-sm'>
          <p>Legal Stuff</p>
          <p>Privacy Policy</p>
          <p>Security</p>
          <p>Website Accessibility</p>
          <p>Manage Cookies</p>
        </div>
      <div>

        
      </div>
    </div>
  )
}

export default Footer
