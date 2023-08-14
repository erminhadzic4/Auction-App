import React from "react";
import "../styles/Styles.css";
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container-title">
        <p className="title-left">About Us</p>
        <span>
          <Link to="/home" className="title-right-home">
            Home
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">About Us</span>
        </span>
      </div>
      <div className="container-style">
        <p className="title">
          <b>
            Welcome To <span id="W_Name1">AuctionApp</span>
          </b>
        </p>
        <p className="paragraph-style">
          Hello and Welcome to our Website <span id="W_Name2">AuctionApp</span>.
          We are glad that you want to know something more About Us. Therefore,
          we have taken the initiative to help you by providing a better
          solution to your problems. Our first priority is to provide you with a
          better solution to solve your problems and queries. If you don’t find
          a solution to your problem, please let us know in the comments
          section. Also, we are trying to provide fresh and latest content that
          provides you ideas about all the updated information that’s happening
          in the world.
        </p>
        <p className="paragraph-style">
          In the below section, you can get more ideas about our site like our
          website category and content category. If you have additional
          questions or require more information, don’t hesitate to contact us
          through email at <span id="Y_Email1">hadzicermin34@yahoo.com</span> or
          you can contact us through our contact us form.
        </p>

        <p className="paragraph-style">
          Admin’s Statement for <span id="W_Name5">AuctionApp</span>
          <br></br>
          As per my point of view, there are many people who visit the internet
          to get some information but 90% of the time they get wrong
          information. So, the first priority of our website{" "}
          <span id="W_Name6">AuctionApp</span> is to provide 100% legit and
          accurate information to our users. I hope my dream comes true one day,
          and our website will provide Original Content to provide a better user
          experience. So, From my Side thanks for visiting our website.
        </p>

        <p className="paragraph-style">
          Admin’s Contact Information<br></br>
          Hi, this <span id="Y_Name1">Ermin</span>, in the above paragraph you
          know about the website properly and now I am going to provide my
          contact details. These details are my personal Account details. If you
          have any problem and suggestions for this website then you can contact
          me by using following contact details.
        </p>

        <p className="paragraph-style">
          Name: <span id="Y_Name2">Ermin</span>
        </p>
        <p className="paragraph-style">
          Email: <span id="Y_Email2">hadzicermin34@yahoo.com</span>
        </p>

        <p className="paragraph-style">
          Finally, this is our complete about us page about details are showing
          what is the motive to create <span id="W_Name7">AuctionApp</span>. I
          will keep posting more important posts on my Website for all of you.
          Please give your support and love.
        </p>

        <p className="paragraph-style">
          Thanks For Visiting Our Site<br></br>
        </p>
      </div>
    </Layout>
  );
};

export default AboutUs;
