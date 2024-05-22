// import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// // import { RecaptchaVerifier } from "firebase/auth/web-extension";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import { auth } from "../../Firebase";
// import Style from "./Login.module.css";

// const Login = () => {
//   const [phone, setPhone] = useState();

//   const sendOtp = async () => {
//     const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//     const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
//     console.log(confirmation);

//     // }catch(err){
//     //   console.error(err)
//   };
//   return (
//     <>
//       <div className={Style.login}>
//         <img src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/simply-otp-login-banner.png?v=1714124745" width={300} alt="" />
//         <p className={Style.login_p1}>Login with OTP</p>
//         <p className={Style.login_p2}>Enter your log in details</p>
//         <PhoneInput
//           className={Style.PhoneInput}
//           country={"US"}
//           value={phone}
//           onChange={(phone) => setPhone("+" + phone)}
//         />

//         <button className={Style.login_btn} onClick={sendOtp}>
//           Request otp
//         </button>
//         <div id="recaptcha"></div>
//         <input type="number" />
//         <button className={Style.verify_btn}>verify</button>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import PhoneInput from "react-phone-number-input";
import { auth } from "../../Firebase";
import Style from "./Login.module.css";

const Login = () => {
  const [phone, setPhone] = useState();

  const sendOtp = async () => {
    console.log("shivani");
    try {
      const recaptchaContainer = document.getElementById("recaptcha");
      const recaptcha = new RecaptchaVerifier(recaptchaContainer, {
        size: "visible",
      });
      // Use the international format of the phone number
      const phoneNumber = `+${phone}`;
      // Send OTP to the provided phone number
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptcha
      );

      // Once OTP is sent, Firebase should handle the rest
      console.log("OTP Sent");
      console.log(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={Style.login}>
      <img
        src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/simply-otp-login-banner.png?v=1714124745"
        width={300}
        alt=""
      />
      <p className={Style.login_p1}>Login with OTP</p>
      <p className={Style.login_p2}>Enter your log in details</p>
      <PhoneInput
        className={Style.PhoneInput}
        country={"US"}
        value={phone}
        onChange={setPhone}
      />
      <button className={Style.login_btn} onClick={sendOtp}>
        Request OTP
      </button>
      <div id="recaptcha"></div>
      <input type="number" />
      <button className={Style.verify_btn}>Verify</button>
    </div>
  );
};

export default Login;
