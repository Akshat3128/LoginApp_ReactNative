# React Native Login App (Expo)

A simple and responsive **login screen** built using **React Native with Expo CLI**, focused on input validation and clean UI.  
🛡️ **Only Gmail addresses are allowed** as valid emails for login.

---

## 🚀 Features

- 📧 Email and password input fields
- 👁 Toggle to show/hide password
- ✅ Validates email format **and checks for `@gmail.com` domain**
- ⚠️ Alerts for invalid or empty input
- 📦 Mock backend data (`user.json`)
- 📱 Fully mobile responsive
- ❌ No use of `expo-router` or TypeScript

---

## 📁 Folder Structure

```
LoginApp_ReactNative/
├── App.js                   # Entry point
├── components/
│   └── LoginForm.js         # Reusable login form with validation
├── backend/
│   └── user.json            # Simulated backend data
├── assets/                  # (Optional) images, icons, etc.
├── package.json             # Project dependencies
└── README.md                # You're here
```

---

## 🛠️ How to Run

### 1. Install Expo CLI (if not installed)
```bash
npm install -g expo-cli
```

### 2. Clone or unzip the project
```bash
cd LoginApp_ReactNative
npm install
```

### 3. Start the project
```bash
npx expo start
```

### 4. Run on device
- 📱 Use the **Expo Go** app on your Android/iOS phone
- 📷 Scan the QR code shown in the terminal

---

## 🔐 Email Validation Logic

The login form:
- Checks for general email format: `something@domain.com`
- Ensures the domain is exactly `@gmail.com` (case-insensitive)

### Example (valid):
```
test123@gmail.com
```

### Example (invalid):
```
test123@yahoo.com ❌
test@GMAIL.com ✅
```

---

## 📄 Mock Backend

`backend/user.json`:

```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```

Currently used for simulated backend — can be expanded for real API integration.

---

## 📦 Built With

- [React Native](https://reactnative.dev/)
- [Expo CLI](https://expo.dev/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

---

## 🙋 FAQ

**Q:** I get `expo-router` or `index.tsx` errors  
**A:** Delete the `/app` folder and remove `"main": "expo-router/entry"` from `package.json`

**Q:** App doesn't open in emulator?  
**A:** Use Expo Go app on your phone instead — no emulator needed

**Q:** Web build shows missing `@expo/metro-runtime`?  
**A:** Ignore it or install using:  
```bash
npx expo install @expo/metro-runtime
```

---

## 👤 Author

Built with ❤️ by [Akshat Saxena]  
Feel free to fork, clone, or improve the project.

---

## 📜 License

This project is free and open-source under the [MIT License](LICENSE).