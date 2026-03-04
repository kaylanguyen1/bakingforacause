import { useState } from 'react'
import '../App.css'
import { IoLogoInstagram  } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer inter-regular">
            baking for a cause 2026 | 
            <a
                href="https://www.instagram.com/utdbakingforacause/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoInstagram />
            </a>
            <a 
                href="https://discord.gg/x5C5wWC3bh"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaDiscord />
            </a>
        </div>
    )
}
export default Footer