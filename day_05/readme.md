
---

### ✅ `Day 05 of 100 days mastering frontend`

```markdown
# GSAP Scroll-Triggered Animations

A smooth, scroll-driven animation experience built with **GSAP (GreenSock Animation Platform)** and **ScrollTrigger**. This project demonstrates how to animate elements on scroll — including fade-ins, sliding text, and dynamic image reveals — creating a visually engaging single-page website.

---

## 🌟 Features

- **Page 1**: Headline and paragraph fade in with a slight slide-up effect.
- **Page 2**: The word "Animations" slides in from the left as you scroll, with smooth scrubbing and section pinning.
- **Page 3**: The sun image scales up and fades in with an elastic bounce effect, triggered on scroll.

All animations are **tied to the user’s scroll position**, creating a cinematic, interactive feel.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Flexbox for centering, responsive design)
- **GSAP 3** (with ScrollTrigger plugin) – for high-performance animations
- **Vanilla JavaScript**

---

## 🎯 Key Animations

### Timeline 1 (`tl`) – Page 1
- Animates the `h1` and `p` inside `#text`
- Simple fade-in + slide-up on load

### Timeline 2 (`tl2`) – Page 2
- Slides the `"Animations"` text from `translateX(-150%)` to its final position
- Uses:
  - `pin: true` – pins the section during scroll
  - `scrub: 1` – links animation smoothly to scroll
  - Triggered as user scrolls through `#page2`

### Timeline 3 (`tl3`) – Page 3
- The sun image starts at `scale(0)` and `opacity(0)`
- Grows and fades in as the user scrolls
- Smooth scrub effect (`scrub: 2`) for a slight lag/delayed reveal

---

## 📂 Project Structure

```
gsap-scroll-animation/
│
├── index.html        # Main HTML structure
├── style.css         # Styles for layout and design
├── app.js            # GSAP animations and ScrollTrigger logic
└── sun.avif          # Image asset (can be replaced with .jpg/.png for wider support)
```

---

## 🚀 How to Run

1. Clone or download the project.
2. Open `index.html` in a modern browser (Chrome, Firefox, Safari).
3. Scroll down to see the animations in action!

> ✅ No build tools required — this is a static site.

---

## ⚠️ Notes

- **Image Format**: Uses `.avif` for better compression. Consider adding a fallback (e.g., `.jpg`) for older browsers.
- **GSAP CDN**: Loaded from `cdnjs` — no local installation needed.
- **Responsive Design**: Font sizes use `vw` and `%` for scalability across devices.

---

## 📸 Preview (Conceptual)

> Imagine:
> - Clean, full-screen sections
> - Text sliding in with elegance
> - A glowing sun bursting into view
> - Smooth, buttery scroll-based motion

---

## 🧩 Future Enhancements

- Add **horizontal scroll sections**
- Implement **text splitting** (per-letter animation)
- Use **masking or clip-path** reveals
- Add **cursor follow** or hover effects
- Support dark/light mode toggle

---

## 📄 License

This project is open-source and free to use, modify, and learn from. GSAP is free for most uses (check [GreenSock's license](https://greensock.com/standard-license/)).

---

Made with ❤️ using GSAP
```

---

