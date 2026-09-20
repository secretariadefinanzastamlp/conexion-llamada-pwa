# Conexión de Llamada APK

Este proyecto convierte la PWA de llamadas en una aplicación Android instalada usando Capacitor.

## Estructura

- `www/` contiene la aplicación web
- `capacitor.config.json` configura Capacitor
- `package.json` incluye dependencias y scripts

## Requisitos

- Node.js 18+
- npm
- Android Studio con SDK de Android

## Instalación

```bash
npm install
```

## Generar proyecto Android

```bash
npx cap add android
```

## Sincronizar cambios web con Android

```bash
npm run android:sync
```

## Abrir Android Studio

```bash
npm run android:open
```

## Generar APK

Dentro de Android Studio:

1. Abre el proyecto generado en `android/`
2. Selecciona `Build > Build Bundle(s) / APK(s) > Build APK`
3. El APK se generará en `android/app/build/outputs/apk/debug/`

## Nota importante

La app usa `window.location.href = 'tel:${numero}'` para abrir el marcador telefónico. Esto funciona en dispositivos móviles reales y en Android cuando la app está instalada.

La PWA se instala como app nativa con Capacitor y puede agregarse a la pantalla de inicio o compilarse a APK.
