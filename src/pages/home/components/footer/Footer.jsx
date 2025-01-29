
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#253848] h-screen text-white'>
      

      <div className='flex flex-col-reverse md:flex-row'>
        <div className='  flex flex-col items-center md:w-2/3 md:px-28 md:items-start'>
          <h1 className='text-xl font-bold font-serif mb-5 mt-3'>
            Start Growing With HubSpot Today
          </h1>
          <p className='pl-5 pr-5 md:pl-0 md:pr-2 text-md flex-wrap font-semibold md:mb-8 mb-3'>
            With HubSpot, customers come first, customization is simple, and teams are unified through a smart CRM. Now you can create a delightful customer experience with ease.
          </p>

          <button className='rounded-md mb-3 pl-8 pr-8 md:pr-2 md:px-0 md:pl-8 py-4 bg-white text-black font-semibold text-lg'>
            Get started free
          </button>

          <p className='pl-5  pr-5 md:pl-0 md:pr-2'>
            For more detailed information on pricing, our free tools, and premium products, please see our <a className='underline text-blue-500' href="https://www.hubspot.com/pricing?hubs_content=www.hubspot.com/products/get-started-am&hubs_content-cta=Pricing%20Page">Pricing Page</a>.
          </p>
        </div>
        <div className=' flex  md:w-1/3 justify-center md:justify-start items-center'>
          <img className='w-60 md:w-72 lg:w-80' src="https://www.hubspot.com/hs-fs/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_1.png?width=340&name=_cta_contentblock_headshots_headshot_1.png" alt="" />
        </div>

        

      </div>



        <p className='mt-16 mb-5'>Copyright © 2025 HubSpot, Inc.</p>
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
