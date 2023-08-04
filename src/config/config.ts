const environment_prod = {
  apiUrl: 'https://api.example.com/', // Ruta de la API
  apiKey: 'CRM_MIDAS_2023', // Clave de acceso
  apiUrlSocket: '',
  configFile: {
    nroCharactersNameFile: 30,
    sizeMaxImg: 10490000, // 10.49 MB
    sizeMaxFile: 10490000, // 10.49 MB
    audioExtensions: ['mp3', 'wav', 'ogg', 'aac'],
    videoExtensions: ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv']
  }
};

const environment_dev = {
  apiUrl: 'http://localhost:80/apicrm/public/v1/', // Ruta de la API
  apiKey: 'CRM_MIDAS_2023', // Clave de acceso 
  apiUrlSocket: '',
  configFile: {
    nroCharactersNameFile: 30,
    sizeMaxImg: 10490000, // 10.49 MB
    sizeMaxFile: 10490000, // 10.49 MB
    audioExtensions: ['mp3', 'wav', 'ogg', 'aac'],
    videoExtensions: ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv']
  }
};

const isProduction = false;
export const environment = isProduction ? environment_prod : environment_dev;
