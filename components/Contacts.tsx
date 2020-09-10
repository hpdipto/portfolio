import * as React from "react";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/Contacts.css";

function Contact() {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/767858f8a7.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="contact" id="contact">
        <div className="contact-top">
          <div className="contact-title">
            <span className="contact-title-text">Contact</span>
          </div>
        </div>

        <div className="contact-details">
          <div className="card border-0 text-center">
            <div className="card-body contact-card">
              <p className="contact-text">
                I'm currently looking for job actively. If you've any job to
                offer or whatever you want to share, I'm open for any
                conversation. :)
              </p>
            </div>
            <div className="card-footer border-0">
              <button className="btn btn-outline-success hello-button">
                Say Hello
              </button>
            </div>
          </div>
        </div>

        <div className="page-footer text-center mb-3">
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreffer"
          >
            Design concept: bchiang7
          </a>
          <br />
          <a
            href="https://github.com/hpdipto/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developd by hpdipto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
