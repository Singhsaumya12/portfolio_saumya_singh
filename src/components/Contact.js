import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Message Sent 🚀");
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <section className="py-20 min-h-screen">

      <h2 className="text-4xl text-center font-bold mb-14">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          <p className="text-gray-300">
            Let’s build something amazing together 🚀
          </p>

          <div className="flex gap-3 items-center">
            <Mail className="text-blue-400" />
            yourmail@gmail.com
          </div>

          <div className="flex gap-3 items-center">
            <Phone className="text-blue-400" />
            +91 9876543210
          </div>

          <div className="flex gap-3 items-center">
            <MapPin className="text-blue-400" />
            India
          </div>

        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-xl space-y-5"
        >

          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Name"
            className="w-full p-3 rounded bg-black/40 border"
          />

          <input
            name="email"
            value={form.email}
            onChange={change}
            placeholder="Email"
            className="w-full p-3 rounded bg-black/40 border"
          />

          <textarea
            name="msg"
            value={form.msg}
            onChange={change}
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded bg-black/40 border"
          />

          <button
            className="w-full py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
