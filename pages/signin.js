import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";

export default function SignInPage() {
//   const [errorMessage, setErrorMessage] = React.useState("");
    const router = useRouter();

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        router.push('/');
        console.log(user);
      })
    //   .catch((error) => {
    //     let code = error.code;
    //     code = code.replaceAll("-", " ");
    //     code = code.replaceAll("auth/", "");
    //     setErrorMessage(code);
    //   });
  }
  return (
    <section className="page">
      <div className="signin-cntr">
        <form className="signin-form" onSubmit={signIn}>
          <h1 className="logo">
            <p>Log ind</p>
          </h1>
          
          <input type="email" name="mail" placeholder="Email" />  
          <br/>

          <input type="password" name="password" placeholder="Adgangskode" />
          <br/>

          {/* <p className="text-error">{errorMessage}</p> */}
          <button className="signin-btn">Log ind</button>
        </form>
      </div>
    </section>
  );
}