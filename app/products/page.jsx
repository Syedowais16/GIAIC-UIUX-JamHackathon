import SecondFooter from "../components/SecondFooter";
import GreenTopBar from "../components/GreenTopBar";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";

export default function HomePage() {
    return (
        <div>
            <GreenTopBar />
            <Navbar />
            <div>
                <SingleProduct />
            </div>
             
            <div>
                <SecondFooter />
            </div>
        </div>
    );
}