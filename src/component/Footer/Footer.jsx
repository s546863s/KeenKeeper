import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-[#1a432e] text-white  rounded p-10 ">
 <div className=" flex flex-col justify-center items-center ">
      
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold mb-4">KeenKeeper</h1>
        <p className="max-w-2xl text-lg text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col items-center mt-4">
        <h3 className="text-xl font-semibold mb-4">Social Links</h3>
        <div className="flex gap-4">
          {/* daisyUI Avatar or simple round button style */}
          <div className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none">
            <FaInstagram size={24} />
          </div>
          <div className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none">
            <FaFacebook size={24} />
          </div>
          <div className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none">
            <FaTwitter size={24} />
          </div>
        </div>
      </div>

      {/* Bottom Footer Border */}
      <div className="w-full border-t border-gray-600 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </div>
</footer>
    );
};

export default Footer;