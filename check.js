import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "URL parameter missing" });
  }

  const response = await fetch("https://www.virustotal.com/api/v3/urls", {
    method: "POST",
    headers: {
      "x-apikey": process.env.VT_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ url }),
  });

  const result = await response.json();
  res.status(200).json(result);
}