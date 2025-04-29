# React + Vite

Live on: chat-tan-ten.vercel.app

Щоб запустити проект:
 1. Клонуйте репозиторій: git clone <repo-url>
 2. Перейдіть у папку проєкту: cd chat-app
 3. Встановіть залежності: npm install
 4. Запустіть проєкт: npm run dev

# Автоскролл
Використовується useRef для створення посилання (bottomRef) на блок в кінці списку повідомлень.
Зміна масиву messages заупскає useEffect, який в свою чергу запускає функцію скролу до bottomRef:
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

# Управління станом
Для цього проєкту було обрано Zustand через його простоту та мінімалістичність.


