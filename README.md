# 🐋 Whale Talk Translator

This is a simple JavaScript program that takes an input phrase and converts it into "whale language"! 🐳

## 💡 How It Works

- The input phrase is scanned letter-by-letter.
- Only vowels are kept.
- The vowels `"e"` and `"u"` are doubled to match the whale talk style.
- All letters are capitalized and joined into a single string.

---

## 🔤 Example Input:
```js
const input = 'turpentine and turtles';
```

## 🧪 Output:
```js
UUEEIEEAUUEE
```

---

## 🔧 Code Breakdown
```js
const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
```

---

## 🛠️ How to Run

1. Copy the code into a JavaScript file (e.g., `whaleTalk.js`)
2. Run it in your browser's console or use Node.js:
   ```bash
   node whaleTalk.js
   ```

---

## ✨ Have Fun!
Customize the `input` variable to try out different phrases in whale language!
