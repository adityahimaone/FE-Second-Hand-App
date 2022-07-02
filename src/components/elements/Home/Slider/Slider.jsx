import TinySlider from "tiny-slider-react";

function Slider() {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const imgStyles = {
    width: "100%",
    height: "320px",
    objectFit: "cover",
  };

  const imgs = [
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg",
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
  ];

  const loadingImage =
    "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {
      420: {
        items: 2,
      },
    },
  };

  const clickEvent = (slide) => {
    console.log(slide);
  };
  return (
    <div style={styles}>
      <TinySlider settings={settings} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className={`tns-lazy-img`}
              src={loadingImage}
              data-src={el}
              alt=""
              style={imgStyles}
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
}

export default Slider;
