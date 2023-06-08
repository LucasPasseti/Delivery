import NavBar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./service.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Service = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://www.reidoscoins.com.br/image/cache/catalog/produtos/MC%20Donald's-450x450.png",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://conteudo.imguol.com.br/c/noticias/12/2019/03/28/mcdonalds-sundae-junior-1553799236025_v2_450x450.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0b/49/bd/b9/mcdonald-s-praia-do-canto.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
  ];

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

  return (
    <div>
      <NavBar />
      <Header type="list" />
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
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
          <h1 className="serviceTitle">Mc Lanche</h1>
          <div className="serviceAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Joao Barbosa Sp 120 Sao paulo</span>
          </div>
          <span className="serviceDistance">
            Exelente Localização - 500m do Centro
          </span>
          <span className="servicePriceHighlight">
            peça um produto acima de R$30 neste estabelecimento e ganhe uma entrega grátuita
          </span>
          <div className="serviceImages">
            {photos.map((photo, i) => (
              <div className="serviceImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="serviceImg"
                />
              </div>
            ))}
          </div>
          <div className="serviceDetails">
            <div className="serviceDetailsTexts">
              <h1 className="serviceTitle">Fique no coração da cidade</h1>
              <p className="serviceDesc">
                Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon? Para que chorar se eu posso afogar minhas mágoas em um lanche com muito queijo e bacon?
              </p>
            </div>
            <div className="serviceDetailsPrice">
              <h1>Perfeito para sua entrega rápida</h1>
              <span>
                Estabelecimento localizado no centro de Fernandópolis, este estabelecimento tem uma nota de localização exelente: 9.8!
              </span>
              <h2>
                <b>R$80</b> (5 BurguerMac)
              </h2>
              <button>Compre agora</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Service
