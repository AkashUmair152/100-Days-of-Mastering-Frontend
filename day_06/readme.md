
---

### Day_06 of Masteing 100 days of frontend development

# 🎯 SVG String Animation with GSAP

This mini-project demonstrates a smooth animated SVG path that responds to mouse movements using **GSAP (GreenSock Animation Platform)**. The path reacts like a flexible string as the cursor moves across the screen, creating an interactive and fluid visual effect.

---

## 📂 Project Structure

```
project-root/
│
├── index.html       # Main HTML file
├── style.css        # Styling for the project
├── app.js           # JavaScript with GSAP animations
└── README.md        # Project notes and explanation
```

---

## ✅ Features

* Dynamic SVG path deformation based on mouse position.
* Smooth animation using `gsap.to()`.
* Restores to original path using an elastic bounce effect on `mouseleave`.

---

## 🚀 How It Works

### 🔹 Initial Path Setup

The path is initially defined as a straight quadratic curve:

```js
let finalPath = "M 10 100 Q 250 100 1150 100";
```

This creates a line from `(10,100)` to `(1150,100)` with a control point at `(250,100)`.

---

### 🔹 Mousemove Interaction

When the mouse moves inside the `#string` container, the control point (middle of the `Q` command) dynamically follows the cursor:

```js
let path = `M 10 100 Q ${dets.x} ${dets.y} 1150 100`;
gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out"
});
```

* `dets.x` and `dets.y` are mouse coordinates.
* `gsap.to()` animates the `d` attribute smoothly.

---

### 🔹 Mouseleave Reset

When the mouse leaves the container, the path resets to its original straight form:

```js
gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)"
});
```

This creates a **bouncy return effect** for a natural string-like behavior.

---

## 💡 GSAP Notes

* `attr: { d: path }` is required to animate SVG path data.
* `ease: "power3.out"` is used for responsive movement.
* `ease: "elastic.out(1, 0.2)"` gives a bouncy spring-back effect.

---

## 📦 Dependencies

* ✅ [GSAP 3.13.0 CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
```

---

## 💻 Usage

1. Clone or download the repo.
2. Open `index.html` in your browser.
3. Move your mouse over the curve to see it animate like a string.
4. Move out to see it snap back into place.

---

## 📸 Demo Preview

```text
┌──────────────────────────────────────────────────────────┐
|                                                          |
|     ← The curve bends toward your cursor smoothly →     |
|                                                          |
└──────────────────────────────────────────────────────────┘
```

---

## 📘 Learning Goals

* Master SVG `path` animations.
* Understand GSAP's `attr` plugin for SVG manipulation.
* Build interactive UI effects.

---

