import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // **************Email validation start here**********
  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };
  // **************Email validation end here************

  const handleSend = async (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("username is Required!");
      return;
    } else if (phoneNumber === "") {
      setErrMsg("phoneNumber is Required!");
      return;
    } else if (email === "") {
      setErrMsg("Fill your email address");
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("give a valid email!");
      return;
    } else if (subject === "") {
      setErrMsg("add a subject!");
      return;
    } else if (message === "") {
      setErrMsg("Message is required!");
      return;
    }
    //   else {
    //     setSuccessMsg(
    //       `Thank you dear ${username}, Your message has been sent Successfully!`
    //     );
    //     setErrMsg("");
    //     setUsername("");
    //     setPhoneNumber("");
    //     setEmail("");
    //     setSubject("");
    //     setMessage("");
    //   }
    // };

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const response = await fetch("https://getform.io/f/bvrwwmmb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMsg(`Thank you, ${username}! Your message has been sent.`);
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrMsg("Something went wrong! Please try again.");
      }
    } catch (error) {
      setErrMsg("Failed to send message! Please check your connection.");
    }
  };

  return (
    <div
      className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
                    p-8 rounded-lg  flex flex-col gap-8 "
    >
      <form
        action="https://getform.io/f/bvrwwmmb"
        method="POST"
        className="w-full flex flex-col gap-6 py-5"
      >
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne 
              text-center text-orange-500 text-base tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne 
              text-center text-green-500 text-base tracking-wide animate-bounce"
          >
            {successMsg}
          </p>
        )}
        <div className="w-full flex gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
              className={`${
                errMsg === "username is Required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              phone number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              name="phoneNumber"
              className={`${
                errMsg === "phoneNumber is Required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            className={`${
              errMsg === "Fill your email address" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            name="subject"
            className={`${
              errMsg === "add a subject!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            className={`${
              errMsg === "Message is required!" && "outline-designColor"
            } contactInput`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSend}
            className="w-full h-12 rounded-lg text-base  bg-[#141518] text-gray-400 tracking-wider
                uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor
                border-transparent "
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne 
              text-center text-orange-500 text-base tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne 
              text-center text-green-500 text-base tracking-wide animate-bounce"
          >
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
