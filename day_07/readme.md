
---

### ✅ `README.md`

```markdown
# 🖱️ Custom Cursor with GSAP & Scroll Effects

A sleek, interactive **custom cursor** built with **GSAP** and vanilla JavaScript. This project replaces the default mouse pointer with a smooth, animated cursor that reacts to user interactions — creating a modern, immersive web experience.

Perfect for creative portfolios, landing pages, or experimental websites.

---

## 🌟 Features

- ✅ **Hidden default cursor** (`cursor: none`)
- ✅ **Smooth trailing effect** with GSAP animation
- ✅ **Hover detection** – cursor grows on interactive elements
- ✅ **Responsive design** with full-page sections
- ✅ **Stylish gradients** and visual effects (`mix-blend-mode`)
- ✅ **Performance optimized** with `pointer-events: none`
- ✅ Works across modern browsers (Chrome, Firefox, Safari)

---

## 🎨 Demo (Conceptual)

> As you move your mouse:
> - A **smooth-following circle** glides behind your pointer
> - On hover over buttons or links, it **expands with a border**
> - The cursor blends with backgrounds using `mix-blend-mode`
> - Each page has a unique gradient theme

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Flexbox, gradients, transitions, blend modes
- **JavaScript (Vanilla)** – Event listeners and DOM manipulation
- **GSAP 3** – High-performance cursor animation
- **No frameworks** – Lightweight and fast

---

## 📂 Project Structure

```

custom-cursor-gsap/
│
├── index.html        # Page structure with 3 sections
├── style.css         # Styling for cursor, pages, and hover effects
├── app.js            # GSAP-powered cursor animation logic
└── README.md         # You are here!

```

---

## 🚀 How to Run

1. Clone or download the project:
   ```bash
   git clone https://github.com/yourname/custom-cursor-gsap.git
   ```

2. Open `index.html` in any modern browser:

   ```bash
   open index.html
   ```

3. Move your mouse and hover over buttons/links to see the cursor react!

> ✅ No build tools or server required — works offline.

---

## 💡 How It Works

### 1. **Cursor Animation**

- Uses `mousemove` event to track mouse position
- GSAP smoothly animates the cursor to follow with a slight lag (`duration: 0.8`, `ease: power2.out`)

### 2. **Hover Effects**

- Elements like `.btn` and `.link` have class `hover-effect`
- On hover, they trigger `.active` class on the cursor → it scales up

### 3. **Visual Polish**

- `mix-blend-mode: difference` creates an inverted, eye-catching effect
- `transform: translate(-50%, -50%)` ensures perfect centering
- Smooth transitions via CSS

---

## 🧩 Future Enhancements

- Add a **follower ring** or trail dots
- Implement **magnetic buttons**
- Add **3D tilt effect** using `mousemove` rotation
- Support **touch devices** (hide cursor on mobile)
- Integrate with **ScrollTrigger** for scroll-based effects

---

## 📸 Screenshots (Optional)

> 

---

## 📄 License

This project is open-source and free to use.  
GSAP is free for most projects — see [GreenSock License](https://greensock.com/standard-license/).

---

Made with ❤️ using **GSAP** — The world’s most powerful animation platform.

```

---
