import { useRef, useState } from "react";
import { To, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { ButtonSpinner } from "../../components";
import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  LoginBoxContainer,
  PasswordInputContainer,
  RememberLoginContainer,
  MainForAuthPages,
  InputWithBackground,
} from "../../styled";
import { login } from "../../services";
import { useAuth } from "../../contexts";
import { AuthWarningText, VerticleFlexWithGap } from "../../styled";
import { toast, ToastContainer } from "react-toastify";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { getErrorMessage } from "../../helpers/getErrorMessage";

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

  function handleLogin(): void {
    if (!emailInputRef.current || !passwordInputRef.current) return;
    setAuthWarning(null);
    if (emailInputRef.current?.value.replaceAll(" ", "").length === 0) {
      setAuthWarning("Email cannot be empty.");
    } else if (
      passwordInputRef.current?.value.replaceAll(" ", "").length === 0
    ) {
      setAuthWarning("Password cannot be empty.");
    } else if (passwordInputRef.current?.value.length < 6) {
      setAuthWarning("Password must be at least 6 characters.");
    } else {
      login(
        emailInputRef.current.value,
        passwordInputRef.current.value,
        setIsLoading,
        (result) => {
          setUserCredentials({
            firstName: result.data.firstName,
            token: result.data.token,
            _id: result.data._id,
          });
          const redirectTo = state.comingFrom === "/signup" ? "/explore" : -1;
          navigate(redirectTo as To, { replace: true });
        },
        (err) => {
          toast.error(getErrorMessage(err), toastEmitterConfig);
        }
      );
    }
  }

  function testLogin() {
    if (!emailInputRef.current || !passwordInputRef.current) return;
    emailInputRef.current.value = testLoginCredentials.email;
    passwordInputRef.current.value = testLoginCredentials.password;
  }

  return (
    <>
      <ToastContainer />
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
              <PrimaryButton onClick={() => handleLogin()} disabled={isLoading}>
                {isLoading ? <ButtonSpinner colorHex="#fff" /> : "Login"}
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
    </>
  );
}
