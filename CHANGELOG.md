# Changelog

## [Table of Contents]
- [Unreleased](#unreleased)
- [2.0.0](#200---2023-02-23)
- [1.2.1](#121---2022-08-14)
- [1.2.0](#120---2022-06-19)
- [1.1.0](#110---2022-06-05)
- [1.0.3](#103---2022-05-04)
- [1.0.2](#102---2022-05-19)
- [1.0.1](#101---2021-12-23)
- [1.0.0](#100---2021-10-08)

## [Unreleased][]
### Added
 ### Changed
### Removed
### Fixed

## [2.0.0] - 2023-02-23
### Added
- console.flush() method to force writing cache to file (usually used at on_script_unload).
 ### Changed
- Moved all global variables to console namespace. i.e. console.File, console.MaxSize, console.Throttling, console.Timer, console.Cache.
- Added specific handling of FbMetadbHandle and FbMetadbHandleList objects.
- Logging now adds 'dd/mm/yyyy' line when touching the file if the last modified date differs. Should greatly enhance readability of logging for different days, since previously there was no way to know which day was for every line unless you manually counted the hour stamp resets.
### Removed
### Fixed
- Logging of null value not working properly.

## [1.2.1] - 2022-08-14
### Added
### Changed
### Removed
### Fixed
- Fixed line splitting when using cache (conLogThrottling > 0).

## [1.2.0] - 2022-06-19
### Added
- New setting 'conLogThrottling' to control the frequency of text writing to file. Consecutive calls within that interval are cached and all text flushed when there are no more calls (debouncing). This should greatly improve performance when calling the console multiple times in a small frame of time wring to physical file only once.
### Changed
### Removed
### Fixed

## [1.1.0] - 2022-06-05
### Added
- Rewrapped entire FbProfiler class to also log to file (the same than console.log). FbProfiler object has now an exposed property 'Name'. 'FbProfiler.Print' method will print to console and log file.
- New method 'FbProfiler.PrintUI' which mimics the old behavior, printing only to console.
### Changed
### Removed
### Fixed

## [1.0.3] - 2022-06-04
### Added
### Changed
- console.popup now has an additional argument to switch showing/hiding the popup (for ex. for actions via online controllers).
### Removed
### Fixed

## [1.0.2] - 2022-05-19
### Added
### Changed
- Check log file size before writing to file in the same session, not only on script loading.
### Removed
### Fixed
- Avoid file reading crashing in any case (even if it's locked by another process).

## [1.0.1] - 2021-12-23
### Added
- New method console.popup to send at the same time the text to the console (For logging purpose) and show it in a popup. Lines are split before sending to console, so every line is sent in different calls (i.e. the date is shown on every line).
### Changed
### Removed
### Fixed

## [1.0.0] - 2021-10-08
### Added
- First release.
### Changed
### Removed
### Fixed

[Unreleased]: https://github.com/regorxxx/Console-SMP/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/regorxxx/Console-SMP/compare/v1.2.1...v2.0.0
[1.2.1]: https://github.com/regorxxx/Console-SMP/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/regorxxx/Console-SMP/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/regorxxx/Console-SMP/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/regorxxx/Console-SMP/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/regorxxx/Console-SMP/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/regorxxx/Console-SMP/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/regorxxx/Console-SMP/compare/c21c65f...v1.0.0
