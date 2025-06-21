# ⚡ CP Rating Predictor

Predict your Codeforces or CodeChef rating using intelligent linear regression models trained on 10,000+ real user profiles.

---

## 🌐 Live Demo

🔗 [CP Rating Predictor](https://harishpullagurla.github.io/CP_Rating_Predictor/)

---

## 🔍 About

**CP Rating Predictor** is a modern web tool that leverages a custom-trained machine learning model to estimate your rating equivalence across two major competitive programming platforms: **CodeChef** and **Codeforces**.

It bridges the gap between platforms by helping programmers:

* Understand how their ratings compare
* Set realistic cross-platform goals
* Track their progress based on actual statistical patterns

Built with:

* 🌐 HTML, CSS , JavaScript
* 📊 Python for model training (Linear Regression)
* 📊 Real-world dataset of over 10,000+ user profiles

---

## ⚙️ How It Works

The model uses a simple linear regression equation:

```
y = W * x + B
```

* Where `x` is your rating on one platform
* `y` is the predicted rating on the other
* `W = 0.8316`, `B = -32.63` (derived from training data)

It also categorizes the predicted rating into platform-specific tiers:

* Codeforces: Newbie, Expert, Master, etc.
* CodeChef: 1 Star to 7 Star

---

## 🚀 How to Use

1. Open the [Live Site](https://harishpullagurla.github.io/CP_Rating_Predictor/)
2. Click the platform you currently use (CodeChef or Codeforces)
3. Enter your rating (e.g., 1600)
4. Click **Predict Rating**
5. Get your estimated rating on the other platform with tier classification

---

## 📂 Project Structure

```
CP_Rating_Predictor/
├── docs/                     
│   ├── index.html
│   ├── style.css
│   ├── script.js
├── final_cccf.csv            
├── model.ipynb              
├── README.md
```


## 👤 Author

Created with 💻 by [Harish Pullagurla](https://github.com/harishpullagurla)

---
