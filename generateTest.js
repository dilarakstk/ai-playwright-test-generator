const axios = require("axios");
const { execSync } = require("child_process");
const fs = require("fs");

async function run() {
  try {
    // 🔥 GÜÇLÜ PROMPT
    const prompt = `SADECE JAVASCRIPT PLAYWRIGHT TEST KODU YAZ.
AÇIKLAMA YAZMA.
MARKDOWN YAZMA.
SADECE ÇALIŞAN KOD VER.

Google ana sayfasına git ve title kontrol eden test yaz.`;

    const response = await axios.post("http://localhost:11434/api/chat", {
      model: "qwen3",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: false,
    });

    const raw = response.data.message.content;

    // 🔥 SADECE KODU AL (kritik)
    const codeStart = raw.indexOf("import");
    let cleaned = codeStart !== -1 ? raw.slice(codeStart) : raw;

// 🔥 KRİTİK TEMİZLİK
cleaned = cleaned
  .replace(/```[\s\S]*?```/g, "")   // markdown blokları sil
  .replace(/`/g, "")                // backtick sil
  .trim();

    // 📁 dosyaya yaz
    fs.writeFileSync("tests/ai-test.spec.js", cleaned);

    console.log("✅ Test oluşturuldu");

    // 🚀 otomatik çalıştır
    console.log("\n🚀 Test çalıştırılıyor...\n");
    execSync("npx playwright test", { stdio: "inherit" });

  } catch (error) {
    console.error("HATA:", error.message);
  }
}

run();