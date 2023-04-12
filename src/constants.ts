import {ILinkButtonProps} from "@/components/elements/link-button";


export const BACKGROUNDS = {
    HEADER: "/images/Background.jpg",
    EXAMPLES: "/images/example-background.jpg"
}

export const NAVBAR: ILinkButtonProps[] = [
    {
        text: "WordCloud",
        src: "/",
        iconSRC: "/images/icons/nav-home.svg"
    },
    {
        text: "API",
        src: process.env.NEXT_PUBLIC_API_URL || "/",
        iconSRC: "/images/icons/nav-api.svg"
    },
    {
        text: "Community",
        src: process.env.NEXT_PUBLIC_COMMUNITY_URL || "",
        iconSRC: "/images/icons/nav-community.svg"
    },
    {
        text: "Tutorials",
        src: process.env.NEXT_PUBLIC_TUTORIALS_URL || "",
        iconSRC: "/images/icons/nav-tutorials.svg"
    }
]

export const CHEVRON_RIGHT_ICON = "/images/icons/chevron-right.svg";
export const CHECK_ICON = "/images/icons/check.svg";

export const EXAMPLE_IMAGE = "/images/example.jpg";