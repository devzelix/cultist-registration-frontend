# 🎨 Carabobo Cultors Information System Frontend

Web application for registering cultors in the Secretariat Of Culture Of Carabobo.  
Built with React and TypeScript, using TailwindCSS for styling and custom validations for each form field.

## Table of Contents

- [🚀 Technologies Used](#🚀-technologies-used)
- [🗂️ Project Structure](#🗂️-project-structure)
- [⚙️ Installation](#⚙️-installation)
- [🎯 Usage](#🎯-usage)
- [🤝 Contributions](#🤝-contributions)
- [📄 License](#📄-license)

## 🚀 Technologies Used

- React 18+
- TypeScript
- TailwindCSS
- Vite (assumed from structure and use of `/src/main.tsx`)
- Custom CSS for fonts and theme setup
- Custom hooks for state management and modals
- React Router DOM v6+

## 🗂️ Project Structure

- `/src/pages/App.tsx`: Main component responsible for routing and layout, distributing pages via `react-router-dom`.
- `/src/components/`: Reusable components such as forms, modals, etc.
- `/src/hooks/useModal.ts`: Hook for managing modals and conflict states.
- `/src/validations/`: Validation functions for form fields (name, email, phone, date, etc.).
- `/src/styles/global.css`: Global styles and font configuration.
- `/public/fonts/`: Custom fonts used in the app.
- `/public/assets/images/`: Images used in the application (icons, logos).

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/devzelix/sicuc-frontend.git
cd sicuc-frontend
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the application in development mode

```bash
npm run dev
# or
yarn dev
```

4. Open your browser at http://localhost:5173/cultores/registro or the URL shown in the console.

## 🎯 Usage

- Fill out the form with the required information.

- Fields have custom validations and clear error messages.

- In case of conflicts (duplicate entries), a modal will appear to inform the user and focus the conflicting field.

- Upon submission, the form will process data accordingly (backend/API logic to be implemented).

## 🤝 Contributions

Contributions are welcome!
Please open an issue or submit a pull request for improvements or bug fixes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
