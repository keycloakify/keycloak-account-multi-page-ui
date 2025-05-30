import { useInsertLinkTags } from "keycloakify/tools/useInsertLinkTags";
import { useKcClsx } from "@keycloakify/keycloak-account-multi-page-ui/useKcClsx";
import { useKcContext } from "../../KcContext";

export function useInitializeTemplate() {
    const { kcContext } = useKcContext();

    const { doUseDefaultCss } = useKcClsx();

    const { areAllStyleSheetsLoaded } = useInsertLinkTags({
        componentOrHookName: "Template",
        hrefs: !doUseDefaultCss
            ? []
            : [
                  `${kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
                  `${kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
                  `${kcContext.url.resourcesPath}/css/account.css`
              ]
    });

    return { isReadyToRender: areAllStyleSheetsLoaded };
}
