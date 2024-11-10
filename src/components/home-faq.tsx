import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How can I sign up for ACND?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam totam dolores quasi dolore quibusdam delectus nostrum cum quo nihil.",
  },
  {
    question: "Can you build something for me?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat at illo reiciendis ab, voluptatibus aut deleniti. Nobis, laborum iure!",
  },
  {
    question: "What kind of consulting do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur perferendis iure ducimus earum libero atque, aliquam magnam minus mollitia repellendus.",
  },
];

export const HomeFaq = () => {
  return (
    <div className="py-20 container grid grid-cols-1 md:grid-cols-4 border-b">
      <h2 className="text-3xl font-extralight col-span-1 animate-slidein opacity-0 [--slidein-delay:300ms]">
        FAQ
      </h2>
      <div className="col-span-3 flex flex-col animate-slidein opacity-0 [--slidein-delay:500ms] gap-4 items-start w-full">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
