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
  },
  {
  title: "Visual Localization via AprilTags",
  categories: ["Computer Vision", "Mobile Robotics"],
  image: "assets/projects/apriltags.png",
  preview: "https://www.dropbox.com/scl/fi/64pv0sp056hwdg4sjn72i/visual_loc-2025-12-31_10.58.32.mp4?rlkey=1m6h2bvds4ijdww1hm0mshah7&e=1&st=350b5l3p&raw=1", // Inserta aquí el link de Dropbox si tienes vídeo
  shortDesc: "Global robot localization system using visual fiducial markers and homogeneous transformation chaining.",
  fullDescription: "Developed a precise localization stack that determines a robot's 3D pose in a pre-mapped environment using AprilTag markers. The system processes camera feeds to detect tags and compute the relative transformation between the sensor and the marker. By chaining homogeneous transformation matrices—accounting for the camera-to-robot offset and the known world positions of the tags—the algorithm estimates the robot's global coordinates. This approach effectively eliminates cumulative odometry errors by providing absolute spatial references through visual feedback.",
  github: "https://github.com/aquintan4/robotica_servicio_aquintan4"
},
{
  title: "Tequila Traction - RT Line-Following Robot with MQTT Telemetry",
  categories: ["Embedded Systems", "Real-Time Systems"],
  image: "assets/projects/TequilaTraction.png",
  preview: "https://www.dropbox.com/scl/fi/vf3ox0qhced8rwrcxt0r5/final_setr.mp4?rlkey=n12yoovoc0uieee8ikziyfw2y&raw=1",
  shortDesc: "Arduino+ESP32 line-following robot built with FreeRTOS tasks, PD control, obstacle-aware speed logic, and MQTT JSON event telemetry.",
  fullDescription: "Built a real-time line-following robot for an Embedded & Real-Time Systems course using an Arduino Uno for control and an ESP32 for IoT connectivity. The Arduino reads IR sensors to estimate line deviation, computes a PD correction to adjust motor speeds, and runs the control stack as FreeRTOS tasks with explicit priorities and periods (follow-line at 20 ms, obstacle check at 100 ms, and periodic ping at 4000 ms). An ultrasonic sensor detects the end-of-track obstacle and progressively reduces the base speed below 25 cm, then performs a full stop under 7 cm to prevent collisions. The Arduino reports runtime events to the ESP32 over a custom serial protocol; the ESP32 enforces an ACK handshake and publishes structured JSON messages to an MQTT broker over WiFi (e.g., START_LAP, OBSTACLE_DETECTED, END_LAP), enabling external monitoring and integration.",
  github: "https://github.com/aquintan4/TequilaTraction"
},
{
  title: "Vending Machine Simulator on Arduino",
  categories: ["Embedded Systems"],
  image: "assets/projects/vending.png",
  preview: "https://www.dropbox.com/scl/fi/d2fmhvicaarnzbaxp98q6/resultado_p3.mp4?rlkey=6sfvnkcqr1b9f9w2v4311osy5&e=1&st=zfmcklaa&raw=1",
  shortDesc: "Arduino-based vending machine simulator using finite state machines, hardware interrupts, cooperative threading, and non-blocking timing.",
  fullDescription: "Designed and implemented an embedded vending machine simulator on Arduino Uno for a Real-Time and Embedded Systems course. The system is structured as a finite state machine (FSM) that manages user interaction, sensor monitoring, product selection, preparation, and administrative control. Hardware interrupts are used to handle joystick and button inputs efficiently without polling, while non-blocking timing based on millis() replaces delay() to ensure continuous system responsiveness. Environmental data is acquired via DHT11 sensors, proximity is detected using an ultrasonic module, and user feedback is provided through an LCD display and LED indicators. The software architecture includes cooperative threads for LED control and joystick handling, improving modularity and code clarity. This project demonstrates real-time design principles, robust event-driven programming, and embedded system integration.",
  github: ""
},
{
  title: "Vision-Based Line Following with Optimized PID Control",
  categories: ["Mobile Robotics", "Computer Vision"],
  image: "assets/projects/f1.png",
  preview: "https://www.dropbox.com/scl/fi/gmmov38sg3j8jlrmn971z/result_2_p2.mp4?rlkey=2n1dpks17f6ydz0fv4wnm704f&e=1&st=wi7vodh9&raw=1",
  shortDesc: "Camera-based autonomous line following using optimized image processing and custom PID control.",
  fullDescription: "Developed a vision-based line-following system for a mobile robot using OpenCV and custom control logic. The camera stream is processed through HSV filtering and binary masking, followed by contour detection and centroid estimation using image moments. To increase execution frequency, the system applies dynamic region-of-interest cropping and minimizes unnecessary memory allocations. A PID controller was implemented from scratch, including anti-windup, output saturation, and error clamping. The controller dynamically adjusts angular and linear velocities to maintain stability at high speeds. Multiple experimental configurations were evaluated, leading to an optimized design that improved tracking accuracy and reduced reference discontinuities.",
  github: ""
},
{
  title: "Reactive Obstacle Avoidance using Vector Field Forces (VFF)",
  categories: ["Mobile Robotics"],
  image: "assets/projects/vff.png",
  preview: "https://www.dropbox.com/scl/fi/zevwzjpga9kszei98l7hb/Screencast-from-2024-10-27-23-42-35.webm?rlkey=jvd57u6v6nc1rry6yaqkq2wdp&e=1&st=gq4pgvsj&raw=1",
  shortDesc: "LIDAR-based reactive navigation using attractive and repulsive vector fields for real-time obstacle avoidance.",
  fullDescription: "Implemented a reactive obstacle avoidance system based on Vector Field Forces (VFF) for a mobile robot. Laser scan data is filtered geometrically to prioritize frontal obstacles and reduce irrelevant lateral measurements. A multi-stage filtering pipeline eliminates non-threatening readings and applies inverse-square distance weighting to compute a repulsive vector. A goal-oriented attractive vector is generated by transforming global target coordinates into the robot reference frame and saturating its magnitude for stability. Both vectors are combined to produce a resultant motion vector, from which angular and linear velocities are derived using atan2 and magnitude scaling. Computational optimizations minimize expensive mathematical operations, enabling high-frequency execution. System behavior was tuned experimentally via ALPHA and BETA parameters to balance safety and efficiency.",
  github: ""
},
{
  title: "Global Navigation with BFS Costmaps and Obstacle Inflation",
  categories: ["Mobile Robotics"],
  image: "assets/projects/global_nav.png",
  preview: "https://www.dropbox.com/scl/fi/7dxoeynumvftqq7bs6c98/p4_result.webm?rlkey=9rzqxjdgab1gu7005lpxn7rfz&e=1&st=v3nxrk73&raw=1",
  shortDesc: "Map-based global navigation using BFS costmap generation, obstacle inflation, and gradient-descent local motion.",
  fullDescription: "Implemented a global navigation stack for a simulated vehicle in Gazebo using a pre-built occupancy grid map. The system computes a costmap via Breadth-First Search (BFS) starting from the target, assigning accumulated distance costs to free cells while keeping obstacles and unreachable regions at infinity. To improve safety, an obstacle inflation layer expands walls into a graded repulsive region using bounded BFS and inverse-distance cost scaling, creating clearance from obstacles. For local motion, the vehicle follows the negative cost gradient by selecting the lowest-cost neighbor within a lookahead ‘donut’ region (NumPy slicing), producing smoother and more anticipatory steering than immediate-neighbor descent. Target coordinates are transformed from global to the robot frame to compute bounded linear and angular commands (V/W) with clamping for stable behavior. The result is a robust, efficient navigation pipeline with fast deliberation and safe goal-reaching behavior.",
  github: "https://github.com/urjc-docencia-robotica-movil/blog-robotica-movil-24-25-aquintan4"
},
{
  title: "Monte Carlo Localization with Parallel Ray Tracing",
  categories: ["Mobile Robotics"],
  image: "assets/projects/AMCL.png",
  preview: "https://www.dropbox.com/scl/fi/mhn8tt9sjrejyad6yvvjb/Screencast-from-2024-12-22-17-03-18.webm?rlkey=zt5u5553q4zg9j054jcbw3wi6&e=2&st=7qh6l0p5&raw=1",
  shortDesc: "Particle filter–based robot localization using odometry, laser ray tracing, and parallelized sensor simulation.",
  fullDescription: "Implemented a Monte Carlo Localization (MCL) system using particle filtering to estimate robot pose in a known map. Particles are initialized in continuous world coordinates and propagated using a probabilistic motion model derived from odometry. For sensor modeling, a custom DDA-based ray tracing algorithm simulates laser scans from each particle and compares them against real sensor data using an exponential likelihood function based on Manhattan distance. To achieve real-time performance, the implementation leverages multiprocessing across CPU cores, reduces the number of simulated laser beams, and applies step skipping in ray traversal. Weighted resampling with controlled noise refines the particle distribution over time, enabling robust convergence even with a limited number of particles. The system consistently converges to accurate pose estimates under computational constraints.",
  github: ""
},
{
  title: "Industrial Pallet Handling with ABB RobotStudio",
  categories: ["Industrial Robotics"],
  image: "assets/projects/industrial.png",
  preview: "https://www.dropbox.com/scl/fi/rcaob9ugxbbn5nitclgqo/industrial.mp4?rlkey=4136pqz2z18w11wax0gf45om5&st=hd78htzi&raw=1",
  shortDesc: "Design and programming of an ABB industrial robot cell for pallet handling using a custom end-effector and collision-safe trajectories.",
  fullDescription: "Designed and programmed an industrial robot cell in ABB RobotStudio to perform pallet handling operations. The project includes custom end-effector (EOAT) design, definition of safe approach and retreat trajectories, and sequencing of pick-and-place operations using linear and joint motions. Collision avoidance, workspace constraints, and orientation control were considered to ensure smooth and repeatable execution. The setup reflects real-world industrial automation workflows through offline programming and validation.",
  github: ""
},
{
  title: "Low-Level Control and Kinematics of a 5-DoF Manipulator",
  categories: ["Industrial Robotics"],
  image: "assets/projects/dht.png",
  preview: "https://www.dropbox.com/scl/fi/cx2ok06wjj932pnqz2a7q/bajo_nivel.mp4?rlkey=vt5e63sa1r9pq4993o4tjc935&st=0dsroe3o&raw=1",
  shortDesc: "Joint-space and Cartesian control of a 5-DoF robot using analytical kinematics, inverse kinematics, and Jacobian-based differential control.",
  fullDescription: "Developed a low-level control system for a 5-DoF robotic manipulator using MATLAB and Simulink. The project includes synchronized joint-space motion based on cruise velocity, analytical forward and inverse kinematics derived from Denavit–Hartenberg parameters, and Cartesian trajectory generation through linear interpolation. An inverse kinematics solver was implemented manually, handling multiple solutions and selecting the closest configuration to the previous state. Additionally, differential kinematics control was implemented using the Jacobian pseudoinverse to map Cartesian velocities into joint commands. The system enables smooth, coordinated, and stable robot motion in both joint and Cartesian spaces.",
  github: ""
},







    
];