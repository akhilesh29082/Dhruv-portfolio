import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { personalInfo, socialLinks } from "@/lib/constants";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutate(values);
  }

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <FaLinkedin size={20} />;
      case "github":
        return <FaGithub size={20} />;
      case "twitter":
        return <FaTwitter size={20} />;
      case "instagram":
        return <FaInstagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Interested in working together or have any questions? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Received!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What's this about?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                className="resize-none" 
                                rows={4} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isPending}
                      >
                        {isPending ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection direction="right">
            <div className="bg-primary text-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white/80 hover:text-white transition"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-white/80">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-white/80 hover:text-white transition"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium text-lg mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                      aria-label={link.name}
                    >
                      {getSocialIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
