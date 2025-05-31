## [1.1.0] - 2025-05-26

### ✨ Added

- `NotFound` page for undefined routes.

### 🔧 Changed

- Updated `App.tsx` to handle unmatched routes.

# Changelog

## [1.2.0] - 2025-05-30

### 🔧 Changed

- Renamed several internal functions for improved code clarity:
  - `getMinBirthDate()` → `getMinimumBirthDate()`
  - `getMaxBirthDate()` → `getMaximumBirthDate()`
- Updated UI texts for better usability:
  - Duplicate message was translated into Spanish

### 📝 Notes

- This change **does not break external compatibility**, but if external code relied directly on specific function names, adjustments may be necessary.
