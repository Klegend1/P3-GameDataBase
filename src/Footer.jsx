// import React from 'react';

// function Footer() {
//     return (
//       <footer className="bg-black text-center text-white py-6">
//         <div className="container mx-auto">
//           <p>&copy; 2024 Fan Site. All rights reserved.</p>
  
//           <div className="mt-4">
//             <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
//             <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
//             <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  
//   export default Footer;
  

import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-center text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          &copy; 2024 Fan Site. All rights reserved.
        </p>
  
        {/* Links */}
        <div className="mt-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-4 transition-colors duration-300">About</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-4 transition-colors duration-300">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-4 transition-colors duration-300">Terms of Service</a>
        </div>

        {/* Social Media Links (Optional) */}
        <div className="mt-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-3 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-3 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-3 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
