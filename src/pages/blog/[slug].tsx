import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Page from "@/components/elements/page";
import PageContent from "@/components/elements/page-content";
import H1 from "@/components/elements/headers/h1";
import H2 from "@/components/elements/headers/h2";
import Footer from "@/components/chunks/footer";
import BigP from "@/components/elements/paragraphs/big-p";
import P from "@/components/elements/paragraphs/p";
import AccentColor from "@/components/elements/accent-color";
import {Roboto} from "next/font/google";
import styled from "styled-components";
import H4 from "@/components/elements/headers/h4";
import NavBar from "@/components/chunks/nav-bar";

const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin']});

export const Section = styled.article`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: #D0D3D7;
`;

export const BlogPost = styled.div`
    width: 100%;
    height: fit-content;
    background: #FAFAFA;
    border-radius: 5px;
    padding: 37px;
    margin-top: 166px;
`;

export const BlogHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 50px;
    border-left: 3px solid #374E64;
    margin-bottom: 150px;
`;

export const NavBarWrapper = styled.div`
    width: 100%;
    border-bottom: 3px solid #374E64;
    position: fixed;
    z-index: 2;
    background: #D0D3D7FA;
    top: 0;
    left: 0;
    nav {
        margin-bottom: 26px !important;
    }
  
    @media(max-width: 1024px){
        position: static;
        padding-top: 1px;
    }
`

// The page for each post
export default function Post({frontmatter, content}) {

    const {title, author, category, date, bannerImage, tags} = frontmatter

    return (
        <main className={roboto.className}>
            <Section>
                <NavBarWrapper>
                    <NavBar/>
                </NavBarWrapper>
                <PageContent>
                    <BlogPost>
                        <BlogHeader>
                            <H1>{title}</H1>
                            <H2>By <AccentColor>{author}</AccentColor></H2>
                            <H4>Published - <AccentColor>{date}</AccentColor></H4>
                        </BlogHeader>
                        <div className={"post"} dangerouslySetInnerHTML={{ __html: md().render(content) }}/>
                    </BlogPost>
                </PageContent>
            </Section>
            <Footer/>
        </main>

    )
}

// Generating the paths for each post
export async function getStaticPaths() {
    // Get list of all files from our posts directory
    const files = fs.readdirSync("posts");
    // Generate a path for each one
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));
    // return list of paths
    return {
        paths,
        fallback: false,
    };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}