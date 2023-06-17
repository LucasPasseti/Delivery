import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { productInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewProduct = () => {
  const [info, setInfo] = useState({});
  const [serviceId, setServiceId] = useState(undefined);
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useFetch("/services");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const productNumbers = products.split(",").map((product) => ({ number: product }));
    try {
      await axios.post(`/products/${serviceId}`, { ...info, productNumbers });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Aicionar Novo Produto</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {productInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Produtos</label>
                <textarea
                  onChange={(e) => setProducts(e.target.value)}
                  placeholder="coloque vírgula entre os números dos produtos."
                />
              </div>
              <div className="formInput">
                <label>Escolha um serviço</label>
                <select
                  id="serviceId"
                  onChange={(e) => setServiceId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((service) => (
                        <option key={service._id} value={service._id}>{service.name}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;