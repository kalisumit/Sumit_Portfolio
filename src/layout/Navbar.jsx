import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
                { href: "#about", label: "About" }, 
                { href: "#projects", label: "Projects" }, 
                { href: "#experience", label: "Experience" }, 
                { href: "#testimonials", label: "Focus" },
            ]

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScroll,setIsScroll] = useState(false)

    useEffect(()=> {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScroll ? "glass-strong py-1" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                SK<span className="text-primary">.</span>
            </a>

            {/* Desktop NAV  */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, indx) => {
                        return <a 
                            key={indx} 
                            href={link.href} 
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                    })}
                </div>
            </div>

            {/* CTA Button  */}
            <div className="hidden md:block">
                <a href="#contact"><Button size="sm">Let's Talk</Button></a>
            </div>

            {/* Mobile Menu Button  */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> :<Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Menu  */}
        {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col items-center gap-4">
                {navLinks.map((link, indx) => {
                return <a key={indx} onClick={()=> (setIsMobileMenuOpen(false))}href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
                        {link.label}
                    </a>
                })}
                {/* CTA Button  */}
                <div className=" md:hidden block">
                    <Button>Contact Me</Button>
                </div>
            </div>
        </div>}

    </header>
}

export default Navbar;