import { useState } from "react";
import {
  FaInstagram,
  // FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  const date = new Date().getFullYear();

  // States for the Terms and Privacy
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  // Function to handle Terms
  const handleTerms = () => {
    setTerms(!terms);
    setPrivacy(false);
  };

  // Function to handle Privacy
  const handlePrivacy = () => {
    setPrivacy(!privacy);
    setTerms(false);
  };

  return (
    <footer className="container mx-auto md:px-16 mt-auto text-center py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg">
          <p>&copy; {date} Salmaan Mushtaq</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <a
            className="customShadow border border-navLinkBorder socialContainer containerOne"
            href="https://www.instagram.com/salmaan4746"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="bg-background socialSvg instagramSvg" />
          </a>
          <a
            href="https://github.com/SalmaanMushtaq"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerTwo customShadow border border-navLinkBorder"
          >
            <FaGithub className="bg-background socialSvg gitHubSvg" />
            {/* <FaTwitter className="bg-background socialSvg twitterSvg" /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/salmaan-mushtaq-5b4998242"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerThree customShadow border border-navLinkBorder"
          >
            <FaLinkedinIn className="bg-background socialSvg linkdinSvg" />
          </a>
          <a
            href="https://wa.me/+917006172734"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerFour customShadow border border-navLinkBorder"
          >
            <FaWhatsapp className="bg-background socialSvg whatsappSvg" />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <a
          className={`text-gray-400 hover:text-gray-300 cursor-pointer ${
            privacy ? "text-yellow-600" : ""
          }`}
          onClick={handlePrivacy}
        >
          Privacy Policy
        </a>
        <span className="mx-2">•</span>
        <a
          className={`text-gray-400 hover:text-gray-300 cursor-pointer ${
            terms ? "text-yellow-800" : ""
          }`}
          onClick={handleTerms}
        >
          Terms of Service
        </a>
      </div>
      {/* Terms of Service and Privacy Policy text */}
      {terms && (
        <div className="px-8 container mx-auto mt-8 max-w-2xl text-left text-sm">
          <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
          <p>
            👉 Welcome to Salmaan Mushtaq&apos;s portfolio website! By accessing
            and using this website, you agree to be bound by these Terms of
            Service. If you do not agree with any part of these terms, please
            refrain from using this website.
          </p>
          <p>
            👉 You must be at least 18 years old to use this website. By using
            this website, you represent that you are at least 18 years old.
          </p>
          <p>
            👉 You agree to use this website in compliance with all applicable
            laws and regulations. You agree not to engage in any unlawful or
            prohibited activities, including but not limited to violating the
            rights of others or posting objectionable content.
          </p>
        </div>
      )}
      {/* More details will be added later on */}
      {privacy && (
        <div className="px-8 container mx-auto mt-8 max-w-2xl text-left text-sm">
          <h2 className="text-xl font-bold mt-8 mb-4">Privacy Policy</h2>
          <p>
            👉 This Privacy Policy outlines how Salmaan Mushtaq collects, uses,
            and protects personal information obtained from users of this
            website.
          </p>
          <p>
            👉 We may collect personal information such as name, email address,
            and phone number when you voluntarily provide it to us through our
            website&aos;s contact forms or email subscriptions.
          </p>
          <p>
            👉 We may use the information we collect to respond to your
            inquiries, send periodic emails or newsletters, and improve our
            website and services.
          </p>
          {/* More details will be added later on */}
        </div>
      )}
    </footer>
  );
}

export default Footer;
