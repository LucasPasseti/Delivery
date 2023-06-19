import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} do Centro</span>
                <span className="siOp">A cada 2 entregas, ganhe uma grátis</span>
                <span className="siSubtitle">
                    Transportes de alta qualidade
                </span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Cancelamento gratuito </span>
                <span className="siCancelOpSubtitle">
                    Você pode cancelar mais tarde, então garanta esse ótimo preço hoje! 
                </span>
            </div>
            <div className="siDetails">
                 <div className="siRating">
                    <span className="Exe"></span>
                    <button>10.0</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siOps">Incluso taxas</span>
                    <Link to={`/services/${item._id}`}>
                        <button className="siCheckButton">Ver estabelecimento</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;