import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch("/services/countByCity?cities=Jales,Votuporanga,Fernandópolis");


  return (
    <div className="featured">
      {loading ?
        ("Carregando, por favor espere") : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.seudinheiro.com/uploads/2022/03/mcdonalds.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jales</h1>
              <h2>{data[0]} estabelecimentos</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.seudinheiro.com/uploads/2022/03/mcdonalds.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Votuporanga</h1>
              <h2>{data[1]} Estabelecimento</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.seudinheiro.com/uploads/2022/03/mcdonalds.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Fernandópolis</h1>
              <h2>{data[2]} Estabelecimento</h2>
            </div>
          </div> </>)}
    </div>
  );
};

export default Featured;