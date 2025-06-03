import { Suspense, lazy } from "react";
import { assert, type Equals } from "tsafe/assert";
import { type KcContext, KcContextProvider, useKcContext } from "./KcContext";
import { I18nProvider } from "./i18n";
import { KcClsxProvider, type ClassKey } from "@keycloakify/keycloak-account-multi-page-ui/useKcClsx";

const classes = {} satisfies { [key in ClassKey]?: string };

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    return (
        <KcContextProvider kcContext={kcContext}>
            <KcClsxProvider doUseDefaultCss={true} classes={classes}>
                <I18nProvider kcContext={kcContext}>
                    <Suspense>
                        <Page />
                    </Suspense>
                </I18nProvider>
            </KcClsxProvider>
        </KcContextProvider>
    );
}

const Page_account = lazy(() => import("./pages/account"));
const Page_applications = lazy(() => import("./pages/applications"));
const Page_federatedIdentity = lazy(() => import("./pages/federatedIdentity"));
const Page_log = lazy(() => import("./pages/log"));
const Page_password = lazy(() => import("./pages/password"));
const Page_sessions = lazy(() => import("./pages/sessions"));
const Page_totp = lazy(() => import("./pages/totp"));

function Page() {
    const { kcContext } = useKcContext();

    switch (kcContext.pageId) {
        case "account.ftl":
            return <Page_account />;
        case "applications.ftl":
            return <Page_applications />;
        case "federatedIdentity.ftl":
            return <Page_federatedIdentity />;
        case "log.ftl":
            return <Page_log />;
        case "password.ftl":
            return <Page_password />;
        case "sessions.ftl":
            return <Page_sessions />;
        case "totp.ftl":
            return <Page_totp />;
    }

    assert<Equals<typeof kcContext, never>>;
}
