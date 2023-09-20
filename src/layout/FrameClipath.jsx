import React, { useState, useEffect } from "react";

export default function FrameClipath() {
  const [allImages, setallImages] = useState([
    "https://images.unsplash.com/photo-1694901555616-d7b2b33e6406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694875464499-334d2dc113a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694746027247-4b6f9c6b261d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694269703953-ff26c8413dbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1691135328914-bffa86606522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693875653764-34f9df630198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    "https://images.unsplash.com/photo-1693333962626-4c8a65c530ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682665569992-e764e9e6553e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ]);

  const [selectedImages, setselectedImages] = useState([]);

  const [imageStyle, setimageStyle] = useState({
    width: "100%",
    height: "100%",
    transform: `translate(0px,0px) scale(1)`,
  });
  const [innerDivStyle, setinnerDivStyle] = useState({
    border: "10 solid #1b1b1b",
    background: "#3a3a3a",

    height: 180,
    width: 140,
    marginTop: "100px",
    padding: 0,
    backgroundColor: "#eaeaea",
    border: "solid #d7ba98",
    borderImage: `url('https://www.mixtiles.com/static/media/black.e351d16d.png') 25`,

    // boxShadow: " 2px 2px 3px 4px rgba(20,20,20,0.4) ",
  });

  const firstRow = selectedImages.slice(0, 3);
  const secondRow = selectedImages.slice(3, 7);

  const handleDelete = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setselectedImages(updatedImages);
  };

  const handleNatural = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(1)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      // transform: 'translate(0px,0px) scale(1)',
      border: "solid #d7ba98",
      borderImage: `url('https://www.mixtiles.com/static/media/wood.baa6f4a3.png') 25`,
    }));
  };

  const handleNaturalClever = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(0.8)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      // transform: 'translate(0px,0px) scale(1)',
      border: "solid #d7ba98",
      borderImage: `url('https://www.mixtiles.com/static/media/wood.baa6f4a3.png') 25`,
      backgroundColor: "#eaeaea",
    }));
  };
  const handleClean = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(1)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      // transform: 'translate(0px,0px) scale(1)',
      border: "solid #d7ba98",
      borderImage: `url('https://www.mixtiles.com/static/media/white.ad3e7e13.png') 25`,
    }));
  };

  const handleEver = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(0.8)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      // transform: 'translate(0px,0px) scale(1)',
      border: "solid #d7ba98",
      borderImage: `url('https://www.mixtiles.com/static/media/white.ad3e7e13.png') 25`,
      backgroundColor: "#eaeaea",
    }));
  };

  const handleBold = () => {
    setimageStyle({
      width: "100%",
      height: "100%",
      transform: `translate(0px,0px) scale(1)`,
    });
    setinnerDivStyle({
      border: "10 solid #1b1b1b",
      background: "#3a3a3a",

      height: 180,
      width: 140,
      marginTop: "100px",
      padding: 0,
      backgroundColor: "#eaeaea",
      border: "solid #d7ba98",
      borderImage: `url('https://www.mixtiles.com/static/media/black.e351d16d.png') 25`,

      // boxShadow: " 2px 2px 3px 4px rgba(20,20,20,0.4) ",
    });
  };

  const handleClassic = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(0.8)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      //   border: "6px solid black",
      backgroundColor: "#eaeaea",
      borderImage: `url('https://www.mixtiles.com/static/media/black.e351d16d.png') 25`,
    }));
  };

  const handleEdge = () => {
    setimageStyle((prevStyle) => ({
      ...prevStyle,
      transform: "translate(0px,0px) scale(1)",
    }));

    setinnerDivStyle((prevStyle) => ({
      ...prevStyle,
      border: "",
      backgroundColor: "#eaeaea",
      borderRight: "1px solid black",
      borderBottom: "1px solid black",
    }));
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-6 ">
            <div
              style={{
                // border: "1px solid green",
                // height: 550,
                // width: 500,
                // backgroundImage: `url('https://res.cloudinary.com/mixtiles/image/upload/f_auto/q_auto:best/wallDecorationPrototype/whitecouch_plant_zoom.jpg') `,
                // backgroundSize: "cover",
                // // clipPath: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
                // clipPath: `circle(50% at 50% 50%)`

                border: "2px solid green", // Set border width and color
                height: 550,
                width: 500,
                backgroundImage: `url('https://res.cloudinary.com/mixtiles/image/upload/f_auto/q_auto:best/wallDecorationPrototype/whitecouch_plant_zoom.jpg') `,
                backgroundSize: "cover",
                clipPath: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,
                // clipPath: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
              }}
            >
              <div className="row justify-content-center">
                {selectedImages.length <= 5 ? (
                  selectedImages.map((item, i) => (
                    <div className="col-sm-4  mx-2" style={innerDivStyle}>
                      <img src={item} alt="" style={imageStyle} />
                    </div>
                  ))
                ) : (
                  <>
                    {firstRow.map((item, i) => (
                      <>
                        <>
                          <div className="col-sm-4  mx-2" style={innerDivStyle}>
                            <img src={item} alt="" style={imageStyle} />
                          </div>
                        </>
                      </>
                    ))}
                    {secondRow.map((item, i) => (
                      <div className="col-sm-4  mx-2" style={innerDivStyle}>
                        <img src={item} alt="" style={imageStyle} />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          {/* ******** main div */}
          <div className="col-sm-4 offset-2">
            <div className="card ">
              <div className="row">
                {allImages.map((item, i) => (
                  <div
                    // className="col-sm-5 mx-4 my-2"
                    style={{
                      border: "1px solid black",
                      backgroundImage: `url(${item})`,
                      height: 160,
                      backgroundSize: "cover",
                      width: 120,
                      //   boxShadow: ' rgba(240, 46, 170, 0.4) -5px 5px '
                    }}
                    onClick={() => setselectedImages((pre) => [...pre, item])}
                  >
                    {/* <img src={item} alt="" style={{height:150, width:150}}/> */}
                  </div>
                ))}
                <div className="my-2">
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => handleBold()}
                  >
                    Bold
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => handleClassic()}
                  >
                    Classic
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => handleNatural()}
                  >
                    Natural
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => handleNaturalClever()}
                  >
                    Clever
                  </button>
                  <button
                    className="btn btn-dark mx-2 my-2"
                    onClick={() => handleClean()}
                  >
                    Clean
                  </button>
                  <button
                    className="btn btn-dark mx-2 my-2"
                    onClick={() => handleEver()}
                  >
                    Ever
                  </button>
                  <button
                    className="btn btn-dark mx-2 my-2"
                    onClick={() => handleEdge()}
                  >
                    Edge
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
