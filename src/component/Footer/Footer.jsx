import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a432e] text-white p-6 md:p-10 mt-8">
            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
                
                {/* Title Section */}
                <div className="text-center mb-8">
                    
                    <h1 className="text-2xl md:text-6xl font-bold mb-4">KeenKeeper</h1>
                    <p className="max-w-2xl text-sm md:text-lg text-gray-300 px-4 md:px-0">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                {/* Social Links Section */}
                <div className="flex flex-col items-center mt-4">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none btn-sm md:btn-md">
                            <FaInstagram className="text-lg md:text-2xl" />
                        </a>
                        <a href="#" className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none btn-sm md:btn-md">
                            <FaFacebook className="text-lg md:text-2xl" />
                        </a>
                        <a href="#" className="btn btn-circle bg-white text-[#1a432e] hover:bg-gray-200 border-none btn-sm md:btn-md">
                            <FaTwitter className="text-lg md:text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Bottom Footer Border */}
                <div className="w-full border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4 md:gap-0">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-4 md:gap-6">
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