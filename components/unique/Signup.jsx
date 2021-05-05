import React, { useState } from "react";
import { Container, Button, Box } from "react-bulma-components";
import Global from "@components/reusables/Global";
import { signIn } from "next-auth/client";
import Lottie from "react-lottie";
import * as waterBottles from "@public/animations/water-bottle.json";

export default function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isPasswordConfirmed, confirmPassword] = useState({
    state: "untyped",
    isAuthentic: false,
  });

  const handlePasswordConfirmation = (value) => {
    if (value == formState.password) return null;
    return confirmPassword({ ...isPasswordConfirmed, isAuthentic: true });
  };

  const animationOption = {
    loop: false,
    autoplay: true,
    animationData: waterBottles,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSignup = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AUTH_KEY}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formState),
    };
    fetch(
      "https://water-co-api.herokuapp.com/users/signup",
      options
    ).then((data) => console.log(data.json()));
  };

  return (
    <div className="signup">
      <Global title="Sign Up to get started">
        <Container>
          <Lottie options={animationOption} height={300} width={300} />
          <Box>
            <div className="field">
              <label className="label">Full Name</label>
              <div className="control">
                <input
                  name="name"
                  className="input"
                  value={formState.name}
                  type="text"
                  placeholder="e.g: Mamane Nineteen"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="input"
                  type="email"
                  value={formState.email}
                  placeholder="eg: mamane@nineteen.com"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [e.target.name]: [e.target.value],
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  name="password"
                  className="input"
                  type="password"
                  value={formState.password}
                  placeholder="Enter a new password"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [e.target.name]: [e.target.value],
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  name="confirm"
                  className="input"
                  type="password"
                  value=""
                  placeholder="Enter the same password"
                  onChange={(e) => handlePasswordConfirmation(e.target.value)}
                />
              </div>
            </div>
            <Button color="info" onClick={handleSignup}>
              Signup
            </Button>

            <div className="sign-in has-text-centered">
              <p className="is-sized-5">Already have an account?</p>{" "}
              <span
                className="has-text-weight-bold	has-text-link is-sized-5"
                onClick={signIn}
              >
                Sign In instead.
              </span>
            </div>
          </Box>
        </Container>
      </Global>
    </div>
  );
}
