import type { ReactNode } from "react";
import type { ClassKey } from "@keycloakify/account-multi-page-ui/useKcClsx";

type Classes = { [key in ClassKey]?: string };

type StyleLevelCustomization = {
    doUseDefaultCss: boolean;
    classes?: Classes;
    loadCustomStylesheet?: () => void;
    globalStyleNode?: ReactNode;
};

export function useStyleLevelCustomization(): StyleLevelCustomization {
    return {
        doUseDefaultCss: true
    };
}
