# 🎬 Generador de Subtítulos con IA

Una aplicación web moderna desarrollada en vanilla JavaScript que permite subir videos y generar subtítulos automáticamente utilizando la API de OpenAI Whisper.

## ✨ Características

- **Interfaz intuitiva**: Diseño moderno y responsivo con drag & drop
- **Múltiples formatos**: Soporte para MP4, MOV, AVI, MKV
- **Vista previa**: Previsualización del video antes del procesamiento
- **Múltiples idiomas**: Soporte para español, inglés, francés, alemán, italiano y portugués
- **Descarga SRT**: Genera y descarga archivos de subtítulos en formato SRT estándar
- **Progreso en tiempo real**: Indicador visual del progreso de procesamiento
- **Almacenamiento seguro**: La API Key se guarda localmente en el navegador

## 🚀 Cómo usar

### 1. Configuración inicial

1. Abre `index.html` en tu navegador web
2. Obtén tu API Key de OpenAI desde [platform.openai.com](https://platform.openai.com/api-keys)
3. Ingresa tu API Key en el campo correspondiente y haz clic en "Guardar"

### 2. Subir video

- **Opción 1**: Arrastra y suelta tu archivo de video en el área designada
- **Opción 2**: Haz clic en el área de subida para seleccionar un archivo

**Requisitos del archivo:**
- Formato: MP4, MOV, AVI, MKV
- Tamaño máximo: 25MB
- Debe contener audio para la transcripción

### 3. Configurar opciones

- **Idioma**: Selecciona el idioma principal del audio
- **Modelo**: Whisper-1 (único modelo disponible actualmente)

### 4. Generar subtítulos

1. Haz clic en "Generar Subtítulos"
2. Espera mientras se procesa el video (puede tomar varios minutos)
3. Revisa la vista previa de los subtítulos generados
4. Descarga el archivo SRT haciendo clic en "Descargar archivo SRT"

## 📁 Estructura del proyecto

```bash
video-subtitles/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y elementos multimedia
- **CSS3**: Diseño responsivo con variables CSS y animaciones
- **JavaScript ES6+**: Funcionalidad moderna con async/await
- **OpenAI Whisper API**: Transcripción de audio a texto
- **File API**: Manejo de archivos del usuario
- **Blob API**: Generación y descarga de archivos

## 🔧 Funcionalidades técnicas

### Validación de archivos

- Verificación de tipo MIME para videos
- Control de tamaño máximo (25MB)
- Validación de API Key con formato correcto

### Procesamiento

- Envío seguro a la API de OpenAI
- Manejo de errores y timeouts
- Conversión automática a formato SRT

### Interfaz de usuario

- Indicadores de progreso en tiempo real
- Animaciones suaves y transiciones
- Diseño responsivo para móviles y desktop
- Estados de carga y feedback visual

## 📋 Formato SRT

Los subtítulos se generan en formato SRT estándar:

```srt
1
00:00:00,000 --> 00:00:05,000
Primer subtítulo aquí

2
00:00:05,000 --> 00:00:10,000
Segundo subtítulo aquí
```

## ⚠️ Consideraciones importantes

### Seguridad

- La API Key se almacena únicamente en el localStorage del navegador
- No se envían datos a servidores externos excepto OpenAI
- Los archivos se procesan directamente desde el navegador

### Limitaciones

- Tamaño máximo de archivo: 25MB (limitación de OpenAI)
- Requiere conexión a internet para el procesamiento
- La calidad depende de la claridad del audio original

### Costos

- El uso de la API de OpenAI Whisper tiene costo
- Precio aproximado: $0.006 por minuto de audio
- Revisa los precios actuales en [openai.com/pricing](https://openai.com/pricing)

## 🐛 Solución de problemas

### Error de API Key

- Verifica que la API Key comience con "sk-"
- Asegúrate de tener créditos disponibles en tu cuenta OpenAI
- Revisa que la API Key tenga permisos para usar Whisper

### Error de archivo

- Verifica que el archivo sea un video válido
- Asegúrate de que el tamaño no exceda 25MB
- Confirma que el video contenga audio

### Error de red

- Verifica tu conexión a internet
- Intenta nuevamente después de unos minutos
- Revisa la consola del navegador para más detalles

## 🔄 Actualizaciones futuras

- [ ] Soporte para archivos de audio (MP3, WAV)
- [ ] Múltiples formatos de salida (VTT, ASS)
- [ ] Edición de subtítulos en línea
- [ ] Sincronización manual de tiempos
- [ ] Soporte para archivos más grandes
- [ ] Traducción automática de subtítulos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:

- Abre un issue en el repositorio
- Revisa la documentación de OpenAI Whisper
- Verifica la consola del navegador para errores detallados

---

**¡Disfruta generando subtítulos automáticamente! 🎉**.
