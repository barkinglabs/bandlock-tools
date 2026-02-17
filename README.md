# Bandlock Calculator

A web-based tool for generating `AT%XBANDLOCK` modem commands for Nordic nRF9160 and nRF9161 devices. It converts LTE band selections into the 88-bit binary bitmap format required by the modem.

**[Open the Bandlock Calculator](https://barkinglabs.github.io/bandlock-tools/bandlock.html)**

## Features

- **Band grid** — click to toggle any of the 88 LTE bands
- **Carrier presets** — one-click configurations for AT&T, Verizon, T-Mobile, and International
- **Multiple input formats** — all synchronized bidirectionally:
  - Comma-separated band list (e.g. `1, 2, 3`)
  - Binary bitmap in octal escape format (e.g. `\237\030\010\013...`)
  - Indexed byte list in decimal (e.g. `0:159`, `1:24`, ...)
- **AT command output** — generates a ready-to-use `AT%XBANDLOCK=1,"..."` command

## Carrier Presets

| Preset | Bands |
|---|---|
| AT&T (US) | 2, 4, 12 |
| Verizon (US) | 4, 13 |
| T-Mobile (US) | 2, 4, 12, 25, 66 |
| International | 1, 2, 3, 4, 5, 8, 12, 13, 20, 25, 26, 28, 66, 85 |

