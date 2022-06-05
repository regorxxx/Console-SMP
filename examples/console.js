'use strict';
include('..\\helpers\\helpers_xxx_console.js');

console.log('This is output to log file at foobar profile folder and to console on UI.');
// This simply replicates the original method
console.logUI('This is output only to console on UI. New method.');
// New lines '\n' are split into new entries before sending them to the console
console.popup('This is output to log file at foobar profile folder, console on UI and a popup.\nNew method.', 'My popup');