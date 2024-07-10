import About from "./home compo/About";
import Banner from "./home compo/Banner";
import Category from "./home compo/Category";
import FishSale from "./home compo/FishSale";
import Popular from "./home compo/Popular";
import Tools from "./home compo/Tools";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <FishSale></FishSale>
            <Category></Category>
            <About></About>
            <Popular></Popular>
            
        </div>
    );
};

export default Home;