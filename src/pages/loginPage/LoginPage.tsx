import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import ButtonSpinner from "../../components/buttonSpinner/ButtonSpinner";
import { To, useLocation, useNavigate } from "react-router-dom";
import {
  LoginBoxContainer,
  PasswordInputContainer,
} from "../../components/styled/LoginPageComponents.styled";
import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
} from "../../components/styled/Buttons.styled";
import { MainForAuthPages } from "../../components/styled/PageContainer.styled";
import { InputWithBackground } from "../../components/styled/Input.styled";
import { login } from "../../services/authServices";
import { useAuth } from "../../contexts/authContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const { setUserData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin(next: () => void): void {
    if (emailInputRef.current?.value.replaceAll(" ", "").length === 0) {
      console.log("Email prob");
    } else if (
      passwordInputRef.current?.value.replaceAll(" ", "").length === 0
    ) {
      console.log("Password prob");
    } else {
      next();
    }
  }

  return (
    <MainForAuthPages>
      <LoginBoxContainer>
        <div className="--verticle-flex --has-gap">
          <InputWithBackground
            ref={emailInputRef}
            type="email"
            placeholder="Email"
          />
          <PasswordInputContainer>
            <InputWithBackground
              ref={passwordInputRef}
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
            />
            <IconOnlyButton
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
            >
              <FontAwesomeIcon icon={faEye} />
            </IconOnlyButton>
          </PasswordInputContainer>
          <PrimaryButton
            onClick={() =>
              handleLogin(() => {
                login(
                  emailInputRef.current?.value!,
                  passwordInputRef.current?.value!,
                  setIsLoading,
                  (result) => {
                    setUserData({
                      firstName: result.firstName,
                      token: result.token,
                    });
                    navigate(-1 as To, { replace: true });
                  }
                );
              })
            }
            disabled={isLoading}
          >
            {isLoading ? <ButtonSpinner color="#fff" /> : "Login"}
          </PrimaryButton>
          <SecondaryButton
            disabled={isLoading}
            onClick={() => navigate("/signup")}
          >
            Create an account
          </SecondaryButton>
        </div>
      </LoginBoxContainer>
    </MainForAuthPages>
  );
}
