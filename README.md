# React + Vite

Live: chat-tan-ten.vercel.app

Щоб запустити проект:
 1. Клонуйте репозиторій: git clone https://github.com/Nastasia27/chat.git
 2. Перейдіть у папку проєкту: cd chat
 3. Встановіть залежності: npm install
 4. Запустіть проєкт: npm run dev

# Автоскролл
Використовується useRef для створення посилання на блок в кінці списку повідомлень (bottomRef).
Коли масив messages змінюється, useEffect викликає функцію скролу до bottomRef:
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

# Управління станом
Для збереження повідомлень та статусу введення було обрано Zustand через його простоту та мінімалістичність.


