## Genel Bakış

- Uçuş Radarı, uçuş bilgilerini görüntülemenizi ve uçuşların durumunu takip etmenizi sağlayan bir web uygulamasıdır. Uygulama, uçuş detaylarını TMDB API'sinden çekerek kullanıcı dostu bir arayüz ile sunar. Bu uygulama ile uçuşların ayrıntılı bilgilerine erişebilir ve uçuşların durumlarını anlık olarak izleyebilirsiniz.

## Özellikler

- Ana sayfada uçuşları görüntüleyin.

- Uçuşların durumunu kontrol edin.

- Her uçuş hakkında detaylı bilgiler alın.

- Farklı cihazlar için duyarlı tasarım.

## Kullanılan Teknolojiler

- Ön Uç: React.js, React Router

- Durum Yönetimi: Redux Toolkit

- HTTP İstekleri: Axios

- Stil: Tailwind CSS

## Kütüphaneler

- Redux
- React-Redux
- Redux-Thunk
- React-Router-Dom
- Axios
- Tailwind CSS
- Splide
- React-Icons

# Gereksinimler

- Node.js
- Yarn veya npm

## Dosya Yapısı

src/
├── components/
│ ├── Header.js
│ └── Modal.js
├── constants/
│ └── index.js
├── redux/
│ ├── slices/
│ │ └── flightSlice.js
│ └── store.js
├── utils/
│ └── formatDate.js
├── App.js
└── index.js

## İletişim

Herhangi bir sorunuz olursa, lütfen [fmkaragoz@gmail.com] üzerinden bizimle iletişime geçin.

## Ekran Görüntüsü

![Uçak Radar Sistemi](/public/Fly_Radar.gif)
