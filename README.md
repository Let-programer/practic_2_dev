# Практика 2: Docker и Compose

Go backend + статичный frontend + PostgreSQL.

## Запуск
1. Скопируйте `.env.example` в `.env` и задайте пароль.
2. `docker compose up -d --build`
3. Откройте http://localhost:8080

## Остановка
`docker compose down` (добавьте `-v`, чтобы удалить данные БД)