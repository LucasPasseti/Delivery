import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} do Centro</span>
                <span className="siTaxiOp">Free airport taxi</span>
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
                {item.rating && <div className="siRating">
                    <span>Excelent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Incluso taxas</span>
                    <Link to={`/services/${item._id}`}>
                        <button className="siCheckButton">Ver estabelecimento</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;