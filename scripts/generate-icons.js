import fs from 'fs';
import zlib from 'zlib';

function createPNG(width, height, isMaskable = false) {
  // RGBA buffer: height rows, each row has 1 filter byte (0) + width * 4 bytes
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  const cx = width / 2;
  const cy = height / 2;
  const radius = isMaskable ? width * 0.45 : width * 0.46;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background rounded corner or circle
      let r = 217, g = 119, b = 6; // Amber-600 #d97706
      let a = 255;

      // Subtle gradient towards bottom
      const gradFactor = (y / height) * 0.2;
      r = Math.floor(r * (1 - gradFactor));
      g = Math.floor(g * (1 - gradFactor));
      b = Math.floor(b * (1 - gradFactor));

      if (!isMaskable) {
        // Rounded square clip
        const cornerR = width * 0.22;
        const qx = Math.max(0, Math.abs(dx) - (cx - cornerR));
        const qy = Math.max(0, Math.abs(dy) - (cy - cornerR));
        if (Math.sqrt(qx * qx + qy * qy) > cornerR) {
          a = 0;
        }
      }

      // Draw stylized 'S' letter in the center
      if (a > 0) {
        const nx = dx / (width * 0.32);
        const ny = dy / (height * 0.32);

        // Simple smooth mathematical ribbon for 'S'
        const inTopLoop = (ny > -0.7 && ny < -0.05 && Math.abs(nx + 0.15) < 0.45 && dist > width * 0.08);
        const inBottomLoop = (ny > 0.05 && ny < 0.7 && Math.abs(nx - 0.15) < 0.45 && dist > width * 0.08);
        const inCenterBar = (Math.abs(ny) <= 0.15 && Math.abs(nx) < 0.35);

        if ((inTopLoop && (nx > -0.2 || ny < -0.4)) || 
            (inBottomLoop && (nx < 0.2 || ny > 0.4)) || 
            inCenterBar) {
          r = 255;
          g = 255;
          b = 255;
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // Deflate
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // No interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);

  const crc = crc32(Buffer.concat([Buffer.from(type, 'ascii'), data]));
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

// CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Output icons
fs.writeFileSync('public/pwa-192x192.png', createPNG(192, 192, false));
fs.writeFileSync('public/pwa-512x512.png', createPNG(512, 512, false));
fs.writeFileSync('public/pwa-maskable-512x512.png', createPNG(512, 512, true));
fs.writeFileSync('public/apple-touch-icon.png', createPNG(180, 180, false));
fs.writeFileSync('public/favicon.ico', createPNG(32, 32, false));

console.log('PWA icons successfully generated in public/');
