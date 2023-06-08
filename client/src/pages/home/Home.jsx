import Featured from "../../components/featured/Featured.jsx";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import NavBar from "../../components/navbar/Navbar.jsx";
import PropertyList from "../../components/propertyList/PropertyList.jsx";
import "./home.css";

const Home = () => {
    return(
        <div>
            <NavBar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Navegue por tipo de item</h1>
                <PropertyList />
                <h1 className="homeTitle">Locais que os clientes adoram</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home