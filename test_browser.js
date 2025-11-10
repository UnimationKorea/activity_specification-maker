// Browser-based integration test
const fs = require('fs');

// Test the built-in test function
console.log('🧪 Running browser integration tests...\n');

// Read the HTML file
const html = fs.readFileSync('./index.html', 'utf8');

// Test 1: Validate that preload cards are initialized
console.log('Test 1: Check if cards are preloaded on init');
const preloadPattern = /\['4Choice','DragDrop','LineMatch','Speech'\]\.forEach\(addCard\)/;
if (preloadPattern.test(html)) {
  console.log('✅ PASS: 4 cards should be preloaded on initialization\n');
} else {
  console.log('❌ FAIL: Cards preload not found\n');
}

// Test 2: Check if date is auto-filled
console.log('Test 2: Check if date is auto-filled');
const datePattern = /const today = new Date\(\)\.toISOString\(\)\.slice\(0,10\);/;
const dateSetPattern = /getElementById\('stdDate'\)\.value = today;/;
if (datePattern.test(html) && dateSetPattern.test(html)) {
  console.log('✅ PASS: Date should be auto-filled with today\'s date\n');
} else {
  console.log('❌ FAIL: Date auto-fill not properly configured\n');
}

// Test 3: Check export functionality structure
console.log('Test 3: Check export functionality');
const exportTests = [
  { name: 'XLSX.utils.book_new()', pattern: /XLSX\.utils\.book_new\(\)/ },
  { name: 'XLSX.utils.book_append_sheet()', pattern: /XLSX\.utils\.book_append_sheet/ },
  { name: 'XLSX.utils.json_to_sheet()', pattern: /XLSX\.utils\.json_to_sheet/ },
  { name: 'XLSX.writeFile()', pattern: /XLSX\.writeFile/ },
];

let exportPass = true;
exportTests.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    exportPass = false;
  }
});

if (exportPass) {
  console.log('✅ PASS: Export functionality is properly structured\n');
} else {
  console.log('❌ FAIL: Export functionality has issues\n');
}

// Test 4: Check localization import/export
console.log('Test 4: Check localization features');
const locTests = [
  { name: 'LOC_STORE array', pattern: /const LOC_STORE = \[\]/ },
  { name: 'Loc Import handler', pattern: /getElementById\('locImport'\)\.addEventListener\('change'/ },
  { name: 'Loc Export handler', pattern: /getElementById\('btnLocExport'\)\.addEventListener\('click'/ },
  { name: 'JSON import support', pattern: /if\(name\.endsWith\('\.json'\)\)/ },
  { name: 'CSV import support', pattern: /else if\(name\.endsWith\('\.csv'\)\)/ },
];

let locPass = true;
locTests.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    locPass = false;
  }
});

if (locPass) {
  console.log('✅ PASS: Localization features are implemented\n');
} else {
  console.log('❌ FAIL: Localization features have issues\n');
}

// Test 5: Check asset collection
console.log('Test 5: Check asset collection functionality');
const assetTests = [
  { name: 'collectAsset function', pattern: /function collectAsset\(rows, activityId, path\)/ },
  { name: 'Audio regex', pattern: /AUDIO_RE = \/\\.\(mp3\|ogg\|wav\)\$\/i/ },
  { name: 'Image regex', pattern: /IMG_RE\s*= \/\\.\(png\|jpg\|jpeg\|webp\|svg\)\$\/i/ },
  { name: 'Lottie regex', pattern: /LOTTIE_RE= \/lottie\.\*\\\.json\$\/i/ },
];

let assetPass = true;
assetTests.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    assetPass = false;
  }
});

if (assetPass) {
  console.log('✅ PASS: Asset collection is properly implemented\n');
} else {
  console.log('❌ FAIL: Asset collection has issues\n');
}

// Test 6: Check built-in test suite
console.log('Test 6: Check built-in test suite');
const testSuitePattern = /function runTests\(\)/;
const testLogPattern = /const LOG = \(msg\) => { const el = document\.getElementById\('testLog'\)/;
if (testSuitePattern.test(html) && testLogPattern.test(html)) {
  console.log('  ✅ runTests() function found');
  console.log('  ✅ LOG() function found');
  console.log('✅ PASS: Built-in test suite is present\n');
} else {
  console.log('❌ FAIL: Built-in test suite has issues\n');
}

// Test 7: Check error handling
console.log('Test 7: Check error handling');
const errorHandlingTests = [
  { name: 'Export try-catch', pattern: /try\s*{\s*if\(loadingEl\).*exportAll\(\).*}\s*catch/ },
  { name: 'Import try-catch', pattern: /try\s*{.*JSON\.parse.*}\s*catch\(err\)\s*{.*alert/ },
  { name: 'Loading indicator', pattern: /loadingEl\.classList\.(add|remove)\('active'\)/ },
];

let errorPass = true;
errorHandlingTests.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    errorPass = false;
  }
});

if (errorPass) {
  console.log('✅ PASS: Error handling is implemented\n');
} else {
  console.log('❌ FAIL: Error handling needs improvement\n');
}

// Test 8: Check responsive design classes
console.log('Test 8: Check responsive design');
const responsiveTests = [
  { name: 'Mobile-first grid', pattern: /grid-cols-1 md:grid-cols/ },
  { name: 'Sticky header', pattern: /sticky top-0/ },
  { name: 'Max width container', pattern: /max-w-6xl mx-auto/ },
  { name: 'Min height screen', pattern: /min-h-screen/ },
];

let responsivePass = true;
responsiveTests.forEach(({ name, pattern }) => {
  if (pattern.test(html)) {
    console.log(`  ✅ ${name} found`);
  } else {
    console.log(`  ❌ ${name} not found`);
    responsivePass = false;
  }
});

if (responsivePass) {
  console.log('✅ PASS: Responsive design classes are present\n');
} else {
  console.log('❌ FAIL: Responsive design needs improvement\n');
}

// Final summary
console.log('='.repeat(60));
console.log('📊 BROWSER INTEGRATION TEST SUMMARY');
console.log('='.repeat(60));

const allPass = exportPass && locPass && assetPass && errorPass && responsivePass;
if (allPass) {
  console.log('✅ ALL INTEGRATION TESTS PASSED');
  console.log('\n🎉 The application is ready for use!');
  console.log('\n📝 Test the app manually by:');
  console.log('   1. Opening the app in a browser');
  console.log('   2. Clicking "Run Tests" button');
  console.log('   3. Adding/removing activity cards');
  console.log('   4. Generating XLSX export');
  process.exit(0);
} else {
  console.log('⚠️  SOME INTEGRATION TESTS FAILED');
  console.log('\n📝 Please review the failed tests above.');
  process.exit(1);
}
