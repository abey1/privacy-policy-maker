import React from "react";
import "./yourRights.scss";
const YourRights = () => {
  return (
    <div className="main_container">
      Depending on your geographical location and citizenship, your rights are
      subject to local data privacy regulations. These rights may include:
      <ul>
        <li>
          <div className="main_bulletin">
            Right to Access &#40;PIPEDA, GDPR Article 15, CCPA/CPRA, CPA, VCDPA,
            CTDPA, UCPA, LGPD, POPIA&#41;
          </div>
          You have the right to lear whether we are processing your Personal
          Data and to request a copy of the Personal Data we are processing
          about you.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Right to be Forgotten &#40;right to erasure&#41; &#40;GDPR Article
            17, CCPA/CPRA, CPA, VCDPA, CTDPA, UCPA, LGPD, POPIA&#41;
          </div>
          You have the right to request that we delete Personal Data that we
          process about you, unless we need to retain such data in order to
          comply with a legal obligation or to establish, exercise or defend
          legal claims.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Right to Restriction of Processing &#40;GDPR Article 18, LGPD&#41;
          </div>
          You have the right to restrict our processing of your Personal Data
          under certain circumstances. In this case, we will not process your
          Data for any purpose other than storing it.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Right to Portability &#40;PIPEDA, GDPR Article 20, LGPD&#41;
          </div>
          You have the right to obtain Personal Data we hold about you, in a
          structured, electronic format, and to transmit such Personal Data to
          another data controller, where this is &#40;a&#41; Personal Data which
          you have provided to us, and &#40;b&#41; if we are processing that
          data on the basis of your consent or to perform a contract with you or
          the third party that subscribes to services.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Right to Opt Out &#40;CPRA, CPA, VCDPA, CTDPA, UCPA&#41;
          </div>
          You have the right to opt out of the processing of your Personal Data
          for purposes of: &#40;1&#41; Targeted advertising; &#40;2&#41; The
          sale of Personal Data; and/or &#40;3&#41; Profiling in furtherance of
          decisions that produce legal or similarly significant effects
          concerning you. Under CPRA, you have the right to opt out of the
          sharing of your Personal Data to third parties and our use and
          disclosure of your Sensitive Personal Data to uses necessary to
          provide the products and services reasonably expected by you.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Right to Objection &#40;GDPR Article 21, LGPD, POPIA&#41;
          </div>
          Where the legal justification for our processing of your Personal Data
          is our legitimate interest, you have the right to object to such
          processing on grounds relating to your particular situation. We will
          abide by your request unless we have compelling legitimate grounds for
          processing which override your interests and tights, or if we need to
          continue to process the Personal Data for the establishment, exercise
          or defense of a legal claim.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            Nondiscrimination and nonretaliation &#40;CCPA/CPRA, CPA, VCDPA,
            CTDPA, UCPA&#41;
          </div>
          You have the right not to be denied service or have an altered
          experience for exercising your rights.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            File an Appeal &#40;CPA, VCDPA, CTDPA&#41;
          </div>
          You have the right to file an appeal based on our response to you
          exercising any of these rights. In the event you disagree with how we
          resolved the appeal, you have the right to contact the attorney
          general located here:
          <br />
          If you are based in Colorado, please visit this{" "}
          <a href="https://complaints.coag.gov/s/contact-us">website</a> to file
          a complaint.
          <br />
          If you are based in Virginia, please visit this{" "}
          <a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint">
            website
          </a>{" "}
          to file a complaint.
          <br />
          If you are based in Connecticut, please visit this{" "}
          <a href="https://portal.ct.gov/AG/Common/Complaint-Form-Landing-page">
            website
          </a>{" "}
          to file a complaint.
        </li>
        <br />
        <li>
          <div className="main_bulletin">
            File a Complaint &#40;GDPR Article 77, LGPD, POPIA&#41;
          </div>
          You have the right to bring a claim before their competent data
          protection authority.
        </li>
      </ul>
      <div className="sub_title_container">
        <div className="sub_title">Withdrawing Consent</div>
      </div>
      <br />
      If you have consented to our processing of your Personal Data, you have
      the right to withdraw your consent at any time, free of charge, such as
      where you wish to opt out from marketing messages that you receive from
      us. If you wish to withdraw your consent, please contact us using the
      information found at the bottom of this page.
      <br />
      <br />
      <div className="sub_title_container">
        <div className="sub_title">How to Exercise Your Rights</div>
      </div>
      <br />
      You can make a request to exercise any of these rights in relation to your
      Personal Data by sending the request to our privacy team by using the form
      below.
      <br />
      <br />
      For your own privacy and security, at our discretion, we may require you
      to prove your identity before providing the requested information.
    </div>
  );
};

export default YourRights;
