export const SITE_CONFIG = {
  name: "Shraavani Tople",
  title: "Shraavani Tople — Robotics Engineer & AI Builder",
  description:
    "Engineering systems, communities, and intelligent experiences. Robotics, AI, and community builder from India.",
  url: "https://shraavanitople.com",
  github: "https://github.com/ShraavaniTople",
  twitter: "https://twitter.com/shraavanitople",
  linkedin: "https://www.linkedin.com/in/shraavani-tople/",
  instagram: "https://instagram.com/shraavani___",
  githubUsername: "ShraavaniTople",
};

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Community", href: "#community" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "Robotics Engineer",
  "AI Builder",
  "Community Architect",
  "Researcher",
  "Hackathon Operator",
];

export const PROJECTS = [
  {
    id: "grasp-x",
    title: "GRASP-X",
    subtitle: "Generalizable Robotic Skill Learning from Vision",
    description:
      "PPO-based pick-and-place trained on a KUKA IIWA7 arm in PyBullet. End-to-end visual RL — policies process 84×84 RGB images. Domain randomization across color, mass, friction, and lighting. 80%+ training success, 60%+ zero-shot generalization on held-out objects.",
    tags: ["PyTorch", "PPO", "PyBullet", "RL", "Robotics", "Python 3.10"],
    accent: "#00ff88",
    accentDim: "rgba(0,255,136,0.1)",
    github: "https://github.com/ShraavaniTople/grasp-x",
    stats: [
      { label: "Training Success", value: "80%+" },
      { label: "Zero-Shot", value: "60%+" },
      { label: "Training Steps", value: "2M" },
      { label: "Parallel Envs", value: "4" },
    ],
    featured: true,
    size: "large" as const,
  },
  {
    id: "origin-navigation",
    title: "Origin Navigation",
    subtitle: "Autonomous ROS2 Trajectory Tracking",
    description:
      "Cubic spline interpolation + pure pursuit controller achieving C2 continuity. Validated in Gazebo with TurtleBot3. 91.9% tracking accuracy with 38 automated pytest tests.",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3", "Docker", "Python"],
    accent: "#6366f1",
    accentDim: "rgba(99,102,241,0.1)",
    github: "https://github.com/ShraavaniTople",
    stats: [
      { label: "Tracking Accuracy", value: "91.9%" },
      { label: "Automated Tests", value: "38" },
    ],
    featured: true,
    size: "normal" as const,
  },
  {
    id: "strikebot",
    title: "StrikeBot",
    subtitle: "Vision-Guided Marble Playing Robot",
    description:
      "Raspberry Pi + OpenCV system automating marble gameplay. Real-time detection pipeline: grayscale → Gaussian blur → adaptive thresholding → contour detection → centroid calc. ~1.38 m/s launch speed at ~176 RPM.",
    tags: ["OpenCV", "Raspberry Pi", "Python", "Computer Vision"],
    accent: "#f59e0b",
    accentDim: "rgba(245,158,11,0.1)",
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    stats: [
      { label: "Launch Speed", value: "1.38 m/s" },
      { label: "Motor Speed", value: "176 RPM" },
    ],
    featured: false,
    size: "normal" as const,
  },
  {
    id: "inferencecache",
    title: "InferenceCache",
    subtitle: "Tamper-Proof AI Inference Proxy",
    description:
      "Real-time AI inference proxy with Merkle audit log. Ed25519 digital signatures + SHA-256 cache keys. Wraps OpenAI with secure, cacheable API layer. Exportable logs with verifiable proofs.",
    tags: ["FastAPI", "Ed25519", "Merkle Trees", "Python", "PyNaCl"],
    accent: "#a855f7",
    accentDim: "rgba(168,85,247,0.1)",
    github: "https://github.com/ShraavaniTople/inferencecache",
    stats: [
      { label: "Signature", value: "Ed25519" },
      { label: "Hash", value: "SHA-256" },
    ],
    featured: false,
    size: "normal" as const,
  },
  {
    id: "publicai-pulse",
    title: "PublicAI Pulse",
    subtitle: "AI Governance Simulator",
    description:
      "Browser-based simulator exploring how AI governance affects public service outcomes. Interactive sliders controlling transparency and bias parameters. Real-time impact simulation on healthcare and transit systems.",
    tags: ["JavaScript", "AI Governance", "Simulation", "Education"],
    accent: "#06b6d4",
    accentDim: "rgba(6,182,212,0.1)",
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
    stats: [],
    featured: false,
    size: "normal" as const,
  },
  {
    id: "resilienceops",
    title: "ResilienceOps",
    subtitle: "Incident to Impact Orchestrator",
    description:
      "Electron + React + Tailwind desktop app for incident management. API spec change tracking, fix plan automation, and execution monitoring. Demo UI for DevOps orchestration workflows.",
    tags: ["Electron", "React", "TypeScript", "Tailwind", "Desktop"],
    accent: "#f97316",
    accentDim: "rgba(249,115,22,0.1)",
    github: "https://github.com/ShraavaniTople/resilienceops",
    stats: [],
    featured: false,
    size: "large" as const,
  },
];

export const COMMUNITY_ROLES = [
  {
    id: "wtm",
    label: "Google WTM Ambassador",
    color: "#00ff88",
    description: "Women Techmakers Ambassador — empowering women in tech across India",
    icon: "🌿",
  },
  {
    id: "ethmumbai",
    label: "ETHMumbai Organizer",
    color: "#6366f1",
    description: "Organized India's premier Ethereum hackathon bringing together Web3 builders",
    icon: "⬡",
  },
  {
    id: "htl",
    label: "Hack The League",
    color: "#f59e0b",
    description: "Co-organizer of Hack The League — premier student hackathon",
    icon: "⚡",
  },
  {
    id: "salesforce",
    label: "Salesforce Trailblazer Mentor",
    color: "#a855f7",
    description: "Mentoring developers on the Salesforce Trailblazer community platform",
    icon: "🔮",
  },
  {
    id: "gdg",
    label: "GDG Volunteer",
    color: "#ef4444",
    description: "Google Developer Groups volunteer — growing local dev ecosystems",
    icon: "🔴",
  },
  {
    id: "python",
    label: "Python Mentor",
    color: "#e5e7eb",
    description: "Mentoring beginners in Python programming and software fundamentals",
    icon: "🐍",
  },
  {
    id: "judge",
    label: "Hackathon Judge",
    color: "#c2a060",
    description: "Evaluating technical projects and innovations at hackathon competitions",
    icon: "⚖️",
  },
  {
    id: "snapchat",
    label: "Snapchat Creator Speaker",
    color: "#f97316",
    description: "Speaker at Snapchat Creator Event — tech storytelling and content creation",
    icon: "👻",
  },
];

export const TIMELINE_EVENTS = [
  {
    year: "2022",
    title: "Engineering Journey Begins",
    description: "First GitHub commit. Started computer science degree. Fell in love with building.",
    tags: ["First Commit", "CS Degree"],
  },
  {
    year: "2023",
    title: "StrikeBot — Hackathon Win",
    description:
      "Built a vision-guided marble-playing robot using Raspberry Pi and OpenCV. Real-time detection pipeline at 1.38 m/s.",
    tags: ["OpenCV", "Raspberry Pi", "Robotics", "Hackathon"],
  },
  {
    year: "2024",
    title: "Deep Learning Research Sprint",
    description:
      "IPMV/YOLO object detection, MedSegTumor medical segmentation, Hand Gesture Recognition — shipped three research projects.",
    tags: ["YOLO", "Deep Learning", "Computer Vision", "Research"],
  },
  {
    year: "2024",
    title: "Google Women Techmakers Ambassador",
    description:
      "Selected as a Google Women Techmakers Ambassador. DataStructureBooks hits 17 stars.",
    tags: ["Google WTM", "Community", "Open Source"],
  },
  {
    year: "2025",
    title: "InferenceCache — Tamper-Proof AI",
    description:
      "Built a real-time AI inference proxy with Ed25519 signatures and Merkle trees. Cryptographically secure AI logging.",
    tags: ["FastAPI", "Ed25519", "Merkle Trees", "Security"],
  },
  {
    year: "2025",
    title: "ETHMumbai & Hack The League",
    description:
      "Organized ETHMumbai, India's premier Ethereum hackathon. Co-organized Hack The League for student innovators.",
    tags: ["Web3", "Hackathon", "Organizer", "Community"],
  },
  {
    year: "2025",
    title: "Snapchat Creator Event Speaker",
    description:
      "Spoke at Snapchat Creator Event on tech storytelling and creator-developer intersection.",
    tags: ["Speaker", "Creator", "Snapchat"],
  },
  {
    year: "2025",
    title: "GRASP-X — Deep RL Robotics",
    description:
      "Trained KUKA IIWA7 arm via PPO to pick and place arbitrary objects. 80%+ success rate, 60%+ zero-shot generalization over 2M training steps.",
    tags: ["PyTorch", "PPO", "PyBullet", "Deep RL"],
  },
  {
    year: "2026",
    title: "Origin Navigation — ROS2",
    description:
      "Autonomous trajectory tracking framework with cubic spline interpolation + pure pursuit. 91.9% accuracy, 38 automated tests.",
    tags: ["ROS2", "C++", "Gazebo", "Robotics"],
  },
  {
    year: "2026",
    title: "GPF 2026 — Women in Product India",
    description:
      "Built the Great Product Festival 2026 conference website. Women in Product India initiative with React + Vite.",
    tags: ["React", "Vite", "TypeScript", "Conference"],
  },
];

export const BLOG_POSTS = [
  {
    slug: "ros2-learning-curve",
    title: "The ROS2 Learning Curve Nobody Warns You About",
    excerpt:
      "From Python scripts to distributed robotics middleware — the honest journey through ROS2's conceptual layers, lifecycle nodes, and why DDS will make you question your life choices (before it sets you free).",
    tags: ["ROS2", "Robotics", "Learning"],
    readingTime: "7 min read",
    date: "2026-03-15",
    gradient: "from-indigo-900/40 to-purple-900/40",
  },
  {
    slug: "hackathons-best-rdlab",
    title: "Why Hackathons Are the Best R&D Labs We Have",
    excerpt:
      "A defense of chaos. How 48-hour sprints produce more genuine innovation per dollar than most corporate R&D budgets — and what that tells us about how humans actually learn to build.",
    tags: ["Hackathons", "Community", "Innovation"],
    readingTime: "5 min read",
    date: "2026-02-08",
    gradient: "from-amber-900/40 to-orange-900/40",
  },
  {
    slug: "ai-governance-ux",
    title: "AI Governance Isn't Boring — It's the Most Important UX Problem",
    excerpt:
      "We built PublicAI Pulse to show that AI governance is fundamentally a design problem. The sliders that control bias and transparency are not metaphors — they are decisions being made right now.",
    tags: ["AI", "Governance", "Policy", "Design"],
    readingTime: "6 min read",
    date: "2026-01-20",
    gradient: "from-cyan-900/40 to-teal-900/40",
  },
];

export const STATS = [
  { label: "GitHub Repos", value: "26", suffix: "" },
  { label: "Communities", value: "8", suffix: "+" },
  { label: "Stars Earned", value: "20", suffix: "+" },
  { label: "Projects Shipped", value: "15", suffix: "+" },
];
