# AniWave

Статический сайт для просмотра аниме (демо).

## Запуск локально

Открой `index.html` в браузере или подними локальный сервер:

```bash
python3 -m http.server 8080
```

После этого открой: `http://localhost:8080`.

## Публикация на GitHub Pages

В репозитории уже добавлен workflow `.github/workflows/deploy-pages.yml`, который автоматически деплоит сайт в GitHub Pages.

### Что нужно сделать в GitHub

1. Запушить репозиторий на GitHub.
2. Открыть **Settings → Pages**.
3. В разделе **Build and deployment** выбрать **Source: GitHub Actions**.
4. Запушить изменения в ветку `main`, `master` или `work` (или запустить workflow вручную в разделе **Actions**).

После успешного job `Deploy static site to GitHub Pages` сайт будет доступен по URL из шага `Deploy to GitHub Pages`.
