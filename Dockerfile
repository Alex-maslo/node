FROM node:22-alpine

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json і package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --production

# Копіюємо решту файлів
COPY . .

# Виставляємо порт, на якому буде працювати сервер (якщо 3000)
EXPOSE 3000

# Команда запуску сервера
CMD ["node", "index.js"]
