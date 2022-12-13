import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { usersRef, auth } from "../firebaseConfig";
import { useRouter } from "next/router";

export default function SignUpPage() {
  // const [errorMessage, setErrorMessage] = React.useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  function signUp(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, mail, password, name)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const docRef = doc(usersRef, user.uid);
        setDoc(docRef, { name });
        // ...
        router.push('/');
        console.log(user);
      })

      // .catch((error) => {
      //   let code = error.code;
      //   code = code.replaceAll("-", " ");
      //   code = code.replaceAll("auth/", "");
      //   setErrorMessage(code);
      // });
  }

  return (
    <section className="page">
      <div className="signin-cntr">
        <form className="signin-form" onSubmit={signUp}>
          <h1 className="logo">
            Opret en bruger
          </h1>
          <br/>

          <input
            type="text"
            name="name"
            placeholder="Navn"
            onChange={e => setName(e.target.value)}
          /> <br/>

          <input type="email" name="mail" placeholder="Email" /> <br/>

          <input type="password" name="password" placeholder="Adgangskode" /> <br/>

          {/* <p className="text-error">{errorMessage}</p> */}
          <br/>
          <button className="signin-btn">Opret</button>
        </form>
      </div>
    </section>
  );
}