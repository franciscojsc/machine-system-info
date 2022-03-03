const os = require('os');
const { platform, arch, totalmem, freemem } = os;

function infoSystem(totalmem, freemem) {
  const tRam = totalmem / 1024 / 1024 / 1024;
  const fRam = freemem / 1024 / 1024 / 1024;
  const usage = ((tRam - fRam) / tRam) * 100;

  return {
    tRam,
    fRam,
    usage,
  };
}

function getStats(tRam, fRam, usage) {
  return {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${tRam.toFixed(2)} GB`,
    FreeRAM: `${fRam.toFixed(2)} GB`,
    Usage: `${usage.toFixed(2)}%`,
  };
}

const { tRam, fRam, usage } = infoSystem(totalmem, freemem);
const stats = getStats(tRam, fRam, usage);

setInterval(() => {
  const { tRam, fRam, usage } = infoSystem(totalmem, freemem);
  const stats = getStats(tRam, fRam, usage);

  console.clear();
  console.table(stats);

  exports.stats = stats;
}, 1000);

exports.stats = stats;
