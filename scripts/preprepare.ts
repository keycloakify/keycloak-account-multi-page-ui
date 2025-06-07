import { downloadAndExtractArchive } from "keycloakify/src/bin/tools/downloadAndExtractArchive";
import { getThisCodebaseRootDirPath } from "./tools/getThisCodebaseRootDirPath.overridable";
import { getProxyFetchOptions } from "keycloakify/src/bin/tools/fetchProxyOptions";
import { transformCodebase } from "keycloakify/src/bin/tools/transformCodebase";
import { join as pathJoin, sep as pathSep } from "path";

const KEYCLOAKIFY_KEYCLOAK_LOGIN_UI_COMMIT = "4baa3d52820c0dfa9974dcc0bf109c97100f8e1a";

(async () => {
    const { extractedDirPath } = await downloadAndExtractArchive({
        url: `https://github.com/keycloakify/keycloak-login-ui/archive/${KEYCLOAKIFY_KEYCLOAK_LOGIN_UI_COMMIT}.zip`,
        cacheDirPath: pathJoin(getThisCodebaseRootDirPath(), "node_modules", ".cache", "scripts"),
        fetchOptions: getProxyFetchOptions({
            npmConfigGetCwd: getThisCodebaseRootDirPath()
        }),
        uniqueIdOfOnArchiveFile: "extract_all",
        onArchiveFile: async params => {
            const { fileRelativePath, writeFile } = params;
            await writeFile({
                fileRelativePath: fileRelativePath.split(pathSep).splice(1).join(pathSep)
            });
        }
    });

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "src"),
        destDirPath: pathJoin(getThisCodebaseRootDirPath(), "src"),
        transformSourceCode: ({ fileRelativePath, sourceCode }) => {
            if (fileRelativePath.startsWith(pathJoin("core", "i18n", "messages_defaultSet"))) {
                return undefined;
            }

            if (fileRelativePath === pathJoin("core", "KcContext", "KcContext.ts")) {
                return undefined;
            }

            if (fileRelativePath === pathJoin("core", "KcContext", "kcContextMocks.ts")) {
                return undefined;
            }

            if (fileRelativePath === pathJoin("KcContext", "index.ts")) {
                return undefined;
            }

            if (fileRelativePath === pathJoin("core", "kcClsx.ts")) {
                return undefined;
            }

            if (fileRelativePath.startsWith(pathJoin("core", "userProfileApi"))) {
                return undefined;
            }

            if (fileRelativePath.startsWith("useUserProfileForm.tsx")) {
                return undefined;
            }

            return { modifiedSourceCode: sourceCode };
        }
    });

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "scripts"),
        destDirPath: pathJoin(getThisCodebaseRootDirPath(), "scripts"),
        transformSourceCode: ({ fileRelativePath, sourceCode }) => {
            if (fileRelativePath.endsWith(".overridable.ts")) {
                return undefined;
            }

            return { modifiedSourceCode: sourceCode };
        }
    });
})();
