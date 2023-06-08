import "./list.css"
import NavBar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

  const location = useLocation()
const [destination, /*setDestination*/] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, /*setOptions*/] = useState(location.state.options);

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Buscar</h1>
            <div className="lsItem">
              <label>Destino</label>
              <input type="text" />
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Data</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} até ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />)}
              <div className="lsItem">
                <label className="filters">Filtros</label>
                <div className="lsOptions">

                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Preço máximo <small>Por Corrida</small>
                    </span>
                    <input type="text" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Preço minimo <small>Por Corrida</small>
                    </span>
                    <input type="text" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Tempo de Entrega
                    </span>
                    <input type="text" className="lsOptionInput" placeholder={options.tempo} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Preço de Entrega
                    </span>
                    <span className="money">R$</span><input type="text" className="lsOptionInput" placeholder={options.preço} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Relevância
                    </span>
                    <input type="text" className="lsOptionInput" placeholder={options.relevância} />
                  </div>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
