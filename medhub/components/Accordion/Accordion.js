import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What is MedHub?",
        isOpen: true,
        content:
            "MedHub is a comprehensive healthcare management platform that streamlines medical appointments, offers virtual consultations, and provides valuable health information, all in one place."
    },
    {
        id: uuid(),
        title: "Who can benefit from MedHub?",
        isOpen: false,
        content:
            "MedHub is designed to benefit both patients and healthcare providers. Patients can easily schedule appointments, access telemedicine services, and get health advice. Healthcare providers can manage appointments efficiently and provide remote consultations."
    },
    {
        id: uuid(),
        title: "Is MedHub available for free?",
        isOpen: false,
        content: "Yes, MedHub offers free access to its basic features."
    },
    {
        id: uuid(),
        title: "What features does MedHub offer to healthcare providers?",
        isOpen: false,
        content:
            "MedHub provides healthcare providers with appointment scheduling, electronic health records (EHR) management, and secure communication tools to enhance patient care and practice efficiency."
    },
    {
        id: uuid(),
        title: "How can I get in touch with MedHub support?",
        isOpen: false,
        content:
            "If you need assistance or have questions about MedHub, please visit our website and navigate to the 'Contact' section to reach our support team."
    }
];


const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
