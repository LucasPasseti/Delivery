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
              src="https://focalizando.com.br/sites/default/files/2023-03/promocao-subway-do-dia-atualizado-2023.jpg"
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
              src="https://retailinsider.b-cdn.net/wp-content/uploads/2021/11/DJI_0246_skrpl-scaled.jpg"
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