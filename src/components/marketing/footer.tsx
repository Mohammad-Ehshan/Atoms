"use client";

import { IconBrandTelegram } from "@tabler/icons-react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammad-ehshan-4362a0298",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hackathonwalebhaiya",
      label: "Instagram",
    },
    {
      icon: IconBrandTelegram,
      href: "https://t.me/+dFcwrZKd88FiZjU1",
      label: "Telegram",
    },
    { icon: Twitter, href: "https://x.com/ashmes16", label: "Twitter" },
  ];

  const footerLinks = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/service" },
    { title: "Portfolio", href: "https://decryptingehshan.vercel.app" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer
      className="text-white py-16"
      style={{
        background: `linear-gradient(to bottom, 
      rgba(15, 23, 42, 1) 0%, 
      rgba(0, 0, 0, 1) 100%
    )`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <img src="./icons/icon.png" alt="logo" height={70} width={70} />
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We Code, We Create, We Launch - With Results That Speak Louder
              Than Just Design.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                ashmes16@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                7290970786
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                Delhi, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-3">Newsletter</h5>
              {/* <div className="flex ">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-white "
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 ">
                  Subscribe
                </button>
              </div> */}
              <div className="flex flex-wrap md:flex-nowrap w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2 bg-gray-800 border border-gray-700 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none focus:border-purple-500 text-white"
                />
                <button className="px-6 py-2 w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-lg md:rounded-r-lg md:rounded-b-none hover:from-purple-700 hover:to-pink-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Atoms. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
