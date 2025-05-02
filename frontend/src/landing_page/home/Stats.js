import React from "react";

const trustPoints = [
  {
    title: "Customer-first always",
    description:
      "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
  },
  {
    title: "No spam or gimmicks",
    description:
      'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
  },
  {
    title: "The Zerodha universe",
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    description:
      "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left content - smaller (col-md-6) */}
        <div className="col-md-6 px-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          {trustPoints.map((point, idx) => (
            <div key={idx} className="mb-4">
              <h2 className="fs-4">{point.title}</h2>
              <p className="text-muted">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Right content - larger (col-md-6 -> col-md-6 offset-md-0) */}
        <div className="col-md-6 px-4 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "100%", maxWidth: "100%" }}
          />
          <div>
            <a href="#" className="mx-3 text-decoration-none fw-bold">
              Explore our products <i className="fa fa-long-arrow-right" />
            </a>
            <a href="#" className="text-decoration-none fw-bold">
              Try Kite demo <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
