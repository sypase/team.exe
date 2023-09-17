import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO title="MEDHUB" description="Medchat and Medconnect" />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Simplify Your Health
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    "Simplify Your Health" is an innovative
                                    health chatbot and doctor appointment
                                    platform designed to streamline and simplify
                                    healthcare access. This digital solution
                                    offers users a user-friendly interface to
                                    ask health-related questions, get
                                    personalized health advice, and even
                                    schedule doctor appointments seamlessly. It
                                    leverages AI-driven technology to provide
                                    quick, accurate information and facilitate
                                    efficient healthcare management, ultimately
                                    making the healthcare process more
                                    convenient and accessible for users.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Your Gateway to Streamlined Healthcare.
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Explore MedHub, the comprehensive healthcare
                                    platform that streamlines appointment
                                    scheduling and offers the convenience of
                                    Healthcare AI. With effortless appointment
                                    booking and instant access to personalized
                                    health guidance, MedHub empowers you to take
                                    control of your healthcare journey like
                                    never before.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Appointment Scheduling
                                        </CardHeader>
                                        <p>
                                            MedHub's Appointment Scheduling
                                            feature offers an efficient solution
                                            to manage your healthcare
                                            appointments seamlessly. Say goodbye
                                            to long waiting times and scheduling
                                            hassles as you effortlessly book
                                            appointments with your preferred
                                            healthcare providers. This
                                            user-friendly platform not only
                                            benefits patients but also helps
                                            healthcare professionals optimize
                                            their schedules, reducing no-shows
                                            and enhancing overall efficiency.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Health care AI
                                        </CardHeader>
                                        <p>
                                            MedHub's Healthcare AI is your
                                            trusted companion for personalized
                                            health guidance. Powered by
                                            artificial intelligence, it provides
                                            quick and accurate responses to your
                                            medical queries, offers insights on
                                            symptoms, and even facilitates
                                            virtual consultations. With MedHub,
                                            you have a virtual healthcare
                                            assistant at your fingertips, making
                                            healthcare information and services
                                            more accessible and convenient.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    ></MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                FAQ about MEDHUB🫂 <br></br>
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
