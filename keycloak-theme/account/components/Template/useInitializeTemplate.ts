import { useInsertLinkTags } from "keycloakify/tools/useInsertLinkTags";
import { useKcClsx } from "@keycloakify/keycloak-account-multi-page-ui/useKcClsx";
import { BASE_URL } from "@keycloakify/keycloak-account-multi-page-ui/import.meta.env.BASE_URL";

export function useInitializeTemplate() {
    const { doUseDefaultCss } = useKcClsx();

    const { areAllStyleSheetsLoaded } = useInsertLinkTags({
        componentOrHookName: "Template",
        hrefs: !doUseDefaultCss
            ? []
            : [
                  `${BASE_URL}keycloak-theme/account/resources-common/node_modules/patternfly/dist/css/patternfly.min.css`,
                  `${BASE_URL}keycloak-theme/account/resources-common/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
                  `${BASE_URL}keycloak-theme/account/css/account.css`
              ]
    });

    return { isReadyToRender: areAllStyleSheetsLoaded };
}
