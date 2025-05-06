import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page, click on 'Forgot Password', and follow the instructions sent to your email."
  },
  {
    question: "How can I update my profile information?",
    answer: "Navigate to your profile page, click on the 'Edit' button, update your details, and save the changes."
  },
  {
    question: "Is my personal data secure?",
    answer: "Yes, we use encryption and secure protocols to keep your data safe. We do not share your data with third parties."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our support team via the 'Contact Us' page or send an email to support@example.com."
  }
];

export default function Helpp() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Help & FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-medium"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
