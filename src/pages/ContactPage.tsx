import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form"; // For form management
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline"; // Icons
import { SocialIcon } from "react-social-icons"; // For social media icons
import socialLinks from "../data/socialLinks"; // Import social links data

// Define the shape of the form data
interface IContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation variants for the page container
const pageVariants: Variants = {
  // <-- Add : Variants here
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for individual form fields/contact items
const itemVariants: Variants = {
  // <-- Add : Variants here
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IContactFormInputs>();
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  // Function to encode form data for Netlify Forms
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit: SubmitHandler<IContactFormInputs> = async (data) => {
    setSubmissionStatus("idle"); // Reset status on new submission
    setMessage("");

    try {
      // Netlify Forms requires a specific POST request
      const response = await fetch("/", {
        // The form's action is usually just '/' for Netlify
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }), // 'form-name' must match your form's name attribute
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setMessage(
          "Your message has been sent successfully! I will get back to you soon."
        );
        reset(); // Reset form fields
      } else {
        setSubmissionStatus("error");
        setMessage(
          "Oops! There was an issue sending your message. Please try again or contact me directly."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-10 text-center border-b-2 border-accent-500 pb-4 inline-block mx-auto block"
        variants={itemVariants}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-light-text dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        variants={itemVariants}
      >
        Have a project idea, a question, or just want to connect? Feel free to
        reach out through the form below or connect with me directly via the
        links provided.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg">
        {/* Direct Contact Information */}
        <motion.div className="flex flex-col space-y-6" variants={itemVariants}>
          <h3 className="text-3xl font-heading font-semibold text-accent-500 mb-4">
            Contact Details
          </h3>

          <div className="flex items-center space-x-4 text-lg text-light-text dark:text-dark-text">
            <EnvelopeIcon className="h-7 w-7 text-accent-500" />
            <a
              href="mailto:abhishek.gupta.dev@example.com"
              className="hover:text-accent-600 transition-colors duration-200"
            >
              abhishek.gupta.dev@example.com{" "}
              {/* Replace with Abhishek's actual email */}
            </a>
          </div>

          <div className="flex items-center space-x-4 text-lg text-light-text dark:text-dark-text">
            <PhoneIcon className="h-7 w-7 text-accent-500" />
            <a
              href="tel:+91XXXXXXXXXX"
              className="hover:text-accent-600 transition-colors duration-200"
            >
              +91 XXXXXXXXXX {/* Replace with Abhishek's actual phone number */}
            </a>
          </div>

          <div className="flex items-center space-x-4 text-lg text-light-text dark:text-dark-text">
            <ChatBubbleLeftRightIcon className="h-7 w-7 text-accent-500" />
            <span>Let's connect on social media:</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.name}
                url={link.url}
                target="_blank"
                rel="noopener noreferrer"
                fgColor="currentColor"
                bgColor="transparent"
                className="!h-10 !w-10 text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 transform hover:scale-110"
              />
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-heading font-semibold text-accent-500 mb-4">
            Send a Message
          </h3>
          <form
            name="contact" // IMPORTANT: This 'name' attribute is crucial for Netlify Forms
            method="POST"
            data-netlify="true" // IMPORTANT: This attribute tells Netlify to process the form
            data-netlify-honeypot="bot-field" // IMPORTANT: Honeypot for spam prevention
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Honeypot field (hidden from users, helps prevent spam) */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-light-text dark:text-dark-text mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg border
                            ${
                              errors.name
                                ? "border-red-500"
                                : "border-light-border dark:border-dark-border"
                            }
                            focus:ring-2 focus:ring-accent-500 focus:border-transparent
                            text-light-text dark:text-dark-text`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-light-text dark:text-dark-text mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg border
                            ${
                              errors.email
                                ? "border-red-500"
                                : "border-light-border dark:border-dark-border"
                            }
                            focus:ring-2 focus:ring-accent-500 focus:border-transparent
                            text-light-text dark:text-dark-text`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-md font-medium text-light-text dark:text-dark-text mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className={`w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg border
                            ${
                              errors.subject
                                ? "border-red-500"
                                : "border-light-border dark:border-dark-border"
                            }
                            focus:ring-2 focus:ring-accent-500 focus:border-transparent
                            text-light-text dark:text-dark-text`}
                placeholder="Regarding a project opportunity..."
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-light-text dark:text-dark-text mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg border
                            ${
                              errors.message
                                ? "border-red-500"
                                : "border-light-border dark:border-dark-border"
                            }
                            focus:ring-2 focus:ring-accent-500 focus:border-transparent
                            text-light-text dark:text-dark-text resize-y`}
                placeholder="Hi Abhishek, I'd like to discuss..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submission Status Message */}
            {submissionStatus !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center p-3 rounded-lg text-sm font-medium
                            ${
                              submissionStatus === "success"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                            }`}
              >
                {submissionStatus === "success" ? (
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                ) : (
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                )}
                {message}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className="w-full px-8 py-3 rounded-lg bg-accent-500 text-white font-bold text-lg
                         hover:bg-accent-600 transition-colors duration-300 transform hover:scale-105
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
