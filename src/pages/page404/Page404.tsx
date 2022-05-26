import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundAnimationContainer,
  RedirectionTextContainer,
  RedirectLink,
} from "../../components/styled/Page404Components.styled";

export default function Page404() {
  const [redirectIn, setRedirectIn] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectionInterval = setInterval(() => {
      if (redirectIn >= 0) {
        setRedirectIn((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(redirectionInterval);
  }, []);

  useEffect(() => {
    if (redirectIn === 0) {
      navigate("/");
    }
  }, [redirectIn]);

  return (
    <NotFoundAnimationContainer>
      <LottiePlayer
        src="https://assets7.lottiefiles.com/packages/lf20_kcsr6fcp.json"
        autoplay
        loop
        background="#0000"
        style={{ width: "100%", height: "100vh" }}
      />
      <RedirectionTextContainer>
        <p>
          You seem to be lost. You will be redirect to our landing page in{" "}
          {redirectIn} ...
        </p>
        <p>
          <RedirectLink to="/">Redirect now</RedirectLink>
        </p>
      </RedirectionTextContainer>
    </NotFoundAnimationContainer>
  );
}
