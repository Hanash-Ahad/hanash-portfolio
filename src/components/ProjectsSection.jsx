import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title:"E-Commerce Website",
        description: "A fully functional and beautiful e-commerce website using Django, Python And Bootstrap.",
        image: "/projects/project1.png",
        tags: ["Django", "Python", "Bootstrap"],
        // demoUrl: "#",
        // githubUrl: "#",
    },


    {
        id: 2,
        title:"Pet Adoption Website",
        description: "A website where people adopt pets Using HTML and CSS.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS"],
        // demoUrl: "#",
        // githubUrl: "#",
    },


    {
        id: 3,
        title:"Live Chat APP",
        description: "A simple and functional live chat app where anyone can interact with each other easily Using Django, Python.",
        image: "/projects/project3.png",
        tags: ["Django", "Python"],
        // demoUrl: "#",
        // githubUrl: "#",
    },


    {
        id: 4,
        title:"E-commerce Website",
        description: "A complete eCommerce website with customizable product variants!",
        image: "/projects/project4.png",
        tags: ["Django", "Python", "Bootstrap"],
        // demoUrl: "#",
        // githubUrl: "#",
    },


    {
        id: 5,
        title:"Portfolio Website",
        description: "A Potfolio website Using Django, Python, Bootstrap",
        image: "/projects/project5.png",
        tags: ["Django", "Python", "Bootstrap"],
        // demoUrl: "#",
        // githubUrl: "#",
    },


    {
        id: 6,
        title:"Beautiful Portfolio",
        description: "A beautiful portfolio website using HTML, CSS, TailwindCSS",
        image: "/projects/project6.png",
        tags: ["HTML", "CSS", "TailwindCSS"],
        // demoUrl: "#",
        // githubUrl: "#",
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Hanash-Ahad" 
          target="_blank"
          className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My GitHub <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
