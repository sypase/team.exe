import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <h3 className="logo mb-0">Medhub</h3>
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <a
                        role="button"
                        target="_blank"
                        href="http://localhost:3008/"
                        className="btn btn--secondary lemonsqueezy-button bg-blue-500 text-white ml-4"
                    >
                        Try MEDCHAT
                        <Icon icon="material-symbols:arrow-forward-rounded" />
                    </a>
                    <a
                        role="button"
                        href="http://localhost:3009"
                        className="btn btn--secondary lemonsqueezy-button ml-4"
                    >
                        Try MEDCONNECT
                        <Icon icon="material-symbols:arrow-forward-rounded" />
                    </a>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
