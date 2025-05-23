
# 📘 Pixelbook – Enterprise React Design System

![GitHub last commit](https://img.shields.io/github/last-commit/bvivek2148/Pixelbook)
![GitHub repo size](https://img.shields.io/github/repo-size/bvivek2148/Pixelbook)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Storybook](https://img.shields.io/badge/Storybook-online-orange?logo=storybook)

> **Pixelbook** is a modular, accessible, and scalable component library built with React, TypeScript, and TailwindCSS, documented with Storybook. Designed for enterprise-grade B2B applications.

---

## 🔥 Preview

### 🖼️ Storybook UI
> ![Pixelbook Storybook Screenshot](https://user-images.githubusercontent.com/your-screenshot-url.png)
> *(Replace the URL with a real screenshot or GIF once deployed)*

### 🌐 Live Preview
> **Storybook Deployment:** [Coming Soon via Chromatic](https://www.chromatic.com/) or [Vercel](https://vercel.com/)

---

## 🚀 Tech Stack

- ⚛️ React + TypeScript
- 🎨 TailwindCSS (or styled-components)
- 📚 Storybook for documentation
- 🧪 Vitest for unit tests
- 🌙 Theming (Light/Dark modes)
- ♿ Accessibility-first approach

---

## 🧱 Components

### ✅ Typography
- Headings (H1–H6)
- Paragraphs
- Labels, Captions, Helper Text

### ✅ Data Entry
- [x] Text Input (with variants and states)
- [ ] Select / Dropdown
- [ ] Checkbox / Radio / Toggle

### ✅ Feedback
- [x] Toast / Snackbar (info, success, warning, error)
- [ ] Modal Dialog
- [ ] Alert Banner

Each component includes:
- Variants (size, icon support)
- States (hover, focus, disabled, error)
- Theming (light/dark)
- ARIA roles and keyboard navigation
- Storybook documentation

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bvivek2148/Pixelbook.git
cd Pixelbook
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Storybook

```bash
npm run storybook
```

> Open `http://localhost:6006` to browse component documentation.

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 🗂️ Project Structure

```
Pixelbook/
├── src/
│   ├── components/
│   │   ├── Typography/
│   │   ├── Input/
│   │   └── Toast/
│   └── themes/
├── .storybook/
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 📚 Storybook Documentation Includes

- ✅ Component name + description
- ✅ Props / API with TypeScript
- ✅ Variants & states
- ✅ Accessibility notes (ARIA roles, keyboard nav)
- ✅ Responsive behavior
- ✅ Theming (light/dark)
- ✅ Do’s and Don’ts / Best Practices

---

## 👨‍💻 Contribution Guidelines

1. Fork the repo and create your branch (`git checkout -b feature/component-name`)
2. Write or update components using TypeScript + Tailwind
3. Add Storybook stories with proper documentation
4. Commit and push (`git commit -m "Add: new Toast component"`)
5. Create a Pull Request

---

## 📐 Design Philosophy

- 🧩 **Composable**: Modular, reusable components
- 🌗 **Themed**: Light/Dark and Brand tokens
- 💡 **Developer-friendly**: Clean props, typed interfaces
- 📱 **Responsive**: Mobile-first layout patterns
- ♿ **Accessible**: WCAG-compliant, semantic HTML

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Credits

Built by [Bukka Vivek](https://github.com/bvivek2148) as part of a professional frontend design system project.
