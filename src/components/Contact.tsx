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
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h2 className="text-4xl font-bold">Contact</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-6 w-full max-w-2xl px-4"
      >
        {/* Name Field */}
        <div className="w-full">
          <label htmlFor="name" className="block text-left font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`w-full px-4 py-3 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <label htmlFor="email" className="block text-left font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-4 py-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="w-full">
          <label htmlFor="message" className="block text-left font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className={`w-full px-4 py-3 border rounded-md ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows={6}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

