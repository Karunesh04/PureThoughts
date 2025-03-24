
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-semibold mb-6 text-center">
          About Us
        </h1>
        
        <div className="glass-card p-8 md:p-10 rounded-xl shadow-sm animate-content">
          <h2 className="text-2xl font-display font-medium mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            MinimalBlog is dedicated to sharing knowledge, insights, and stories in a clean, 
            distraction-free environment. We believe in the power of well-crafted content 
            to educate, inspire, and connect people.
          </p>
          
          <h2 className="text-2xl font-display font-medium mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2023, MinimalBlog was born from a desire to create a platform where 
            content truly stands out. In a digital landscape cluttered with ads, popups, and 
            distractions, we wanted to build a space where reading is a pleasure.
          </p>
          <p className="text-lg mb-10">
            Our team of writers, designers, and developers work together to maintain a 
            platform that values substance over noise, quality over quantity, and readers 
            over metrics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-semibold">50+</span>
              </div>
              <h3 className="font-medium mb-2">Articles Published</h3>
              <p className="text-muted-foreground text-sm">
                Quality content across various categories
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-semibold">15+</span>
              </div>
              <h3 className="font-medium mb-2">Contributors</h3>
              <p className="text-muted-foreground text-sm">
                Passionate writers sharing their expertise
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-semibold">10K+</span>
              </div>
              <h3 className="font-medium mb-2">Monthly Readers</h3>
              <p className="text-muted-foreground text-sm">
                Growing community of engaged users
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-display font-medium mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Simplicity</h3>
              <p>
                We embrace clean design and straightforward writing to communicate effectively.
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Quality</h3>
              <p>
                We prioritize depth, accuracy, and thoughtfulness in every piece we publish.
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p>
                We strive to make our content available and understandable to everyone.
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p>
                We value the connections and conversations that form around shared ideas.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-display font-medium mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Alex Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-medium">Alex Johnson</h3>
              <p className="text-muted-foreground">Founder & Editor</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sophia Chen"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-medium">Sophia Chen</h3>
              <p className="text-muted-foreground">Lead Designer</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="Michael Roberts"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-medium">Michael Roberts</h3>
              <p className="text-muted-foreground">Content Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
