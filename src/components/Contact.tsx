import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_yg0ymfg",
        "template_7hkkmcg",
        {
          from_name: formData.name,
          to_name: "Om Satapathy",
          from_email: formData.email,
          to_email: "omsatapathy05@gmail.com",
          message: formData.message
        },
        "A8Lf15l-LeKIvR-rs"
      )

      alert("The message was set successfully");

      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      setIsLoading(false);
      console.log("Error is : ", error);
      alert("Something went wrong");
    }


  };

  const formRef = useRef<HTMLFormElement>(null);


  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-background" className="absolute inset-0 min-h-screen lg:flex hidden" />
        <div className="contact-container">
          <h3 className="head-text">Let's Connect</h3>
          <p className="text-lg text-white">Want to chat? Just drop me a message using the form below, and I'll get back to you within three hours—promise!</p>

          <form ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 mx-4 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Jonh Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="field-input"
                placeholder="jonhdoe@abc.org"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Enter your message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="field-input"
                rows={5}
                placeholder="I wanna give you a job"
              />
            </label>

            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : "Send Message"}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow " />
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
