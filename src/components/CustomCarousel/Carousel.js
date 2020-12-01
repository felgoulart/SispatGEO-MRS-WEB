import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const baseURL = process.env.REACT_APP_BASE_URL;

const configurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: true,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 3000,
  transitionTime: 150,
  swipeScrollTolerance: 5,
});

function Carousel_X() {
  const [itemImage, setItemImage] = useState([]);

  useEffect(() => {
    api.get(`/fotografias/${sessionStorage.getItem('@sispatgeo-app/idversao')}`)
      .then(res => {
        // // console.log('Num fotos: ', res.data.length);
        if (res.data.length > 0) {
          setItemImage(res.data.map(x => x.Nome));
        } else {
          setItemImage(['sispatgeo_bp_sem_imagem.png']);
        }
      });
  }, []);

  const createCarouselItemImage = (index) => (
    <div key={Math.floor(Math.random() * 1000)}>
      <img src={`${baseURL}/uploads/photos/${index}`} alt="" />
      <p className="legend">{index}</p>
    </div>
  );

  const baseChildren = <div>{itemImage.map(createCarouselItemImage)}</div>;

  return (
    <Carousel {...configurableProps()}>
      {baseChildren.props.children}
    </Carousel>
  );
};

export default Carousel_X;
