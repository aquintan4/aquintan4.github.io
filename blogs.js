const blogPosts = [
  {
    id: "hexapod-from-sketches-to-walking-robot",
    date: "2026-01-30",
    title: "From Sketches to a Walking Robot: Developing a Hexapod Prototype",
    excerpt:
      "A full development cycle of a hexapod",
    cover: "assets/blog_resources/robot.png",
    tags: ["Mechatronics"],

    content: [
      {
        type: "callout",
        variant: "info",
        title: "Context",
        text:
          "This hexapod was developed for the Mechatronics course. The goal wasn’t just “make it walk”, but to go through the **end-to-end lifecycle of a robotic system."
      },

      { type: "h4", text: "Project Requirements and Constraints" },
      {
        type: "ul",
        items: [
          "Legged platform (no wheels)",
          "Max size: **30 × 30 × 30 cm**",
          "Fully designed + integrated by the team"
        ]
      },
      {
        type: "p",
        text:
          "These constraints shaped everything early: **weight**, **power**, **mechanical robustness**, and assembly strategy. We started with quick sketches and early CAD in **FreeCAD** to explore layouts and component fit."
      },

      { type: "divider" },

      { type: "h4", text: "Iterative Design and Prototyping" },
      {
        type: "quote",
        text:
          "Design → Print → Assemble → Test → Redesign → Repeat."
      },
      {
        type: "p",
        text:
          "Most parts did *not* work on the first attempt. Some didn’t fit servos properly, others deformed under load, and a few broke during testing. Iteration was frustrating sometimes — but it’s where the real learning happened: **tolerances improved**, weak points got reinforced, and the structure became reliable."
      },

      { type: "h4", text: "Why a Hexapod?" },
      {
        type: "p",
        text:
          "We chose a hexapod for **static stability**. With a **tripod gait**, the robot keeps three legs on the ground, forming a stable support polygon that contains the center of mass — avoiding complex dynamic balancing."
      },

      { type: "h4", text: "Mechanical Design Philosophy" },
      {
        type: "ul",
        items: [
          "Minimize screws/fasteners where possible",
          "Prefer **press-fit** joints for maintainability",
          "Add bearings in critical points to reduce friction/wear"
        ]
      },
      {
        type: "p",
        text:
          "The final structure aimed for a balance: **simple**, **rigid**, and **serviceable**."
      },

      { type: "divider" },

      { type: "h4", text: "Actuator Selection and Torque" },
      {
        type: "p",
        text:
          "We initially planned to use **SG90 micro servos** everywhere for cost and weight, but torque estimates showed they’d run near their limit (especially when lifting the body). Running actuators at max torque reduces reliability."
      },
      {
        type: "callout",
        variant: "note",
        title: "Hybrid servo strategy",
        text:
          "• **SG90** for coxa joints\n• **Parallax high-torque servos** for femur joints\n\nThis kept weight/cost controlled while providing sufficient lifting capability."
      },

      { type: "h4", text: "Orientation Control and IMU Drift" },
      {
        type: "p",
        text:
          "To achieve straight-line motion, we used an **IMU** as an orientation reference and corrected yaw during locomotion. However, IMUs are *relative* sensors: drift accumulates over time. This works well for short trajectories, but long-term navigation needs an absolute reference (visual markers, camera tracking, GPS, etc.)."
      },

      { type: "h4", text: "Obstacle Detection and Behavioral Control" },
      {
        type: "p",
        text:
          "Obstacle detection used an **HC-SR04 ultrasonic sensor** mounted on a scanning servo. The behavior was organized as a **finite state machine (FSM)** to keep development and debugging clean and extendable."
      },

      { type: "h4", text: "Power Management Challenges" },
      {
        type: "p",
        text:
          "Early versions powered Arduino + servos from the same battery, and voltage drops caused resets under load. We fixed it by separating supplies:"
      },
      {
        type: "ul",
        items: [
          "Dedicated supply for **Arduino + sensors**",
          "Separate Li-ion for **servos**, regulated to **5V**"
        ]
      },
      {
        type: "callout",
        variant: "success",
        title: "Result",
        text:
          "System stability improved immediately: fewer resets, more repeatable gait performance, and cleaner sensor readings."
      },

      { type: "divider" },

      { type: "h4", text: "Testing and Validation" },
      {
        type: "ul",
        items: [
          "**Load** tests",
          "Gait validation",
          "Straight-line evaluation",
          "Obstacle avoidance trials",
          "Long-duration operation"
        ]
      },
      {
        type: "p",
        text:
          "Only after multiple rounds of testing + tweaks did the robot reach stable, repeatable behavior."
      },

      { type: "h4", text: "Demo Video" },
      {
        type: "video",
        // Dropbox direct-ish stream (raw=1)
        src: "https://www.dropbox.com/scl/fi/iy9ce1x3h1j9na7a9x46l/hexapodo_video.mp4?rlkey=ps5pi55trdk393wgwumsy095s&raw=1",
        caption: "Embedded playback inside the portfolio — no external navigation."
      },

      { type: "h4", text: "Repository and Documentation" },
      {
        type: "p",
        text:
          "The repo includes **CAD models**, technical reports, user/maintenance manuals, and demo material — published to encourage learning and reuse."
      },
      {
        type: "links",
        items: [
          { label: "GitHub — hexapod_arduino", href: "https://github.com/aquintan4/hexapod_arduino" }
        ]
      },

      { type: "h4", text: "Final Reflections" },
      {
        type: "p",
        text:
          "This wasn’t just about making a robot walk. It was about learning how **mechanics, electronics, control, and software** interact in real systems — and how engineering is basically managing trade-offs: performance vs complexity, cost vs reliability."
      },
      {
        type: "img",
        src: "assets/robotillo/hexa_llave.png",
        alt: "Robotillo wrench",
        caption: "**Iteration + maintainability** mindset — always."
      }
    ]
  }
];

window.blogPosts = blogPosts;
