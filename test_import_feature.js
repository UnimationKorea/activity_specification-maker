// Test the new Activity Import feature
const fs = require('fs');

console.log('🧪 Testing Activity Import Feature\n');
console.log('='.repeat(60));

let allPass = true;

// Test 1: Check if import button exists
console.log('\n1. Import UI Elements:');
const html = fs.readFileSync('./index.html', 'utf8');

const uiElements = [
  { name: 'Import Activity Button', pattern: /id="btnImportActivity"/ },
  { name: 'Import Modal', pattern: /id="importModal"/ },
  { name: 'File Input', pattern: /id="activityImport"/ },
  { name: 'URL Import Section', pattern: /id="urlImportSection"/ },
  { name: 'Import Preview', pattern: /id="importPreview"/ },
  { name: 'Confirm Import Button', pattern: /id="btnConfirmImport"/ },
];

uiElements.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 2: Check import functions
console.log('\n2. Import Functions:');
const functions = [
  { name: 'showModal()', pattern: /function showModal\(\)/ },
  { name: 'hideModal()', pattern: /function hideModal\(\)/ },
  { name: 'detectActivityType()', pattern: /function detectActivityType/ },
  { name: 'importActivityToCard()', pattern: /function importActivityToCard/ },
  { name: 'processImportedData()', pattern: /function processImportedData/ },
];

functions.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 3: Check activity type detection
console.log('\n3. Activity Type Detection Logic:');
const detectionPatterns = [
  { name: '4Choice detection', pattern: /if \(data\.Question_Text \|\| data\.Option_A_Text\) return '4Choice'/ },
  { name: 'DragDrop detection', pattern: /if \(data\.Drag_Mode \|\| data\.Item_ID\) return 'DragDrop'/ },
  { name: 'LineMatch detection', pattern: /if \(data\.Line_Style \|\| data\.Left_Node_ID\) return 'LineMatch'/ },
  { name: 'Speech detection', pattern: /if \(data\.Target_Pronunciation \|\| data\.STT_Engine\) return 'Speech'/ },
];

detectionPatterns.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 4: Check field mapping for each activity type
console.log('\n4. Field Mapping:');
const fieldMappings = [
  { name: '4Choice fields', pattern: /if \(type === '4Choice'\)[\s\S]*?Question_Text/ },
  { name: 'DragDrop fields', pattern: /if \(type === 'DragDrop'\)[\s\S]*?Drag_Mode/ },
  { name: 'LineMatch fields', pattern: /if \(type === 'LineMatch'\)[\s\S]*?Line_Style/ },
  { name: 'Speech fields', pattern: /if \(type === 'Speech'\)[\s\S]*?Prompt_Text/ },
];

fieldMappings.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 5: Check file format support
console.log('\n5. File Format Support:');
const formatSupport = [
  { name: 'JSON file support', pattern: /if \(name\.endsWith\('\.json'\)\)/ },
  { name: 'XLSX file support', pattern: /if \(name\.endsWith\('\.xlsx'\) \|\| name\.endsWith\('\.xls'\)\)/ },
  { name: 'URL fetch support', pattern: /await fetch\(url\)/ },
];

formatSupport.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 6: Check event handlers
console.log('\n6. Event Handlers:');
const eventHandlers = [
  { name: 'Import button click', pattern: /getElementById\('btnImportActivity'\)\.onclick = showModal/ },
  { name: 'Close modal click', pattern: /getElementById\('btnCloseModal'\)\.onclick = hideModal/ },
  { name: 'File import click', pattern: /getElementById\('btnImportFile'\)\.onclick/ },
  { name: 'URL import click', pattern: /getElementById\('btnImportURL'\)\.onclick/ },
  { name: 'Fetch URL click', pattern: /getElementById\('btnFetchURL'\)\.addEventListener/ },
  { name: 'Confirm import click', pattern: /getElementById\('btnConfirmImport'\)\.onclick/ },
];

eventHandlers.forEach(({ name, pattern }) => {
  const pass = pattern.test(html);
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (!pass) allPass = false;
});

// Test 7: Check sample files
console.log('\n7. Sample Files:');
const sampleFiles = [
  'sample_activity.json',
  'sample_activities_array.json'
];

sampleFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allPass = false;
});

// Test 8: Validate sample JSON structure
console.log('\n8. Sample JSON Structure:');
try {
  const singleActivity = JSON.parse(fs.readFileSync('sample_activity.json', 'utf8'));
  const multipleActivities = JSON.parse(fs.readFileSync('sample_activities_array.json', 'utf8'));
  
  const singleValid = singleActivity.Activity_ID && singleActivity.Title;
  const multipleValid = Array.isArray(multipleActivities) && multipleActivities.length > 0;
  
  console.log(`   ${singleValid ? '✅' : '❌'} Single activity JSON valid`);
  console.log(`   ${multipleValid ? '✅' : '❌'} Multiple activities JSON valid`);
  console.log(`   📊 Sample contains ${multipleActivities.length} activities`);
  
  if (!singleValid || !multipleValid) allPass = false;
} catch (err) {
  console.log('   ❌ Failed to parse sample JSON files');
  console.log('   ' + err.message);
  allPass = false;
}

// Final Summary
console.log('\n' + '='.repeat(60));
if (allPass) {
  console.log('✅ ALL IMPORT FEATURE TESTS PASSED');
  console.log('='.repeat(60));
  console.log('\n📝 Import Feature Capabilities:');
  console.log('   • JSON file import (single or multiple activities)');
  console.log('   • XLSX file import (reads Activity-* sheets)');
  console.log('   • URL/API endpoint import');
  console.log('   • Automatic activity type detection');
  console.log('   • Field mapping for all 4 activity types');
  console.log('   • Preview before import');
  console.log('   • Batch import support');
  console.log('\n🎯 Usage:');
  console.log('   1. Click "📥 Import Activity" button');
  console.log('   2. Choose file or URL method');
  console.log('   3. Preview imported data');
  console.log('   4. Confirm to add to spec');
  console.log('\n📁 Test with sample files:');
  console.log('   - sample_activity.json (single activity)');
  console.log('   - sample_activities_array.json (3 activities)');
  process.exit(0);
} else {
  console.log('❌ SOME IMPORT TESTS FAILED');
  console.log('='.repeat(60));
  process.exit(1);
}
