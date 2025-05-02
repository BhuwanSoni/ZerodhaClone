import React from "react";

function Universe() {
  const logos = [
    { 
      src: "media/images/zerodhaFundhouse.png", 
      alt: "Zerodha Fund House",
      text: "Thematic investment platform",
      lext: "that is creating simple and transparent index ",
      sext:"funds to help you save for your goals."
    },
    { 
      src: "media/images/sensibullLogo.svg", 
      alt: "Sensibull", 
      text: "Options trading platform that lets you ",
      lext: "create strategies, analyze positions, and examine ",
      sext:"data points like open interest, FII/DII, and more."
    },
    { 
      src: "media/images/tijori.svg", 
      alt: "Tijori", 
      text: "Investment research platform ",
      lext: "that offers detailed insights on stocks, ",
      sext:"sectors, supply chains, and more."
    },
    { 
      src: "media/images/streakLogo.png", 
      alt: "Streak", 
      text: "Systematic trading platform ",
      lext: "that allows you to create and backtest ",
      sext:"strategies without coding."
    },
    { 
      src: "media/images/smallcaseLogo.png", 
      alt: "Smallcase", 
      text: "Thematic investment platform",
      lext: "that helps you invest in diversified ",
      sext:"baskets of stocks on ETFs."
    },
    { 
      src: "media/images/dittoLogo.png", 
      alt: "Ditto", 
      text: "Personalized advice on life ",
      lext: "and health insurance. No spam ",
      sext:"and no mis-selling."
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ fontSize: "35px", fontWeight: 600 }}>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>


        {/* Logos Section */}
        {logos.map((item, index) => (
          <div className="col-4 p-3 mt-5" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="universe-logo mb-3"
            />
            <div>
              <p style={{ fontSize: "13px", marginBottom: "1px", color: "#f2f2f2",marginTop: "6px" }} className="text-muted">{item.text}</p>
              <p style={{ fontSize: "13px", marginTop: "1px", color:"#f2f2f2" }} className="text-muted">{item.lext}</p>
              <p style={{ fontSize: "13px", marginTop: "-15px", color:"#f2f2f2" }} className="text-muted">{item.sext}</p>
            </div>
          </div>
        ))}


        {/* Signup Button */}
        <div className="d-flex justify-content-center mt-5 mb-5">
          <button className="btn btn-primary fs-5 px-5">
            Signup Now
          </button>
        </div>
      </div>

      {/* Style for logos */}
      <style>
        {`
          .universe-logo {
            width: 150px;
            height: auto;
            object-fit: contain;
          }
        `}
      </style>
    </div>
  );
}

export default Universe;



