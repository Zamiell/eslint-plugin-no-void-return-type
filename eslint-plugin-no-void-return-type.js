"use strict";

module.exports = {
  configs: {
    recommended: {
      plugins: ["no-void-return-type"],

      rules: {
        "no-void-return-type/no-void-return-type": "warn",
      },
    },
  },

  rules: {
    "no-void-return-type": {
      create: noVoidReturnType,

      meta: {
        type: "suggestion",

        docs: {
          description: "prevent void return types on unexported functions",
        },

        fixable: "code",
      },
    },
  },
};

function noVoidReturnType(context) {
  return {
    FunctionDeclaration(node) {
      // Exported functions are exempt from this rule
      const { parent } = node;
      if (parent !== undefined && parent.type === "ExportNamedDeclaration") {
        return;
      }

      const { returnType } = node;
      if (returnType === undefined || returnType.type !== "TSTypeAnnotation") {
        return;
      }

      const { typeAnnotation } = returnType;
      if (
        typeAnnotation === undefined ||
        typeAnnotation.type !== "TSVoidKeyword"
      ) {
        return;
      }

      context.report({
        node,
        message: "void return types on unexported functions are not allowed",
        fix(fixer) {
          return fixer.remove(returnType);
        },
      });
    },
  };
}
