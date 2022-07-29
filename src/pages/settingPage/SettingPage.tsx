import { PageContainerMain } from "../../components";
import { useAuth } from "../../contexts";
import { SecondaryButton, VerticleFlexWithGap } from "../../styled";
import { LoggedInUserDetailsContainer } from "../../styled/SettingPageComponents.styled";

export default function SettingPage() {
  const { userCredentials, logout } = useAuth();
  return (
    <PageContainerMain>
      <VerticleFlexWithGap gap="2rem">
        <VerticleFlexWithGap>
          <h3>Account</h3>
          <LoggedInUserDetailsContainer>
            <div>
              <div>
                <span>Logged in as </span>
                <strong>{userCredentials?.firstName},</strong>
              </div>
              <p>
                <strong>{userCredentials?.email}</strong>
              </p>
            </div>
            <div>
              <SecondaryButton onClick={() => logout()}>
                Log out
              </SecondaryButton>
            </div>
          </LoggedInUserDetailsContainer>
        </VerticleFlexWithGap>
      </VerticleFlexWithGap>
    </PageContainerMain>
  );
}
