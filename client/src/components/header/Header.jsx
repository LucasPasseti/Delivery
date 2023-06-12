import {
    faCalendarDays,
    faMotorcycle,
    faPerson,
    faStar,
    faStreetView,
    faUser,
  } 
  from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useContext, useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
  
  const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      tempo: 1,
      preço: 0,
      relevância: 1,
    });
  
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };

    const {dispatch} = useContext(SearchContext);
    
  
    const handleSearch = () => {
      dispatch({type:"NEW_SEARCH", payload:{destination,dates, options}})
      navigate("/services", { state: { destination, dates, options } });
    };
  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faStreetView} />
              <span>Serviços</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faMotorcycle} />
              <span>Entrega</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faUser} />
              <span>Motoboy</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faStar} />
              <span>Destaques</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faAddressCard} />
              <span>Venha fazer parte da nossa equipe</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
               O lugar perfeito para facilitar o dia a dia para você.
              </h1>
              <p className="headerDesc">
              Não precisa mais se preocupar com preço e qualidade, com MotoLivre você conta com as ofertas mais incriveis do mercado.
              </p>
              {!user && <button className="headerBtn">Entrar / Registrar</button>}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faAddressCard} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Endereço de entrega"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} até ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.tempo} tempo · ${options.preço} preço · ${options.relevância} relevância`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">tempo de entrega</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.tempo <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("tempo", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.tempo}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("tempo", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">preço de entrega</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.preço <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("preço", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.preço}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("preço", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">relevância</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.relevância <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("relevância", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.relevância}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("relevância", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Buscar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;