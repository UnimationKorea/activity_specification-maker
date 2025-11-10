// Simple test script to validate the HTML structure and JavaScript
const fs = require('fs');

console.log('🧪 Starting tests...\n');

// Test 1: Check if index.html exists
console.log('Test 1: Check if index.html exists');
if (fs.existsSync('./index.html')) {
  console.log('✅ PASS: index.html exists\n');
} else {
  console.log('❌ FAIL: index.html not found\n');
  process.exit(1);
}

// Test 2: Check HTML structure
console.log('Test 2: Check HTML structure');
const html = fs.readFileSync('./index.html', 'utf8');

const requiredElements = [
  { name: 'DOCTYPE', pattern: /<!DOCTYPE html>/i },
  { name: 'charset', pattern: /<meta charset="utf-8"/ },
  { name: 'viewport', pattern: /<meta name="viewport"/ },
  { name: 'title', pattern: /<title>.*Activity.*<\/title>/ },
  { name: 'Tailwind CSS', pattern: /cdn\.tailwindcss\.com/ },
  { name: 'XLSX library', pattern: /xlsx/ },
  { name: 'favicon', pattern: /<link rel="icon"/ },
  { name: 'loading spinner', pattern: /class="loading"/ },
];

let structurePass = true;
requiredElements.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    structurePass = false;
  }
});

if (structurePass) {
  console.log('✅ PASS: HTML structure is valid\n');
} else {
  console.log('❌ FAIL: HTML structure has issues\n');
}

// Test 3: Check for required IDs
console.log('Test 3: Check for required element IDs');
const requiredIds = [
  'stdProject', 'stdFamily', 'stdVersion', 'stdAuthor', 'stdDate',
  'cards', 'btnAddChoice', 'btnAddDrag', 'btnAddLine', 'btnAddSpeech',
  'btnExport', 'btnRunTests', 'fileName', 'testLog', 'loading'
];

let idsPass = true;
requiredIds.forEach(id => {
  const pattern = new RegExp(`id="${id}"`);
  if (pattern.test(html)) {
    console.log(`  ✅ #${id} found`);
  } else {
    console.log(`  ❌ #${id} not found`);
    idsPass = false;
  }
});

if (idsPass) {
  console.log('✅ PASS: All required IDs present\n');
} else {
  console.log('❌ FAIL: Some IDs are missing\n');
}

// Test 4: Check JavaScript functions
console.log('Test 4: Check JavaScript functions');
const requiredFunctions = [
  'addCard', 'buildWorkbookData', 'exportAll', 'runTests',
  'buildChoiceExtra', 'buildDragExtra', 'buildLineExtra', 'buildSpeechExtra',
  'fillActCodeSelect', 'collectAsset', 'uniq', 'saveJSON'
];

let functionsPass = true;
requiredFunctions.forEach(funcName => {
  const pattern = new RegExp(`function\\s+${funcName}\\s*\\(|const\\s+${funcName}\\s*=|${funcName}\\s*=\\s*function`);
  if (pattern.test(html)) {
    console.log(`  ✅ ${funcName}() found`);
  } else {
    console.log(`  ❌ ${funcName}() not found`);
    functionsPass = false;
  }
});

if (functionsPass) {
  console.log('✅ PASS: All required functions present\n');
} else {
  console.log('❌ FAIL: Some functions are missing\n');
}

// Test 5: Check ACT_CODES definition
console.log('Test 5: Check ACT_CODES codebook');
const actCodesPattern = /const\s+ACT_CODES\s*=\s*{/;
const has4Choice = /'4Choice':\s*\[/.test(html);
const hasDragDrop = /'DragDrop':\s*\[/.test(html);
const hasLineMatch = /'LineMatch':\s*\[/.test(html);
const hasSpeech = /'Speech':\s*\[/.test(html);

if (actCodesPattern.test(html) && has4Choice && hasDragDrop && hasLineMatch && hasSpeech) {
  console.log('  ✅ ACT_CODES defined');
  console.log('  ✅ All 4 activity types configured');
  console.log('✅ PASS: ACT_CODES codebook is valid\n');
} else {
  console.log('❌ FAIL: ACT_CODES codebook has issues\n');
}

// Test 6: Check event listeners
console.log('Test 6: Check event listeners');
const eventListeners = [
  { name: 'btnAddChoice click', pattern: /getElementById\s*\(\s*['"]btnAddChoice['"]\s*\)\.onclick/ },
  { name: 'btnAddDrag click', pattern: /getElementById\s*\(\s*['"]btnAddDrag['"]\s*\)\.onclick/ },
  { name: 'btnAddLine click', pattern: /getElementById\s*\(\s*['"]btnAddLine['"]\s*\)\.onclick/ },
  { name: 'btnAddSpeech click', pattern: /getElementById\s*\(\s*['"]btnAddSpeech['"]\s*\)\.onclick/ },
  { name: 'btnExport click', pattern: /getElementById\s*\(\s*['"]btnExport['"]\s*\)\.addEventListener/ },
  { name: 'btnRunTests click', pattern: /getElementById\s*\(\s*['"]btnRunTests['"]\s*\)\.addEventListener/ },
];

let listenersPass = true;
eventListeners.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} listener found`);
  } else {
    console.log(`  ❌ ${name} listener not found`);
    listenersPass = false;
  }
});

if (listenersPass) {
  console.log('✅ PASS: All event listeners present\n');
} else {
  console.log('❌ FAIL: Some event listeners are missing\n');
}

// Test 7: Check for common JavaScript errors
console.log('Test 7: Check for common JavaScript errors');
let syntaxPass = true;

// Check for unmatched brackets
const openBraces = (html.match(/\{/g) || []).length;
const closeBraces = (html.match(/\}/g) || []).length;
const openParens = (html.match(/\(/g) || []).length;
const closeParens = (html.match(/\)/g) || []).length;
const openBrackets = (html.match(/\[/g) || []).length;
const closeBrackets = (html.match(/\]/g) || []).length;

console.log(`  Braces: ${openBraces} open, ${closeBraces} close`);
console.log(`  Parens: ${openParens} open, ${closeParens} close`);
console.log(`  Brackets: ${openBrackets} open, ${closeBrackets} close`);

if (openBraces !== closeBraces) {
  console.log('  ❌ Unmatched braces {}');
  syntaxPass = false;
} else {
  console.log('  ✅ Braces matched');
}

if (openParens !== closeParens) {
  console.log('  ❌ Unmatched parentheses ()');
  syntaxPass = false;
} else {
  console.log('  ✅ Parentheses matched');
}

if (openBrackets !== closeBrackets) {
  console.log('  ❌ Unmatched brackets []');
  syntaxPass = false;
} else {
  console.log('  ✅ Brackets matched');
}

if (syntaxPass) {
  console.log('✅ PASS: No obvious syntax errors\n');
} else {
  console.log('❌ FAIL: Potential syntax errors detected\n');
}

// Final summary
console.log('=' .repeat(60));
console.log('📊 TEST SUMMARY');
console.log('=' .repeat(60));
const allPass = structurePass && idsPass && functionsPass && listenersPass && syntaxPass;
if (allPass) {
  console.log('✅ ALL TESTS PASSED');
  console.log('\n🎉 The application appears to be working correctly!');
  process.exit(0);
} else {
  console.log('❌ SOME TESTS FAILED');
  console.log('\n⚠️  Please review the failed tests above.');
  process.exit(1);
}
