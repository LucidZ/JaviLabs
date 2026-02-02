// Custom SVG icons matching the circuit/tech aesthetic

export const DataScienceIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="4" fill="#C3A25D" />
    <circle cx="32" cy="32" r="12" stroke="#C3A25D" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="32" r="20" stroke="#1B3022" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="32" r="28" stroke="#1B3022" strokeWidth="1" fill="none" opacity="0.5" />

    {/* Circuit nodes */}
    <circle cx="32" cy="12" r="2" fill="#1B3022" />
    <circle cx="52" cy="32" r="2" fill="#C3A25D" />
    <circle cx="32" cy="52" r="2" fill="#1B3022" />
    <circle cx="12" cy="32" r="2" fill="#C3A25D" />

    {/* Connecting lines */}
    <line x1="32" y1="14" x2="32" y2="20" stroke="#1B3022" strokeWidth="1" />
    <line x1="50" y1="32" x2="44" y2="32" stroke="#C3A25D" strokeWidth="1" />
    <line x1="32" y1="50" x2="32" y2="44" stroke="#1B3022" strokeWidth="1" />
    <line x1="14" y1="32" x2="20" y2="32" stroke="#C3A25D" strokeWidth="1" />
  </svg>
);

export const DataVizIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chart frame */}
    <line x1="12" y1="52" x2="52" y2="52" stroke="#C3A25D" strokeWidth="2" />
    <line x1="12" y1="12" x2="12" y2="52" stroke="#C3A25D" strokeWidth="2" />

    {/* Bar chart bars with circuit styling */}
    <rect x="18" y="35" width="6" height="17" fill="#1B3022" />
    <circle cx="21" cy="33" r="2" fill="#C3A25D" />
    <line x1="21" y1="31" x2="21" y2="35" stroke="#C3A25D" strokeWidth="1" />

    <rect x="29" y="25" width="6" height="27" fill="#C3A25D" />
    <circle cx="32" cy="23" r="2" fill="#1B3022" />
    <line x1="32" y1="21" x2="32" y2="25" stroke="#1B3022" strokeWidth="1" />

    <rect x="40" y="30" width="6" height="22" fill="#1B3022" />
    <circle cx="43" cy="28" r="2" fill="#C3A25D" />
    <line x1="43" y1="26" x2="43" y2="30" stroke="#C3A25D" strokeWidth="1" />

    {/* Connecting circuit lines */}
    <line x1="21" y1="33" x2="32" y2="23" stroke="#1B3022" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" />
    <line x1="32" y1="23" x2="43" y2="28" stroke="#C3A25D" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" />
  </svg>
);

export const MobileAppIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Phone outline */}
    <rect x="20" y="8" width="24" height="48" rx="3" stroke="#C3A25D" strokeWidth="2" fill="none" />

    {/* Screen */}
    <rect x="22" y="14" width="20" height="34" fill="#1B3022" opacity="0.3" />

    {/* Circuit board pattern inside phone */}
    <line x1="26" y1="20" x2="26" y2="24" stroke="#C3A25D" strokeWidth="1" />
    <circle cx="26" cy="26" r="1.5" fill="#C3A25D" />
    <line x1="26" y1="28" x2="26" y2="32" stroke="#1B3022" strokeWidth="1" />

    <line x1="32" y1="22" x2="32" y2="28" stroke="#1B3022" strokeWidth="1" />
    <circle cx="32" cy="30" r="1.5" fill="#1B3022" />
    <line x1="32" y1="32" x2="32" y2="36" stroke="#C3A25D" strokeWidth="1" />

    <line x1="38" y1="18" x2="38" y2="24" stroke="#C3A25D" strokeWidth="1" />
    <circle cx="38" cy="26" r="1.5" fill="#C3A25D" />
    <line x1="38" y1="28" x2="38" y2="34" stroke="#1B3022" strokeWidth="1" />

    {/* Horizontal connections */}
    <line x1="26" y1="26" x2="32" y2="30" stroke="#C3A25D" strokeWidth="0.5" opacity="0.5" />
    <line x1="32" y1="30" x2="38" y2="26" stroke="#1B3022" strokeWidth="0.5" opacity="0.5" />

    {/* Home button */}
    <circle cx="32" cy="52" r="2" stroke="#C3A25D" strokeWidth="1" fill="none" />
  </svg>
);
