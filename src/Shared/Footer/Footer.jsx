import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1f1f1f] text-gray-300 pt-16 pb-10 px-5 md:px-20 lg:px-32 font-sans">
            {/* Upper Footer */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-3xl font-bold text-red-400 mb-4">Bistro Boos</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Taste the best burgers, pizzas, and more! Bistro Boos brings you delicious moments crafted with passion and freshness.
                    </p>
                </div>

                {/* Our Menu */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Our Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="/menu/pizza" className="hover:text-red-400">Pizza</a></li>
                        <li><a href="/menu/burger" className="hover:text-red-400">Burger</a></li>
                        <li><a href="/menu/fries" className="hover:text-red-400">Fries</a></li>
                        <li><a href="/menu/drinks" className="hover:text-red-400">Drinks</a></li>
                        <li><a href="/menu/desserts" className="hover:text-red-400">Desserts</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/about" className="hover:text-red-400">About Us</a></li>
                        <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
                        <li><a href="/order" className="hover:text-red-400">Order Now</a></li>
                        <li><a href="/reservation" className="hover:text-red-400">Reservation</a></li>
                        <li><a href="/faq" className="hover:text-red-400">FAQs</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500"><FaYoutube /></a>
                        <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-red-300"><FaPinterestP /></a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        Follow us for tasty updates and offers!
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-10"></div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {currentYear} Bistro Boos. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed & Cooked with ❤️ by <span className="text-white font-medium">Md Riyajul Islam Akash</span></p>
            </div>
        </footer>
    );
};

export default Footer;
