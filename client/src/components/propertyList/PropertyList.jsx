import React from 'react'
import "./propertyList.css";
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {
  const { data, loading } = useFetch("/services/countByType");


  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/766/healthyfoodsnoteveryday-main-1508848485.jpg",
    "https://blog.connectplug.com.br/wp-content/uploads/2022/03/top-view-decoration-with-beauty-products-pink-background-scaled.jpg",
    "https://feac.org.br/wp-content/uploads/2016/06/comprimidos.jpg",
    "https://s2-g1.glbimg.com/56vdja0cxdCoUPWP7eehjSZgTmg=/0x0:1400x788/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/f/ZBcMRsSkOA0FB8TfRrfw/saiba-quais-sao-as-ferramentas-que-nao-podem-faltar-na-sua-casa.png",
    "https://s2.glbimg.com/Sd6MwJxJGCOT73qUkQpJzUBJwCk=/e.glbimg.com/og/ed/f/original/2018/06/25/mercado.jpg",
  ]
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;