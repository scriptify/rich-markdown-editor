import { toggleMark } from "prosemirror-commands";
import markRule from "../rules/mark";
import Mark from "./Mark";

export default class TextCenter extends Mark {
  get name() {
    return "textcenter";
  }

  get schema() {
    return {
      parseDOM: [
        {
          tag: "p[data-center]",
        },
      ],
      toDOM: () => [
        "p",
        { "data-center": true, align: "center", display: "block" },
        0,
      ],
    };
  }

  keys({ type }) {
    return {
      "Mod-g": toggleMark(type),
    };
  }

  get rulePlugins() {
    return [markRule({ delim: "@@", mark: "textcenter" })];
  }

  get toMarkdown() {
    return {
      open: `@@`,
      close: "@@",
      mixable: true,
      expelEnclosingWhitespace: true,
    };
  }

  parseMarkdown() {
    return { mark: "textcenter" };
  }
}
