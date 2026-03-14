# GenQuote

**GenQuote** is a robust, "bulletproof" React application that generates random doses of wisdom using the DummyJSON Quotes API. This project was built with a focus on seamless state management, professional error handling, and optimized API performance.

---

## Features

* **Instant Inspiration**: Fetches a random quote and author on every load.
* **Bulletproof Fetch Logic**: Implements `try...catch...finally` blocks to handle network issues and server errors gracefully.
* **User Feedback**: Real-time "Loading" states and dynamic error messages directly in the UI.



---

## Tech Stack

* **Frontend**: React.js
* **State Management**: React Hooks (`useState`, `useEffect`)
* **API**: [DummyJSON Quotes](https://dummyjson.com/quotes)

---

## How It Works

The app follows a strict logical flow to ensure a bug-free experience:
1.  **Mounting**: The `useEffect` hook triggers the initial fetch.
2.  **State Sync**: The `loading` state is set to `true`, providing immediate feedback and disabling user interaction.
3.  **API Guard**: A check for `res.ok` ensures that even if the API is reachable but broken, the app doesn't crash.
4.  **Error Injection**: If a fetch fails, the error message is captured and displayed within the quote container for clarity.


---

## License

Distributed under the MIT License. See `LICENSE` for more information.

