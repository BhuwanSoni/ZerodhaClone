import React from "react";

function Hero() {
  return (
    <section className="container-fluid  text-white min-vh-80 p-5" style={{backgroundColor:"#0033b2"}} id="supportHero">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Support Portal</h4>
        <a href="#" className="text-white text-decoration-underline">Track tickets</a>
      </div>

      {/* Main Content Row */}
      <div className="row">
        {/* Left side */}
        <div className="col-md-6 mb-5">
          <h1 className="h4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <div className="position-relative mb-4">
            <input
              type="text"
              className="form-control p-3 pe-5"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-dark"></i>
          </div>

          {/* Links */}
          <div className="d-flex flex-wrap gap-3">
            <a href="#" className="text-white text-decoration-underline small">Track account opening</a>
            <a href="#" className="text-white text-decoration-underline small">Track segment activation</a>
            <a href="#" className="text-white text-decoration-underline small">Intraday margins</a>
            <a href="#" className="text-white text-decoration-underline small">Kite user manual</a>
          </div>
        </div>

        {/* Right side */}
        <div className="col-md-6">
          <h1 className="h4 mb-4">Featured</h1>
          <ol className="list-decimal ps-4">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-underline">
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Rights Entitlements listing in April 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;




