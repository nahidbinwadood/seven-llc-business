import ContactForm from '@/components/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <section className="pt-[122px]">
      <div className="container mx-auto">
        {/* This is the title section */}
        <div className="text-center">
          <h1 className="text-headingColor text-5xl font-bold">
            Let’s Connect
          </h1>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
