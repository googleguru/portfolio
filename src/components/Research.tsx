
import { useState } from "react";
import { Code, Brain, Users, Lightbulb, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchArea {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  projects: Array<{
    title: string;
    description: string;
    link?: string;
  }>;
}

const Research = () => {
  const [activeArea, setActiveArea] = useState<number>(1);

  const researchAreas: ResearchArea[] = [
    {
      id: 1,
      icon: <Brain className="h-5 w-5" />,
      title: "Machine Learning & AI",
      description: "Developing novel machine learning approaches for VLSI design optimization and educational applications.",
      projects: [
        {
          title: "Privacy-Preserving Machine Learning",
          description: "Research on secure multiparty computation, homomorphic encryption, and differential privacy.",
          link: "#"
        },
        {
          title: "Deep Learning Applications",
          description: "Applying deep learning techniques to solve complex problems in VLSI design and healthcare.",
        }
      ]
    },
    {
      id: 2,
      icon: <Users className="h-5 w-5" />,
      title: "VLSI Design & Optimization",
      description: "Developing efficient algorithms for VLSI circuit partitioning and physical design optimization.",
      projects: [
        {
          title: "Satin Bowerbird Optimization",
          description: "Novel approach for efficient VLSI circuit partitioning based on Satin Bowerbird Optimization (SBO).",
          link: "#"
        },
        {
          title: "Ant Colony Optimization",
          description: "Applying Ant Colony Optimization techniques to VLSI physical design challenges.",
        }
      ]
    },
    {
      id: 3,
      icon: <Code className="h-5 w-5" />,
      title: "Educational Technology",
      description: "Using computational methods to enhance educational experiences and outcomes for students.",
      projects: [
        {
          title: "E-Learning Platforms",
          description: "Experience with various e-learning platforms including NPTEL, Coursera, edX, and LinkedIn Learning.",
          link: "#"
        },
        {
          title: "Programming Education",
          description: "Teaching programming concepts using Python, R, VHDL, and Verilog.",
        }
      ]
    },
    {
      id: 4,
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Emerging Technologies",
      description: "Investigating applications of emerging technologies in healthcare, IoT, and cybersecurity.",
      projects: [
        {
          title: "IoT Applications",
          description: "IoT-based remote patient monitoring solutions with AI-driven analytics.",
          link: "#"
        },
        {
          title: "Blockchain Technology",
          description: "Blockchain-based deep-learning strategies for secure healthcare data transfer across IoT.",
        }
      ]
    }
  ];

  const activeResearch = researchAreas.find(area => area.id === activeArea) || researchAreas[0];

  return (
    <section id="research" className="py-24 bg-white section-fade">
      <div className="content-container">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-wider text-primary/70 font-medium">
            Areas of Interest
          </span>
          <h2 className="mt-2 font-serif text-4xl font-medium">Research Focus</h2>
          <div className="mt-4 h-px w-20 bg-primary/30 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Research Areas Tabs */}
          <div className="md:col-span-4 flex md:flex-col overflow-auto md:overflow-visible gap-2 pb-4 md:pb-0">
            {researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg text-left transition-all hover-scale",
                  activeArea === area.id
                    ? "bg-accent shadow-sm"
                    : "bg-white hover:bg-accent/50"
                )}
              >
                <div className={cn(
                  "p-2.5 rounded-md",
                  activeArea === area.id
                    ? "bg-primary text-white"
                    : "bg-accent/70 text-primary/70"
                )}>
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-medium text-primary">{area.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Active Research Content */}
          <div className="md:col-span-8 bg-accent/30 rounded-lg p-6 md:p-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-medium">{activeResearch.title}</h3>
              <p className="mt-3 text-primary/80 leading-relaxed">
                {activeResearch.description}
              </p>

              <div className="mt-8 space-y-4">
                <h4 className="font-medium text-sm uppercase tracking-wider text-primary/70">
                  Notable Projects
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeResearch.projects.map((project, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-white/80 shadow-sm border border-accent/80 hover-scale"
                    >
                      <h5 className="font-medium text-primary">{project.title}</h5>
                      <p className="mt-2 text-sm text-primary/70">
                        {project.description}
                      </p>
                      {project.link && (
                        <a 
                          href={project.link}
                          className="mt-3 inline-flex items-center text-sm text-primary/80 hover:text-primary"
                        >
                          Learn more <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
