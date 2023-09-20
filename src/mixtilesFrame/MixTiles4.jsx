import React, { useState, useEffect, useRef } from "react";

export default function MixTiles4() {
  // *** storing all div's
  const divs = [];

  const [selectedImage, setSelectedImage] = useState([]);
  // ************** basic states
  const [showFrame, setShowFrame] = useState(true);
  const [showFrameColor, setShowFrameColor] = useState("black");
  const [filter_, setFilter] = useState("original");
  const [mat, setmat] = useState(1.0);
  const [bgColor, setbgColor] = useState("white");
  // ************* Updating
  const [showFrameUpdating, setShowFrameUpdating] = useState(showFrame);

  const [updatingDataId, setupdatingDataId] = useState();

  // ***********
  const [croppingData, setcroppingData] = useState();

  const [divCount, setDivCount] = useState(0);

  const mainDivBorder = 11;
  const mainDivHeight = 360;
  const mainDivWidth = 360;

  // *****
  const [shadowWidth, setShadowWidth] = useState(1); // Initialize shadow width with a default value

  const handleShadowWidthChange = (newWidth) => {
    setShadowWidth(newWidth);
  };

  // Generate the boxShadow property dynamically based on shadowWidth
  const boxShadow = Array.from({ length: 8 }, (_, i) => {
    const offsetX = i + 1;
    const offsetY = i + 1;
    return `${offsetX}px ${offsetY}px 1px 0px #474646`;
  }).join(", ");

  // *****
  const hello = {
    boxShadow,
    transform: `translate(-${shadowWidth}px, -${shadowWidth}px)`,
    transition: "all 0.5s ease 0s",
    MsTransition: "all 0.5s ease 0s",
    MozTransition: "all 0.5s ease 0s",
    WebkitTransition: "all 0.5s ease 0s",
    OTransition: "all 0.5s ease 0s",
  };
  const mainDivStyle = {
    border: showFrame ? `${mainDivBorder}px solid ${showFrameColor}` : "",
    width: `${mainDivWidth}px`,
    height: `${mainDivHeight}px`,
    backgroundColor: bgColor,

    hello,
  };

  const croppingDivStyle = {
    border: showFrameUpdating
      ? `${mainDivBorder}px solid ${showFrameColor}`
      : "",
    width: `${mainDivWidth}px`,
    height: `${mainDivHeight}px`,
    backgroundColor: bgColor,
    hello,
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "100%",
  };
  const imgStyleUpdating = {
    maxWidth: "100%",
    height: "100%",
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage((selectedImage) => [...selectedImage, reader.result]);
        handleButtonClick();
      };
      reader.readAsDataURL(file);
    }
  };

  //   *** frame
  const frame = [
    {
      name: "Frame",
      status: true,
    },
    {
      name: "Frameless",
      status: false,
    },
  ];
  const frameColor = [
    {
      name: "Frame Black",
      color: "black",
    },
    {
      name: "Frame White",
      color: "white",
    },
  ];

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage, showFrame, showFrameColor, filter_, mat, bgColor]);

  const MainDiv = ({ selectedImage, id }) => {
    // console.log("key", id, "selectedImage", selectedImage);

    const handleCrop = () => {
      setcroppingData(divs[id]);
      setupdatingDataId(id);
    };

    return (
      <>
        <div
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="my-5"
          style={mainDivStyle}
          onClick={handleCrop}
        >
          {selectedImage && (
            <img src={selectedImage[id]} alt="Selected" style={imgStyle} />
          )}
        </div>
      </>
    );
  };

  // ****
  const UpdatingDiv = ({ selectedImage, id }) => {
    console.log("key", id, "selectedImage UpdatingDiv🌟🌟", selectedImage);

    return (
      <>
        <div className="my-5" style={croppingDivStyle}>
          {selectedImage && (
            <img
              src={selectedImage[id]}
              alt="Selected"
              style={imgStyleUpdating}
            />
          )}
        </div>
      </>
    );
  };
  console.log("UpdatingDiv", UpdatingDiv(selectedImage, updatingDataId));

  // ************ Repeat Div

  const handleButtonClick = () => {
    // Increment the div count by 1 when the button is clicked
    setDivCount(divCount + 1);
  };

  const totalDivs = () => {
    for (let i = 0; i < divCount; i++) {
      divs.push(<MainDiv selectedImage={selectedImage} id={i} />);
    }
    return divs;
  };

  const Buttons = ({ updating }) => {
    return (
      <>
        <div className="col-sm-5">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <br />
          <hr />
          <Frame updating={updating} />
          <hr />
          <FrameColor />
          <hr />
        </div>
      </>
    );
  };

  // ***** Frame
  const Frame = ({ updating }) => {
    const handleShowStatus = (item) => {
      console.log("item", item, updating);
      updating ? setShowFrameUpdating(item.status) : setShowFrame(item.status);
    };
    return (
      <>
        <div className="my-2">
          {frame.map((item) => (
            <button
              className="btn btn-dark mx-2"
              onClick={() => handleShowStatus(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  // **** Frame Color
  const FrameColor = () => {
    return (
      <>
        <div className="my-2">
          {frameColor.map((item) => (
            <button
              className="btn btn-dark mx-2"
              onClick={() => setShowFrameColor(item.color)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  const handleUpdateChange = () => {
    console.log("divs from handleUpdateChange Before cng 🌟🌟", divs);

    divs[updatingDataId] = (
      <UpdatingDiv selectedImage={selectedImage} id={updatingDataId} />
    );
    console.log("divs from handleUpdateChange After Chng 🌟🌟", divs);
  };

  return (
    <div style={{ backgroundColor: "#fbf9f9" }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 offset-1">
            {totalDivs()}
            <br />
            <br />
          </div>
          <Buttons />
        </div>
      </div>

      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-sm-6">
                  <UpdatingDiv
                    selectedImage={selectedImage}
                    id={updatingDataId}
                  />
                </div>
                <Buttons updating={true} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                onClick={handleUpdateChange}
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
