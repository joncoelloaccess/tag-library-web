import { Accents } from "../../shared/types";
const toTagButtonWithAccent = (tests, accent) => {
    return Object.assign({}, tests, { [`tag-button ${accent}`]: {
            markup: h("tag-button", { accent: Accents[accent] }, accent)
        } });
};
const accentTests = Object.keys(Accents).reduce(toTagButtonWithAccent, {});
export default accentTests;
