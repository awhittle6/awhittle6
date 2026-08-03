import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors ${
    hasError ? "border-red-400/70" : "border-white/15"
  }`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data Submitted: ", data);
    // Add your form submission logic here, e.g., send data to a server
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">Contact</p>
      <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">
        Let&rsquo;s build your next <span className="italic text-glow">big thing</span>
      </h2>
      <p className="text-white/50 mb-12">
        No pressure — just a real conversation about what you&rsquo;re building.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-5 w-full text-left"
      >
        <div className="w-full">
          <label htmlFor="name" className="block text-sm text-white/50 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name")}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm text-white/50 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block text-sm text-white/50 mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="What are you building?"
            {...register("message")}
            className={inputClasses(!!errors.message)}
            rows={6}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 px-10 py-3 rounded-full border border-white/25 bg-white/5 text-white hover:border-white/60 disabled:opacity-40 transition-colors"
        >
          {isSubmitting ? "Sending..." : "Start the conversation"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
