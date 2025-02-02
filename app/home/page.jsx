import HeroBanner from "../components/HeroBanner";
import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import VitaSection from "../components/VitaSection";
import NeuralSection from "../components/NeuralSection";
import FeaturedPosts from "../components/FeaturedPosts";
export default function HomePage() {
    return (
        <div>
            <TopBar />
            <Navbar />

            <div>
                <HeroBanner />
            </div>
            <div>
                <EditorsPick />
            </div>
            <div>
                <FeaturedProducts />
            </div>
            <div>
                <VitaSection />
            </div>
            <div>
                <NeuralSection />
            </div>
            <div>
                <FeaturedPosts />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}