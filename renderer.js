async function test() {
  const response = await window.api.ping();

  console.log(response);
}

test();

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("nome");
  const message = document.getElementById("text");

  button.addEventListener("click", async () => {
    const username = await window.api.username();

    message.innerText = username;
  });
});
