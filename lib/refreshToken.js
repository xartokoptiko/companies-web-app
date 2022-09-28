const RefreshToken = (username, password) => {
  const qs = require("querystring");
  const http = require("http");

  const options = {
    method: "POST",
    hostname: "localhost",
    port: "8543",
    path: "/realms/quarkus/protocol/openid-connect/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": "0",
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];
    let status_code;

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (response) {
      if (res.statusCode == 200) {
        const body = Buffer.concat(chunks);
        const response_body = JSON.parse(body.toString());
        console.log(response_body);
        console.log(response_body["access_token"]);
        localStorage.setItem("access_token", response_body["access_token"]);
        alert("Token refreshed succesfully")
      } else {
        alert(
          "Something went wrong with barrer. Please log out and login again or try again in a while"
        );
      }
    });
  });

  req.write(
    qs.stringify({
      client_id: "backend-service",
      client_secret: "secret",
      username: username,
      password: password,
      grant_type: "password",
    })
  );
  req.end();
};
export default RefreshToken;
