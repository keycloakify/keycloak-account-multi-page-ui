import { getThisCodebaseRootDirPath } from "./tools/getThisCodebaseRootDirPath.overridable";
import { transformCodebase } from "../node_modules/keycloakify/src/bin/tools/transformCodebase";
import { join as pathJoin } from "path";

export async function extraSteps() {
    transformCodebase({
        srcDirPath: pathJoin(getThisCodebaseRootDirPath(), "account-v1"),
        destDirPath: pathJoin(getThisCodebaseRootDirPath(), "dist", "account-v1")
    });
}
