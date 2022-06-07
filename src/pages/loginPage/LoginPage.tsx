import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import ButtonSpinner from "../../components/buttonSpinner/ButtonSpinner";
import { To, useLocation, useNavigate } from "react-router-dom";
import {
  LoginBoxContainer,
  PasswordInputContainer,
  RememberLoginContainer,
} from "../../components/styled/LoginPageComponents.styled";
import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
  TextButton,
} from "../../components/styled/Buttons.styled";
import { MainForAuthPages } from "../../components/styled/PageContainer.styled";
import { InputWithBackground } from "../../components/styled/Input.styled";
import { login } from "../../services/authServices";
import { useAuth } from "../../contexts/authContext";
import {
  AuthWarningText,
  VerticleFlexWithGap,
} from "../../components/styled/Generic.styled";
import axios from "axios";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authWarning, setAuthWarning] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const { setUserCredentials, setToRemember } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { comingFrom: string } };

  const testLoginCredentials = {
    email: "test",
    password: "123456",
  };

  function handleLogin(next: () => void): void {
    setAuthWarning(null);
    if (emailInputRef.current?.value.replaceAll(" ", "").length === 0) {
      setAuthWarning("Email cannot be empty.");
    } else if (
      passwordInputRef.current?.value.replaceAll(" ", "").length === 0
    ) {
      setAuthWarning("Password cannot be empty.");
    } else {
      next();
    }
  }

  function testLogin() {
    if (emailInputRef.current === null || passwordInputRef.current === null)
      return;
    emailInputRef.current.value = testLoginCredentials.email;
    passwordInputRef.current.value = testLoginCredentials.password;
  }

  return (
    <MainForAuthPages>
      <LoginBoxContainer>
        <VerticleFlexWithGap>
          <VerticleFlexWithGap gap="0.7rem">
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
            <RememberLoginContainer>
              <input
                type="checkbox"
                id="remember-login"
                name="remember-login"
                onChange={(e) => setToRemember(e.target.checked)}
              />
              <label htmlFor="remember-login">Remember me</label>
            </RememberLoginContainer>
          </VerticleFlexWithGap>
          <VerticleFlexWithGap gap="0.7rem">
            {authWarning && <AuthWarningText>{authWarning}</AuthWarningText>}
            <TextButton onClick={() => testLogin()}>
              Use testing credentials.
            </TextButton>
            <PrimaryButton
              onClick={() =>
                handleLogin(() => {
                  if (
                    emailInputRef.current === null ||
                    passwordInputRef.current === null
                  )
                    return;
                  login(
                    emailInputRef.current.value,
                    passwordInputRef.current.value,
                    setIsLoading,
                    (result) => {
                      console.log(result);
                      setUserCredentials({
                        firstName: result.data.firstName,
                        token: result.data.token,
                        _id: result.data._id,
                      });
                      const redirectTo =
                        state.comingFrom === "/signup" ? "/explore" : -1;
                      navigate(redirectTo as To, { replace: true });
                    },
                    (err) => {
                      if (axios.isAxiosError(err)) {
                        setAuthWarning(err.response?.data.message);
                      } else {
                        setAuthWarning(err.message);
                      }
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
          </VerticleFlexWithGap>
        </VerticleFlexWithGap>
      </LoginBoxContainer>
    </MainForAuthPages>
  );
}
