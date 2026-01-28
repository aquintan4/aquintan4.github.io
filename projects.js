const projects = [
  {
    title: "ROS 2 Navigation Lab",
    categories: ["ROS 2", "Navigation", "C++"],
    image: "assets/projects/nav_static.png",
    preview: "https://www.dropbox.com/scl/fi/d2fmhvicaarnzbaxp98q6/resultado_p3.mp4?rlkey=6sfvnkcqr1b9f9w2v4311osy5&e=1&st=zfmcklaa&raw=1", // Puede ser .mp4 también
    shortDesc: "Implementación de SLAM y navegación autónoma en entornos dinámicos.",
    fullDescription: "En este proyecto desarrollé un sistema completo de navegación utilizando Nav2. Implementé un controlador de seguimiento de rutas personalizado en C++ para mejorar la precisión en pasillos estrechos y configuré filtros de partículas para la localización (AMCL). Se re-diseñó la arquitectura de nodos para reducir la latencia de procesamiento en un 20%.",
    github: "https://github.com/aquintan4/nav-lab" 
  },
  {
    title: "Hexapod Control",
    categories: ["Kinematics", "Embedded", "Industrial"],
    image: "assets/projects/placeholder.png",
    preview: "",
    shortDesc: "Control cinemático completo para un robot hexápodo de 18 DOF.",
    fullDescription: "Desarrollo desde cero de la cinemática inversa para las 6 patas. El sistema permite diferentes tipos de marcha (tripod, wave) adaptables al terreno mediante sensores de presión en las puntas. Todo el código fue optimizado para ejecutarse en una Raspberry Pi 4 con comunicación distribuida vía ROS 2.",
    github: "" // Si está vacío, el botón no aparecerá
  }
];