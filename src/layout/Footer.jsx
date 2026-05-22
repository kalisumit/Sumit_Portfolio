import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
    { icon: GrGithub, href: "https://github.com/kalisumit", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sumit-kumar-297227268", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/Sumit_kumar8130", label: "Twitter" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border ">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            SK<span className="text-primary">.</span>
                            
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            {/* © */}
                             © {currentYear} Sumit Kumar. Building modern web experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}

                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};