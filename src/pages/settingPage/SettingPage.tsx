import { PageContainerMain } from "../../components";
import { useAuth } from "../../contexts";
import { SecondaryButton, VerticleFlexWithGap } from "../../styled";
import { LoggedInUserDetailsContainer } from "../../styled/SettingPageComponents.styled";

export default function SettingPage() {
  const { userCredentials } = useAuth();
  return (
    <PageContainerMain>
      <VerticleFlexWithGap gap="2rem">
        <VerticleFlexWithGap>
          <h3>Account</h3>
          <LoggedInUserDetailsContainer>
            <div>
              <div>
                <span>Logged in as </span>
                <span>{userCredentials?.firstName},</span>
              </div>
              <p>{userCredentials?.email}</p>
            </div>
            <div>
              <SecondaryButton>Log out</SecondaryButton>
            </div>
          </LoggedInUserDetailsContainer>
        </VerticleFlexWithGap>
      </VerticleFlexWithGap>
    </PageContainerMain>
  );
}
