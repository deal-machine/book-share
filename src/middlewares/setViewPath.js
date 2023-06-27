import path from "path";
import url from "url";

const urlPath = url.fileURLToPath(import.meta.url);
export const publicDir = path.join(urlPath, "../../..", "public");
