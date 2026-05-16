import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_27j5id7",
        "template_krtz27f",
        formRef.current,
        "mT7HQ-hnxQ9kHk278"
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

      setForm({
        name: "",
        email: "",
        msg: "",
      });

    } catch (error) {
      console.log(error);
      alert(error.text || "Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project idea or opportunity? Let’s connect and
            build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-3xl font-semibold text-white mb-4">
                Let’s Talk 🚀
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I’m always open to discussing frontend development,
                freelance opportunities, internships, or creative ideas.
                Feel free to send me a message anytime.
              </p>
            </div>

            {/* CONTACT INFO */}

            <div className="space-y-6">

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">

                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Mail className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:saumyasingh.dev01@gmail.com"
                    className="text-white hover:text-blue-400 transition"
                  >
                    saumyasingh.dev01@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">

                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Phone className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <a
                    href="tel:+917380508093"
                    className="text-white hover:text-blue-400 transition"
                  >
                    +91 7380508093
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">

                <div className="p-3 rounded-xl bg-blue-500/10">
                  <MapPin className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="text-white">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div>

            {/* SUCCESS MESSAGE */}

            <AnimatePresence>

              {success && (

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 bg-green-500/10 border border-green-500/30 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-4"
                >

                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-green-400 w-8 h-8" />
                  </div>

                  <div>

                    <h4 className="text-green-400 font-semibold text-lg">
                      Message Sent Successfully
                    </h4>

                    <p className="text-gray-300 text-sm">
                      Thank you for contacting me.
                      I’ll reply soon 🚀
                    </p>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

            {/* FORM */}

            <motion.form
              ref={formRef}
              onSubmit={submit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-6"
            >

              {/* NAME */}

              <div>

                <label className="text-sm text-gray-400 mb-2 block">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={change}
                  required
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="text-sm text-gray-400 mb-2 block">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={change}
                  required
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* MESSAGE */}

              <div>

                <label className="text-sm text-gray-400 mb-2 block">
                  Message
                </label>

                <textarea
                  name="msg"
                  rows="6"
                  value={form.msg}
                  onChange={change}
                  required
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-70"
              >

                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}

              </button>

            </motion.form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;