export async function GET() {
  try {
    // Get environment variables (Use Netlify environment variables instead of hardcoding)
    const BOT_TOKEN = "7798241066:AAE8Gz8M7__k6ZtFGgSmPTV8LYGObYr-aGU"; // ⚠️ Replace with your actual bot token
    const CHAT_ID = "7354767620"; // ⚠️ Replace with your actual chat ID


    if (!BOT_TOKEN || !CHAT_ID) {
      return new Response("Missing credentials", { status: 500 });
    }

    // Fetch visitor's IP and location
    const ipResponse = await fetch("https://freeipapi.com/api/json/");
    const ipData = await ipResponse.json();

    // Extract visitor details
    const visitorIP = ipData.ipAddress || "Unknown IP";
    const country = ipData.countryName || "🌍 Unknown Country";
    const city = ipData.cityName || "🏙 Unknown City";
    const region = ipData.regionName || "📍 Unknown Region";
    const timezone = ipData.timeZone || "⏳ Unknown Timezone";
    const latitude = ipData.latitude || "📌 Unknown";
    const longitude = ipData.longitude || "📌 Unknown";

    // Capture visit time
    const visitTime = new Date().toLocaleString("en-US", { timeZone: timezone });

    // Random messages
    const messages = [
      "🚀 A traveler entered the void.",
      "🕵️ A shadow moves in the digital abyss.",
      "✨ A lost soul wanders through cyberspace.",
      "🌌 A lone explorer steps into your domain.",
      "💀 A ghostly presence lingers here.",
      "📡 A signal from the unknown just pinged your server.",
      "🔮 A cosmic visitor touches down.",
      "🔥 Someone walked into the fire of the web.",
      "💫 A digital pilgrim has arrived.",
      "👁 An unseen force observes silently.",
      "👾 A data entity has entered your reality.",
      "📜 A new story begins with this visit.",
      "⏳ Time bends as another presence appears.",
      "🔓 A secret door just opened…",
      "🔗 A fragile connection is made.",
      "💡 A spark of curiosity ignites.",
      "🌠 A shooting star just crossed your site.",
      "🦉 The night whispers of a new arrival.",
      "🌬 The winds of the internet bring a visitor.",
      "🌀 A vortex swirls as data flows in.",
      "💥 A mind collides with information.",
      "🌊 A ripple in the matrix is detected.",
      "🔍 Someone is searching for truth here.",
      "🕳 A portal opened… and someone stepped through.",
    ];

    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Construct the message
    const message = `💡 ${randomMessage}
-------------------------------
📅 *Time:* ${visitTime}
📍 *IP:* ${visitorIP}
🌎 *Location:* ${city}, ${region}, ${country}
⏳ *Timezone:* ${timezone}
📌 *Coordinates:* ${latitude}, ${longitude}
-------------------------------
🔍 *A moment in the universe…*`;

    // Send to Telegram
    const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;
    await fetch(telegramURL);

    return new Response(null, { status: 204 });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}
