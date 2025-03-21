import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    // Get env vars from Netlify
    const BOT_TOKEN = import.meta.env.BOT_TOKEN;
    const CHAT_ID = import.meta.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing Telegram API credentials");
      return new Response(null, { status: 500 });
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

    // 🔥 100 Deep & Cool Random Messages
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
      "🎭 A mask hides the intentions of the visitor.",
      "📖 The pages of fate turn with this visit.",
      "⚡️ A surge of energy runs through your site.",
      "🎶 Echoes of the past and future meet here.",
      "🛸 An unidentified web object has landed.",
      "🪐 Gravity shifts as another presence is felt.",
      "🌒 The moonlight casts a silent observer.",
      "⚙ The gears of fate click into motion.",
      "🔑 A key is turning in the lock.",
      "🌗 The balance tilts as another mind enters.",
      "👤 A new consciousness touches your domain.",
      "🌿 Nature breathes as a new connection is made.",
      "🚪 A doorway to the unknown creaks open.",
      "👣 Footsteps echo in the empty corridors of your site.",
      "💭 Dreams and reality merge for an instant.",
      "🕊 A silent watcher records this moment.",
      "🔲 Another pixel flickers into existence.",
      "📡 A transmission is intercepted.",
      "🛤 A path is formed where none existed before.",
      "💎 A rare visitor has arrived.",
      "🎇 Sparks of thought ignite in the dark.",
      "🌗 Shadows stretch with curiosity.",
      "🕸 Another strand in the web is connected.",
      "⚖ The balance shifts ever so slightly.",
      "🚨 A presence registers on the radar.",
      "📍 A pinpoint of consciousness arrives.",
      "🛠 The fabric of reality is adjusted.",
      "🚦 A signal changes, allowing a new visitor to pass through.",
      "🌈 A spectrum of possibilities unfolds.",
      "💫 A brief but meaningful interaction occurs.",
      "🌤 The first light of understanding dawns.",
      "🏁 A checkpoint is reached in this journey.",
      "🕰 Time slows down as a new observer appears.",
      "🔥 The flames of curiosity burn brightly.",
      "🌱 The seeds of thought are planted.",
      "🌲 A tree grows in the forest of ideas.",
      "🎢 The ride begins for this traveler.",
      "🎯 A direct hit—someone found exactly what they sought.",
      "🦅 A sharp eye scans your world.",
      "🔦 A flashlight flickers in the dark corners.",
      "🔗 A new link is forged in the chain.",
      "🔐 A piece of the puzzle is unlocked.",
      "🎭 The masquerade ball welcomes another guest.",
      "💤 Dreams flow as information is exchanged.",
      "🧩 A missing piece falls into place.",
      "🌪 A storm of thoughts swirls in the visitor’s mind.",
      "🔭 A telescope turns to focus on your world.",
      "🛠 Another builder inspects the foundation of knowledge.",
      "🧬 The DNA of curiosity mutates.",
      "🏹 An arrow of intent finds its target.",
      "🎙 A silent voice leaves a lasting echo.",
      "🕳 Someone steps closer to the truth.",
      "📉 A fall into the rabbit hole begins.",
      "🧲 A force unseen pulls another soul in.",
      "🌍 A world unseen is glimpsed for the first time.",
      "📜 A forgotten prophecy stirs in the data stream.",
      "🎼 A chord of understanding is struck.",
      "🖼 Another pixel is painted on the digital canvas.",
      "🌊 Waves of insight crash upon the shore.",
      "🌓 The tides shift in the realm of knowledge.",
      "⚗ The alchemy of learning continues.",
      "📚 A book opens, revealing hidden pages.",
      "🔄 A cycle completes, only to begin again.",
      "🧭 A compass needle wavers, unsure of its path.",
      "🕸 A web of connections grows stronger.",
      "🔎 A magnifying glass hovers over the unknown.",
      "🌙 The stars align for another visitor.",
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
  } catch (error) {
    return new Response(null, { status: 500 });
  }
};