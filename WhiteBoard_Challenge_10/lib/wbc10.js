'use strict';
const wbcStack = module.exports = {};
wbcStack.parenthesesAreBalanced = function(s)
{
  if (!s) return null;
  if(typeof s !== 'string') return null;
  
  var parentheses = '{}', stack = [], i, c;

  for (i = 0; c = s[i++];)
  {
    var bracePosition = parentheses.indexOf(c),
      braceType;
    if (!~bracePosition)
      continue;

    braceType = bracePosition % 2 ? 'closed' : 'open';

    if (braceType === 'closed')
    {
      if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
        return false;
    }
    else
    {
      stack.push(c);
    }
  }
  return !stack.length;
};
