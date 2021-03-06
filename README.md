# Console-SMP
[![version][version_badge]][changelog]
[![CodeFactor][codefactor_badge]](https://www.codefactor.io/repository/github/regorxxx/Console-SMP/overview/main)
[![CodacyBadge][codacy_badge]](https://www.codacy.com/gh/regorxxx/Console-SMP/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=regorxxx/Console-SMP&amp;utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/regorxxx/Console-SMP)  
A helper script for [Spider Monkey Panel](https://theqwertiest.github.io/foo_spider_monkey_panel) and [foobar2000](https://www.foobar2000.org) which allows to permanently save console logs to a file using the existing method (console.log).

## The problem with current Foobar2000's console
Default UI allows to open the console log into a panel and save its content to a file, but the option is reset on every start-up... thus defeating the idea of logging to a file. Since file logging may be useful on servers, specially when using headless installation and interacting with SMP scripts (to check response), this utility is offered as alternative.

## Features
- Saves any message sent to the console on a text file (path configurable).
- Saving is not reset on every start-up (contrary to Foobar2000's native console).  
- File is only reset when certain file size is reached (configurable).
- Works 'as is' without any modification on existing scripts, just include it and done.
- Converts sets and maps to arrays before logging.
- Converts standard objects and functions to strings before logging.
- Writing frequency to physical file can be adjusted.

## Usage
Just include the helper file:
```javascript
include('helpers\\helpers_xxx_console.js');
```

Since the original method has been wrapped, it will work without further modifications on an existing script:
```javascript
console.log('This is output to log file at foobar profile folder and to console on UI.');
```

A method has been created to only send the message to the the UI console:
```javascript
// This simply replicates the original method
console.logUI('This is output only to console on UI. New method.');
```

Another to send the message to both the console (+ file) and a popup:
```javascript
// New lines '\n' are split into new entries before sending them to the console
console.popup('This is output to log file at foobar profile folder, console on UI and a popup.\nNew method.', 'My popup');
```

![Capture](https://user-images.githubusercontent.com/83307074/136626429-e29deefb-d334-4097-88d4-c096b263b436.JPG)

As a bonus, the profiler has also been wrapped:
```javascript
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
```

![image](https://user-images.githubusercontent.com/83307074/172067617-32251219-952e-4194-8b77-382623edfece.png)

There is an usage example on the 'examples' folder.

## Other implementations
 1. [Playlist-Tools-SMP](https://github.com/regorxxx/Playlist-Tools-SMP): Different tools for [foobar2000](https://www.foobar2000.org).
 2. [Playlist-Manager-SMP](https://github.com/regorxxx/Playlist-Manager-SMP): A playlist manager for [foobar2000](https://www.foobar2000.org). 
 3. Any of my other scripts....

## Installation
Since the addon only requires 1 file, i.e. the main helper, you can simply include it along any other script where you will use it.

![carbon(6)](https://user-images.githubusercontent.com/83307074/136626564-67b692d1-9435-4266-88aa-a38f44a99fbf.png)

[changelog]: CHANGELOG.md
[version_badge]: https://img.shields.io/github/release/regorxxx/Console-SMP.svg
[codacy_badge]: https://api.codacy.com/project/badge/Grade/3e59f8dccd204721a7801197d6c336ed
[codefactor_badge]: https://www.codefactor.io/repository/github/regorxxx/Console-SMP/badge/main
