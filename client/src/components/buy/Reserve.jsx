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
  const [deliveryDate, setDeliveryDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [rating, setRating] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [showReview, setShowReview] = useState(false);

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
    // Check if delivery date and time are selected
    if (!deliveryDate || !selectedTime) {
      console.log("Please select delivery date and time.");
      return;
    }

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
      // Show the review screen
      setShowReview(true);
    }, 2000);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const handleDeliveryDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleReviewSubmit = () => {
    // Placeholder logic for submitting the review

    // Simulating a delay for review submission (2 seconds)
    setTimeout(() => {
      // Reset states and navigate to the main route
      setRating(0);
      setShowReview(false);
      navigate("/");
    }, 2000);
  };

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro ao buscar dados.</div>;
  }

  if (showReview) {
    return (
      <div className="reserve">
        <div className="reviewContainer">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
          />
          <span className="rTitle">Avalie o serviço:</span>
          <div className="reviewContent">
            <div className="reviewItem">
              <div className="reviewLabel">Avaliação:</div>
              <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Selecione uma avaliação</option>
                <option value={1}>1 estrela</option>
                <option value={2}>2 estrelas</option>
                <option value={3}>3 estrelas</option>
                <option value={4}>4 estrelas</option>
                <option value={5}>5 estrelas</option>
                <option value={6}>6 estrelas</option>
                <option value={7}>7 estrelas</option>
                <option value={8}>8 estrelas</option>
                <option value={9}>9 estrelas</option>
                <option value={10}>10 estrelas</option>
              </select>
            </div>
            <button className="reviewButton" onClick={handleReviewSubmit}>
              Enviar Avaliação
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reserve">
      <div className="rContainer" ref={containerRef}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span className="rTitle">Selecione seus produtos:</span>
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
        <div className="deliveryDate">
          <span className="rLabel">Escolha a data de Entrega:</span>
          <input
            type="date"
            value={deliveryDate}
            onChange={handleDeliveryDateChange}
          />
        </div>
        <div className="timeSlots">
          <span className="rLabel">Escolha o horário de entrega:</span>
          {availableTimes.map((time) => (
            <button
              key={time}
              className={`timeSlot ${selectedTime === time ? "selected" : ""}`}
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </button>
          ))}
        </div>
        {!purchaseComplete ? (
          <button onClick={handleClick} className="rButton">
            Encerrar Compra
          </button>
        ) : (
          <div className="paymentMethod">
            <span className="rLabel">Escolha o método de pagamento:</span>
            <div className="paymentOptions">
              <div className="paymentOption">
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
              <div className="paymentOption">
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
              <div className="paymentOption">
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