import React from 'react'
import "./propertyList.css";

const PropertyList = () => {
    return (
      <div className="pList">
        <div className="pListItem">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/766/healthyfoodsnoteveryday-main-1508848485.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Comidas</h1>
            <h2>572 restaurantes</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://feac.org.br/wp-content/uploads/2016/06/comprimidos.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Farmacias</h1>
            <h2>87 Farmacias</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://s2-g1.glbimg.com/56vdja0cxdCoUPWP7eehjSZgTmg=/0x0:1400x788/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/f/ZBcMRsSkOA0FB8TfRrfw/saiba-quais-sao-as-ferramentas-que-nao-podem-faltar-na-sua-casa.png"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Ferramentas</h1>
            <h2>123 Lojas</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://s2.glbimg.com/Sd6MwJxJGCOT73qUkQpJzUBJwCk=/e.glbimg.com/og/ed/f/original/2018/06/25/mercado.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Mercados</h1>
            <h2>10 Mercados</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://blog.connectplug.com.br/wp-content/uploads/2022/03/top-view-decoration-with-beauty-products-pink-background-scaled.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Cosméticos</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyList;