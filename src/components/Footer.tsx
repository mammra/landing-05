import React from "react";
const Footer = () => {
  const footerLinks = ["Privacy Policy", "Terms of Service"];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} SimpleSite. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-600 hover:text-gray-800">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
