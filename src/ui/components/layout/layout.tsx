// TYPES
import { SessionStatusTypes } from "@/types/session-status-types";
// COMPONENTS
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/Footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import GoogleMapsProvider from "@/context/googleMapsProvider";
import { ScrollTop } from "../scrollTop/scrollTop";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusTypes;
  breadcrumbLastLabel?: string;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
  breadcrumbLastLabel,
}: Props) => {
  return (
    <Session sessionStatus={sessionStatus}>
      <GoogleMapsProvider>
        <Navigation />
        {isDisplayBreadcrumbs && <Breadcrumbs lastLabel={breadcrumbLastLabel} />}

        <Container className="mb-14">
          {withSidebar ? (
            <div className="lg:grid lg:grid-cols-12 lg:gap-7">
              <aside className="hidden lg:block lg:col-span-3">
                <UserAccountNavigation />
              </aside>

              <main className="col-span-12 lg:col-span-9">{children}</main>
            </div>
          ) : (
            <main>{children}</main>
          )}
        </Container>
        
        <ScrollTop  />
        <Footer />
      </GoogleMapsProvider>
    </Session>
  );
};