import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3" >
        <p>

        </p>
        <h1 style={{ fontSize:"50px", fontWeight: 600, color: "#404040" }}>Zerodha Products</h1>
        <h3 className="text mt-3 fs-4" style={{fontWeight: 500, color: "black"}}>
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5" style={{ fontSize: "20px", color: "#404040" }}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;