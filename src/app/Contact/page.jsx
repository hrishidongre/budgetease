import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Contact() {
  return (
    <div>
        <Header/>
        <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-teal-50 via-white to-black-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions, feedback, or need support? Fill out the form and we'll get back to you.
        </p>

        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="border rounded-md px-4 py-2" placeholder="Your name" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="border rounded-md px-4 py-2" placeholder="you@example.com" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="5" className="border rounded-md px-4 py-2" placeholder="How can we help you?"></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-gray-600">
          Or reach us at <a href="mailto:support@budgetease.com" className="text-teal-700 underline">support@budgetease.com</a>
        </div>
      </div>
    </section>

    <Footer/>

    </div>
    
  );
}
