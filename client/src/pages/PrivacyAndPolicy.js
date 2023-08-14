import React from "react";
import "../styles/Styles.css";
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";

const PrivacyAndPolicy = () => {
  return (
    <Layout>
      <div className="container-title">
        <p className="title-left">Privacy and Policy</p>
        <span>
          <Link to="/home" className="title-right-home">
            Home
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">Privacy and Policy</span>
        </span>
      </div>
      <div className="container-style">
        <p className="title">
          <b>Privacy Policy for AuctionApp</b>
        </p>
        <p className="paragraph-style">
          At auctionapp, accessible from auctionapp@website.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by auctionapp and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to
          contact us. This Privacy Policy applies only to our online activities
          and is valid for visitors to our website with regards to the
          information that they shared and/or collect in auctionapp. This policy
          is not applicable to any information collected offline or via channels
          other than this website.
        </p>
        <p className="title">
          <b>Information we collect</b>
        </p>
        <p className="paragraph-style">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number.
        </p>
        <p className="title">
          <b>How we use your information</b>
        </p>
        <p className="paragraph-style">
          We use the information we collect in various ways, including to:{" "}
        </p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <p className="title">
          <b>Log Files</b>
        </p>
        <p className="paragraph-style">
          auctionapp follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </p>
        <p className="title">
          <b>Children's Information</b>
        </p>
        <p className="paragraph-style">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
          auctionapp does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <p className="title">
          <b>Consent</b>
        </p>
        <p className="paragraph-style">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyAndPolicy;
