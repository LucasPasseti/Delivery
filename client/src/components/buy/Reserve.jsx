import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import {useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const Reserve = ({ setOpen, serviceId }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { data, loading, error } = useFetch(`/services/product/${serviceId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (productNumber) => {
    const isFound = productNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedProducts(
      checked
        ? [...selectedProducts, value]
        : selectedProducts.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedProducts.map((productId) => {
          const res = axios.put(`/products/availability/${productId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Selecione seus produtos:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Quantidade: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectProducts">
              {item.productNumbers.map((productNumber) => (
                <div className="product">
                  <label>{productNumber.number}</label>
                  <input
                    type="checkbox"
                    value={productNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(productNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Encerrar Compra
        </button>
      </div>
    </div>
  );
};

export default Reserve;