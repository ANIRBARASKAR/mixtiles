import React, { useState, useEffect } from "react";

export default function Layout1() {
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
  const handleDelete = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setselectedImages(updatedImages);
  };

  //   useEffect(() => {
  //     console.log("selectedImages", selectedImages);
  //   }, [selectedImages]);

  console.log("selectedImages", selectedImages);

  const firstRow = selectedImages.slice(0, 3);
  const secondRow = selectedImages.slice(3, 7);
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-6 ">
            <div
              style={{
                border: "2px solid green",
                height: 750,
                width: 700,
                backgroundImage: `url('https://res.cloudinary.com/mixtiles/image/upload/f_auto/q_auto:best/wallDecorationPrototype/whitecouch_plant_zoom.jpg')`,
                backgroundSize: "cover",
              }}
            >
              <div className="row justify-content-center">
                {selectedImages.length <= 5 ? (
                  selectedImages.map((item, i) => (
                    <div
                      className="col-sm-4 mx-2 "
                      style={{
                        border: "6px solid black",
                        backgroundImage: `url(${item})`,
                        height: 160,
                        backgroundSize: "cover",
                        width: 120,
                        marginTop: "100px",
                        boxShadow: " 2px 2px 3px 4px rgba(20,20,20,0.4) ",
                      }}
                    >
                      <span type="button" onClick={() => handleDelete(i)}>
                        🗑️
                      </span>
                    </div>
                  ))
                ) : (
                  <>
                    {firstRow.map((item, i) => (
                      <>
                        <div
                          className="col-sm-6 mx-5 my-5 "
                          style={{
                            border: "6px solid black",
                            backgroundImage: `url(${item})`,
                            height: 160,
                            backgroundSize: "cover",
                            width: 120,
                            marginTop: "00px",
                            boxShadow: " 2px 2px 3px 4px rgba(20,20,20,0.4) ",
                          }}
                        >
                          <span type="button" onClick={() => handleDelete(i)}>
                            🗑️
                          </span>
                        </div>
                      </>
                    ))}
                    {secondRow.map((item, i) => (
                      <div
                        className="col-sm-3 mx-4 my-4"
                        style={{
                          border: "6px solid black",
                          backgroundImage: `url(${item})`,
                          height: 160,
                          backgroundSize: "cover",
                          width: 120,
                          marginTop: "100px",
                          boxShadow: " 2px 2px 3px 4px rgba(20,20,20,0.4) ",
                        }}
                      >
                        <span type="button" onClick={() => handleDelete(i)}>
                          🗑️
                        </span>
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
                      height: 190,
                      backgroundSize: "cover",
                      width: 142,
                      //   boxShadow: ' rgba(240, 46, 170, 0.4) -5px 5px '
                    }}
                    onClick={() => setselectedImages((pre) => [...pre, item])}
                  >
                    {/* <img src={item} alt="" style={{height:150, width:150}}/> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
