function escapeHTML(unsafeHTML) {
  return unsafeHTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&amp;lt;')
    .replace(/>/g, '&amp;gt;')
    .replace(/"/g, '&amp;quot;');
}

function html(literals, ...args) {
  return literals
    .reduce((result, eachLiteral, index) => {
      const argumentAtPosition = args[index] || '';
      return result + escapeHTML(eachLiteral + argumentAtPosition);
    }, '')
    .trim();
}

function callTemplateTagFunction() {
  const trueExpression = '5 > 4';
  const falseExpression = '3 < 1';
  return html`
    The expression ${trueExpression} is "true" & ${falseExpression} is false
  `;
}

export { callTemplateTagFunction };
