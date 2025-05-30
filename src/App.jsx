// src/App.jsx
import React, { useState } from 'react'; // Import useState hook
// No longer importing 'logo' as it's directly referenced from public

function App() {
  // State to manage the mobile navigation menu's open/closed state
  const [isNavOpen, setIsNavOpen] = useState(false);

  // State for contact form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
    phone: '' // Added phone for relevant information
  });

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    // For now, we'll just log it to the console.
    console.log('Form Submitted:', formData);
    // You might want to show a success message or clear the form here
    alert('Thank you for your enquiry! We will get back to you shortly.'); // Using alert for simplicity, consider a custom modal in production
    setFormData({ name: '', email: '', enquiry: '', phone: '' }); // Clear form
  };

  // Company details from your document
  const companyName = "LegalCraft"; // Keeping this for alt text and other references
  const tagline = "Law, Redesigned!";
  const heroDescription = "A modern legal consultancy that uses technology, empathy, and design to deliver reimagined, human-centered legal services online and through innovative digital solutions.";

  // Contact Information (placeholders, please update with actual details)
  const phoneNumber = "+234 907 301 6367"; // Updated phone number
  const emailAddress = "hello@legalcraft.com";
  const physicalAddress = "Efab Mall, Garki, Abuja, FCT"; // Updated address
  const operatingHours = "Monday - Friday, 9:00 AM - 5:00 PM (WAT)";

  return (
    <div className="App">

      {/* Header/Navigation */}
      <header className="header">
        <a href="#" className="logo">
          {/* Updated to use the actual logo from the public directory */}
          <img
            src="/LegalCraft.png" // Path to your logo in the public directory
            alt={`${companyName} Logo`}
            className="header-logo" // Added a class for CSS styling
          />
        </a>

        {/* Hamburger menu icon, visible only on small screens */}
        <button className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNav} aria-label="Toggle navigation">
          <div></div>
          <div></div>
          <div></div>
        </button>

        {/* Navigation links, conditionally styled based on isNavOpen state */}
        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            {/* These will now point to the specific detailed service sections within #our-services */}
            <li><a href="#digital-notarization-section" onClick={toggleNav}>Digital Notarization</a></li>
            <li><a href="#contract-automation-section" onClick={toggleNav}>For Business</a></li>
            <li><a href="#ip-protection-section" onClick={toggleNav}>Individual</a></li>
            <li><a href="#our-services" onClick={toggleNav}>Our Services</a></li> {/* General services overview */}
            <li><a href="#why-choose-us" onClick={toggleNav}>About</a></li>
            <li><a href="#contact" className="cta-button" onClick={toggleNav}>Book an Appointment</a></li>
          </ul>
        </nav>
      </header>

      {/* Section 1: Hero/Header - Introduces the company and highlights notarization */}
      <section className="hero">
        <p className="tagline">{tagline}</p>
        <h1>{companyName}</h1>
        <p>{heroDescription}</p>
        <p className="notary-highlight">
       
        </p>
        {/* Call to action button to scroll to the notary services section */}
        <a href="#digital-notarization-section" className="section-cta-button">Learn More About Digital Notarization</a>
      </section>

      {/* Section 2: Overview of Services - Now features detailed service cards */}
      <section id="our-services">
        <h2>Our Featured Services</h2>
        <p className="section-description">
          {companyName} is a modern legal consultancy that uses technology, empathy, and
          design to deliver reimagined, human-centered legal services. Explore some of our key offerings:
        </p>

        <div className="services-grid">
          {/* Digital Notarization Service Card */}
          <div id="digital-notarization-section" className="service-category-card">
            <h3>Digital Notarization</h3>
            <h4>Convenient and Secure Digital Notarization Services</h4>
            <p>
              Our digital notarization services provide a convenient and secure way to
              notarize documents remotely. With our expertise, you can reduce costs,
              increase efficiency, and improve compliance.
            </p>
            <h5>Benefits:</h5>
            <ul>
              <li>Convenience and flexibility</li>
              <li>Increased security</li>
              <li>Reduced costs</li>
              <li>Improved compliance</li>
            </ul>
            <h5>How it Works:</h5>
            <ul>
              <li>Document preparation and upload</li>
              <li>Identity verification</li>
              <li>Digital notarization</li>
              <li>Document storage and retrieval</li>
            </ul>
            <a href="#contact" className="section-cta-button">Notarize your Documents Instantly</a>
          </div>

          {/* Contract Design, Review & Automation Service Card */}
          <div id="contract-automation-section" className="service-category-card">
            <h3>Contract Design, Review & Automation</h3>
            <h4>Streamline Your Contracts with Our Automation Solutions</h4>
            <p>
              Our contract automation services help businesses like yours simplify and
              streamline their contract management processes. With our expertise, you can reduce
              errors, increase efficiency, and improve compliance.
            </p>
            <h5>Benefits:</h5>
            <ul>
              <li>Increased productivity</li>
              <li>Reduced errors</li>
              <li>Improved compliance</li>
              <li>Enhanced collaboration</li>
            </ul>
            <h5>How it Works:</h5>
            <ul>
              <li>Contract review and analysis</li>
              <li>Template creation and customization</li>
              <li>Automated contract generation</li>
              <li>Integration with existing systems</li>
            </ul>
            <div className="cta-group">
              <a href="#contact" className="section-cta-button">Get Started with Contract Automation</a>
              <a href="#contact" className="section-cta-button secondary-cta">Upload and get your contract reviewed</a>
              <a href="#contact" className="section-cta-button secondary-cta">Craft a Contract yourself in minutes</a>
            </div>
          </div>

          {/* Intellectual Property Service Card */}
          <div id="ip-protection-section" className="service-category-card">
            <h3>Intellectual Property (IP) Services</h3>
            <h4>Protect Your Intellectual Property with Our Expertise</h4>
            <p>
              Our IP protection services help businesses safeguard their innovative ideas,
              brands, and creations. From copyright, patent and trademark registrations to IP litigation,
              we've got you covered.
            </p>
            <h5>Services:</h5>
            <ul>
              <li>Patent and trademark registration</li>
              <li>IP litigation and dispute resolution</li>
              <li>IP portfolio management</li>
              <li>IP strategy and counseling</li>
            </ul>
            <h5>Benefits:</h5>
            <ul>
              <li>Protection of innovative ideas and brands</li>
              <li>Enhanced business value</li>
              <li>Competitive advantage</li>
              <li>Increased revenue</li>
            </ul>
            <a href="#contact" className="section-cta-button">Protect Your Intellectual Property Today</a>
          </div>

          {/* Data Protection, Privacy and Cybersecurity Service Card */}
          <div id="data-protection-section" className="service-category-card">
            <h3>Data Protection, Privacy and Cybersecurity</h3>
            <h4>Protect Your Business Data with Confidence</h4>
            <p>
              Safeguard your business against cyber threats and ensure compliance with data
              protection regulations. Our expert services cover risk assessments, incident response, and
              employee training to boost your data security posture.
            </p>
            <h5>Services:</h5>
            <ul>
              <li>Data Protection Impact Assessments</li>
              <li>Cybersecurity Risk Assessments</li>
              <li>Penetration Testing and Vulnerability Assessments</li>
              <li>Incident Response and Remediation</li>
              <li>Data Privacy Training and Awareness</li>
              <li>Compliance Consulting (GDPR, NDPR, etc.)</li>
            </ul>
            <h5>Benefits:</h5>
            <ul>
              <li>Enhanced Data Security</li>
              <li>Reduced Risk of Data Breaches</li>
              <li>Compliance with Regulatory Requirements (e.g., NDPR, GDPR)</li>
              <li>Protection of Customer Trust</li>
              <li>Minimized Downtime and Financial Loss</li>
            </ul>
            <a href="#contact" className="section-cta-button">Get a Data Protection Assessment Today!</a>
          </div>

          {/* ESG Services Card */}
          <div id="esg-section" className="service-category-card">
            <h3>Environmental, Social, and Governance (ESG) Law</h3>
            <h4>Navigate the Complex ESG Landscape</h4>
            <p>
              At {companyName}, our ESG Law practice is dedicated to helping businesses navigate the
              complex and ever-evolving landscape of environmental, social, and governance regulations. Our
              team of expert lawyers leverages cutting-edge technology to provide innovative and effective
              legal solutions.
            </p>
            <h5>Key Services:</h5>
            <ul>
              <li>Environmental Impact Assessments: Conducting thorough assessments to identify and mitigate environmental risks.</li>
              <li>ESG Strategy Development: Developing and implementing tailored ESG strategies to ensure regulatory compliance and promote sustainable development.</li>
              <li>Regulatory Compliance: Providing expert guidance on navigating complex regulatory landscapes and ensuring timely permitting processes.</li>
              <li>Stakeholder Engagement: Advising on effective stakeholder engagement and community development strategies.</li>
              <li>ESG Reporting and Disclosure: Assisting with ESG reporting and disclosure requirements, including sustainability reports and ESG metrics.</li>
            </ul>
            <h5>Benefits of Working with Us:</h5>
            <ul>
              <li>Expert Guidance: Receive expert advice from our experienced ESG lawyers.</li>
              <li>Innovative Solutions: Leverage cutting-edge technology to streamline ESG processes.</li>
              <li>Regulatory Compliance: Ensure adherence to evolving ESG regulations and standards.</li>
              <li>Reputation Enhancement: Strengthen your ESG credentials and enhance your business reputation.</li>
            </ul>
            <a href="#contact" className="section-cta-button">Learn More About ESG Law</a>
          </div>

          {/* Estate Planning Service Card */}
          <div id="estate-planning-section" className="service-category-card">
            <h3>Estate Planning</h3>
            <h4>Plan Your Estate with Our Expertise</h4>
            <p>
              Our estate planning services help individuals and families plan for the future.
              From wills and trusts to probate and estate administration, we've got you covered.
            </p>
            <h5>Services:</h5>
            <ul>
              <li>Wills and trusts</li>
              <li>Probate and estate administration</li>
              <li>Asset protection and planning</li>
              <li>Elder law and special needs planning</li>
            </ul>
            <h5>Benefits:</h5>
            <ul>
              <li>Peace of mind</li>
              <li>Protection of assets</li>
              <li>Efficient transfer of wealth</li>
              <li>Minimized taxes and disputes</li>
            </ul>
            <a href="#contact" className="section-cta-button">Plan Your Estate Today</a>
          </div>

          {/* Legal Tech Service Card */}
          <div id="legal-tech-section" className="service-category-card">
            <h3>Legal Tech</h3>
            <h4>Leverage Technology to Optimize Your Legal Practice</h4>
            <p>
              Our legal tech services help law firms and businesses leverage technology to
              optimize their legal practice. From contract automation to AI-powered research, we're here
              to help.
            </p>
            <h5>Services:</h5>
            <ul>
              <li>Contract automation and management</li>
              <li>AI-powered research and analytics</li>
              <li>Document management and storage</li>
              <li>Cybersecurity and data protection</li>
            </ul>
            <h5>Benefits:</h5>
            <ul>
              <li>Increased efficiency</li>
              <li>Improved accuracy</li>
              <li>Enhanced client satisfaction</li>
              <li>Competitive advantage</li>
            </ul>
            <a href="#contact" className="section-cta-button">Explore Our Legal Tech Solutions</a>
          </div>

          {/* Public Documents Redesign Service Card */}
          <div id="public-documents-redesign-section" className="service-category-card">
            <h3>Public Documents Redesign</h3>
            <h4>Redesign Your Public Documents for Clarity and Effectiveness</h4>
            <p>
              Our public documents redesign services help businesses and government organizations
              transform complex legal and public documents into clear, concise, and user-friendly formats.
              We focus on improving readability, accessibility, and overall impact.
            </p>
            {/* Note: The original description was cut off, so I've completed it with a plausible continuation. */}
            <h5>Benefits:</h5>
            <ul>
              <li>Enhanced clarity and understanding</li>
              <li>Improved public engagement</li>
              <li>Increased efficiency in document processing</li>
              <li>Modernized public image</li>
            </ul>
            <a href="#contact" className="section-cta-button">Request a Document Redesign Consultation</a>
          </div>


        </div> {/* End services-grid */}

        <p className="or-contact-directly">
          For detailed information on any of our services, please reach out to us directly.
        </p>
        {/* This CTA is for general inquiries about other services not featured in detail */}
        <a href="#contact" className="section-cta-button">Contact Us to Learn More</a>
      </section>

      {/* Section 3: Why Choose The LegalCraft Company - Explains the company's unique value proposition */}
      <section id="why-choose-us"> {/* This ID is used for the "About" navigation */}
        <h2>Why Choose {companyName}?</h2>
        <p>
          At {companyName}, we reimagine legal services with a focus on human-centered design,
          leveraging technology to deliver solutions that are not just legally sound, but also
          empathetic, efficient, and accessible. Our commitment to innovation ensures you receive
          forward-thinking legal support.
        </p>
        <ul>
          <li><strong>Technology-Driven:</strong> Utilizing cutting-edge tools for streamlined and secure processes.</li>
          <li><strong>Human-Centered Design:</strong> Services crafted with your needs and experience in mind.</li>
          <li><strong>Expert Guidance:</strong> Backed by deep legal knowledge and industry expertise.</li>
          <li><strong>Efficiency & Compliance:</strong> Ensuring accuracy, speed, and adherence to all legal standards.</li>
          <li><strong>Confidentiality:</strong> Your sensitive information and documents are handled with utmost discretion.</li>
        </ul>
      </section>


      {/* Section 5: How to Reach Us - Essential contact information and form */}
      <section id="contact" className="contact-info"> {/* This ID is used for "Book an Appointment" navigation */}
        <h2>Book an Appointment or Send an Enquiry</h2>
        <p>
          Please fill out the form below, and our team will get back to you shortly to assist with your notarization needs or other legal inquiries.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional):</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Your Enquiry:</label>
            <textarea
              id="enquiry"
              name="enquiry"
              rows="5"
              value={formData.enquiry}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Enquiry</button>
        </form>

        <p className="or-contact-directly">
          Alternatively, you can contact us directly:
        </p>
        <p><strong>Phone:</strong> <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>{phoneNumber}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
        <p><strong>Address:</strong> {physicalAddress}</p>
        <p><strong>Operating Hours:</strong> {operatingHours}</p>
      </section>

      {/* Section 6: Footer - Copyright and policy links */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy" aria-label="Privacy Policy Link (Placeholder)">Privacy Policy</a> |
          <a href="/terms-of-service" aria="Terms of Service Link (Placeholder)">Terms of Service</a>
        </p>
        {/* Optional: <p>Website Design & Development by [Your Name/Developer Name]</p> */}
      </footer>
    </div>
  );
}

export default App;
