const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const products = [];

// Tüm sub-product-card bloklarını bul
const cardRegex = /<div class="sub-product-card"[\s\S]*?<\/div><\/div><\/div>/g;
let match;
let id = 0;

while ((match = cardRegex.exec(html)) !== null) {
    const block = match[0];

    // Başlık
    const titleMatch = block.match(/<h3 class="sub-product-card-title"[^>]*>([\s\S]*?)<\/h3>/);
    let title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '').trim() : '';

    // Görsel yolu
    const imgMatch = block.match(/<img src="([^"]+)"/);
    const image = imgMatch ? imgMatch[1] : '';

    // Özellikler (li'ler)
    const features = [];
    const liRegex = /<li>([\s\S]*?)<\/li>/g;
    let liMatch;
    while ((liMatch = liRegex.exec(block)) !== null) {
        const f = liMatch[1].replace(/<[^>]*>/g, '').trim();
        if (f) features.push(f);
    }

    if (title) {
        id++;
        products.push({
            id: id,
            title: title,
            image: image,
            features: features
        });
    }
}

// content klasörü yoksa oluştur
const contentDir = path.join(__dirname, 'content');
if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir);
}

// Her ürünü ayrı .md dosyası olarak kaydet
products.forEach(p => {
    const slug = p.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'urun';
    
    const filename = `urun-${p.id}-${slug}.md`;
    const filepath = path.join(contentDir, filename);

    const content = `---
title: "${p.title.replace(/"/g, '\\"')}"
image: "${p.image}"
features:
${p.features.map(f => `  - "${f.replace(/"/g, '\\"')}"`).join('\n')}
---

`;

    fs.writeFileSync(filepath, content, 'utf8');
});

console.log(`✅ Toplam ${products.length} ürün content klasörüne kaydedildi.`);