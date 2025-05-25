
import { downloadAndExtractArchive } from "../node_modules/keycloakify/src/bin/tools/downloadAndExtractArchive";
import { getThisCodebaseRootDirPath } from "./tools/getThisCodebaseRootDirPath";
import { getProxyFetchOptions } from "../node_modules/keycloakify/src/bin/tools/fetchProxyOptions";
import { transformCodebase } from "../node_modules/keycloakify/src/bin/tools/transformCodebase";
import { join as pathJoin } from "path";

const cacheDirPath = pathJoin(getThisCodebaseRootDirPath(), "node_modules", ".cache", "scripts");

async function preprepare(){


    const { extractedDirPath } = await downloadAndExtractArchive({
        url: "https://github.com/keycloakify/keycloak-login-ui/archive/refs/heads/main.zip",
        cacheDirPath,
        fetchOptions: getProxyFetchOptions({
            npmConfigGetCwd: getThisCodebaseRootDirPath()
        }),
        uniqueIdOfOnArchiveFile: "extract all",
        onArchiveFile: async params => {
            const { fileRelativePath, writeFile } = params;
            await writeFile({ fileRelativePath });
        }
    });

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "src"),
        destDirPath: pathJoin(getThisCodebaseRootDirPath(), "src"),
        transformSourceCode: ({ fileRelativePath, sourceCode })=> {

            if(fileRelativePath.startsWith(pathJoin("core", "i18n", "messages_defaultSet")) ){
                return undefined;
            }

            if(fileRelativePath === pathJoin("core", "KcContext", "KcContext.ts") ){
                return undefined;
            }

            if(fileRelativePath === pathJoin("core", "KcContext", "kcContextMocks.ts") ){
                return undefined;
            }

            if(fileRelativePath === pathJoin("core", "kcClsx.ts") ){
                return undefined;
            }

            if(fileRelativePath.startsWith(pathJoin("core", "userProfileApi")) ){
                return undefined;
            }

            if(fileRelativePath.startsWith("useUserProfileForm.tsx") ){
                return undefined;
            }

            return { modifiedSourceCode: sourceCode };

        }
    });

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "scripts"),
        destDirPath: pathJoin(getThisCodebaseRootDirPath(), "scripts"),
        transformSourceCode: ({ fileRelativePath, sourceCode }) => {

            if( fileRelativePath.endsWith(".login.ts") ){
                return undefined;
            }

            return { modifiedSourceCode: sourceCode };

        }
    });





}


/*
import { join as pathJoin } from "path";
import { downloadAndExtractArchive } from "../../node_modules/keycloakify/src/bin/tools/downloadAndExtractArchive";
import { getProxyFetchOptions } from "../../node_modules/keycloakify/src/bin/tools/fetchProxyOptions";
import { getThisCodebaseRootDirPath } from "../tools/getThisCodebaseRootDirPath";
import { KEYCLOAK_VERSION, createOnArchiveFile } from "./downloadKeycloakDefaultTheme.login";

const cacheDirPath = pathJoin(getThisCodebaseRootDirPath(), "node_modules", ".cache", "scripts");

export async function downloadKeycloakDefaultTheme() {
    const { onArchiveFile } = createOnArchiveFile();

    const { extractedDirPath } = await downloadAndExtractArchive({
        url: `https://repo1.maven.org/maven2/org/keycloak/keycloak-themes/${KEYCLOAK_VERSION}/keycloak-themes-${KEYCLOAK_VERSION}.jar`,
        cacheDirPath,
        fetchOptions: getProxyFetchOptions({
            npmConfigGetCwd: getThisCodebaseRootDirPath()
        }),
        uniqueIdOfOnArchiveFile: "extractOnlyRequiredFiles",
        onArchiveFile
    });

    return { extractedDirPath };
}

*/