import Head from 'next/head'
import { Roboto } from 'next/font/google'
import Header from "@/components/chunks/header";
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import _ from "lodash";
import Footer from "@/components/chunks/footer";
import Page from "@/components/elements/page";
import PageContent from "@/components/elements/page-content";
import {useEffect} from "react";
import Card from "@/components/elements/card";
import shortid from "shortid";
import H1 from "@/components/elements/headers/h1";
import H2 from "@/components/elements/headers/h2";
import H4 from "@/components/elements/headers/h4";
import AccentColor from "@/components/elements/accent-color";
import LinkWrapper from "@/components/elements/link-wrapper";
import Button from "@/components/elements/button";
import {CHEVRON_RIGHT_ICON} from "@/constants";
import {BlogHeader, BlogPost, NavBarWrapper, Section} from "@/pages/blog/[slug]";
import NavBar from "@/components/chunks/nav-bar";

const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin']});

export default function Blog({posts}) {
    useEffect(() => {
        console.log(posts);
    }, [posts])
    return (
        <>
            <Head>
                <title>WordCloud | Generate an image based on your telegram chat history | Free word cloud generation</title>
                <meta name="description" content="Wordcloud allows users to create an image, that contains the most frequent words in the chat. The more frequent the word is - the biggrt it is on the picture. You can generate it for free using our service." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={roboto.className}>
                <NavBarWrapper>
                    <NavBar/>
                </NavBarWrapper>
                <Section>
                    <PageContent>
                        <BlogPost>
                            {
                                _.map(posts, (post) => (
                                    <BlogHeader>
                                        <Card key={shortid.generate()}>
                                            <H1>{post.frontmatter.title}</H1>
                                            <H2><AccentColor>{post.frontmatter.author}</AccentColor></H2>
                                            <H4>{post.frontmatter.date}</H4>
                                            <LinkWrapper>
                                                <Link href={`/blog/${post.slug}`}>
                                                    <Button text={"Read"} imageSRC={CHEVRON_RIGHT_ICON}/>
                                                </Link>
                                            </LinkWrapper>
                                        </Card>
                                    </BlogHeader>
                                ))
                            }
                        </BlogPost>
                    </PageContent>
                </Section>
                <Footer/>
            </main>
        </>
    )
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
            posts,
        },
    };
}
