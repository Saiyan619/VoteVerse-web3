import React from "react";

const Login = ({ connectToMetamask }) => { // ✅ Fix props destructuring
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1>Welcome to the decentralized voting application</h1>
        <button
          onClick={connectToMetamask}
          className="btn btn-primary mt-4"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
