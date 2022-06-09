import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonSpinner } from "../../components";
import {
  PrimaryButton,
  TextButton,
  AuthWarningText,
  DOBInput,
  InputWithBackground,
  StyledLabelInputContainer,
  MainForAuthPages,
  ColumnForPair,
  SignupBoxContainer,
} from "../../styled";
import { signup } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { getErrorMessage } from "../../helpers/getErrorMessage";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authWarning, setAuthWarning] = useState<string | null>(null);
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const dobInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleSignup(): void {
    setAuthWarning(null);
    if (
      !firstNameInputRef.current?.value.replaceAll(" ", "").length ||
      !lastNameInputRef.current?.value.replaceAll(" ", "").length ||
      !emailInputRef.current?.value.replaceAll(" ", "").length ||
      !passwordInputRef.current?.value.replaceAll(" ", "").length ||
      !confirmPasswordInputRef.current?.value.replaceAll(" ", "").length ||
      !dobInputRef.current?.value.replaceAll(" ", "").length
    ) {
      setAuthWarning("All fields are mandatory.");
    } else if (passwordInputRef.current?.value.length! < 6) {
      setAuthWarning("Password must be at least 6 characters long");
    } else if (
      passwordInputRef.current?.value !== confirmPasswordInputRef.current?.value
    ) {
      setAuthWarning("Passwords do not match.");
    } else {
      signup(
        {
          firstName: firstNameInputRef.current?.value,
          lastName: lastNameInputRef.current?.value,
          email: emailInputRef.current?.value,
          dob: dobInputRef.current?.value,
          password: passwordInputRef.current?.value,
          confirmPassword: confirmPasswordInputRef.current?.value,
        },
        setIsLoading,
        () => {
          navigate("/login", {
            state: {
              comingFrom: location.pathname,
            },
          });
        },
        (err) => {
          toast.error(getErrorMessage(err), toastEmitterConfig);
        }
      );
    }
  }
  return (
    <>
      <ToastContainer />
      <MainForAuthPages>
        <SignupBoxContainer>
          <ColumnForPair>
            <StyledLabelInputContainer>
              <label htmlFor="first-name">First name</label>
              <InputWithBackground ref={firstNameInputRef} id="first-name" />
            </StyledLabelInputContainer>
            <StyledLabelInputContainer>
              <label htmlFor="last-name">Last name</label>
              <InputWithBackground ref={lastNameInputRef} id="last-name" />
            </StyledLabelInputContainer>
          </ColumnForPair>
          <ColumnForPair>
            <StyledLabelInputContainer>
              <label htmlFor="email">Email</label>
              <InputWithBackground
                ref={emailInputRef}
                type="email"
                id="email"
              />
            </StyledLabelInputContainer>
            <StyledLabelInputContainer>
              <label htmlFor="date-of-birth">Date of birth</label>
              <DOBInput ref={dobInputRef} type="date" id="date-of-birth" />
            </StyledLabelInputContainer>
          </ColumnForPair>
          <ColumnForPair>
            <StyledLabelInputContainer>
              <label htmlFor="password">Password</label>
              <InputWithBackground
                ref={passwordInputRef}
                type="password"
                id="password"
              />
            </StyledLabelInputContainer>
            <StyledLabelInputContainer>
              <label htmlFor="confirm-password">Confirm password</label>
              <InputWithBackground
                ref={confirmPasswordInputRef}
                type="password"
                id="confirm-password"
              />
            </StyledLabelInputContainer>
          </ColumnForPair>
          {authWarning && <AuthWarningText>{authWarning}</AuthWarningText>}
          <PrimaryButton disabled={isLoading} onClick={() => handleSignup()}>
            {isLoading ? <ButtonSpinner colorHex="#fff" /> : "Signup"}
          </PrimaryButton>
          <TextButton
            onClick={() =>
              navigate("/login", {
                state: {
                  comingFrom: location.pathname,
                },
              })
            }
          >
            Already have an account?
          </TextButton>
        </SignupBoxContainer>
      </MainForAuthPages>
    </>
  );
}
