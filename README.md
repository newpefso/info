# PEFSO Mobile Icon + PWA Pack

Gói này dùng để đưa app PEFSO Sales Kit Builder lên GitHub Pages và cho phép thêm app vào màn hình điện thoại.

## File/thư mục trong gói

- `assets/icons/`: icon PNG nhiều kích thước
- `favicon.ico`: favicon cho browser
- `manifest.webmanifest`: cấu hình PWA cho Android/Chrome
- `sw.js`: service worker tối thiểu để Chrome nhận app là installable
- `HEAD_SNIPPET.html`: đoạn code dán vào `<head>` của `index.html`
- `BODY_SNIPPET.html`: đoạn code dán trước `</body>` của `index.html`

## Cách cài nhanh

1. Copy thư mục `assets/icons/`, file `favicon.ico`, `manifest.webmanifest`, `sw.js` vào cùng repo GitHub Pages với `index.html`.
2. Mở `index.html`.
3. Copy nội dung `HEAD_SNIPPET.html` và dán vào trong thẻ `<head>`.
4. Copy nội dung `BODY_SNIPPET.html` và dán ngay trước `</body>`.
5. Commit/push lên GitHub.
6. Mở link GitHub Pages trên điện thoại.

## Android Chrome

1. Mở link app.
2. Bấm menu ba chấm.
3. Chọn `Install app` hoặc `Add to Home screen`.
4. App sẽ có icon PEFSO trên màn hình.

## iPhone Safari

1. Mở link app bằng Safari.
2. Bấm nút Share.
3. Chọn `Add to Home Screen`.
4. Đặt tên: `PEFSO Kit`.
5. Bấm Add.

## Lưu ý

- GitHub Pages phải chạy bằng HTTPS; mặc định GitHub Pages đã có HTTPS.
- Nếu cập nhật icon nhưng điện thoại vẫn hiện icon cũ, hãy đổi tên file icon hoặc xóa shortcut cũ rồi thêm lại.
- iPhone chủ yếu dùng `apple-touch-icon`; Android dùng `manifest.webmanifest`.
