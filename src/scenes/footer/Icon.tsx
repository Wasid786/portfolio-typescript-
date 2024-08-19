import React from 'react';
import { FaGithub, FaTwitter, FaGoogleDrive, FaLinkedin } from 'react-icons/fa';

interface SocialIcon {
    icon: React.ElementType;
    link: string;
}

const socialIcons: SocialIcon[] = [
    { icon: FaGithub, link: 'https://github.com/Wasid786' },
    { icon: FaTwitter, link: 'https://x.com/Wasid_ansari_1' },
    { icon: FaGoogleDrive, link: 'https://drive.google.com/file/d/1DHMsMoy44C2z5wQZ9HAaSVPSIzYQ5lXc/view?usp=drive_link' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/wasid-ansari-57ab75229/' },
];

export const IconWrapper: React.FC = () => {
    return (
        <div className="flex space-x-4 mt-4">
            {socialIcons.map((socialIcon, index) => (
                <a
                    key={index}
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                >
                    <socialIcon.icon size={24} />
                </a>
            ))}
        </div>
    );
};
