// High-level tests for bandlock.html
// Run with: node test.js
//
// Functions are extracted directly from bandlock.html so tests
// stay in sync when the source changes.

const fs = require('fs');
const path = require('path');

// ── Extract JS from bandlock.html ──

const html = fs.readFileSync(path.join(__dirname, 'bandlock.html'), 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch === null) {
    console.error('Could not find <script> block in bandlock.html');
    process.exit(1);
}

// Stub the DOM APIs the script expects at parse time
const stubElements = {};
const document = {
    getElementById: function(id) {
        if (stubElements[id] === undefined) {
            stubElements[id] = {
                value: '',
                innerText: '',
                textContent: '',
                appendChild: function() {},
                querySelectorAll: function() { return []; },
                classList: { toggle: function() {}, add: function() {}, remove: function() {} }
            };
        }
        return stubElements[id];
    },
    createElement: function() {
        return {
            className: '',
            innerText: '',
            id: '',
            onclick: null,
            appendChild: function() {}
        };
    },
    querySelectorAll: function() { return []; }
};
const navigator = { clipboard: { writeText: function() { return Promise.resolve(); } } };

// Replace const/let with var so declarations leak out of eval into this scope
const scriptCode = scriptMatch[1].replace(/\b(const|let)\b/g, 'var');
eval(scriptCode);

// The eval above defines: MAX_BANDS, PRESETS, selectedToHex, parseHexToBands,
// selectedToBytes, bytesToOctalBitmap, bytesToIndexedByteList, parseOctalBitmap,
// parseIndexedBytes, setsMatch, etc.

// ── Helpers ──

function bandsToSet(bands) {
    return new Set(bands);
}

function setsEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    for (const item of a) {
        if (b.has(item) === false) {
            return false;
        }
    }
    return true;
}

function bytesToBands(bytes) {
    const bands = new Set();
    for (let i = 0; i < bytes.length; i++) {
        for (let j = 0; j < 8; j++) {
            const bandNum = i * 8 + j + 1;
            if (bandNum > MAX_BANDS) {
                break;
            }
            if ((bytes[i] & (1 << j)) !== 0) {
                bands.add(bandNum);
            }
        }
    }
    return bands;
}

function selectedToNrfBitString(selectedSet) {
    if (selectedSet.size === 0) {
        return '0';
    }
    let bits = new Array(MAX_BANDS).fill(0);
    selectedSet.forEach(function(b) { bits[b - 1] = 1; });
    return bits.reverse().join('').replace(/^0+(?!$)/, '');
}

// ── Test runner ──

let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, name) {
    if (condition === true) {
        passed++;
    } else {
        failed++;
        failures.push(name);
        console.error('  FAIL: ' + name);
    }
}

function assertEqual(actual, expected, name) {
    if (actual === expected) {
        passed++;
    } else {
        failed++;
        failures.push(name);
        console.error('  FAIL: ' + name);
        console.error('    expected: ' + JSON.stringify(expected));
        console.error('    actual:   ' + JSON.stringify(actual));
    }
}

function assertSetsEqual(actual, expected, name) {
    if (setsEqual(actual, expected) === true) {
        passed++;
    } else {
        failed++;
        failures.push(name);
        console.error('  FAIL: ' + name);
        console.error('    expected: {' + Array.from(expected).sort((a,b) => a-b).join(', ') + '}');
        console.error('    actual:   {' + Array.from(actual).sort((a,b) => a-b).join(', ') + '}');
    }
}

// ── Preset names (must match order in PRESETS array) ──

const PRESET_NAMES = ['AT&T (US)', 'Verizon (US)', 'T-Mobile (US)', 'International'];
const BYTE_COUNT = 11;

// ── Tests ──

console.log('Preset AT command outputs');
console.log('─────────────────────────');

// AT&T: bands 2, 4, 12
(function() {
    const s = bandsToSet(PRESETS[0].bands);
    const hex = selectedToHex(s, s.size);
    assertEqual(hex, '0x80A', 'AT&T hex value');

    const nrf = selectedToNrfBitString(s);
    assertEqual(nrf, '100000001010', 'AT&T nRF bit string');

    assertEqual('AT%XBANDLOCK=1,"' + nrf + '"', 'AT%XBANDLOCK=1,"100000001010"', 'AT&T nRF command');
    assertEqual('AT+QCFG="band",0,' + hex, 'AT+QCFG="band",0,0x80A', 'AT&T EG91 command');
})();

// Verizon: bands 4, 13
(function() {
    const s = bandsToSet(PRESETS[1].bands);
    const hex = selectedToHex(s, s.size);
    assertEqual(hex, '0x1008', 'Verizon hex value');

    const nrf = selectedToNrfBitString(s);
    assertEqual(nrf, '1000000001000', 'Verizon nRF bit string');

    assertEqual('AT%XBANDLOCK=1,"' + nrf + '"', 'AT%XBANDLOCK=1,"1000000001000"', 'Verizon nRF command');
    assertEqual('AT+QCFG="band",0,' + hex, 'AT+QCFG="band",0,0x1008', 'Verizon EG91 command');
})();

// T-Mobile: bands 2, 4, 12, 25, 66  →  hex must be 0x2000000000100080A
(function() {
    const s = bandsToSet(PRESETS[2].bands);
    const hex = selectedToHex(s, s.size);
    assertEqual(hex, '0x2000000000100080A', 'T-Mobile hex value');

    const nrf = selectedToNrfBitString(s);
    assert(nrf.length === 66, 'T-Mobile nRF bit string length is 66');
    assertEqual(nrf[0], '1', 'T-Mobile nRF bit 65 (band 66) is set');
    assertEqual(nrf[66 - 25], '1', 'T-Mobile nRF bit 24 (band 25) is set');
    assertEqual(nrf[66 - 12], '1', 'T-Mobile nRF bit 11 (band 12) is set');
    assertEqual(nrf[66 - 4], '1', 'T-Mobile nRF bit 3 (band 4) is set');
    assertEqual(nrf[66 - 2], '1', 'T-Mobile nRF bit 1 (band 2) is set');

    assertEqual('AT+QCFG="band",0,' + hex, 'AT+QCFG="band",0,0x2000000000100080A', 'T-Mobile EG91 command');
})();

// International: bands 1,2,3,4,5,8,12,13,20,25,26,28,66,85
(function() {
    const s = bandsToSet(PRESETS[3].bands);
    const hex = selectedToHex(s, s.size);
    const nrf = selectedToNrfBitString(s);

    // Verify all bands are present in the bit string
    const bands = PRESETS[3].bands;
    const nrfLen = nrf.length;
    for (let i = 0; i < bands.length; i++) {
        const bitPos = bands[i] - 1;
        const charIndex = nrfLen - 1 - bitPos;
        assertEqual(nrf[charIndex], '1', 'International nRF bit for band ' + bands[i]);
    }

    // Verify hex round-trips
    const roundTripped = parseHexToBands(hex, hex.length);
    assertSetsEqual(roundTripped, s, 'International hex round-trip');
})();

console.log('');
console.log('Hex encoding/decoding');
console.log('─────────────────────');

// Empty set
assertEqual(selectedToHex(new Set(), 0), '0x0', 'empty set hex');

// Single bands
assertEqual(selectedToHex(bandsToSet([1]), 1), '0x1', 'band 1 hex');
assertEqual(selectedToHex(bandsToSet([5]), 1), '0x10', 'band 5 hex');

// Hex round-trip for all presets
for (let p = 0; p < PRESETS.length; p++) {
    const s = bandsToSet(PRESETS[p].bands);
    const hex = selectedToHex(s, s.size);
    const decoded = parseHexToBands(hex, hex.length);
    assertSetsEqual(decoded, s, PRESET_NAMES[p] + ' hex round-trip');
}

// Parse hex with alternate prefixes
assertSetsEqual(parseHexToBands('0X80A', 5), bandsToSet([2, 4, 12]), 'parse hex with 0X prefix');
assertSetsEqual(parseHexToBands('80A', 3), bandsToSet([2, 4, 12]), 'parse hex without prefix');

console.log('');
console.log('Bitmap encoding/decoding');
console.log('────────────────────────');

for (let p = 0; p < PRESETS.length; p++) {
    const s = bandsToSet(PRESETS[p].bands);
    const bytes = selectedToBytes(s, s.size, BYTE_COUNT);
    const octal = bytesToOctalBitmap(bytes, BYTE_COUNT);
    const decodedBytes = parseOctalBitmap(octal, octal.length);
    const decodedBands = bytesToBands(decodedBytes);
    assertSetsEqual(decodedBands, s, PRESET_NAMES[p] + ' bitmap round-trip');
}

console.log('');
console.log('Indexed bytes encoding/decoding');
console.log('───────────────────────────────');

for (let p = 0; p < PRESETS.length; p++) {
    const s = bandsToSet(PRESETS[p].bands);
    const bytes = selectedToBytes(s, s.size, BYTE_COUNT);
    const indexed = bytesToIndexedByteList(bytes, BYTE_COUNT);
    const decodedBytes = parseIndexedBytes(indexed, indexed.length);
    const decodedBands = bytesToBands(decodedBytes);
    assertSetsEqual(decodedBands, s, PRESET_NAMES[p] + ' indexed bytes round-trip');
}

console.log('');
console.log('setsMatch');
console.log('─────────');

(function() {
    const s = bandsToSet([2, 4, 12]);
    assert(setsMatch(s, [2, 4, 12], 3) === true, 'setsMatch exact match');
    assert(setsMatch(s, [2, 4], 2) === false, 'setsMatch subset is not match');
    assert(setsMatch(s, [2, 4, 12, 25], 4) === false, 'setsMatch superset is not match');
    assert(setsMatch(s, [1, 2, 3], 3) === false, 'setsMatch different bands same size');
    assert(setsMatch(new Set(), [], 0) === true, 'setsMatch both empty');
})();

console.log('');
console.log('Edge cases');
console.log('──────────');

// Band 88 (max)
(function() {
    const s = bandsToSet([88]);
    const hex = selectedToHex(s, s.size);
    const decoded = parseHexToBands(hex, hex.length);
    assertSetsEqual(decoded, s, 'band 88 hex round-trip');

    const nrf = selectedToNrfBitString(s);
    assertEqual(nrf.length, 88, 'band 88 nRF string length');
    assertEqual(nrf[0], '1', 'band 88 nRF MSB is set');
})();

// All bands selected
(function() {
    const all = [];
    for (let i = 1; i <= MAX_BANDS; i++) {
        all.push(i);
    }
    const s = bandsToSet(all);
    const hex = selectedToHex(s, s.size);
    const decoded = parseHexToBands(hex, hex.length);
    assertSetsEqual(decoded, s, 'all bands hex round-trip');
})();

// Cross-format consistency: same bands through all encoding paths
(function() {
    const s = bandsToSet([2, 4, 12, 25, 66]);

    const fromHex = parseHexToBands(selectedToHex(s, s.size), selectedToHex(s, s.size).length);

    const bytes = selectedToBytes(s, s.size, BYTE_COUNT);
    const fromBitmap = bytesToBands(parseOctalBitmap(bytesToOctalBitmap(bytes, BYTE_COUNT), bytesToOctalBitmap(bytes, BYTE_COUNT).length));

    const indexed = bytesToIndexedByteList(bytes, BYTE_COUNT);
    const fromIndexed = bytesToBands(parseIndexedBytes(indexed, indexed.length));

    assertSetsEqual(fromHex, s, 'cross-format: hex path');
    assertSetsEqual(fromBitmap, s, 'cross-format: bitmap path');
    assertSetsEqual(fromIndexed, s, 'cross-format: indexed bytes path');
})();

// ── Summary ──

console.log('');
console.log('════════════════════════');
if (failed === 0) {
    console.log('All ' + passed + ' tests passed.');
} else {
    console.log(passed + ' passed, ' + failed + ' failed:');
    for (let i = 0; i < failures.length; i++) {
        console.log('  - ' + failures[i]);
    }
}

process.exit(failed > 0 ? 1 : 0);
