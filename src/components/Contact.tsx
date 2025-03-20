
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll respond as soon as possible.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-accent/30 section-fade">
      <div className="content-container">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-wider text-primary/70 font-medium">
            Get in Touch
          </span>
          <h2 className="mt-2 font-serif text-4xl font-medium">Contact Me</h2>
          <div className="mt-4 h-px w-20 bg-primary/30 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-accent/50 h-full">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/70 text-primary/80 rounded-md mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary/80">Email</h4>
                    <a href="mailto:gururvs@gmail.com" className="text-primary hover:text-primary/70 transition-colors">
                      gururvs@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/70 text-primary/80 rounded-md mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary/80">Phone</h4>
                    <a href="tel:+919042183891" className="text-primary hover:text-primary/70 transition-colors">
                      +91 9042183891
                    </a>
                    <div className="text-primary/70 text-sm mt-1">Alternative: +91 9486654109</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/70 text-primary/80 rounded-md mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary/80">Address</h4>
                    <p className="text-primary/80">
                      No:47/A Ganapathy Nagar<br />
                      Ashok Nagar<br />
                      Kanchipuram-631501<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary/80 mb-3">Technical Skills</h4>
                <ul className="space-y-2 text-primary/80">
                  <li className="flex justify-between">
                    <span>Languages</span>
                    <span>Verilog, VHDL, Python, R</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Operating Systems</span>
                    <span>Windows 11, 2000, MS-DOS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Database</span>
                    <span>Oracle 9i, MS Access</span>
                  </li>
                  <li className="flex justify-between">
                    <span>E-learning</span>
                    <span>NPTEL, Coursera, edX, LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-accent/50">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary/80">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-accent/20 border-accent/30 focus:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary/80">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-accent/20 border-accent/30 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-primary/80">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-accent/20 border-accent/30 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary/80">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] bg-accent/20 border-accent/30 focus:border-primary/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">◌</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
