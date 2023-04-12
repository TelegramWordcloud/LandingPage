import Head from 'next/head'
import { Roboto } from 'next/font/google'
import Header from "@/components/chunks/header";
import Features from "@/components/chunks/features";
import Examples from "@/components/chunks/examples";
import Footer from "@/components/chunks/footer";

const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin']});

export default function Home() {
    return (
        <>
            <Head>
                <title>WordCloud | Generate an image based on your telegram chat history | Free word cloud generation</title>
                <meta name="description" content="Wordcloud allows users to create an image, that contains the most frequent words in the chat. The more frequent the word is - the biggrt it is on the picture. You can generate it for free using our service." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={roboto.className}>
                <Header/>
                <Features/>
                <Examples/>
                <Footer/>
            </main>
        </>
    )
}
