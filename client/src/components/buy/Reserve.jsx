import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./reserve.css";

const Reserve = ({ setOpen, serviceId }) => {
  const { data, loading, error } = useFetch(`/services/product/${serviceId}`);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;

    data.forEach((item) => {
      const quantity = quantities[item._id] || 0;
      total += item.price * quantity;
    });

    setTotalPrice(total);
  }, [data, quantities]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  const handleClick = async () => {
    // Placeholder logic for processing the purchase
    console.log("Processing purchase...");

    // Simulating a delay for payment processing (2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Set purchaseComplete state to true
    setPurchaseComplete(true);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = () => {
    // Placeholder logic for handling the payment
    console.log("Processing payment...");

    // Simulating a delay for payment processing (2 seconds)
    setTimeout(() => {
      // Refresh the page after payment is completed
      navigate("/", { replace: true });
    }, 2000);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className="reserve">
      <div className="rContainer" ref={containerRef}>
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
                Quantidade:{" "}
                <input
                  type="number"
                  min={0}
                  max={item.maxPeople}
                  value={quantities[item._id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(item._id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="rPrice">
                Preço: R$ {item.price * (quantities[item._id] || 0)}
              </div>
            </div>
          </div>
        ))}
        <div className="rTotalPrice">
          Total: R$ {totalPrice.toFixed(2)}
        </div>
        {!purchaseComplete ? (
          <button onClick={handleClick} className="rButton">
            Encerrar Compra
          </button>
        ) : (
          <div className="paymentMethod">
            <span>Escolha o método de pagamento:</span>
            <div>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => handlePaymentMethodChange("creditCard")}
              />
              <label htmlFor="creditCard">Cartão de Crédito</label>
            </div>
            <div>
              <input
                type="radio"
                id="debitCard"
                name="paymentMethod"
                value="debitCard"
                checked={paymentMethod === "debitCard"}
                onChange={() => handlePaymentMethodChange("debitCard")}
              />
              <label htmlFor="debitCard">Cartão de Débito</label>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => handlePaymentMethodChange("cash")}
              />
              <label htmlFor="cash">Dinheiro</label>
            </div>
            <button className="rButton" onClick={handlePayment}>
              Pagar com {paymentMethod}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reserve;