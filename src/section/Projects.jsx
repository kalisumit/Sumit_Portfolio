import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Button } from "../components/Button";

const projects = [
    {
        title:"Samvidhan Seekho",
        description: "React.js-based educational platform focused on constitutional awareness. Implemented reusable frontend structures and multiple responsive UI sections using React Hooks and componentbased architecture",
        image:"/projects/image2.png",
        tags: ["React","TailwindCSS","MongoDB"],
        link: "https://samvidhanseekho.vercel.app/",
        github: "https://github.com/SamvidhanSeekho/Samvidhan_1"
    },
    {
        title:"Finance Dashboard",
        description: "Engineered an interactive finance dashboard featuring 5+ analytical widgets and dynamic data visualization components.",
        image:"/projects/image.png",
        tags: ["React","TailwindCSS","Chart.js"],
        link: "https://finance-dashboard-eight-mauve.vercel.app/",
        github: "#"
    },
    {
        title:"Styclo (Internship Project)",
        description: "an e-commerce platform that allows users to browse and purchase apparel, cloths, and accessories online..",
        image:"/projects/image4.png",
        tags: ["React","TailwindCSS"],
        link: "https://styclo-web-ten.vercel.app/",
        github: "https://github.com/kalisumit/Styclo-web"
    },
    {
        title:"MedCapSky (Internship Project)",
        description: "Developed a responsive healthcare-focused web application during my internship, building modern UI components and improving user experience using React.js and TailwindCSS.",
        image:"/projects/image5.png",
        tags: ["React","TailwindCSS"],
        link: "https://med-cap-sky.vercel.app/",
        github: "https://github.com/kalisumit/MedCapSky"
    },
    {
        title:"Face Recognition Security System",
        description: "Developed a real-time face recognition system using OpenCV. Implemented facial data extraction and automated identity detection using image processing techniques",
        image:"/projects/image3.png",
        tags: ["Python","OvenCV"],
        // link: "#",
        github: "https://github.com/kalisumit/security-camera"
    },
]   

const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg Glows  */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header  */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that 
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to Innovation tools that solve real-world problems.
                </p>
            </div>

            {/* Project Grid  */}
            <div className="grid md:grid-cols-2 gap-8 ">
                {projects.map((project,idx)=>(
                    <div
                        key={idx} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay:`${((idx+1)*100)}ms`}}>
                        {/* Image  */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from card via card/50 to-transparent opacity-60"/>
                            {/* Overlay Links  */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration 300">
                                {project.link && <a target="blank" href={project.link} className="p-3 rounded-full glass hover:gb-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5"/></a>}
                                <a href={project.github} target="blank" className="p-3 rounded-full glass hover:gb-primary hover:text-primary-foreground transition-all"><GrGithub className="w-5 h-5"/></a>
                            </div>
                        </div>
                        {/* Content  */}
                        <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                <a href={project.github} target="blank"><h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3></a>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-trnslate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag,idx)=>(
                                        <span key={idx} className=" flex items-center px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                {project.link ? <a href={project.link} target="blank"><Button size="sm">Live Demo<ArrowUpRight /></Button></a> : <a target="blank" href={project.github} className="p-3 rounded-full glass hover:gb-primary hover:text-primary-foreground transition-all"><GrGithub className="w-5 h-5" /></a>}
                                
                                </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* View All CTA  */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <a href="https://github.com/kalisumit" target="blank">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedBorderButton>
                </a>
            </div>
        </div>

    </section>
}



export default Projects;