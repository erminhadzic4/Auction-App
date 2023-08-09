import React from "react";

const AboutUs = () => {
  const containerStyle = {
    color: "black",
    textAlign: "center",
    margin: "0 auto",
    padding: "8px",
    maxWidth: "800px",
  };

  const headingStyle = {
    color: "black",
    textAlign: "center",
  };

  const paragraphStyle = {
    color: "black",
    textAlign: "justify",
  };

  return (
    <div
      style={{
        minHeight: "586px",
        display: "grid",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={containerStyle}>
        <h4 style={headingStyle}>
          Welcome To <span id="W_Name1">AuctionApp</span>
        </h4>
        <p style={paragraphStyle}>
          Hello and Welcome to our Website{" "}
          <b>
            <span id="W_Name2">AuctionApp</span>
          </b>
          . we are glad that you want to know something more About Us.
          Therefore, we have taken the initiative to help you by providing a
          better solution to your problems. Our first priority is to provide you
          with a better solution to solve your problem and quaries. If you don’t
          find a solution to your problem, please let us know in the comments
          section.. Also, we are trying to provide fresh and latest content that
          provides you ideas about all the updated information that’s happening
          in the world.
        </p>
        <p style={paragraphStyle}>
          In the below section, you can get more ideas about our site like our
          website category and content category. If you have additional
          questions or require more information, don’t hesitate to contact us
          through email at{" "}
          <b>
            <span id="Y_Email1">hadzicermin34@yahoo.com</span>
          </b>{" "}
          or you can contact us through our contact us form.
        </p>

        <h4 style={headingStyle}>What is Our Goal?</h4>
        <p style={paragraphStyle}>
          There are millions of websites created every day, also, there is much
          fake content spread on the internet. <b>Our main goal</b> is to
          provide you with <b>100% Original and Safe content</b> that provides
          you with a great and better experience on the world wide web. We
          mainly focus on our service and improving it regularly to provide a
          better user experience to all users. Our main priority is to search
          for new content and present it in front of you to learn something new.
        </p>

        <h4 style={headingStyle}>What is our Service?</h4>
        <p style={paragraphStyle}>
          We are mainly focused on{" "}
          <b>
            <span id="W_Spec1">Shopping and Selling</span>
          </b>{" "}
          related content. If you are interested in the{" "}
          <b>
            <span id="W_Type1">eCommerce</span>
          </b>
          , then you can visit daily to get more latest information. On our
          website{" "}
          <b>
            <span id="W_Name3">AuctionApp</span>
          </b>
          , we focus on many other categories and we hope you like also, the
          content of other categories that are maintained on our website. You
          can visit our website homepage to know all category details.
        </p>

        <p style={paragraphStyle}>
          This Website is Created to help people because many people are still
          spending hours of time to get exact information so, this is the only
          motive to create{" "}
          <b>
            <span id="W_Name4">AuctionApp</span>
          </b>{" "}
          to help people and provide them a better web experience. Now, the time
          is to know about the Admin Details of this website, so, now we have to
          go down to know about Admin details.
        </p>

        <p style={paragraphStyle}>
          Admin’s Statement for{" "}
          <b>
            <span id="W_Name5">AuctionApp</span>
          </b>
          <br></br>
          As per my point of view, there are many people who visit the internet
          to get some information but 90% of the time they get wrong
          information. So, the first priority of our website{" "}
          <b>
            <span id="W_Name6">AuctionApp</span>
          </b>{" "}
          is to provide <b>100% legit and accurate information</b> to our users.
          I hope my dream comes true one day, and our website will provide
          Original Content to provide a better user experience. So, From my Side
          thanks for visiting our website.
        </p>

        <h4 style={headingStyle}>Admin’s Contact Information</h4>
        <p style={paragraphStyle}>
          Hi, this{" "}
          <b>
            <span id="Y_Name1">Ermin</span>
          </b>
          , in the above paragraph you know about the website properly and now I
          am going to provide my contact details. These details are my personal
          Account details. If you have any problem and suggestions for this
          website then you can contact me by using following contact details.
        </p>

        <p style={paragraphStyle}>
          <b>
            Name: <span id="Y_Name2">Ermin</span>
          </b>
        </p>
        <p style={paragraphStyle}>
          <b>
            Email: <span id="Y_Email2">hadzicermin34@yahoo.com</span>
          </b>
        </p>

        <p style={paragraphStyle}>
          Finally, this is our complete about us page about details are showing
          what is the motive to create{" "}
          <b>
            <span id="W_Name7">AuctionApp</span>
          </b>
          . I will keep posting more important posts on my Website for all of
          you. Please give your support and love.
        </p>

        <p style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>
          Thanks For Visiting Our Site<br></br>
          <br></br>
          <span
            style={{
              backgroundColor: "white",
              color: "blue",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Have a nice day!
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
