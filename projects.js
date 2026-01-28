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
  },
  {
    title: "BSA Coverage Path Planning",
    categories: ["Service Robotics"],
    image: "assets/projects/bsa.png",
    preview: "https://www.dropbox.com/scl/fi/nr7f3mcp001b5icgbgsab/p1_servicio_final.mp4?rlkey=q45lztcwn7yqhw07fb3bumeau&e=1&st=x7nzt8p3&raw=1",
    shortDesc: "Deliberative area coverage implementation using Backtracking Spiral Algorithm (BSA) on the UniBotics platform.",
    fullDescription: "Development of a coverage system for service robotics applications, such as high-end vacuum cleaners, floor scrubbers, or UV-C disinfection robots. The project focuses on the deliberative stage, where the path is planned before the robot begins movement. A primary challenge was the alignment between world coordinates and the occupancy map (provided in PNG/JPG formats); this was solved by implementing a 3D-to-2D projection matrix optimized through a Least Squares approach to ensure precise mapping between the metric environment and the image space. This project was developed as part of the UniBotics curriculum.",
    github: ""
  },
  {
    title: "Autonomous Search & Rescue",
    categories: ["Computer Vision", "Service Robotics"],
    image: "assets/projects/s&r.png",
    preview: "https://www.dropbox.com/scl/fi/k8snpndt30o5jv0cz21p5/p2_servicio_final.mp4?rlkey=irw8crtfj9djvs1w5tmb84dxh&e=1&st=satuwzps&raw=1",
    shortDesc: "Autonomous drone system for oceanic survivor detection using Haar Cascades and spatial deduplication.",
    fullDescription: "Developed on the UniBotics platform, this project implements an autonomous mission for a UAV to locate survivors in an ocean environment. The system executes a quadrant-based search pattern and processes the video feed through a multi-stage pipeline: first, an HSV filter isolates the ocean; then, Haar Cascades are used for face detection. To overcome the vertical orientation limits of Haar Cascades, the algorithm applies image rotations to identify survivors at multiple angles. To ensure unique counts, the system maps detections to global world coordinates and a detection treshold",
    github: ""
  },
  {
  title: "Autonomous Laser-Based Parking",
  categories: ["Service Robotics"],
  image: "assets/projects/autoparking.png",
  preview: "https://www.dropbox.com/scl/fi/d6o973yi715a4dg7f7ite/P3_video-2025-11-07_21.22.13.mp4?rlkey=i01df5yc50xstszldbxcx3bpz&e=1&st=zrznqoxy&raw=1",
  shortDesc: "Autonomous parallel parking system using 2D LiDAR for gap detection and maneuver execution.",
  fullDescription: "Developed an autonomous parking stack on the UniBotics platform that relies exclusively on LiDAR sensor data. The system implements a Finite State Machine (FSM) to orchestrate the search, alignment, and reversing maneuvers. By processing laser rangefinder data, the robot identifies available gaps between obstacles and calculates the steering angles required for a precise parallel park. The implementation focuses on reactive control, using real-time distance feedback to adjust the trajectory and avoid collisions with the curb or surrounding vehicles.",
  github: ""
  },
  {
    title: "Path Planning (with OMPL) in a Warehouse",
    categories: ["Service Robotics"],
    image: "assets/projects/logistic.png",
    preview: "https://www.dropbox.com/scl/fi/p805xcdiy52mi1wxge2iu/ACKERMAN.mp4?rlkey=mcttdk9jrdj3so6s2dsuxk13j&st=mzmzoetc&raw=1",
    shortDesc: "Advanced path planning in C-Space for Ackermann and holonomic logistics robots using the OMPL library.",
    fullDescription: "Developed a comprehensive motion planning system for logistics robots within a warehouse environment on the UniBotics platform. The project focuses on solving the navigation challenge for an Ackermann-steered robot, which introduces non-holonomic constraints. By leveraging the Open Motion Planning Library (OMPL), the system plans feasible trajectories in the Configuration Space (C-Space), allowing the robot to autonomously navigate to a shelf, perform a pick-up maneuver, and return to its origin. This implementation ensures collision-free paths while respecting the kinematic limits of the vehicle's steering geometry.",
    github: "https://github.com/aquintan4/robotica_servicio_aquintan4"
  },
  {
    title: "Laser Mapping & Occupancy Grids",
    categories: ["Mobile Robotics"],
    image: "assets/projects/mapping.png",
    preview: "https://www.dropbox.com/scl/fi/gwzv7dstku3dcsq5hd7rn/Laser_mapping-2025-12-11_14.15.49.mp4?rlkey=rgw9k8n73oaq929ctgy9pslu5&e=1&st=ndz645xn&raw=1",
    shortDesc: "Probabilistic occupancy grid mapping through odometry and LiDAR sensor integration.",
    fullDescription: "Implementation of a mapping system for service robots designed to transform sensor readings into a discrete Occupancy Grid. The system integrates the robot's pose and LiDAR distance measurements to update the probability of each cell in a grid. Bresenham's algorithm was utilized for ray-tracing, enabling precise identification of both obstacles and free space while managing sensor noise and odometry uncertainty through constant probabilistic updates.",
    github: "https://github.com/aquintan4/robotica_servicio_aquintan4"
  }
    
];