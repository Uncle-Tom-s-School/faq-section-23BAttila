import { useState } from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-card">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <p className="faq-question">{question}</p>
        <img
          
          src={open ? minusIcon : plusIcon}
          className="faq-icon"
        />
      </div>
      <div className={`faq-answer-wrapper ${open ? "open" : ""}`}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
