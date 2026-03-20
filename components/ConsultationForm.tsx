"use client";
import { useState } from "react";
import { Send, User, Phone, Mail, BookOpen, MapPin, MessageSquare, Loader2, CheckCircle } from "lucide-react";

const courses = ["Engineering", "Medical", "Management", "LAW", "Nursing", "Pharmacy", "Others"];

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", course: "", location: "", state: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="section bg-[#f8fafd]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Info */}
          <div>
            <p className="section-label">FREE CONSULTATION</p>
            <h2 className="section-title">Request a Free Consultation</h2>
            <div className="divider-left divider mx-0 mt-3 mb-6"></div>
            <p className="text-gray-500 leading-relaxed mb-8">
              Get expert guidance from our experienced counsellors. We help you select the best college, navigate the admission process, and ensure you get into your dream institution.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: "Call Us Now", value: "+91 620 701 3805", href: "tel:+916207013805", color: "#17416c" },
                { icon: Mail, label: "Email Us", value: "theeducationcare6@gmail.com", href: "mailto:theeducationcare6@gmail.com", color: "#f6830e" },
                { icon: MapPin, label: "Visit Us", value: "G-35, Pushpanjli Complex, Boring Road, Patna", href: "#", color: "#e74c3c" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{item.label}</p>
                      <p className="font-semibold text-gray-700 group-hover:text-[#17416c] transition-colors text-sm">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#17416c] mb-3">Thank You! 🎉</h3>
                <p className="text-gray-500 max-w-sm">
                  Your inquiry has been received. Our expert counsellor will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", location: "", state: "", message: "" }); }}
                  className="btn-primary mt-6"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#17416c] mb-2">Quick Enquiry</h3>

                {/* Name */}
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input pl-11"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input pl-10 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                      className="form-input pl-10 text-sm"
                    />
                  </div>
                </div>

                {/* Course */}
                <div className="relative">
                  <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="form-input pl-11 appearance-none"
                  >
                    <option value="">Select Course</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Location + State */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City / Location"
                      required
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="form-input pl-10 text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="State"
                    required
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="form-input text-sm"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    placeholder="Your Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input pl-11 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                  ) : (
                    <><Send size={18} /> Submit Now</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-[#17416c] hover:underline">Privacy Policy</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
