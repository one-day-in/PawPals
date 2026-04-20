# frontend-app

Frontend для PawPals — платформи заявок на вигул собак (модель: маркетплейс/біржа замовлень).

## Стек

- React + Vite
- TypeScript
- CSS (без UI бібліотек)
- Axios
- json-server (mock API)

## Запуск

```bash
npm install
npm run server
npm run dev
```

`npm run server` піднімає mock API на `http://localhost:3001`.
`npm run dev` піднімає frontend (Vite dev server).

## Доступні mock endpoints

- `GET /trips` — список заявок
- `GET /trips/:id` — деталі заявки

## Структура

```text
src/
  app/
  pages/
  widgets/
  features/
  entities/
  shared/
    ui/
    api/
    hooks/
    utils/
    types/
```
