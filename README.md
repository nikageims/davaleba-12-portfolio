<div align="center">

# 🚀 Nika_Geims — Portfolio

**A modern, multi-page React portfolio with dark/light mode and live GitHub integration**

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6-ca4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-1-5a29e4?style=flat-square&logo=axios)](https://axios-http.com/)

[🔗 Live Demo](https://github.com/NikaGeims) · [📁 GitHub](https://github.com/NikaGeims)

</div>

---

## 🇬🇧 English

### ✨ Features

- **⚡ SPA Routing** — Instant navigation between 5 pages with React Router v6 (no full reloads)
- **🌙 Dark / ☀️ Light Mode** — Global theme via `useContext`, persisted with `localStorage`
- **🐙 Live GitHub Projects** — Fetches real repositories from the GitHub API via Axios
- **🧩 Centralized Data** — Skills and fallback project data in `src/data/data.json`
- **📱 Responsive Design** — Works on mobile, tablet, and desktop
- **🎨 Premium UI** — Glassmorphic navbar, animated skill bars, hover-lift project cards

### 📁 Project Structure

```
src/
├── context/
│   └── ThemeContext.jsx     # Dark/Light mode — useContext + useState
├── components/
│   ├── Navbar.jsx           # Sticky nav with NavLinks + theme toggle
│   └── Navbar.css
├── pages/
│   ├── Home.jsx / .css      # Hero section with animated code card
│   ├── About.jsx / .css     # Bio, info grid, availability dot
│   ├── Projects.jsx / .css  # GitHub API → live repo cards
│   ├── Skills.jsx / .css    # Progress bars from data.json
│   └── Contact.jsx / .css   # Controlled form with success state
├── data/
│   └── data.json            # Centralized skills & fallback projects
├── App.jsx                  # BrowserRouter + Routes + ThemeProvider
└── index.css                # CSS variables (dark/light theme tokens)
```

### 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| React Router v6 | Client-side routing |
| useContext | Global theme state |
| Axios | GitHub API fetching |
| Vite | Build tool & dev server |
| CSS Variables | Dark/light theming |
| GitHub REST API | Live project data |

### 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

### 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero with name, title, stats, and code card |
| `/about` | About | Bio, info grid, availability indicator |
| `/projects` | Projects | Live GitHub repos fetched via API |
| `/skills` | Skills | Animated progress bars grouped by category |
| `/contact` | Contact | Contact form + social links |

---

## 🇬🇪 ქართული

### ✨ ფუნქციონალი

- **⚡ SPA მარშრუტიზაცია** — მომენტალური გადასვლა 5 გვერდს შორის React Router v6-ით (გვერდი არ განახლდება)
- **🌙 Dark / ☀️ Light რეჟიმი** — გლობალური თემა `useContext`-ის საშუალებით, ინახება `localStorage`-ში
- **🐙 GitHub-ის live პროექტები** — რეპოზიტორიები ავტომატურად იტვირთება GitHub API-დან Axios-ის გამოყენებით
- **🧩 ცენტრალიზებული მონაცემები** — სქილები და პროექტები `src/data/data.json` ფაილშია
- **📱 Responsive დიზაინი** — ადაპტირებული მობილურ, ტაბლეტ და დესქტოპ ეკრანებზე
- **🎨 პრემიუმ UI** — Glassmorphic navbar, ანიმირებული skill bars, hover ეფექტი კარტებზე

### 📁 პროექტის სტრუქტურა

```
src/
├── context/
│   └── ThemeContext.jsx     # Dark/Light — useContext + useState
├── components/
│   ├── Navbar.jsx           # ნავიგაცია + თემის toggle ღილაკი
│   └── Navbar.css
├── pages/
│   ├── Home.jsx / .css      # მთავარი გვერდი — hero სექცია
│   ├── About.jsx / .css     # ბიოგრაფია და ინფო ბლოკი
│   ├── Projects.jsx / .css  # GitHub API → live პროექტების კარტები
│   ├── Skills.jsx / .css    # progress bar-ები data.json-დან
│   └── Contact.jsx / .css   # საკონტაქტო ფორმა
├── data/
│   └── data.json            # სქილები და ფოლბეკ პროექტები
├── App.jsx                  # BrowserRouter + Routes + ThemeProvider
└── index.css                # CSS ცვლადები (dark/light თემის ტოკენები)
```

### 🛠️ გამოყენებული ტექნოლოგიები

| ტექნოლოგია | დანიშნულება |
|---|---|
| React 18 | UI Framework |
| React Router v6 | კლიენტური მარშრუტიზაცია |
| useContext | გლობალური თემის სტეიტი |
| Axios | GitHub API-ს მოთხოვნები |
| Vite | Build tool და dev სერვერი |
| CSS Variables | Dark/Light თემა |
| GitHub REST API | პროექტების live მონაცემები |

### 🚀 გაშვება

```bash
# 1. დააინსტალირე დამოკიდებულებები
npm install

# 2. გაუშვი development სერვერი
npm run dev

# 3. გახსენი ბრაუზერში
# → http://localhost:5173
```

### 📄 გვერდები

| მისამართი | გვერდი | აღწერა |
|---|---|---|
| `/` | Home | Hero სექცია სახელით, სტატისტიკით და კოდ-კარტით |
| `/about` | About | ბიოგრაფია, ინფო ბლოკი, ხელმისაწვდომობის ინდიკატორი |
| `/projects` | Projects | Live GitHub repos API-დან |
| `/skills` | Skills | ანიმირებული progress bar-ები კატეგორიების მიხედვით |
| `/contact` | Contact | საკონტაქტო ფორმა + სოციალური ბმულები |

### 🔧 კონფიგურაცია

GitHub მომხმარებლის სახელის შესაცვლელად შეცვალე `Projects.jsx`-ში:

```js
// src/pages/Projects.jsx
const GITHUB_USERNAME = 'NikaGeims'; // ← შეცვალე შენი username-ით
```

---

<div align="center">

Made with ❤️ by **Nika_Geims** · [GitHub](https://github.com/NikaGeims) · [LinkedIn](https://www.linkedin.com/in/nika-geims-19202b338/)

</div>
