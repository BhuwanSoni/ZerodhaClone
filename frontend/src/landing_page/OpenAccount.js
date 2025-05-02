import React from "react";

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 
                    className="mt-5" 
                    style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "#404040",
                        lineHeight: "1.8"  // increased line spacing for the heading
                    }}
                >
                    Open a Zerodha account
                </h1>
                <p 
                    style={{
                        lineHeight: "2.8", color:"#737373"  // increased line spacing for the paragraph
                    }}
                >
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width : "20%", margin: "0 auto" }}>
                    Sign up for free
                </button>
            </div>
        </div>    
    );
}

export default OpenAccount;
