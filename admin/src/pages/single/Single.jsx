import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informação</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VGovSgivrXS8a6N8oPrY1RgnOqJPkTLq68b_cx-0T68fRsnSUhL1lt1HXDhlZhS8s6k&usqp=CAU"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Passeti</h1>
                <div className="detailItem">
                  <span className="itemKey">E-mail:</span>
                  <span className="itemValue">lucaspasseti10@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular:</span>
                  <span className="itemValue">+55 17 99724-0772</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Rafael Chiaelo, Jardim 86
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">País:</span>
                  <span className="itemValue">Brasil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Últimas transações</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
