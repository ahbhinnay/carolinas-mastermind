import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the refund policy?",
    answer: "We offer full refunds up to 30 days before the event. After that, tickets are non-refundable but transferable to another attendee.",
  },
  {
    question: "What is the dress code?",
    answer: "The dress code is business casual. We recommend comfortable attire suitable for a professional conference setting.",
  },
  {
    question: "Are accommodations provided?",
    answer:
      "Accommodations are not included in the ticket price. However, we have partnered with local hotels to offer discounted rates for attendees.",
  },
  {
    question: "Is this event suitable for all experience levels?",
    answer:
      "Yes, our event caters to a range of experience levels, from newcomers to seasoned professionals in the multifamily real estate industry.",
  },
  {
    question: "Will there be post-event materials available?",
    answer:
      "Yes, all attendees will receive access to a digital resource package including presentation slides and additional materials after the event.",
  },
  {
    question: "How can I register a group?",
    answer: "For group registrations of 3 or more, please contact our team at groups@toothandnailinvestments.com to receive your 10% discount.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-gray-600">
          Have more questions? Contact us at{" "}
          <a href="mailto:info@toothandnailinvestments.com" className="text-blue-600 hover:underline">
            info@toothandnailinvestments.com
          </a>
        </p>
      </div>
    </section>
  );
}
