import React, { useState } from "react";

function Form() {
  const [display, setDisplay] = useState("none");
  const handleSubmit = () => {
    setDisplay("block");
  };
  return (
    <div>
      <iframe title="hidden_iframe" name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} />
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdzMG6QMX9tU73rX7_2FavBw9A9eOs-V1LGUOT2wZPFhFWdtw/formResponse"
        method="post"
        target="hidden_iframe"
        className="form"
        onSubmit={() => handleSubmit()}
      >
        <div className="form-name">
          <input id="name" className="name-input style-input" name="entry.576915509" type="text" title="name" placeholder="Name" />
          <input id="email" className="email-input style-input" name="entry.1190585177" type="text" title="email" placeholder="Email" />
        </div>
        <input id="subject" className="form-subject style-input" name="entry.1097150983" type="text" title="sujet" placeholder="Subject" />
        <textarea id="message" className="form-msg" name="entry.197993009" title="message" placeholder="Message" />
        <input className="form-btn" type="submit" value="Send" />
      </form>
      <span style={{ display }} className="message-sent">Thank you for your message</span>
    </div>
  );
}

export default Form;
