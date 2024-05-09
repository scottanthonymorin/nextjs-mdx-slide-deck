import CodeSnippet from "./components/CodeSnippet";
import SlidePage from "./layouts/SlidePage";

export function useMDXComponents(components) {
  return {
    ...components,
    SlidePage,
    code: CodeSnippet,
  };
}
