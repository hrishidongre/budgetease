"use client"
import Footer from "../Components/Footer";
import Header from "../Components/Header.jsx";
import { useState } from "react"
import { supabase } from '../supabase';
import { useUser } from "@supabase/auth-helpers-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = useUser();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;
    const { data, error } = await supabase.from("contact_messages").insert([
      {
        Users_id: user?.id || null,
        name,
        email,
        message,
      },
    ]);

    console.log("🟢 Supabase insert result:", { data, error });
    setLoading(false);

    if (error) {
      alert("Something went wrong.");
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 py-16 px-4 sm:px-6 bg-gradient-to-br from-teal-100 via-white to-blue-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-10">
            Have questions, feedback, or need support? Fill out the form and we'll get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-md"
          >
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="bg-gray-100 rounded-md px-4 py-2 text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="bg-gray-100 rounded-md px-4 py-2 text-sm"
                placeholder="Your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="bg-gray-100 rounded-md px-4 py-2 text-sm"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-teal-600 text-white font-medium px-6 py-2 rounded-full hover:bg-teal-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-700 text-sm mt-1 sm:mt-0">Message sent successfully!</p>
              )}
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-600">
            Or reach us at{" "}
            <a
              href="mailto:competitivehridon2024@gmail.com"
              className="text-blue-800 underline"
            >
              competitivehridon2024@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
