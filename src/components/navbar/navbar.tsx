"use client";

import React from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg w-full py-4 flex items-center justify-center border-b border-gray-200">
            
            <div className="hidden md:flex md:space-x-8">
                {
                  links.map((link) => (
                    <NavLink 
                     url={link.url}
                     title={link.title}
                      key={link.id}
                    />
                  ))
                }
            </div>

    </nav>
  );
};

const links = [
  {
    id: crypto.randomUUID(),
    title: "Home",
    url: ''
  },
  
  {
    id: crypto.randomUUID(),
    title: "Events",
    url: 'events'
  },
  {
    id: crypto.randomUUID(),
    title: "About Us",
    url: 'about'
  },
  {
    id: crypto.randomUUID(),
    title: "Contact Us",
    url: 'contact'
  },
]


