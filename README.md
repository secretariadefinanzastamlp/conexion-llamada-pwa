# Conexión de llamada

Aplicación web progresiva (PWA) para llamar desde un celular usando `tel:` y mantener historial local.

## Requisitos

- Node.js 18+
- npm
- Android Studio (para generar el APK)

## Ejecutar localmente

```bash
python3 -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

## Convertir a Android con Capacitor

```bash
npm install
npx cap add android
npx cap sync
npx cap open android
```

En Android Studio compila el APK desde:

```text
Build > Build Bundle(s) / APK(s) > Build APK
```

## Funcionalidad real

La aplicación realiza la llamada con:

```javascript
window.location.href = `tel:${number}`;
```

Esto funciona correctamente en dispositivos móviles reales, especialmente cuando la app está instalada como aplicación Android.
