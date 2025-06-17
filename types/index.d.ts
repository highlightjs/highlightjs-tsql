import { LanguageFn } from "highlight.js";

declare module 'highlight.js-tsql' {
    const tsql: LanguageFn;
    export default tsql;
}