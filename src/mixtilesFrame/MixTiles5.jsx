import React, { useState, useEffect, useRef } from "react";

export default function Mixtiles5() {
  // *** storing all div's
  const [allDivs, setAllDivs] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [hello, sethello] = useState(0);

  // ************** basic states
  const [showFrame, setShowFrame] = useState(true);
  const [showFrameColor, setShowFrameColor] = useState("black");
  const [filter_, setFilter] = useState("original");
  const [mat, setmat] = useState(1.0);
  const [bgColor, setbgColor] = useState("white");
  // ************* Updating
  const [showFrameUpdating, setShowFrameUpdating] = useState(showFrame);
  const [showFrameColorUpdating, setShowFrameColorUpdating] =
    useState(showFrameColor);
  const [filter_Updating, setFilterUpdating] = useState(filter_);
  const [matUpdating, setmatUpdating] = useState(mat);
  const [bgColorUpdating, setbgColorUpdating] = useState(bgColor);
  const [updatingDataId, setupdatingDataId] = useState(null);

  // ***********

  const [divCount, setDivCount] = useState(0);

  const mainDivBorder = 20;
  const mainDivHeight = 200;
  const mainDivWidth = 200;

  // *****
  const [shadowWidth, setShadowWidth] = useState(1); // Initialize shadow width with a default value

  // Generate the boxShadow property dynamically based on shadowWidth
  const boxShadow = Array.from({ length: 8 }, (_, i) => {
    const offsetX = i + 1;
    const offsetY = i + 1;
    return `${offsetX}px ${offsetY}px 1px 0px #8c8c8c`;
  }).join(", ");

  // *****

  const mainDivStyle = {
    border: showFrame ? `${mainDivBorder}px solid ${showFrameColor}` : "",
    // padding: `${mat}px`,
    width: `${mainDivWidth}px`,
    height: `${mainDivHeight}px`,
    backgroundColor: bgColor,

    boxShadow,
    transform: `translate(-${shadowWidth}px, -${shadowWidth}px)`,
    transition: "all 0.5s ease 0s",
    MsTransition: "all 0.5s ease 0s",
    MozTransition: "all 0.5s ease 0s",
    WebkitTransition: "all 0.5s ease 0s",
    OTransition: "all 0.5s ease 0s",
  };

  const croppingDivStyle = {
    border: showFrameUpdating
      ? `${mainDivBorder}px solid ${showFrameColorUpdating}`
      : "",
    // padding: `${mat}px`,
    width: `${mainDivWidth}px`,
    height: `${mainDivHeight}px`,
    backgroundColor: bgColorUpdating,

    boxShadow,
    transform: `translate(-${shadowWidth}px, -${shadowWidth}px)`,
    transition: "all 0.5s ease 0s",
    MsTransition: "all 0.5s ease 0s",
    MozTransition: "all 0.5s ease 0s",
    WebkitTransition: "all 0.5s ease 0s",
    OTransition: "all 0.5s ease 0s",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "100%",
    transform: `scale(${mat})`,
    filter:
      filter_ === "original"
        ? ""
        : filter_ === "silver"
        ? "grayscale(100%) brightness(130%)"
        : filter_ === "noir"
        ? "grayscale(100%) contrast(150%)"
        : filter_ === "vivid"
        ? "brightness(120%) contrast(120%) saturate(150%)"
        : filter_ === "dramatic"
        ? "brightness(90%) contrast(150%) sepia(100%)"
        : "",
  };
  const imgStyleUpdating = {
    maxWidth: "100%",
    height: "100%",
    transform: `scale(${matUpdating})`,
    filter:
      filter_Updating === "original"
        ? ""
        : filter_Updating === "silver"
        ? "grayscale(100%) brightness(130%)"
        : filter_Updating === "noir"
        ? "grayscale(100%) contrast(150%)"
        : filter_Updating === "vivid"
        ? "brightness(120%) contrast(120%) saturate(150%)"
        : filter_Updating === "dramatic"
        ? "brightness(90%) contrast(150%) sepia(100%)"
        : "",
  };

  const handleImageChange = (e) => {
    // sethello(hello + 1)
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage((pre) => [...pre, reader.result]);
        handleButtonClick(hello);
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
  const frameEffect = [
    {
      name: "Orignal",
      type: "original",
    },
    {
      name: "Silver",
      type: "silver",
    },
    {
      name: "Noir",
      type: "noir",
    },
    {
      name: "Vivid",
      type: "vivid",
    },
    {
      name: "Dramatic",
      type: "dramatic",
    },
  ];
  const frameMat = [
    {
      name: "Mat 1",
      size: 1.0,
    },

    {
      name: "Mat 2",
      size: 0.8,
    },
    {
      name: "Mat 3",
      size: 0.6,
    },
    {
      name: "Mat 4",
      size: 0.5,
    },

    {
      name: "Mat 5",
      size: 0.4,
    },
  ];

  const frameBgColor = [
    {
      name: "Color 1 ",
      color: "white",
    },
    {
      name: "Color 2 ",
      color: "hotpink",
    },
    {
      name: "Color 3 ",
      color: "yellow",
    },
    {
      name: "Color 4 ",
      color: "pink",
    },
    {
      name: "Color 5 ",
      color: "green",
    },
  ];

  const MainDiv = ({ id, selectedImage }) => {
    console.log("key 👑 Befor👑", id, "selectedImage", selectedImage);

    const handleCrop = () => {
      setupdatingDataId(id);
    };
    console.log("key 👑 After👑", id, "selectedImage", selectedImage);

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
          {<img src={selectedImage[id]} alt="Selected" style={imgStyle} />}
        </div>
      </>
    );
  };

  // ****
  const UpdatingDiv = () => {
    // console.log("imgStyleUpdating", imgStyleUpdating, "imgStyle", imgStyle);
    return (
      <>
        <div
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="my-5"
          style={croppingDivStyle}
        >
          {selectedImage && (
            <img
              src={selectedImage[updatingDataId]}
              alt="Selected"
              style={imgStyleUpdating}
            />
          )}
        </div>
      </>
    );
  };

  // ************ Repeat Div

  const handleButtonClick = (id) => {
    setAllDivs((prevDivs) => [
      ...prevDivs,
      <MainDiv id={id} selectedImage={selectedImage} />,
    ]);
    // setDivCount(divCount + 1);
  };

  // ***** button's Model

  const Buttons = ({ updating }) => {
    return (
      <>
        <div className="col-sm-4">
          {updating ? (
            ""
          ) : (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}

          <br />
          <Frame updating={updating} />
          <FrameColor updating={updating} />
          <FrameEffect updating={updating} />

          <MatSizes updating={updating} />
          <Colors updating={updating} />
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
  const FrameColor = ({ updating }) => {
    const handleFrameColor = (item) => {
      // console.log("item", item, updating);
      updating
        ? setShowFrameColorUpdating(item.color)
        : setShowFrameColor(item.color);
    };
    return (
      <>
        <div className="my-2">
          {frameColor.map((item) => (
            <button
              className="btn btn-dark mx-2"
              onClick={() => handleFrameColor(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  // ***** FrameEffect
  const FrameEffect = ({ updating }) => {
    const handleFrameEffect = (item) => {
      // console.log("item", item, updating);
      updating ? setFilterUpdating(item.type) : setFilter(item.type);
    };
    return (
      <>
        <div className="my-3">
          {frameEffect.map((item) => (
            <button
              className="btn btn-dark mx-2 my-1"
              onClick={() => handleFrameEffect(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  const MatSizes = ({ updating }) => {
    const handleMatSizes = (item) => {
      updating ? setmatUpdating(item.size) : setmat(item.size);
    };
    return (
      <>
        <div className="my-3">
          {frameMat.map((item) => (
            <button
              className="btn btn-dark mx-2 my-1"
              onClick={() => handleMatSizes(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  const Colors = ({ updating }) => {
    const handleFrameBgColors = (item) => {
      // console.log("item", item, updating);
      updating ? setbgColorUpdating(item.color) : setbgColor(item.color);
    };
    return (
      <>
        <div className="my-3">
          {frameBgColor.map((item, i) => (
            <button
              className="btn btn-dark mx-2 my-1"
              onClick={() => handleFrameBgColors(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  const handleUpdateChange = () => {
    console.log(
      "updatingDataId ",
      updatingDataId,
      "allDivs",
      allDivs,
      "allDivs[updatingDataId]",
      allDivs[updatingDataId]
    );

    // ***** * 2
    setAllDivs((prevAnir) => {
      const allData = [...prevAnir];

      allData[updatingDataId] = <UpdatingDiv />;

      return allData;
    });
    sethello(hello + 1);
  };

  const handleDeleteChange = () => {
    const newData = allDivs.filter((item, index) => updatingDataId !== index);
    // console.log("newData", newData);
    setAllDivs(newData);
    setupdatingDataId(null);
    // console.log("Deleting After", deleteId, allDivs);
    // console.log(" After newData", newData);
  };
  const handleANir = () => {
    const lara = handleUpdateChange();
    console.log("lara 🎉🎉", lara);
  };

  const totalDivs = () => {
    return allDivs.map((item, index) => {
      console.log("item from totalDivs 🤘🤘🤘", item);
      return <MainDiv key={item.id} id={index} selectedImage={selectedImage} />;
    });
  };
  // *********** effects for updating

  useEffect(() => {
    setShowFrameUpdating(showFrame);
    setShowFrameColorUpdating(showFrameColor);
    setbgColorUpdating(bgColor);
    setmatUpdating(mat);
    setFilterUpdating(filter_);
  }, [mat, filter_, bgColor, showFrameColor, showFrame]);

  useEffect(() => {
    console.log("allDivs  🌟🌟", allDivs);
  }, [allDivs]);
  useEffect(() => {
    console.log("selectedImage  🌟🌟", selectedImage);
  }, [selectedImage]);
  useEffect(() => {
    console.log("hello  🌟🌟", hello);
  }, [hello]);

  return (
    <div>
      <div className="container mt-5">
        {/* Anir {allDivs[updatingDataId] && allDivs[updatingDataId]} */}

        <div className="row">
          <div className="col-sm-6 offset-1">
            {/* {totalDivs()} */}

            {/* {allDivs[0]} */}

            {/* {allDivs.map((item, i) => <MainDiv key={i} id={i} selectedImage={selectedImage}/>)} */}
            {allDivs.map((item, i) => (
              <>{item}</>
            ))}
          </div>
          <Buttons updating={false} />
        </div>
      </div>
      {/* ****Model window */}
      {/* <!-- Modal --> */}
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
                  {/* {croppingData} */}
                  <UpdatingDiv />
                </div>
                <Buttons updating={true} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteChange(updatingDataId)}
              >
                Delete
              </button>
              <button
                // onClick={handleUpdateChange}
                onClick={handleANir}
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
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
