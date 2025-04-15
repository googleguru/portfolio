
import { Briefcase, GraduationCap, Award, BookOpen, Library, CheckCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type ExperienceItem = {
  id: number;
  type: "education" | "professional" | "award";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
};

type CourseItem = {
  id: number;
  title: string;
};

type AchievementItem = {
  id: number;
  description: string;
};

const Experience = () => {
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      type: "professional",
      title: "Assistant Professor",
      organization: "SRM Institute of Science Technology",
      location: "Chennai",
      period: "2024 - Present",
      description: "Teaching subjects like Software Engineering and Advanced Mobile Communication. Handling practical sessions and guiding student projects. Serving as Department NAAC Coordinator.",
    },
    {
      id: 2,
      type: "professional",
      title: "Assistant Professor",
      organization: "Rajalakshmi Engineering College",
      location: "Chennai",
      period: "2024",
      description: "Lectured on Artificial Intelligence & Machine Learning, Data Science using R, and Programming Using C. Guided projects, managed practical sessions, and coordinated NAAC activities as department coordinator.",
    },
    {
      id: 3,
      type: "professional",
      title: "Assistant Professor",
      organization: "SRMIST Ramapuram",
      location: "Chennai",
      period: "2022 - 2024",
      description: "Taught subjects including Artificial Intelligence, Software Engineering, Analog and Digital Electronics Lab, Wireless Sensor Networks, and Computer Communications. Organized technical workshops and webinars, and served as Lab in-charge, IIT-PALS Coordinator, and hostel coordinator.",
    },
    {
      id: 4,
      type: "professional",
      title: "Post Doctoral Fellow",
      organization: "City University of London",
      location: "London, UK",
      period: "2023 - 2024",
      description: "Researched privacy-preserving machine learning, secure multiparty computation, homomorphic encryption, deep learning, and differential privacy. Developed algorithms and protocols, collaborated with multidisciplinary teams, and mentored graduate students.",
    },
    {
      id: 5,
      type: "professional",
      title: "Lecturer, Research Scholar, JRF, SRF",
      organization: "Sri Sivasubramaniya Nadar College of Engineering",
      location: "Kalavakkam",
      period: "2016 - 2022",
      description: "Handled subjects like VLSI Design, Electronic Circuits, and VLSI Design Lab. Prepared lab manuals, assisted with ISO certification, and analyzed literature on VLSI Physical Design and Micro Electronics.",
    },
    {
      id: 6,
      type: "education",
      title: "Ph.D. in Information & Communication Engineering",
      organization: "Anna University",
      location: "Chennai",
      period: "2017 - 2022",
      description: "Research focus on VLSI design optimization and machine learning applications.",
    },
    {
      id: 7,
      type: "education",
      title: "M.E. in VLSI Design",
      organization: "Mepco Schlenk Engineering College",
      location: "Tamil Nadu",
      period: "2014 - 2016",
      description: "Graduated with first class honors.",
    },
    {
      id: 8,
      type: "education",
      title: "B.E. in Electronics and Communication Engineering",
      organization: "RVS College of Engineering and Technology",
      location: "Dindigul",
      period: "2010 - 2014",
      description: "Graduated with first class honors.",
    }
  ];

  const courses: CourseItem[] = [
    { id: 1, title: "DATA VISUALIZATION USING PYTHON" },
    { id: 2, title: "PYTHON DATA STRUCTURES" },
    { id: 3, title: "MACHINE LEARNING WITH PYTHON - LEVEL 1" },
    { id: 4, title: "PYTHON ESSENTIAL TRAINING" },
    { id: 5, title: "GENERATIVE AI FUNDAMENTALS" },
    { id: 6, title: "COMMUNICATION NETWORKS" },
    { id: 7, title: "CMOS DIGITAL VLSI" },
    { id: 8, title: "DIGITAL CIRCUITS" },
    { id: 9, title: "VLSI DESIGN FLOW: RTL TO GDS" }
  ];

  const achievements: AchievementItem[] = [
    { 
      id: 1, 
      description: "Organized a National Conference on \"Recent Research in Advanced Computing\"(NCRRAC 2022) on 27th May'2022 at SRMIST-Ramapuram, Chennai."
    },
    { 
      id: 2, 
      description: "Represented as a Resource person in a one-week webinar titled \"An Introduction to MATLAB Programming for Beginners\" from 27th Mar'2023 to 31st Mar'2023 at SRMIST- Ramapuram, Chennai."
    },
    { 
      id: 3, 
      description: "Organized a one-day webinar on \"Python: Development to Deployment\" on 25th Feb'2023 at SRMIST-Ramapuram, Chennai."
    },
    { 
      id: 4, 
      description: "Acted as a Session chair for \"2nd National Conference on Robotics, Automation, Manufacturing and Power Systems\" at Rajalakshmi Engineering College, Chennai on 12th Apr'2023."
    },
    { 
      id: 5, 
      description: "Received the கல்வி திலகம் award from Lions Clubs International in October 2024, recognizing outstanding contributions to education and community service."
    },
    { 
      id: 6, 
      description: "Completed over 300 AI-based online courses on LinkedIn, edX, and AWS, demonstrating continuous learning and commitment to professional development in artificial intelligence and technology."
    }
  ];

  const sortedItems = [...experienceItems].sort((a, b) => {
    const aYear = parseInt(a.period.split(' - ')[1] || a.period);
    const bYear = parseInt(b.period.split(' - ')[1] || b.period);
    return bYear - aYear;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-5 w-5" />;
      case "professional":
        return <Briefcase className="h-5 w-5" />;
      case "award":
        return <Award className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-white section-fade">
      <div className="content-container">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-wider text-primary/70 font-medium">
            Professional Journey
          </span>
          <h2 className="mt-2 font-serif text-4xl font-medium">Experience & Education</h2>
          <div className="mt-4 h-px w-20 bg-primary/30 mx-auto"></div>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="courses">Short Term Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline" className="animate-fade-in">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/80 ml-0.5 hidden sm:block"></div>
              
              <div className="space-y-12">
                {sortedItems.map((item, index) => (
                  <div key={item.id} className="relative">
                    <div className="absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white hidden sm:block"></div>
                    
                    <div className="sm:pl-12">
                      <div className="bg-white p-6 rounded-lg border border-accent/50 shadow-sm hover-scale">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                          <div className={`p-2.5 rounded-md ${
                            item.type === 'education' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'professional' ? 'bg-purple-100 text-purple-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {getIcon(item.type)}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium text-xl">{item.title}</h3>
                            <div className="text-primary/80">
                              {item.organization}, {item.location}
                            </div>
                            <div className="text-sm text-primary/60 mt-1">{item.period}</div>
                          </div>
                        </div>
                        <p className="text-primary/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="animate-fade-in">
            <div className="bg-white rounded-lg border border-accent/50 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-md">
                  <Library className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-xl">Short Term Courses Completed</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <div 
                    key={course.id} 
                    className="flex items-center gap-3 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors"
                  >
                    <BookOpen className="h-5 w-5 text-primary/70 flex-shrink-0" />
                    <span className="font-medium text-primary/90">{course.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="animate-fade-in">
            <div className="bg-white rounded-lg border border-accent/50 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-md">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-xl">Professional Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-accent/20"
                  >
                    <CheckCircle className="h-5 w-5 text-primary/70 mt-0.5 flex-shrink-0" />
                    <p className="text-primary/80 leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
