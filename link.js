const input = process.argv[2];
let output;
if (input.startsWith(",,")) {
  const rest = input.slice(2);
  if (rest.includes(",")) {
    output = `#[[${rest.replace(",", " ").trim()}]] `;
  } else {
    output = `#${rest.trim()} `;
  }
} else {
  const rest = input.slice(1);
  output = `[[${rest.replace(",", " ").trim()}]] `;
}
console.log(output);
