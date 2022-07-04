import Accordion from "./Accordion";

export default {
    title: "Components/Accordion",
    component: Accordion
}

const Template = (args) => <Accordion {...args} />;

export const Faqs = Template.bind({});
Faqs.args = {
    data: [
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy tesxt of the printing and typesetting indeustry. Lorem psum has been..."
        },
        {
            title: "Why do we use it?",
            content: "It is a long established fact..."
        }
    ]
}

