# Band Lock Calculator

A web-based tool for generating AT modem commands from LTE band selections. Supports Nordic nRF9160/nRF9161 and Quectel EG91 devices.

**[Open the Band Lock Calculator](https://barkinglabs.github.io/bandlock-tools/bandlock.html)**

## Supported Devices

| Device | Command Format |
|---|---|
| Nordic nRF9160 / nRF9161 | `AT%XBANDLOCK=1,"<binary bitmap>"` |
| Quectel EG91 | `AT+QCFG="band",0,<hex value>` |

## Carrier Presets

| Preset | Bands |
|---|---|
| AT&T (US) | 2, 4, 12 |
| Verizon (US) | 4, 13 |
| T-Mobile (US) | 2, 4, 12, 25, 66 |
| International | 1, 2, 3, 4, 5, 8, 12, 13, 20, 25, 26, 28, 66, 85 |

## Input Formats

All input formats sync bidirectionally — changing any one updates all others and the band grid.

## Running Locally

Open `bandlock.html` in any browser. No server required.Everything is contained in a single HTML file.
