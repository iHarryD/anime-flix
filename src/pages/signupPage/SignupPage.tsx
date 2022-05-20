import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonSpinner from "../../components/buttonSpinner/ButtonSpinner";
import {
  PrimaryButton,
  TextButton,
} from "../../components/styled/Buttons.styled";
import {
  DOBInput,
  InputWithBackground,
  StyledLabelInputContainer,
} from "../../components/styled/Input.styled";
import { MainForAuthPages } from "../../components/styled/PageContainer.styled";
import {
  ColumnForPair,
  SignupBoxContainer,
} from "../../components/styled/SignupPageComponents.styled";
import { signup } from "../../services/authServices";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const dobInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleSignup(next: () => void): void {
    if (
      !firstNameInputRef.current?.value.replaceAll(" ", "").length ||
      !lastNameInputRef.current?.value.replaceAll(" ", "").length ||
      !emailInputRef.current?.value.replaceAll(" ", "").length ||
      !passwordInputRef.current?.value.replaceAll(" ", "").length ||
      !confirmPasswordInputRef.current?.value.replaceAll(" ", "").length ||
      !dobInputRef.current?.value.replaceAll(" ", "").length
    ) {
      console.log("Fill everything");
    } else if (passwordInputRef.current?.value.length! < 6) {
      console.log("Password must be at least 6 characters long");
    } else if (
      passwordInputRef.current?.value !== confirmPasswordInputRef.current?.value
    ) {
      console.log("Passwords do not match");
    } else {
      next();
    }
  }

  return (
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
            <InputWithBackground ref={emailInputRef} type="email" id="email" />
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
        <PrimaryButton
          disabled={isLoading}
          onClick={() =>
            handleSignup(() =>
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
                }
              )
            )
          }
        >
          {isLoading ? <ButtonSpinner color="#fff" /> : "Signup"}
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
  );
}
