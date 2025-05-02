import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row p-5">
        {/* Left Content */}
        <div className="col-5 ">
        <h2 className="fs-2 mb-3" style={{ fontWeight: 600, color: "#404040" }}>Unbeatable pricing</h2>

          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
          See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
        </div>


        {/* Right Icons & Text */}
        <div className="col-7">
          <div className="row text-center">

            {/* Block 1 */}
            <div className="col text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="media/images/pricing-eq.svg"
                  style={{ width: "120px", height: "auto" }}
                  alt="Free account opening"
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "-45px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  Free account
                </p>
                <p
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "-22px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  opening
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="col text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="media/images/pricing-eq.svg"
                  style={{ width: "120px", height: "auto" }}
                  alt="Free equity delivery and direct mutual funds"
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "-80px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  Free equity delivery
                </p>
                <p
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "-103px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  and direct mutual funds
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="col text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="media/images/other-trades.svg"
                  style={{ width: "120px", height: "auto" }}
                  alt="Intraday and F&O"
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: "37px",
                    right: "-60px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  Intraday and 
                </p>
                <p
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    right: "-19px",
                    fontSize: "0.75rem",
                    color: "gray",
                    margin: 0,
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                F&O
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
