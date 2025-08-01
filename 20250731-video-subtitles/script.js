// Estado global de la aplicación
const AppState = {
  apiKey: localStorage.getItem('openai_api_key') || '',
  selectedFile: null,
  isProcessing: false,
  subtitles: null,
};

// Elementos del DOM
const elements = {
  apiKey: document.getElementById('apiKey'),
  saveApiKey: document.getElementById('saveApiKey'),
  apiStatus: document.getElementById('apiStatus'),
  uploadArea: document.getElementById('uploadArea'),
  videoFile: document.getElementById('videoFile'),
  fileInfo: document.getElementById('fileInfo'),
  fileName: document.getElementById('fileName'),
  fileSize: document.getElementById('fileSize'),
  videoPreview: document.getElementById('videoPreview'),
  language: document.getElementById('language'),
  model: document.getElementById('model'),
  processBtn: document.getElementById('processBtn'),
  progressSection: document.getElementById('progressSection'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  resultsSection: document.getElementById('resultsSection'),
  subtitleContent: document.getElementById('subtitleContent'),
  downloadBtn: document.getElementById('downloadBtn'),
  newProcessBtn: document.getElementById('newProcessBtn'),
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  // Cargar API key guardada
  if (AppState.apiKey) {
    elements.apiKey.value = AppState.apiKey;
    showApiStatus('API Key cargada correctamente', 'success');
    updateProcessButton();
  }
}

function setupEventListeners() {
  // API Key management
  elements.saveApiKey.addEventListener('click', saveApiKey);
  elements.apiKey.addEventListener('input', () => {
    elements.apiStatus.style.display = 'none';
    updateProcessButton();
  });

  // File upload
  elements.uploadArea.addEventListener('click', () =>
    elements.videoFile.click()
  );
  elements.uploadArea.addEventListener('dragover', handleDragOver);
  elements.uploadArea.addEventListener('dragleave', handleDragLeave);
  elements.uploadArea.addEventListener('drop', handleDrop);
  elements.videoFile.addEventListener('change', handleFileSelect);

  // Process button
  elements.processBtn.addEventListener('click', processVideo);

  // Download and new process
  elements.downloadBtn.addEventListener('click', downloadSubtitles);
  elements.newProcessBtn.addEventListener('click', resetApp);
}

// API Key Management
function saveApiKey() {
  const apiKey = elements.apiKey.value.trim();

  if (!apiKey) {
    showApiStatus('Por favor ingresa una API Key válida', 'error');
    return;
  }

  if (!apiKey.startsWith('sk-')) {
    showApiStatus('La API Key debe comenzar con "sk-"', 'error');
    return;
  }

  AppState.apiKey = apiKey;
  localStorage.setItem('openai_api_key', apiKey);
  showApiStatus('API Key guardada correctamente', 'success');
  updateProcessButton();
}

function showApiStatus(message, type) {
  elements.apiStatus.textContent = message;
  elements.apiStatus.className = `api-status ${type}`;
  elements.apiStatus.style.display = 'block';
}

// File Upload Handlers
function handleDragOver(e) {
  e.preventDefault();
  elements.uploadArea.classList.add('dragover');
}

function handleDragLeave(e) {
  e.preventDefault();
  elements.uploadArea.classList.remove('dragover');
}

function handleDrop(e) {
  e.preventDefault();
  elements.uploadArea.classList.remove('dragover');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    handleFile(file);
  }
}

function handleFile(file) {
  // Validar tipo de archivo
  if (!file.type.startsWith('video/')) {
    alert('Por favor selecciona un archivo de video válido');
    return;
  }

  // Validar tamaño (25MB máximo)
  const maxSize = 25 * 1024 * 1024; // 25MB en bytes
  if (file.size > maxSize) {
    alert('El archivo es demasiado grande. El tamaño máximo es 25MB');
    return;
  }

  AppState.selectedFile = file;
  displayFileInfo(file);
  updateProcessButton();
}

function displayFileInfo(file) {
  elements.fileName.textContent = file.name;
  elements.fileSize.textContent = formatFileSize(file.size);

  // Crear URL para preview del video
  const videoUrl = URL.createObjectURL(file);
  elements.videoPreview.src = videoUrl;

  elements.fileInfo.style.display = 'block';
  elements.fileInfo.classList.add('fade-in');
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Process Button Management
function updateProcessButton() {
  const hasApiKey = AppState.apiKey && AppState.apiKey.trim() !== '';
  const hasFile = AppState.selectedFile !== null;
  const isNotProcessing = !AppState.isProcessing;

  elements.processBtn.disabled = !(hasApiKey && hasFile && isNotProcessing);
}

// Video Processing
async function processVideo() {
  if (!AppState.apiKey || !AppState.selectedFile) {
    alert('Por favor configura tu API Key y selecciona un archivo');
    return;
  }

  AppState.isProcessing = true;
  updateProcessButton();
  showProcessingUI();

  try {
    // Mostrar progreso inicial
    updateProgress(10, 'Preparando archivo para transcripción...');

    // Crear FormData para enviar a OpenAI
    const formData = new FormData();
    formData.append('file', AppState.selectedFile);
    formData.append('model', elements.model.value);
    formData.append('language', elements.language.value);
    formData.append('response_format', 'verbose_json');

    updateProgress(30, 'Enviando archivo a OpenAI...');

    // Llamada a la API de OpenAI Whisper
    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AppState.apiKey}`,
        },
        body: formData,
      }
    );

    updateProgress(70, 'Procesando transcripción...');

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error?.message || `Error HTTP: ${response.status}`
      );
    }

    const transcriptionData = await response.json();
    updateProgress(90, 'Generando subtítulos...');

    // Convertir a formato SRT
    const srtContent = convertToSRT(transcriptionData);
    AppState.subtitles = srtContent;

    updateProgress(100, 'Proceso completado');

    setTimeout(() => {
      showResults(srtContent);
    }, 500);
  } catch (error) {
    console.error('Error processing video:', error);
    hideProcessingUI();
    alert(`Error al procesar el video: ${error.message}`);
  } finally {
    AppState.isProcessing = false;
    updateProcessButton();
  }
}

function showProcessingUI() {
  elements.progressSection.style.display = 'block';
  elements.progressSection.classList.add('fade-in');
  elements.resultsSection.style.display = 'none';

  // Cambiar estado del botón
  elements.processBtn.querySelector('.btn-text').style.display = 'none';
  elements.processBtn.querySelector('.btn-loader').style.display = 'inline';
}

function hideProcessingUI() {
  elements.progressSection.style.display = 'none';
  elements.processBtn.querySelector('.btn-text').style.display = 'inline';
  elements.processBtn.querySelector('.btn-loader').style.display = 'none';
}

function updateProgress(percentage, text) {
  elements.progressFill.style.width = `${percentage}%`;
  elements.progressText.textContent = text;
}

// SRT Conversion
function convertToSRT(transcriptionData) {
  if (!transcriptionData.segments || transcriptionData.segments.length === 0) {
    // Si no hay segmentos, crear uno con todo el texto
    return `1
00:00:00,000 --> 00:00:10,000
${transcriptionData.text || 'Sin transcripción disponible'}

`;
  }

  let srtContent = '';

  transcriptionData.segments.forEach((segment, index) => {
    const startTime = formatTime(segment.start);
    const endTime = formatTime(segment.end);
    const text = segment.text.trim();

    srtContent += `${index + 1}
${startTime} --> ${endTime}
${text}

`;
  });

  return srtContent;
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const milliseconds = Math.floor((seconds % 1) * 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')},${milliseconds
    .toString()
    .padStart(3, '0')}`;
}

// Results Display
function showResults(srtContent) {
  hideProcessingUI();

  elements.subtitleContent.textContent = srtContent;
  elements.resultsSection.style.display = 'block';
  elements.resultsSection.classList.add('fade-in');

  // Scroll to results
  elements.resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Download Functionality
function downloadSubtitles() {
  if (!AppState.subtitles) {
    alert('No hay subtítulos para descargar');
    return;
  }

  const blob = new Blob([AppState.subtitles], {
    type: 'text/plain;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = getSubtitleFileName();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

function getSubtitleFileName() {
  if (AppState.selectedFile) {
    const baseName = AppState.selectedFile.name.replace(/\.[^/.]+$/, '');
    return `${baseName}_subtitles.srt`;
  }
  return 'subtitles.srt';
}

// Reset Application
function resetApp() {
  // Reset state
  AppState.selectedFile = null;
  AppState.subtitles = null;
  AppState.isProcessing = false;

  // Reset UI
  elements.videoFile.value = '';
  elements.fileInfo.style.display = 'none';
  elements.progressSection.style.display = 'none';
  elements.resultsSection.style.display = 'none';

  // Reset video preview
  if (elements.videoPreview.src) {
    URL.revokeObjectURL(elements.videoPreview.src);
    elements.videoPreview.src = '';
  }

  updateProcessButton();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Error Handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  if (AppState.isProcessing) {
    hideProcessingUI();
    AppState.isProcessing = false;
    updateProcessButton();
    alert('Ocurrió un error inesperado. Por favor intenta nuevamente.');
  }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (elements.videoPreview.src) {
    URL.revokeObjectURL(elements.videoPreview.src);
  }
});
