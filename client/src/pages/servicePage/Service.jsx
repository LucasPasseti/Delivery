import NavBar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./service.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useLocation, useNavigate } from "react-router-dom"
import { SearchContext } from "../../components/context/SearchContext"
import { AuthContext } from "../../components/context/AuthContext"
import Reserve from "../../components/buy/Reserve"

const Service = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading } = useFetch(`/services/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true)

    } else {
      navigate("/login")
    }
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      {loading ? "loading" : (
        <div className="serviceContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={data.photos[slideNumber]}
                  alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="serviceWrapper">
            <button className="bookNow">Reserve a compra, ou compre agora!</button>
            <h1 className="serviceTitle">{data.name}</h1>
            <div className="serviceAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="serviceDistance">
              Exelente Localização - {data.distance} do Centro
            </span>
            <span className="servicePriceHighlight">
              peça dois produto acima de R${data.cheapestPrice} neste estabelecimento e ganhe uma entrega grátuita
            </span>
            <div className="serviceImages">
              {data.photos?.map((photo, i) => (
                <div className="serviceImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="serviceImg"
                  />
                </div>
              ))}
            </div>
            <div className="serviceDetails">
              <div className="serviceDetailsTexts">
                <h1 className="serviceTitle">{data.title}</h1>
                <p className="serviceDesc">
                  {data.desc}
                </p>
              </div>
              <div className="serviceDetailsPrice">
                <h1>Perfeito para sua entrega rápida, entrega daqui a {days} dias</h1>
                <span>
                  Estabelecimento localizado no centro de Fernandópolis, este estabelecimento tem uma nota de localização exelente: 9.8!
                </span>
                <h2>
                  <b>R${data.cheapestPrice}</b> (R${data.cheapestPrice + options.preço} com a Entrega)
                </h2>
                <button onClick={handleClick}>Compre agora</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
        {openModal && <Reserve setOpen={setOpenModal} serviceId={id}/>}
    </div>
  );
};

export default Service
