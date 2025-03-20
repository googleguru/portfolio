
import { useState } from "react";
import { FileText, Download, ExternalLink, ArrowUpDown, Award, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
  abstract: string;
  doi?: string;
  pdfLink?: string;
};

type Patent = {
  id: number;
  title: string;
  applicationNumber: string;
  publicationDate: string;
};

type Book = {
  id: number;
  title: string;
  authors: string;
  year: number;
};

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const publications: Publication[] = [
    {
      id: 1,
      title: "A secure authentication and optimization based device-to-device communication for 5G enabled IoT applications of smart cities",
      authors: "Rani, T.P., Maruthu, A., Pavithra Guru R., et al.",
      journal: "Wireless Networks",
      year: 2025,
      tags: ["5G", "IoT", "Smart Cities", "Authentication"],
      abstract: "This research focuses on secure authentication and optimization techniques for device-to-device communication in 5G-enabled IoT applications for smart cities. The approach enhances security while maintaining efficient communication protocols essential for smart city infrastructure.",
      doi: "10.1007/s11276-025-xxxxx-x"
    },
    {
      id: 2,
      title: "Design and Simulation of Bi-Layer Optimized High K-Dielectric Medium for N-Mosfet with Wild Horse Optimization to Improve Electrical Characteristics",
      authors: "Pavithra Guru R.",
      journal: "ECS Journal of Solid State Science and Technology 13, no. 7",
      year: 2024,
      tags: ["MOSFET", "Optimization", "Dielectric Medium"],
      abstract: "This study presents a novel approach to N-MOSFET design using bi-layer optimized high K-dielectric medium enhanced by Wild Horse Optimization, resulting in significantly improved electrical characteristics and performance metrics.",
      doi: "10.1149/2.xxxx24xx",
      pdfLink: "#"
    },
    {
      id: 3,
      title: "Optimizing Solar Panel Systems using Machine Learning and Ant Colony Optimization",
      authors: "Murugesan K., Senthil Kumaran M., Vaithianathan V., Pavithra Guru R.",
      journal: "J.Electrical Systems 20-3s",
      year: 2024,
      tags: ["Solar Energy", "Machine Learning", "Ant Colony Optimization"],
      abstract: "This paper presents an innovative approach to solar panel system optimization using machine learning algorithms combined with Ant Colony Optimization techniques, resulting in enhanced energy efficiency and system performance.",
      doi: "10.xxxx/jes.20-3s.238"
    },
    {
      id: 4,
      title: "An effective quantum convolutional neural networks based predictive framework for cybersecurity intrusion detection and prevention in wireless sensor networks",
      authors: "Manikandan, K. P., Gomathi, C., Saraswathi, V., Pavithra Guru R., Rajesh Kanna, S. K., & Preetha, M.",
      journal: "Nano-Science and Nano-Technology Practice, 20(6)",
      year: 2024,
      tags: ["Quantum Computing", "Neural Networks", "Cybersecurity", "WSN"],
      abstract: "This research introduces a quantum convolutional neural network framework for enhanced cybersecurity intrusion detection and prevention in wireless sensor networks, providing improved security measures against sophisticated threats.",
      doi: "10.62441/nano-ntp.vi.3391"
    },
    {
      id: 5,
      title: "Parkinson's Disease Detection Using MDVP and Different Types of ML Classification Algorithms",
      authors: "Sharma, N., Sai, V., Pavithra Guru, R., Thamizharasi, M.",
      journal: "Proceedings of the Fifth International Conference on Emerging Trends in Mathematical Sciences & Computing (IEMSC-24)",
      year: 2024,
      tags: ["Parkinson's Disease", "Machine Learning", "Classification", "MDVP"],
      abstract: "This study explores the application of various machine learning classification algorithms for Parkinson's disease detection using Multiple Disordered Voice Program (MDVP) features, resulting in improved diagnostic capabilities.",
      doi: "10.1007/978-3-031-71125-1_28"
    },
    {
      id: 6,
      title: "An Online Shopping Behaviour Analysis Using Tree-Based Classifiers",
      authors: "Pavithra Guru R., Sai Asritha S., Mirthula M., Priyanka Reddy",
      journal: "Proceedings of the KILBY 100 7th International Conference on Computing Sciences 2023 (ICCS 2023)",
      year: 2023,
      tags: ["Online Shopping", "Tree-Based Classifiers", "Behavior Analysis"],
      abstract: "This paper analyzes online shopping behavior patterns using tree-based classification algorithms, providing insights into consumer preferences and decision-making processes in e-commerce environments.",
      doi: "10.2139/ssrn.4491259"
    },
    {
      id: 7,
      title: "Enhanced Cardiovascular Disease Detection from Phonocardiogram Signals Using Deep Learning & Wavelet-Based Denoising",
      authors: "Pavithra Guru R., Kumar C.V., Sekhar M.C., Vamshi M.",
      journal: "4th Asian Conference on Innovation in Technology (ASIANCON)",
      year: 2024,
      tags: ["Deep Learning", "Cardiovascular Disease", "Signal Processing"],
      abstract: "This paper presents an improved method for detecting cardiovascular diseases from phonocardiogram signals using deep learning techniques combined with wavelet-based denoising. The approach achieves higher accuracy in identifying abnormalities compared to conventional methods.",
      doi: "10.1109/ASIANCON.2024.xxxxxx"
    },
    {
      id: 8,
      title: "An Estimation of the Performance of Deep Learning Based Hard Link Boot Caffe Neural Network for Network Anomaly Detection",
      authors: "Deeptha R., Ayyadurai M., Sujatha K., Pavithra Guru R., Sasireka D.",
      journal: "International Conference on Data Science, Agents & Artificial Intelligence (ICDSAAI)",
      year: 2023,
      tags: ["Deep Learning", "Neural Networks", "Anomaly Detection"],
      abstract: "This study evaluates the performance of a deep learning-based Hard Link Boot Caffe Neural Network for network anomaly detection, demonstrating improved accuracy and reduced false positives compared to traditional methods.",
      doi: "10.1109/ICDSAAI59313.2023.10452430"
    },
    {
      id: 9,
      title: "Demodulating an acoustic signal stimulated by photo-thermal elastic energy conversion using quartz tuning forks",
      authors: "Tamilselvi M., Amirthalakshmi T.M., Pavithra Guru R., Neelaveni R., Ramya G., Usmani Y.S., Ansari M.Z.",
      journal: "Optical and Quantum Electronics",
      year: 2023,
      tags: ["Acoustic Signal", "Photo-thermal Energy", "Quartz Tuning Forks"],
      abstract: "This research focuses on demodulating acoustic signals stimulated by photo-thermal elastic energy conversion using quartz tuning forks, presenting novel approaches for signal processing in quantum electronics applications.",
      doi: "10.1007/s11082-023-xxxxx-x"
    },
    {
      id: 10,
      title: "An efficient VLSI circuit partitioning algorithm based on satin bowerbird optimization (SBO)",
      authors: "Pavithra Guru R., Vaithianathan V.",
      journal: "Journal of Computational Electronics",
      year: 2020,
      tags: ["VLSI", "Circuit Partitioning", "Optimization", "SBO"],
      abstract: "This research introduces a novel approach to VLSI circuit partitioning using the Satin Bowerbird Optimization algorithm. The proposed method demonstrates superior performance in terms of cut-size minimization and run-time efficiency compared to existing techniques.",
      doi: "10.1007/s10825-020-xxxxx-x",
      pdfLink: "#"
    },
    {
      id: 11,
      title: "An Ensemble Learning Approach for Fast Disaster Response using Social Media Analytics",
      authors: "Ayyadurai M., Sujatha K., Pavithra Guru R., Sasirekha D., Umamageswari A., Deepa S.",
      journal: "International Journal on Recent and Innovation Trends in Computing and Communication, 11(11s)",
      year: 2023,
      tags: ["Ensemble Learning", "Disaster Response", "Social Media Analytics"],
      abstract: "This paper presents an ensemble learning approach for rapid disaster response utilizing social media analytics, enabling faster and more effective emergency management during crisis situations.",
      doi: "10.xxxxx/ijritcc.2023.xxxxx"
    },
    {
      id: 12,
      title: "Website Vulnerability Scanner",
      authors: "Deeptha R., Sujatha K., Sasireka D., Neelaveni R., Pavithra Guru R.",
      journal: "Journal of Population Therapeutics and Clinical Pharmacology, 30(15)",
      year: 2023,
      tags: ["Website Security", "Vulnerability Scanning", "Cybersecurity"],
      abstract: "This research introduces an advanced website vulnerability scanner that identifies and categorizes security weaknesses in web applications, providing actionable insights for remediation and enhanced protection.",
      doi: "10.15586/jptcp.v30i15.xxxxx"
    },
    {
      id: 13,
      title: "Highly Secured and Reliable Communication in WSN Using Sandbox Security in Comparison with Network Security Platform",
      authors: "Aditya N., Dhanush Raaghav L.C., Hariprasad G., Ayyadurai M., Pavithra Guru R.",
      journal: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT), Volume 9, Issue 8",
      year: 2023,
      tags: ["WSN", "Sandbox Security", "Network Security"],
      abstract: "This study compares sandbox security approaches with traditional network security platforms for wireless sensor networks, demonstrating improved security and reliability in communication through innovative protective measures.",
      doi: "10.xxxxx/ijsrcseit.v9i8.xxxxx"
    },
    {
      id: 14,
      title: "OTG Module for High Speed Transmission",
      authors: "Sundaram CK, Pavithra Guru R.",
      journal: "International Journal of Scientific Engineering and Technology, 5(4)",
      year: 2016,
      tags: ["OTG Module", "High Speed Transmission", "Data Transfer"],
      abstract: "This paper presents an On-The-Go (OTG) module designed for high-speed data transmission, offering improved throughput and efficiency compared to conventional methods in digital communication systems.",
      doi: "10.xxxxx/ijset.v5i4.xxxxx"
    },
    {
      id: 15,
      title: "Ant Colony Optimization Based Partition Model for VLSI Physical Design",
      authors: "Pavithra Guru R., Vaithianathan V.",
      journal: "International Conference on Computer Communication and Informatics (ICCCI)",
      year: 2020,
      tags: ["Ant Colony Optimization", "VLSI", "Physical Design", "Partitioning"],
      abstract: "This research proposes an Ant Colony Optimization-based partition model for VLSI physical design, demonstrating improved efficiency and performance in circuit partitioning compared to conventional approaches.",
      doi: "10.1109/ICCCI.2020.xxxxx"
    },
    {
      id: 16,
      title: "Cloud Computing Based Workload Optimization using Long Short Term Memory Algorithm",
      authors: "A. M., S. S., Pavithra Guru R., G. B. S.",
      journal: "Third International Conference on Smart Technologies in Computing, Electrical and Electronics (ICSTCEE)",
      year: 2022,
      tags: ["Cloud Computing", "Workload Optimization", "LSTM", "Resource Management"],
      abstract: "This study introduces a Long Short Term Memory (LSTM) algorithm for optimizing workload distribution in cloud computing environments, resulting in improved resource utilization and system performance.",
      doi: "10.1109/ICSTCEE.2022.xxxxx"
    },
    {
      id: 17,
      title: "A Convenient remote keyboard for challenged people and children",
      authors: "Neelaveni R., Amirthalakshmi T.M., Pavithra Guru R.",
      journal: "International Conference on future Road of Multidisciplinary Streams (ICFMRS-2022)",
      year: 2022,
      tags: ["Assistive Technology", "Remote Keyboard", "Accessibility"],
      abstract: "This paper presents a convenient remote keyboard design specifically developed for people with challenges and children, enhancing accessibility and usability through innovative interface design and interaction methods.",
      doi: "10.xxxxx/ICFMRS.2022.xxxxx"
    },
    {
      id: 18,
      title: "Calorie Recognition from Food Images Using CNN for Nutritional Analysis",
      authors: "Pavithra Guru R., Ayyadurai M., Amirthalakshmi T., Neelaveni R., Sujatha K.",
      journal: "International Conference on Data Science, Agents & Artificial Intelligence (ICDSAAI)",
      year: 2023,
      tags: ["CNN", "Food Recognition", "Calorie Estimation", "Nutritional Analysis"],
      abstract: "This research presents a Convolutional Neural Network (CNN) approach for recognizing and estimating calories from food images, providing automated nutritional analysis to support healthy eating and dietary management.",
      doi: "10.1109/ICDSAAI59313.2023.10452481"
    },
    {
      id: 19,
      title: "Design of low complexity adjustable filter bank for personalized hearing aid solution",
      authors: "Pavithra Guru R.",
      journal: "National Conference on Recent Emerging Science, Engineering & Advanced Research in Communication and Healthcare 2022 [NCRESEARCH 2022]",
      year: 2022,
      tags: ["Filter Bank", "Hearing Aid", "Signal Processing", "Personalization"],
      abstract: "This study introduces a low-complexity adjustable filter bank designed specifically for personalized hearing aid solutions, offering improved sound quality and adaptability to individual hearing profiles and environments.",
      doi: ""
    },
    {
      id: 20,
      title: "Development of Smart Energy Meter Using IoT",
      authors: "Kandru Bhonandh Sai, Koppolu Ganeshan, G. Vinay, Pavithra Guru R.",
      journal: "Kilby 100: 7th International Joint Conference on computing sciences",
      year: 2023,
      tags: ["IoT", "Smart Energy Meter", "Power Management"],
      abstract: "This paper presents the development of a smart energy meter using Internet of Things (IoT) technology, enabling remote monitoring, automated billing, and efficient power management in residential and commercial settings.",
      doi: "10.2139/ssrn.4495903"
    },
    {
      id: 21,
      title: "Verilog module for on the Go implementation",
      authors: "Pavithra Guru R., Sundram C.K.",
      journal: "International Conference on Energy Efficient Technologies for Sustainability (ICEETS)",
      year: 2016,
      tags: ["Verilog", "Module Implementation", "Hardware Design"],
      abstract: "This research introduces a Verilog module designed for on-the-go implementation in hardware systems, offering improved flexibility and efficiency in digital circuit design and development processes.",
      doi: "10.1109/ICEETS.2016.7583851"
    }
  ];

  const patents: Patent[] = [
    {
      id: 1,
      title: "Method for improving the performance of Very Large Scale Integration",
      applicationNumber: "202341049442A",
      publicationDate: "01-09-2023"
    },
    {
      id: 2,
      title: "4G and 5G technology based several-antennas for smart phone App using multimode",
      applicationNumber: "202241042837",
      publicationDate: "29-07-2022"
    },
    {
      id: 3,
      title: "Method for Designing A Very Large Scale Integration (VLSI) Circuit",
      applicationNumber: "202241060276",
      publicationDate: "04-11-2022"
    },
    {
      id: 4,
      title: "AI Based Smart Walking Stick For Visually Impaired With Alerting Unit",
      applicationNumber: "369641-001 A",
      publicationDate: "4/02/2022"
    },
    {
      id: 5,
      title: "Device For Production of Cancer Vaccines",
      applicationNumber: "6297329",
      publicationDate: "16/07/2023"
    },
    {
      id: 6,
      title: "Machine Learning for Price Discovery in Stock Market and Improving the Reliability of Centralized Data Feeds",
      applicationNumber: "201911042946 A",
      publicationDate: "04/09/2023"
    },
    {
      id: 7,
      title: "IoT-based remote patient monitoring solution with AI-driven analytics",
      applicationNumber: "202441012223 A",
      publicationDate: "15/03/2024"
    },
    {
      id: 8,
      title: "Automated Call Management System for Emergency Services Based on Artificial Intelligence",
      applicationNumber: "202441049808",
      publicationDate: "28/06/2024"
    }
  ];

  const books: Book[] = [
    {
      id: 1,
      title: "VLSI Designs for Artificial Intelligence Applications",
      authors: "R. Pavithra Guru, K. Sujatha, Preethi D",
      year: 2023
    },
    {
      id: 2,
      title: "VLSI Physical Design Based Machine Learning",
      authors: "Amirthalakshmi T.M, R. Pavithra Guru, Sathya S S, R.Nagalakshmi",
      year: 2024
    }
  ];

  const toggleSort = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  const sortedPublications = [...publications].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.year - a.year;
    } else {
      return a.year - b.year;
    }
  });

  return (
    <section id="publications" className="py-24 bg-accent/30 section-fade">
      <div className="content-container">
        <div className="mb-12 text-center">
          <span className="text-sm uppercase tracking-wider text-primary/70 font-medium">
            Academic Contributions
          </span>
          <h2 className="mt-2 font-serif text-4xl font-medium">Publications</h2>
          <div className="mt-4 h-px w-20 bg-primary/30 mx-auto"></div>
        </div>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="publications">Journal & Conference Papers</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
          </TabsList>
          
          <TabsContent value="publications" className="animate-fade-in">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium">Research Publications</h3>
                  <button 
                    onClick={toggleSort}
                    className="inline-flex items-center text-sm text-primary/70 hover:text-primary"
                  >
                    Sort by {sortOrder === "newest" ? "Oldest" : "Newest"} <ArrowUpDown className="ml-1 h-3 w-3" />
                  </button>
                </div>
                
                <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
                  {sortedPublications.map((pub) => (
                    <div
                      key={pub.id}
                      className={`p-4 rounded-lg border transition-all cursor-pointer hover-scale ${
                        selectedPublication?.id === pub.id
                          ? "bg-white shadow-md border-primary/30"
                          : "bg-white/70 border-transparent hover:bg-white hover:shadow-sm"
                      }`}
                      onClick={() => setSelectedPublication(pub)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-accent/70 text-primary/70 rounded-md mt-1">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary text-balance">{pub.title}</h4>
                          <p className="text-sm text-primary/70 mt-1">{pub.authors}</p>
                          <div className="flex items-center text-sm text-primary/60 mt-2">
                            <span>{pub.journal}</span>
                            <span className="mx-2">•</span>
                            <span>{pub.year}</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {pub.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-accent/50 text-primary/70 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-accent p-6">
                  {selectedPublication ? (
                    <div className="animate-fade-in">
                      <h3 className="font-serif text-xl font-medium">{selectedPublication.title}</h3>
                      <p className="text-sm text-primary/70 mt-2">{selectedPublication.authors}</p>
                      <div className="flex items-center text-sm text-primary/60 mt-2">
                        <span>{selectedPublication.journal}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedPublication.year}</span>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm uppercase tracking-wider text-primary/70 font-medium mb-2">
                          Abstract
                        </h4>
                        <p className="text-primary/80 text-sm leading-relaxed">
                          {selectedPublication.abstract}
                        </p>
                      </div>
                      
                      <div className="flex mt-6 gap-4">
                        {selectedPublication.doi && (
                          <a
                            href={`https://doi.org/${selectedPublication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary/80 hover:text-primary"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" /> View DOI
                          </a>
                        )}
                        {selectedPublication.pdfLink && (
                          <a
                            href={selectedPublication.pdfLink}
                            className="inline-flex items-center text-sm text-primary/80 hover:text-primary"
                          >
                            <Download className="mr-1 h-4 w-4" /> Download PDF
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <FileText className="h-10 w-10 text-primary/40 mx-auto" />
                      <h3 className="mt-4 font-medium text-primary/70">Select a Publication</h3>
                      <p className="mt-2 text-sm text-primary/60">
                        Click on a publication from the list to view its details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="patents" className="animate-fade-in">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium mb-6">Patents Published</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {patents.map((patent) => (
                  <div key={patent.id} className="p-4 rounded-lg border border-accent/30 bg-white/90">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/70 text-primary/70 rounded-md">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">{patent.title}</h4>
                        <div className="mt-3 space-y-1 text-sm text-primary/70">
                          <p>Application Number: {patent.applicationNumber}</p>
                          <p>Publication Date: {patent.publicationDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="books" className="animate-fade-in">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium mb-6">Published Books</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {books.map((book) => (
                  <div key={book.id} className="p-4 rounded-lg border border-accent/30 bg-white/90">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/70 text-primary/70 rounded-md">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">{book.title}</h4>
                        <p className="text-sm text-primary/70 mt-2">{book.authors}</p>
                        <p className="text-sm text-primary/60 mt-1">{book.year}</p>
                      </div>
                    </div>
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

export default Publications;
