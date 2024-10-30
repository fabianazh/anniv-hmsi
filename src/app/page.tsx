// import Footer from '@/Components/Partials/Footer';
import Hero from '@/Components/Section/Hero';
import Information from '@/Components/Section/Information';
import Message from '@/Components/Section/Message';

export default function Home() {
    return (
        <>
            <main className="relative w-full h-auto p-3 lg:p-5">
                <Hero />
                <Message />
                <Information />
                {/* <Footer /> */}
            </main>
        </>
    );
}
