import "./delivery.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Delivery = () => {
  const [orders, setOrders] = useState([]);

  const products = [
    {
      id: 321541,
      name: "Pomada CuraTudo",
      customer: "Passeti",
      establishment: "Farmacia Stl Jales",
      deliveryAddress: "Rafael Chiarello, 84",
      items: ["Pomada CuraTudo"],
      status: "Em processamento",
    },
    {
      id: 245312,
      name: "Gelol GelNi",
      customer: "Passeti",
      establishment: "Farmacia Stl Jales",
      deliveryAddress: "Rafael Chiarello, 84",
      items: ["Gelol GelNi"],
      status: "Em processamento",
    },
  ];

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    } else {
      setOrders(products); // Usando os dados fictícios como valor inicial
    }
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="delivery">
      <Sidebar />
      <div className="deliveryContainer">
        <Navbar />
        <div className="top">
          <h1>Pedidos Delivery</h1>
        </div>
        <div className="bottom">
          <table>
            <thead>
              <tr>
                <th>ID do Pedido</th>
                <th>Cliente</th>
                <th>Estabelecimento</th>
                <th>Endereço de Entrega</th>
                <th>Itens</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.establishment}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{order.items.join(", ")}</td>
                  <td>{order.status}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <option value="Em processamento">Em processamento</option>
                      <option value="Enviado">Enviado</option>
                      <option value="Entregue">Entregue</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Delivery;