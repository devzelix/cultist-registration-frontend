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

## [1.3.0] - 2025-06-06

### ✨ Added

- `VITE_API_BASE_URL` added to `.env.template` for clearer environment setup.

### 🔧 Changed

- Proxy configuration updated in `vite.config.ts` for improved API routing.
- Base route in `BrowserRouter` updated in `App.tsx`.
- Optional fields in the form now explicitly show “(optional)” in their labels.
- Email field in the form is no longer required.

## [1.3.1] - 2025-06-06

### 🔧 Changed

- Update README.md

## [1.4.0] - 2025-06-06

### 🔧 Changed

- modified base in `vite.config.ts`.

## [1.5.0] - 2025-06-06

### 🔧 Changed

- modified base in `vite.config.ts` to `/cultores`.

## [1.6.0] - 2025-06-06

### ✨ Added

- Redirect /cultores to /cultores/registro.

## [2.0.0] - 2025-06-13

### ✨ Added

- Implemented logic to handle the `otherDiscipline` field in form.

