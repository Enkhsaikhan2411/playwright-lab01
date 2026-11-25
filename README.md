# Лаб 1: Playwright UI автомат тест

F.CSA313 — Программ хангамжийн чанарын баталгаа ба тест (2026)

## Юу хийсэн бэ
- Playwright (TypeScript) төсөл үүсгэсэн
- https://www.saucedemo.com сайт дээр 3 автомат тест бичсэн:
  1. Амжилттай нэвтрэх
  2. Амжилтгүй нэвтрэх (буруу нууц үг, алдааны мессеж шалгах)
  3. Бараа сагслах (сагсны тоо шалгах)
- Тест бүрийг logout-оор төгсгөсөн, тестүүд хоорондоо хамааралгүй
- Trace, video, HTML report үүсгэж `artifacts/` хавтсанд хадгалсан

## Тест ажиллуулах
```
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Файлын бүтэц
- `tests/mytest.spec.ts` — миний бичсэн 3 тест
- `playwright.config.ts` — тохиргоо (trace, video асаасан)
- `artifacts/report` — HTML report
- `artifacts/results` — тест бүрийн video.webm, trace.zip

## Playwright ба Selenium: миний ажиглалт
Playwright нь элемент бэлэн болтол автоматаар хүлээдэг тул Selenium-д шиг explicit wait гараар бичих шаардлагагүй байсан. Хөтөчүүд нэг командаар (`npx playwright install`) суусан нь хөтөч бүрд тусдаа driver суулгахаас хялбар. Trace viewer нь тест унахад алхам бүрийн дүрсийг харуулдаг тул алдааг хурдан олж болсон. Би assertion-оо санаатайгаар буруу болгоод унагахад аль алхам дээр, яагаад унасныг шууд харсан. getByRole, getByPlaceholder зэрэг locator нь уншихад ойлгомжтой. Харин Selenium нь олон жил хэрэглэгдсэн тул олон хэлийг дэмждэг, нийгэмлэг нь том. Хоёулаа Apache 2.0 лицензтэй, үнэгүй.

