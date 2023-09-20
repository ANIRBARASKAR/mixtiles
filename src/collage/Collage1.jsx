import React from "react";

function Collage1() {
  const collageStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows :'repeat(12, 1fr)',
    gridGap: "10px",
  };

  const imageStyle = {
    height: "150px", // Set your desired height
    backgroundSize: "cover",
  };
  const imageStyle2 = {
    height: "200px", // Set your desired height
    backgroundSize: "cover",
  };

  return (
    <div className="container mt-5" style={{ height: 600, width: 600 }}>
      <div style={collageStyle}>
        <div
          style={{
            ...imageStyle,
            gridColumn: "span 6",
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1692883560766-bb99591f1a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
          }}
        ></div>
        <div
          style={{
            ...imageStyle,
            gridColumn: "span 6",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1692807471040-702db6618f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
          }}
        ></div>
        <div
          style={{
            ...imageStyle2,
            gridColumn: "span 9",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693164637052-036b7e28a393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60")',
          }}
        ></div>
        <div
          style={{
            ...imageStyle2,
            gridColumn: "span 3",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1692607038273-8f45f4b0b1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60")',
          }}
        ></div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Collage1;
