import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/Styles.css";
import "../styles/AboutUs.css";

const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="container-title">
        <p className="title-left">Terms and Conditions</p>
        <span>
          <Link to="/home" className="title-right-home">
            Home
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">Terms and Conditions</span>
        </span>
      </div>
      <div className="container-style">
        <p className="title">
          <b>Welcome To AuctionApp</b>
        </p>
        <p className="paragraph-style">
          These terms and conditions outline the rules and regulations for the
          use of AuctionApp's Website, located at auctionapp@website.com. By
          accessing this website we assume you accept these terms and
          conditions. Do not continue to use AUCTIONAPP if you do not agree to
          take all of the terms and conditions stated on this page. The
          following terminology applies to these Terms and Conditions, Privacy
          Statement and Disclaimer Notice and all Agreements: "Client", "You"
          and "Your" refers to you, the person log on this website and compliant
          to the Company's terms and conditions. "The Company", "Ourselves",
          "We", "Our" and "Us", refers to our Company. "Party", "Parties", or
          "Us", refers to both the Client and ourselves. All terms refer to the
          offer, acceptance and consideration of payment necessary to undertake
          the process of our assistance to the Client in the most appropriate
          manner for the express purpose of meeting the Client's needs in
          respect of provision of the Company's stated services, in accordance
          with and subject to, prevailing law of ba. Any use of the above
          terminology or other words in the singular, plural, capitalization
          and/or he/she or they, are taken as interchangeable and therefore as
          referring to same.
        </p>
        <p className="title">
          <b>Cookies</b>
        </p>
        <p className="paragraph-style">
          We employ the use of cookies. By accessing AUCTIONAPP, you agreed to
          use cookies in agreement with the AuctionApp's Privacy Policy. Most
          interactive websites use cookies to let us retrieve the user's details
          for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <p className="title">
          <b>License</b>
        </p>
        <p className="paragraph-style">
          Unless otherwise stated, AuctionApp and/or its licensors own the
          intellectual property rights for all material on AUCTIONAPP. All
          intellectual property rights are reserved. You may access this from
          AUCTIONAPP for your own personal use subjected to restrictions set in
          these terms and conditions. You must not: Republish material from
          AUCTIONAPP Sell, rent or sub-license material from AUCTIONAPP
          Reproduce, duplicate or copy material from AUCTIONAPP Redistribute
          content from AUCTIONAPP This Agreement shall begin on the date hereof.
          Our Terms and Conditions were created with the help of the Free Terms
          and Conditions Generator. Parts of this website offer an opportunity
          for users to post and exchange opinions and information in certain
          areas of the website. AuctionApp does not filter, edit, publish or
          review Comments prior to their presence on the website. Comments do
          not reflect the views and opinions of AuctionApp,its agents and/or
          affiliates. Comments reflect the views and opinions of the person who
          post their views and opinions. To the extent permitted by applicable
          laws, AuctionApp shall not be liable for the Comments or for any
          liability, damages or expenses caused and/or suffered as a result of
          any use of and/or posting of and/or appearance of the Comments on this
          website.
        </p>
        <p className="title">
          <b>Removal of links from our website</b>
        </p>
        <p className="paragraph-style">
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly. We do not ensure that the information on this
          website is correct, we do not warrant its completeness or accuracy;
          nor do we promise to ensure that the website remains available or that
          the material on the website is kept up to date.
        </p>
        <p className="title">
          <b>Disclaimer</b>
        </p>
        <p className="paragraph-style">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:{" "}
        </p>
        <ul>
          <li>
            limit or exclude our or your liability for death or personal injury
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law
          </li>
        </ul>{" "}
        <p className="paragraph-style">
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty. As long as the website and the information
          and services on the website are provided free of charge, we will not
          be liable for any loss or damage of any nature.
        </p>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
