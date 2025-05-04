import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const Contact: React.FC = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_name: 'Abdelkarim El Hafidi',
      };

      // Using EmailJS browser SDK for better reliability
      await emailjs.send(
        'service_8m4yi6o',
        'template_9lp43vm',
        templateParams,
        'zQ3alnFJ9MW2rV0xJ'
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "abdohafidi2000@gmail.com",
      link: "mailto:abdohafidi2000@gmail.com"
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      title: "Phone",
      value: "0614793062",
      link: "tel:0614793062"
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: "Location",
      value: "Taroudant, Morocco"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: "LinkedIn",
      value: "Abdelkarim El Hafidi",
      link: "https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/"
    },
    {
      icon: <Github className="text-blue-400" size={24} />,
      title: "GitHub",
      value: "3kimE",
      link: "https://github.com/3kimE"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-black to-portfolio-darkBlue text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me through any of the methods below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl transform transition-all hover:shadow-blue-500/10 hover:-translate-y-2"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-3 rounded-xl mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="https://drive.google.com/file/d/13ptWdLXHeTSpXJaJEITRhYNLBkiu4Nty/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Email" 
                          type="email"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject" 
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your Message" 
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
