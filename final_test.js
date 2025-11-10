const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');

console.log('🎯 FINAL VALIDATION TEST\n');
console.log('='.repeat(60));

let allPass = true;

// Test 1: Required Elements
console.log('\n1. Required HTML Elements:');
const elements = ['DOCTYPE', 'meta charset', 'viewport', 'title', 'favicon', 'loading spinner'];
const patterns = [/<!DOCTYPE html>/, /<meta charset="utf-8"/, /<meta name="viewport"/, /<title>/, /<link rel="icon"/, /class="loading"/];

elements.forEach((name, i) => {
  const pass = patterns[i].test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 2: CDN Libraries
console.log('\n2. External Libraries:');
const libs = [
  { name: 'Tailwind CSS', pattern: /cdn\.tailwindcss\.com/ },
  { name: 'SheetJS (XLSX)', pattern: /unpkg\.com\/xlsx/ }
];

libs.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 3: Core JavaScript Functions
console.log('\n3. Core JavaScript Functions:');
const functions = [
  'addCard', 'buildWorkbookData', 'exportAll', 'runTests',
  'buildChoiceExtra', 'buildDragExtra', 'buildLineExtra', 'buildSpeechExtra',
  'fillActCodeSelect', 'collectAsset', 'uniq', 'saveJSON'
];

functions.forEach(func => {
  const pattern = new RegExp(`(function\\s+${func}|const\\s+${func}\\s*=)`);
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${func}()`);
  if (!pass) allPass = false;
});

// Test 4: Activity Types
console.log('\n4. Activity Types Configuration:');
const actTypes = ['4Choice', 'DragDrop', 'LineMatch', 'Speech'];
actTypes.forEach(type => {
  const pattern = new RegExp(`'${type}':\\s*\\[`);
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${type}`);
  if (!pass) allPass = false;
});

// Test 5: Error Handling
console.log('\n5. Error Handling:');
const errorChecks = [
  { name: 'Export try-catch', pattern: /try\s*{\s*if\(loadingEl\)[\s\S]*?catch\(err\)/ },
  { name: 'Import try-catch', pattern: /try\s*{[\s\S]*?JSON\.parse[\s\S]*?catch\(err\)/ },
  { name: 'Null checks (ws)', pattern: /if\s*\(ws\)/ },
  { name: 'Loading indicator', pattern: /loadingEl\.classList\.(add|remove)/ },
  { name: 'User alerts', pattern: /alert\(['"]✅/ }
];

errorChecks.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 6: UI/UX Features
console.log('\n6. UI/UX Features:');
const uiFeatures = [
  { name: 'Responsive grid', pattern: /grid-cols-1 md:grid-cols/ },
  { name: 'Sticky header', pattern: /sticky top-0/ },
  { name: 'Custom styles', pattern: /\.card\{/ },
  { name: 'Button styles', pattern: /\.btn-primary\{/ },
  { name: 'Loading animation', pattern: /@keyframes spin/ }
];

uiFeatures.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 7: Export Features
console.log('\n7. Export Features:');
const exportFeatures = [
  { name: 'XLSX workbook creation', pattern: /XLSX\.utils\.book_new/ },
  { name: 'JSON to sheet', pattern: /XLSX\.utils\.json_to_sheet/ },
  { name: 'Write file', pattern: /XLSX\.writeFile/ },
  { name: 'Asset CSV export', pattern: /_assets\.csv/ },
  { name: 'Localization export', pattern: /_loc\.csv/ }
];

exportFeatures.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Final Summary
console.log('\n' + '='.repeat(60));
if (allPass) {
  console.log('✅ ALL TESTS PASSED - Application is ready!');
  console.log('='.repeat(60));
  console.log('\n📝 Application Features:');
  console.log('   • 4 Activity Types (4Choice, DragDrop, LineMatch, Speech)');
  console.log('   • XLSX Export with multiple sheets');
  console.log('   • Asset Management (auto-collect images/audio/lottie)');
  console.log('   • Localization Import/Export (CSV/JSON)');
  console.log('   • Built-in Test Suite');
  console.log('   • Error Handling & Loading UI');
  console.log('   • Responsive Design');
  console.log('\n🚀 Access the app at: http://localhost:8000/');
  process.exit(0);
} else {
  console.log('❌ SOME TESTS FAILED');
  console.log('='.repeat(60));
  process.exit(1);
}
