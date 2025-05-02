import React from "react";

const ZerodhaSignup = () => {
  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          body, html {
            background-color: #fff;
            color: #333;
          }

          .main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 60px 10%;
            flex-wrap: wrap;
          }

          .text-content {
            flex: 1;
            max-width: 500px;
          }

          .text-content h1 {
            font-size: 32px;
            margin-bottom: 16px;
            color: #2d2d2d;
          }

          .text-content p {
            font-size: 18px;
            color: #555;
          }

          .signup-form {
            flex: 1;
            max-width: 400px;
            background: #f9f9f9;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .signup-form h3 {
            margin-bottom: 12px;
          }

          .input-group {
            display: flex;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            overflow: hidden;
          }

          .input-group span {
            padding: 10px;
            background-color: #eee;
            border-right: 1px solid #ccc;
            font-size: 14px;
          }

          .input-group input {
            border: none;
            outline: none;
            padding: 10px;
            flex: 1;
          }

          .signup-form button {
            width: 100%;
            padding: 12px;
            background-color: #387ed1;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 4px;
          }

          .signup-form p {
            margin-top: 16px;
            font-size: 12px;
            color: #777;
            text-align: center;
          }

          .images {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            align-items: center;
            gap: 12px;
          }

          .images img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
        `}
      </style>

<div className="container">
      <div className="text-center mt-5">
  <h1 className="fw mb-3" style={{ fontWeight: 600, color: "#404040", marginTop:"85px",fontSize:"35px" }}>Open a free demat & trading account online</h1>
  <p className="lead"style={{marginBottom:"80px",fontWeight:"500"}}>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
</div>
<div className="container mt-4">
  <div
    className="d-flex align-items-start justify-content-center gap-4 flex-wrap"
    style={{ maxWidth: "100%", margin: "0 auto",marginBottom: "50px", }}
  >
    {/* Left Side: Image */}
    <div className="left-content" style={{ flex: "1 1 40%", maxWidth: "40%" }}>
      <img
        src="media/images/landing-DQ76ex-B.svg"
        alt="Kite Layout"
        style={{ width: "100%", height: "auto" }}
      />
    </div>

    {/* Right Side: Signup Form */}
    <div className="signup-form p-4 border rounded" style={{ flex: "1 1 35%", maxWidth: "35%" }}>
      <h3 className="mb-2">Signup now</h3>
      <p className="mb-3">Or track your existing application</p>
      <div className="input-group mb-3">
        <span className="input-group-text">🇮🇳 +91</span>
        <input type="tel" className="form-control" placeholder="Enter your mobile number" />
      </div>
      <button className="btn btn-primary w-100 mb-2">Get OTP</button>
      <p className="small text-muted">
        By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
      </p>
    </div>
  </div>
</div>
</div>
</div>
  );
};

export default ZerodhaSignup;
