const urlRegex = /^(https?:\/\/)([\w\d.-]+)\.([\w]+)$/;
const input = "https://www.example.com";

if (urlRegex.test(input)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
