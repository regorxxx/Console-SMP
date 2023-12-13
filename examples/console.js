'use strict';
//01/03/23
include('..\\helpers\\helpers_xxx_console.js');

/* 
	Console
*/
console.log('This is output to log file at foobar2000 profile folder and to console on UI.');
// This simply replicates the original method
console.logUI('This is output only to console on UI. New method.');
// New lines '\n' are split into new entries before sending them to the console
console.popup('This is output to log file at foobar2000 profile folder, console on UI and a popup.\nNew method.', 'My popup');

/* 
	FbProfiler 
*/
// FbProfiler follows the same logic
const test = new FbProfiler('test');
// Do something
for (let i = 0; i < 999999; i++) {Object.getOwnPropertyNames({});}
// Outputs bare time in ms like "143"
console.log(test.Time);
 // Outputs "test". In standard SMP it would be undefined
console.log(test.Name);
// Outputs component name/version/assigned name like "Spider Monkey Panel v1.0.0: profiler (test): 166 ms"
// To console and file
test.Print();
// Only to console
test.PrintUI();