
# ![Logo](https://via.placeholder.com/150) 40_21005711_MaiQuocTruong_REACT_Lab07_APINOTES

> **Bài tập 7 React Lập Trình Thiết Bị Di Động**

---

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Yêu Cầu](#yêu-cầu)
- [Cài Đặt](#cài-đặt)
- [Sử Dụng MockAPI](#sử-dụng-mockapi)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Hướng Dẫn Chạy Project Trên VSCode](#hướng-dẫn-chạy-project-trên-vscode)
- [Liên Hệ](#liên-hệ)

---

## 🎉 Giới Thiệu

Dự án **APINOTES** là một ứng dụng quản lý ghi chú trên thiết bị di động được xây dựng bằng **React Native** và **Expo**. Ứng dụng sử dụng **MockAPI** để quản lý dữ liệu và cung cấp giao diện người dùng thân thiện với thiết bị di động.

![App Screenshot](https://via.placeholder.com/600x400)

---

## 📌 Yêu Cầu

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt các công cụ sau:

- **Mobile Simulator**: Tải và cài đặt từ [Chrome Web Store](https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk).
  
  ![Mobile Simulator](https://via.placeholder.com/300x200)
  
- **Node.js**: Tải và cài đặt từ [nodejs.org](https://nodejs.org/).

  ![Node.js](https://nodejs.org/static/images/logo.svg)

- **Git**: Tải và cài đặt từ [git-scm.com](https://git-scm.com/).

  ![Git](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

---

## 🛠️ Cài Đặt

### 1. Tạo Ứng Dụng Expo

```bash
npx create-expo-app YOUR_PROJECT --template blank
cd YOUR_PROJECT
npx expo install react-dom react-native-web @expo/metro-runtime
```

### 2. Cài Đặt Navigation và Icon (FontAwesome)

```bash
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/native-stack
```

### 3. Cài Đặt Các Thư Viện Khác

```bash
expo install expo-linear-gradient
npm install react-native-vector-icons
```

### 4. Cài Đặt JSON Server

```bash
npm install -g json-server
json-server --watch db.json --port 5000
```

### 5. Cài Đặt Axios

```bash
npm install axios
```

---

## 🛠️ Sử Dụng MockAPI

1. Truy cập [MockAPI.io](https://mockapi.io/).

   ![MockAPI](https://via.placeholder.com/300x200)

2. **Bước 1: Đăng nhập và Tạo Dự Án Mới**

   - Đăng nhập vào MockAPI.
   - Nhấn **Create New Project**.
   - Đặt tên cho dự án: `My Notes API`.
   - Nhấn **Create Project**.

3. **Bước 2: Tạo Resource**

   - Nhấn **New Resource**.
   - Thiết lập các giá trị cần thiết cho Resource.

---

## 🚀 Chạy Ứng Dụng

```bash
npx expo start
```

![Running App](https://via.placeholder.com/600x400)

---

## 🖥️ Hướng Dẫn Chạy Project Trên VSCode

1. **Clone Repository**

   ```bash
   git clone <URL_REPOSITORY>
   ```

   ![Git Clone](https://via.placeholder.com/300x200)

2. **Mở Thư Mục Trong VSCode**

   - Mở VSCode.
   - Chọn **File > Open Folder** và chọn thư mục vừa clone về.

3. **Cài Đặt Dependencies**

   ```bash
   npm install
   yarn
   ```

4. **Chạy Ứng Dụng**

   ```bash
   npx expo start
   npm run web
   ```

---

## 📧 Liên Hệ

- **Email**: maiquoctruong@example.com
- **LinkedIn**: [Mai Quốc Trường](https://www.linkedin.com/in/maiquoctruong/)
- **GitHub**: [MaiQuocTruong](https://github.com/MaiQuocTruong)

---

## 🎨 Thiết Kế

![Design](https://via.placeholder.com/600x400)

---

**Cảm ơn bạn đã sử dụng dự án này!**

---

### 🌟 Badge và Liên Kết Hữu Ích

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-Native-blue)
![Expo](https://img.shields.io/badge/Expo-v48.0.0-blue)

---

## 💡 Mẹo Nâng Cao

- **Sử dụng GIF**: Bạn có thể thêm các GIF động để minh họa tính năng của ứng dụng.

  ```markdown
  ![Demo](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)
  ```

- **Thêm 3D Models**: Sử dụng các liên kết đến mô hình 3D hoặc nhúng chúng từ các dịch vụ hỗ trợ.
