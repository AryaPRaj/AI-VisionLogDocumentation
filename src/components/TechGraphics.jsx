import React from 'react';

export const TrackingSVG = () => (
    <svg viewBox="0 0 800 300" className="tech-svg">
        <defs>
            <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
        </defs>
        {/* Frame 1 */}
        <rect x="50" y="50" width="150" height="200" rx="10" fill="rgba(255,255,255,0.03)" stroke="#333" />
        <rect x="80" y="80" width="40" height="80" rx="4" fill="url(#boxGrad)" stroke="#6366f1" strokeWidth="2" />
        <text x="80" y="75" fill="#6366f1" fontSize="10">ID: 01</text>
        <text x="50" y="270" fill="#666" fontSize="12">Frame N</text>

        {/* Arrow */}
        <path d="M220 150 L280 150" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Frame 2 - Occlusion */}
        <rect x="300" y="50" width="150" height="200" rx="10" fill="rgba(255,255,255,0.03)" stroke="#333" />
        <rect x="330" y="80" width="60" height="120" rx="4" fill="rgba(100,100,100,0.5)" /> {/* Obstacle */}
        <rect x="340" y="90" width="20" height="40" rx="2" fill="none" stroke="#6366f1" strokeDasharray="4" />
        <text x="340" y="85" fill="#6366f1" fontSize="10" opacity="0.6">ID: 01 (Predicted)</text>
        <text x="300" y="270" fill="#666" fontSize="12">Frame N+1 (Occlusion)</text>

        {/* Arrow */}
        <path d="M470 150 L530 150" stroke="#444" strokeWidth="2" />

        {/* Frame 3 - Re-ID */}
        <rect x="550" y="50" width="150" height="200" rx="10" fill="rgba(255,255,255,0.03)" stroke="#333" />
        <rect x="620" y="100" width="40" height="80" rx="4" fill="url(#boxGrad)" stroke="#6366f1" strokeWidth="2" />
        <text x="620" y="95" fill="#6366f1" fontSize="10">ID: 01 (Restored)</text>
        <text x="550" y="270" fill="#666" fontSize="12">Frame N+5 (Re-ID)</text>

        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#444" />
            </marker>
        </defs>
    </svg>
);

export const FaceAlignmentSVG = () => (
    <svg viewBox="0 0 800 250" className="tech-svg">
        {/* Raw Detection */}
        <rect x="50" y="50" width="150" height="150" rx="4" fill="rgba(255,255,255,0.03)" stroke="#444" />
        <circle cx="125" cy="110" r="40" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" />
        <line x1="110" y1="100" x2="112" y2="100" stroke="#ef4444" strokeWidth="2" /> {/* eye 1 */}
        <line x1="138" y1="100" x2="140" y2="100" stroke="#ef4444" strokeWidth="2" /> {/* eye 2 */}
        <text x="50" y="220" fill="#94a3b8" fontSize="12">SCRFD Raw Detection</text>

        {/* Arrow */}
        <path d="M220 125 L280 125" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Landmarks & Rotation */}
        <rect x="325" y="50" width="150" height="150" rx="4" fill="rgba(255,255,255,0.03)" stroke="#444" />
        <g transform="rotate(15, 400, 125)">
            <circle cx="400" cy="110" r="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <circle cx="385" cy="100" r="2" fill="#6366f1" /> {/* eye */}
            <circle cx="415" cy="100" r="2" fill="#6366f1" /> {/* eye */}
            <circle cx="400" cy="115" r="2" fill="#6366f1" /> {/* nose */}
            <line x1="385" y1="130" x2="415" y2="130" stroke="#6366f1" strokeWidth="2" /> {/* mouth */}
        </g>
        <text x="325" y="220" fill="#94a3b8" fontSize="12">5-Point Alignment</text>

        {/* Arrow */}
        <path d="M500 125 L560 125" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Cropped & Normalized */}
        <rect x="600" y="70" width="112" height="112" rx="4" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
        <circle cx="656" cy="115" r="35" fill="none" stroke="#10b981" strokeWidth="2" />
        <text x="600" y="220" fill="#94a3b8" fontSize="12">112x112 Normalized Crop</text>
    </svg>
);

export const IdentificationSVG = () => (
    <svg viewBox="0 0 800 200" className="tech-svg">
        {/* Input Face */}
        <circle cx="100" cy="100" r="40" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="2" />
        <path d="M80 90 Q100 80 120 90 M90 110 Q100 120 110 110" stroke="#6366f1" fill="none" />
        <text x="70" y="160" fill="#94a3b8" fontSize="12">Face Region</text>

        {/* Step 1: ArcFace */}
        <rect x="220" y="80" width="100" height="40" rx="4" fill="#1e1e24" stroke="#444" />
        <text x="240" y="105" fill="#fff" fontSize="12">ArcFace</text>

        {/* Feature Vector */}
        <rect x="370" y="95" width="150" height="10" rx="5" fill="linear-gradient(90deg, #6366f1, #a855f7)" opacity="0.8" style={{ fill: '#6366f1' }} />
        <text x="385" y="125" fill="#94a3b8" fontSize="10">512-d Embedding</text>

        {/* Match */}
        <path d="M550 100 L600 100" stroke="#444" strokeWidth="2" />
        <text x="620" y="105" fill="#22c55e" fontSize="14" fontWeight="bold">Arya (98%)</text>

        {/* Connectors */}
        <path d="M140 100 L220 100" stroke="#444" strokeWidth="1" strokeDasharray="4" />
        <path x1="320" y1="100" x2="370" y2="100" stroke="#444" strokeWidth="1" strokeDasharray="4" />
    </svg>
);

export const IntegrationSVG = () => (
    <svg viewBox="0 0 800 250" className="tech-svg">
        {/* YOLOv8 Node */}
        <rect x="50" y="80" width="120" height="60" rx="8" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="2" />
        <text x="75" y="115" fill="#fff" fontSize="14" fontWeight="bold">YOLOv8</text>
        <text x="65" y="155" fill="#94a3b8" fontSize="10">Person Tracking</text>

        {/* Connector */}
        <path d="M170 110 L230 110" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* The Glue / IoU Match */}
        <rect x="230" y="60" width="160" height="100" rx="12" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="2" strokeDasharray="4" />
        <text x="265" y="105" fill="#fff" fontSize="14" fontWeight="bold">The 'Glue'</text>
        <text x="255" y="130" fill="#a855f7" fontSize="12">IoU Matching</text>
        <text x="245" y="180" fill="#94a3b8" fontSize="10">Identity Association</text>

        {/* Connector */}
        <path d="M390 110 L450 110" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* InsightFace Node */}
        <rect x="450" y="80" width="120" height="60" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
        <text x="465" y="115" fill="#fff" fontSize="14" fontWeight="bold">InsightFace</text>
        <text x="460" y="155" fill="#94a3b8" fontSize="10">Biometric ID</text>

        {/* Final Sync */}
        <path d="M570 110 L630 110" stroke="#444" strokeWidth="2" />
        <circle cx="680" cy="110" r="40" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
        <text x="655" y="115" fill="#22c55e" fontSize="10" fontWeight="bold">SYNCED ID</text>
    </svg>
);
export const ImageAnalysisPipelineSVG = () => (
    <svg viewBox="0 0 1000 200" className="tech-svg">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#444" />
            </marker>
            <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* Step 1: Input */}
        <rect x="20" y="60" width="120" height="80" rx="8" fill="url(#stepGrad)" stroke="#6366f1" strokeWidth="1" />
        <text x="80" y="105" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Input</text>
        <text x="80" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Image Upload</text>

        <path d="M140 100 L180 100" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 2: Detection */}
        <rect x="180" y="60" width="120" height="80" rx="8" fill="url(#stepGrad)" stroke="#6366f1" strokeWidth="1" />
        <text x="240" y="105" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Detection</text>
        <text x="240" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">buffalo_l</text>

        <path d="M300 100 L340 100" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 3: Alignment */}
        <rect x="340" y="60" width="120" height="80" rx="8" fill="url(#stepGrad)" stroke="#6366f1" strokeWidth="1" />
        <text x="400" y="105" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Alignment</text>
        <text x="400" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">5-Point KPS</text>

        <path d="M460 100 L500 100" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 4: Embedding */}
        <rect x="500" y="60" width="120" height="80" rx="8" fill="url(#stepGrad)" stroke="#6366f1" strokeWidth="1" />
        <text x="560" y="105" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Embedding</text>
        <text x="560" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">ArcFace 512-D</text>

        <path d="M620 100 L660 100" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 5: Search */}
        <rect x="660" y="60" width="120" height="80" rx="8" fill="url(#stepGrad)" stroke="#6366f1" strokeWidth="1" />
        <text x="720" y="105" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Search</text>
        <text x="720" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Cosine Similarity</text>

        <path d="M780 100 L820 100" stroke="#444" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 6: Result */}
        <rect x="820" y="60" width="120" height="80" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
        <text x="880" y="105" textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold">Result</text>
        <text x="880" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Identification</text>
    </svg>
);

export const VideoLiveAnalysisSVG = () => (
    <svg viewBox="0 0 1000 250" className="tech-svg">
        <defs>
            <marker id="liveArrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#444" />
            </marker>
            <linearGradient id="liveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* Stage 1: Persistence */}
        <rect x="20" y="50" width="140" height="100" rx="8" fill="url(#liveGrad)" stroke="#f43f5e" strokeWidth="1" />
        <text x="90" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">1. Persistence</text>
        <text x="90" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Temp .mp4 Storage</text>

        <path d="M160 100 L200 100" stroke="#444" strokeWidth="2" markerEnd="url(#liveArrowhead)" />

        {/* Stage 2: Tracking */}
        <rect x="200" y="50" width="140" height="100" rx="8" fill="url(#liveGrad)" stroke="#f43f5e" strokeWidth="1" />
        <text x="270" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">2. Tracking</text>
        <text x="270" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">YOLO + ByteTrack</text>

        <path d="M340 100 L380 100" stroke="#444" strokeWidth="2" markerEnd="url(#liveArrowhead)" />

        {/* Stage 3: Recognition */}
        <rect x="380" y="50" width="140" height="100" rx="8" fill="url(#liveGrad)" stroke="#f43f5e" strokeWidth="1" />
        <text x="450" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">3. Recognition</text>
        <text x="450" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">InsightFace (Skip:3)</text>

        <path d="M520 100 L560 100" stroke="#444" strokeWidth="2" markerEnd="url(#liveArrowhead)" />

        {/* Stage 4: Fusion */}
        <rect x="560" y="50" width="140" height="100" rx="8" fill="url(#liveGrad)" stroke="#f43f5e" strokeWidth="1" />
        <text x="630" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">4. Fusion</text>
        <text x="630" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Identity "Glue"</text>

        <path d="M700 100 L740 100" stroke="#444" strokeWidth="2" markerEnd="url(#liveArrowhead)" />

        {/* Stage 5: SSE Streaming */}
        <rect x="740" y="50" width="140" height="100" rx="8" fill="url(#liveGrad)" stroke="#f43f5e" strokeWidth="1" />
        <text x="810" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">5. SSE Output</text>
        <text x="810" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Base64 + JSON</text>

        <path d="M880 100 L920 100" stroke="#444" strokeWidth="2" markerEnd="url(#liveArrowhead)" />

        {/* Stage 6: UI Feed */}
        <rect x="920" y="50" width="60" height="100" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
        <text x="950" y="105" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">FEED</text>
    </svg>
);

export const VideoBatchAnalysisSVG = () => (
    <svg viewBox="0 0 1000 200" className="tech-svg">
        <defs>
            <marker id="batchArrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#444" />
            </marker>
            <linearGradient id="batchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* Step 1: Submission */}
        <rect x="20" y="60" width="150" height="100" rx="8" fill="url(#batchGrad)" stroke="#8b5cf6" strokeWidth="1" />
        <text x="95" y="105" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Job Submission</text>
        <text x="95" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">UUID Generation</text>

        <path d="M170 110 L210 110" stroke="#444" strokeWidth="2" markerEnd="url(#batchArrowhead)" />

        {/* Step 2: Background Proc */}
        <rect x="210" y="60" width="150" height="100" rx="8" fill="url(#batchGrad)" stroke="#8b5cf6" strokeWidth="1" />
        <text x="285" y="105" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Processing</text>
        <text x="285" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Inference (Sampling)</text>

        <path d="M360 110 L400 110" stroke="#444" strokeWidth="2" markerEnd="url(#batchArrowhead)" />

        {/* Step 3: Hits */}
        <rect x="400" y="60" width="150" height="100" rx="8" fill="url(#batchGrad)" stroke="#8b5cf6" strokeWidth="1" />
        <text x="475" y="105" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Hit Logging</text>
        <text x="475" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Thumbnail Crops</text>

        <path d="M550 110 L590 110" stroke="#444" strokeWidth="2" markerEnd="url(#batchArrowhead)" />

        {/* Step 4: Storage */}
        <rect x="590" y="60" width="150" height="100" rx="8" fill="url(#batchGrad)" stroke="#8b5cf6" strokeWidth="1" />
        <text x="665" y="105" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Persistence</text>
        <text x="665" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">JPG + Data Store</text>

        <path d="M740 110 L780 110" stroke="#444" strokeWidth="2" markerEnd="url(#batchArrowhead)" />

        {/* Step 5: Polling */}
        <rect x="780" y="60" width="120" height="100" rx="8" fill="url(#batchGrad)" stroke="#8b5cf6" strokeWidth="1" />
        <text x="840" y="105" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Status Polling</text>
        <text x="840" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10">Frontend Sync</text>

        <path d="M900 110 L940 110" stroke="#444" strokeWidth="2" markerEnd="url(#batchArrowhead)" />

        {/* Final Timeline */}
        <rect x="940" y="60" width="40" height="100" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
        <text x="960" y="115" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">FIN</text>
    </svg>
);

export const DeepSearchSVG = () => (
    <svg viewBox="0 0 1000 250" className="tech-svg">
        <defs>
            <marker id="deepArrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#444" />
            </marker>
            <linearGradient id="deepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* Stage 1: Dual Input */}
        <rect x="20" y="50" width="140" height="100" rx="8" fill="url(#deepGrad)" stroke="#06b6d4" strokeWidth="1" />
        <text x="90" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">1. Dual Input</text>
        <text x="90" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Video + Target Photo</text>

        <path d="M160 100 L200 100" stroke="#444" strokeWidth="2" markerEnd="url(#deepArrowhead)" />

        {/* Stage 2: Target Feature */}
        <rect x="200" y="50" width="140" height="100" rx="8" fill="url(#deepGrad)" stroke="#06b6d4" strokeWidth="1" />
        <text x="270" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">2. Target Ext.</text>
        <text x="270" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">512-D Embedding</text>

        <path d="M340 100 L380 100" stroke="#444" strokeWidth="2" markerEnd="url(#deepArrowhead)" />

        {/* Stage 3: Biometric Filter */}
        <rect x="380" y="50" width="140" height="100" rx="8" fill="url(#deepGrad)" stroke="#06b6d4" strokeWidth="1" />
        <text x="450" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">3. Filtering</text>
        <text x="450" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Scan_fps Sampling</text>

        <path d="M520 100 L560 100" stroke="#444" strokeWidth="2" markerEnd="url(#deepArrowhead)" />

        {/* Stage 4: Thresholding */}
        <rect x="560" y="50" width="140" height="100" rx="8" fill="url(#deepGrad)" stroke="#06b6d4" strokeWidth="1" />
        <text x="630" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">4. Verification</text>
        <text x="630" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Similarity &gt; 0.5</text>

        <path d="M700 100 L740 100" stroke="#444" strokeWidth="2" markerEnd="url(#deepArrowhead)" />

        {/* Stage 5: Reporting */}
        <rect x="740" y="50" width="140" height="100" rx="8" fill="url(#deepGrad)" stroke="#06b6d4" strokeWidth="1" />
        <text x="810" y="95" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">5. Reporting</text>
        <text x="810" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">Job Polling Sync</text>

        <path d="M880 100 L920 100" stroke="#444" strokeWidth="2" markerEnd="url(#deepArrowhead)" />

        {/* Stage 6: Seek */}
        <rect x="920" y="50" width="60" height="100" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
        <text x="950" y="105" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">SEEK</text>
    </svg>
);
