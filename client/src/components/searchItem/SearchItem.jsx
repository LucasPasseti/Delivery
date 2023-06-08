import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://media.seudinheiro.com/uploads/2022/03/mcdonalds.jpg"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Mc Donalds</h1>
                <span className="siDistance">500m from center</span>
                <span className="siOp">Terceira entrega Grátis</span>
                <span className="siSubtitle">
                    Transportes de alta qualidade
                </span>
                <span className="siFeatures">
                    teste• 1 teste • teste
                </span>
                <span className="siCancelOp">Cancelamento grátis</span>
                <span className="siCancelOpSubtitle">
                    Você pode cancelar mais tarde, então garanta esse ótimo preço hoje!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excelente</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$34</span>
                    <span className="siOps">Incluso taxas</span>
                    <button className="siCheckButton">Ver avaliação</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;