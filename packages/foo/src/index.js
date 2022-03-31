import("bar").then(({ barFn }) => {
  const h1 = document.createElement("h1");
  h1.innerText = `foo: ${barFn()}`;
  document.body.appendChild(h1);
});
