import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlight = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Building clean, maintainable, and scalable applications with long-term reliability."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing applications for speed, responsiveness, and smooth user experiences."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Collaborating effectively with teams to transform ideas into real products."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Exploring modern technologies and best practices to build future-ready solutions."
    }
];

const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> one Component at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>I’m Sumit Kumar, a frontend-focused full stack developer passionate about building modern, responsive, and high-performance web applications using React.js, Node.js, Express.js, and MongoDB.</p>
                        <p>During my internship at MedCapSky, I contributed to real-world React.js applications by developing reusable UI components, improving responsiveness, fixing bugs, and collaborating with teams using Git and GitHub workflows. My work was recognized with a Certificate of Appreciation for contributing to impactful healthcare-focused solutions.</p>
                        <p>I’ve also built projects like a Finance Dashboard and “Samvidhan Seekho,” where I focused on creating intuitive interfaces, dynamic filtering systems, and scalable frontend architectures that improve user interaction and accessibility.</p>
                        <p>I enjoy transforming ideas into polished digital experiences and continuously expanding my backend, API, and system design skills to grow into a stronger full stack engineer.</p>
                    </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">My goal is to build products that are not only visually appealing but also fast, scalable, and genuinely useful for people. I’m driven by continuous learning, clean engineering practices, and creating technology that delivers real-world impact.</p>
                </div>
                </div>

            {/* Right Column  */}
            <div className="grid sm:grid-cols-2 gap-6 my-6">
                {highlight.map((item,idx)=>(
                    <div 
                    key={idx} 
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{animationDelay:`${(idx+1)*100}ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </section>
}

export default About;