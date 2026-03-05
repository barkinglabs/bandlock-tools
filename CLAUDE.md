# CLAUDE.md

## Project Overview

Single-file web calculator (`bandlock.html`) for generating LTE modem bandlock AT commands.
Supports Nordic nRF9160/nRF9161 and Quectel EG91 modems. No build process — open the HTML file directly in a browser.

## Architecture

All code lives in `bandlock.html`: CSS, HTML, and JavaScript in one file.

- Global `selected` Set tracks active bands (1–88, where 88 is `MAX_BANDS`)
- All inputs sync bidirectionally through the `update()` function
- `update(updateText, updateBitmap, updateIndexedBytes, updateHex)` — the caller passes `false` for whichever field triggered the update to prevent feedback loops
- Carrier presets defined in `PRESETS` array; preset buttons highlight when the current selection matches exactly

## Band Encoding

88 LTE bands. Band N maps to bit position (N-1).

- **nRF9160/nRF9161**: binary string (MSB-first) → `AT%XBANDLOCK=1,"<binary>"`
- **Quectel EG91**: hex bitmask → `AT+QCFG="band",0,<hex>`

Example: T-Mobile bands 2, 4, 12, 25, 66 = `0x2000000000100080A`

## Testing

- Run `node test.js` — extracts JS directly from `bandlock.html` at runtime so tests stay in sync automatically
- Tests cover: all preset AT command outputs, hex/bitmap/indexed-byte round-trips, cross-format consistency, edge cases
- Open `bandlock.html` in a browser to test interactively
- Key verification: T-Mobile preset (bands 2, 4, 12, 25, 66) must produce `0x2000000000100080A`

## Reference Files

- Quectel EG91 AT command manual: `quectel_eg800qeg91xq_series_at_commands_manual.md` (in this repo)
