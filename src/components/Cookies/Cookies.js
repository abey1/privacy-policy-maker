import React from "react";
import "./cookies.scss";

const Cookies = () => {
  return (
    <div className="main_container">
      <div className="sub_title_container">
        <div className="sub_title">what are cookies?</div>
      </div>
      <br />A cookie is a small file with information that your browser stores
      on your device. Information in this file is typically shared with the
      owner of the site in addition to potential partners and third parties to
      that business. The collection of this information may be used in the
      function of the site and/or to improve your experience.
      <br />
      <br />
      <div className="sub_title_container">
        <div className="sub_title">how we use cookies</div>
      </div>
      <ul>
        <li>
          To give you the best experience possible, we use the following types
          of cookies:
        </li>
        <li>
          Strictly Necessary. As a web application, we require certain necessary
          cookies to run our service.
        </li>
        <li>
          Preference.
          <ul>
            <li>
              We use preference cookies to help us remember the way you like to
              use our service.
            </li>
            <li>
              Some cookies are used to personalize content and present you with
              a tailored experience. For example, location could be used to give
              you services and offers in your area.
            </li>
          </ul>
        </li>
      </ul>
      <div className="sub_title_container">
        <div className="sub_title">How to control your cookies</div>
      </div>
      <br />
      So long as the cookie is not strictly necessary, you may opt in or out of
      cookie use at any time. To alter the way in which we collect information
      from you, visit our Cookie Manager.
    </div>
  );
};

export default Cookies;
