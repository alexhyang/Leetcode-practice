const isValid = function (s) {
  var stack = [];
  for (const p of s) {
    if (!popLastItemInStack(stack, p)) {
      stack.push(p);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 && s !== "";
};

const popLastItemInStack = function (stack, p) {
  if (stack.length === 0) {
    return false;
  } else {
    switch (p) {
      case ")":
        return stack[stack.length - 1] == "(";
      case "]":
        return stack[stack.length - 1] == "[";
      case "}":
        return stack[stack.length - 1] == "{";
      default:
        return false;
    }
  }
};

exports.isValid = isValid;
exports.popLastItemInStack = popLastItemInStack;
