# 🌐 3D Portfolio

Interactive 3D portfolio built with React, Three.js, and React Three Fiber. Showcase your skills, projects, and contact info in a visually immersive way.

## 🚀 Live Demo
Try it live: *[]*

---

## 💡 Features

- **3D Hero Section** – Showcases a fully interactive 3D desktop scene.
- **Animated Work & Skills** – Engaging Framer Motion animations displaying your skills and portfolio pieces.
- **3D Skills Section** – Dynamic skill visualizations using 3D geometries.
- **Interactive Projects & Testimonials** – Motion-rich cards highlighting projects and user feedback.
- **3D Earth + Contact Form** – Interactive globe with email integration via EmailJS.
- **Procedural Clouds** – Scenic cloud visuals powered by Three.js.
- **Responsive Design** – Optimized UI for mobile and desktop.
- **Consistent Animation Workflow** – Uniform UX using Framer Motion throughout.

---

## ⚙️ Tech Stack

| Layer         | Libraries & Tools                        |
|---------------|------------------------------------------|
| UI Framework  | React, Vite                              |
| 3D Graphics   | three.js, React Three Fiber, Drei       |
| Styling       | Tailwind CSS                             |
| Animations    | Framer Motion                            |
| Forms & Email | EmailJS                                  |

---

## Getting Started

**Prerequisites:**

- Node.js (v16+)
- npm or Yarn

**Setup & Run:**

```bash
git clone https://github.com/jaimin-acharya/3d_portfolio.git
cd 3d_portfolio
npm install             # or yarn install
cp .env.example .env    # configure your EmailJS creds
npm run dev             # launch local dev server
````

* Visit `http://localhost:5173` to view the app.
* The `.env` file should include:

  ```env
  VITE_EMAILJS_SERVICE_ID=your_service
  VITE_EMAILJS_TEMPLATE_ID=your_template
  VITE_EMAILJS_USER_ID=your_user
  ```

---

## 🔧 Deployment

1. Build for production: `npm run build`
2. Deploy the `dist/` folder to your preferred hosting (Vercel, Netlify, GitHub Pages, etc.)

---

## 🧩 Folder Structure

```text
├── public/
│   └── assets/…
├── src/
│   ├── components/      # Reusable UI & 3D components
│   ├── scenes/          # Three.js scene files
│   ├── pages/           # React pages (Home, Projects, Contact)
│   ├── styles/          # Tailwind & global styles
│   └── App.jsx + main.jsx
├── .env.example
├── package.json
└── vite.config.js
```

---

## 📐 Customization Tips

* **Change 3D models or textures**: Check `src/scenes/` — update `.glb` files in `public/`.
* **Edit content**: Swap texts, project info, and links in component props.
* **Styling tweaks**: Modify Tailwind settings or spacing via `tailwind.config.js`.

---

## ✅ Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "feat: add new section"`
4. Push and submit a PR.

Happy to review improvements! 🎉

---

## ✉️ Contact

Questions or feedback? Reach me at:

* GitHub: [@jaimin-acharya](https://github.com/jaimin-acharya)
* Email: [your.jaiminacharya9@gmail.com](mailto:jaiminacharya9@gmail.com)

---

*Made with 💙 by **Jaimin Acharya***

```

---
