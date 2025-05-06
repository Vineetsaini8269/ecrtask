import React from 'react'

const Navbar = () => {
  return (
    <div>

        {/* Navbar */}
  <nav
  className="flex justify-between items-center p-4 shadow-md text-white"
  style={{
    backgroundImage: "linear-gradient(90deg, rgba(46,43,43,1) 0% ,  rgba(60,66,68,1) 61% , rgba(160,162,162,1) 100% )",
  }}
>
  <div className="text-xl font-bold">Hello Folks</div>
  <ul className="flex space-x-6">
    <li className="cursor-pointer">Home</li>
    <li className="cursor-pointer">Ministry</li>
    <li className="cursor-pointer">Offerings</li>
    <li className="cursor-pointer">Documents</li>
    <li className="cursor-pointer">Media</li>
    <li className="cursor-pointer">Connect</li>
  </ul>
</nav>


      
    </div>
  )
}

export default Navbar
