import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
function FrontPage() {
  const [hasAccount, createAccount] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between w-full ">
        <div className="w-1/2">
          {" "}
          {hasAccount ? (
            <Login
              hasAccount={hasAccount}
              createAccount={createAccount}
            ></Login>
          ) : (
            <Signup hasAccount={hasAccount} createAccount={createAccount} />
          )}
        </div>
        <img src="Images/hostelmainpage.jpg" alt="" />
      </div>
    </div>
  );
}

export default FrontPage;
