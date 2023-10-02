async function copy() {
  let text = document.getElementById("shorturl").innerText;
  let url = window.location.href.replace(/shorten/g, "")
  await navigator.clipboard.writeText(url + text);
  document.getElementById("button").innerText = "COPIED";
}
