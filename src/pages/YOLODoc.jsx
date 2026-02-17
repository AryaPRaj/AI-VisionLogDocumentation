import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrackingSVG, IdentificationSVG, FaceAlignmentSVG, IntegrationSVG, ImageAnalysisPipelineSVG, VideoLiveAnalysisSVG, VideoBatchAnalysisSVG, DeepSearchSVG } from '../components/TechGraphics';
import './YOLODoc.css';

const YOLODoc = () => {
    const navigate = useNavigate();
    const [openGroups, setOpenGroups] = useState({});
    const [zoomedGraphic, setZoomedGraphic] = useState(null);

    const toggleGroup = (group) => {
        setOpenGroups(prev => ({
            ...prev,
            [group]: !prev[group]
        }));
    };

    const sections = [
        // --- YOLOv8 SECTION ---
        {
            group: "Introduction",
            title: "YOLOv8 Overview",
            content: "YOLOv8 is the latest version of the acclaimed real-time object detection and image segmentation model. Developed by Ultralytics, it introduces a new state-of-the-art model that builds upon the success of previous versions with improved performance and flexibility."
        },
        {
            group: "Introduction",
            title: "Person Detection & Tracking",
            content: "YOLOv8 is utilized as the primary engine for high-speed person detection. Once a person is detected, the system employs ByteTrack for robust temporal tracking.",
            list: [
                "YOLOv8n: Lightweight backbone for real-time FPS",
                "ByteTrack Integration: Maintains identity through Kalman filter predictions",
                "Bounding Box Optimization: Normalized coordinates for cross-resolution consistency"
            ],
            graphic: <TrackingSVG />
        },

        // --- INTEGRATION (THE GLUE) SECTION ---
        {
            group: "Introduction",
            title: "Integrated Pipeline",
            content: "The synchronization between YOLOv8 (detecting people) and InsightFace (identifying faces) is handled by the specialized 'Glue' logic.",
            list: [
                "IoU Matching: Calculates overlap between person and face boxes",
                "Identity Assignment: Links YOLO Track IDs to InsightFace Biometric IDs",
                "Temporal Smoothing: Prevents identity flickering across frames"
            ],
            graphic: <IntegrationSVG />
        },

        // --- INSIGHTFACE SECTION ---
        {
            group: "Introduction",
            title: "InsightFace overview",
            content: "InsightFace is an open-source face analysis library based on PyTorch, providing ultra-fast algorithms for detection and recognition."
        },
        {
            group: "Introduction",
            title: "Face Alignment & Cropping",
            content: "Detected faces undergo a normalization pipeline to ensure consistent identification results.",
            list: [
                "Affine Transformation: Rotates face based on 5-point landmarks",
                "Standardized Cropping: Extracts a 112x112 pixel region",
                "Normalization: Equalizes lighting and perspective"
            ],
            graphic: <FaceAlignmentSVG />
        },
        {
            group: "Introduction",
            title: "Biometric Identification",
            content: "ArcFace converts cropped faces into 512-dimensional numerical vectors (embeddings) for similarity matching.",
            list: [
                "Deep ResNet: Robust feature extraction backbone",
                "Cosine Similarity: Metric for identity verification",
                "Identity Gallery: Comparison against pre-enrolled subjects"
            ],
            graphic: <IdentificationSVG />
        },

        // --- IMAGE ANALYSIS PIPELINE SECTION ---
        {
            group: "Image Analysis Pipeline",
            title: "Image Analysis Pipeline Overview",
            content: "The image analysis pipeline in the VisionLog system follows a structured sequence to ensure accurate face recognition and person identification.",
            list: [
                "Input and Decoding: Converting raw image bytes to processing format",
                "Face Detection: Locating faces using the buffalo_l model",
                "Face Alignment: Normalizing faces for consistent representation",
                "Feature Extraction: Generating 512-D mathematical fingerprints",
                "Database Search: Comparing embeddings using Cosine Similarity",
                "Thresholding: Final identification based on confidence scores"
            ],
            graphic: <ImageAnalysisPipelineSVG />
        },
        {
            group: "Image Analysis Pipeline",
            title: "1. Input and Decoding",
            content: "The process begins when a user uploads an image through the frontend ImageAnalyzer. The backend API handles the raw data reception and conversion.",
            list: [
                "Action: API endpoint /analyze/image receives multi-part image data",
                "Process: cv2.imdecode converts raw bytes into a BGR Numpy Array",
                "Context: BGR (Blue-Green-Red) is the standard format for InsightFace processing"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "2. Face Detection (buffalo_l)",
            content: "Using the InsightFace buffalo_l model, the system scans the decoded image for facial patterns with high precision.",
            list: [
                "Bounding Box (BBox): [x1, y1, x2, y2] coordinates defining surface area",
                "Key Points (KPS): 5 landmarks (eyes, nose, mouth corners) used for the next step",
                "Detection Score: A probability metric ensuring the detected object is a face"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "3. Face Alignment",
            content: "To ensure that a person is recognized regardless of head tilt, the detected face is normalized using an internal alignment process.",
            list: [
                "Action: Affine transformations based on 5-point landmarks",
                "Normalization: Eyes and mouth are rotated to fixed relative positions",
                "Consistency: Ensures identical embeddings for various head poses"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "4. Feature Extraction (ArcFace)",
            content: "The aligned face is passed through the ArcFace deep neural network to create a unique numerical identity.",
            list: [
                "Method: Dimensionality reduction via Deep ResNet",
                "Output: A 512-dimensional vector known as an 'Embedding'",
                "Uniqueness: Acts as a mathematical fingerprint; small distance for same person, large for different"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "5. Database Search",
            content: "The 512-D vector is compared against the known database (e.g., Citrus_employees.pkl).",
            list: [
                "Metric: Cosine Similarity measures the angle between vectors (1.0 = Perfect match)",
                "Robustness: Uses Average Embedding if multiple images are registered per person",
                "Efficiency: Vectorized matrix multiplication for sub-millisecond search"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "6. Thresholding & Identification",
            content: "The system applies logical gates to the similarity scores to determine identity.",
            list: [
                "Standard Threshold: 0.35 (Default for identifying known vs. unknown)",
                "Special Case: Names ending in _Twins use a 0.7 threshold for extreme precision",
                "Logic: Score > Threshold → Name Assigned | Score < Threshold → 'Unknown'"
            ]
        },
        {
            group: "Image Analysis Pipeline",
            title: "7. Results & Visualization",
            content: "The final analysis is packages into a JSON response and rendered visually on the user's screen.",
            list: [
                "API Response: Name, confidence score, and BBox for every face",
                "Frontend Drawing: Green boxes for identified persons, Red for unknowns",
                "Metadata: JSON feedback allows for downstream system triggers"
            ]
        },

        // --- VIDEO ANALYSIS SECTION ---
        {
            group: "Video Analysis",
            title: "Video Analysis Overview",
            content: "VisionLog provides two sophisticated modes for video-based identity intelligence, catering to both real-time operational needs and post-event forensic investigations.",
            list: [
                "Real-time Identification (Live Stream): Optimized for immediate feedback using concurrent tracking and throttled biometric verification.",
                "Asynchronous Batch Analysis: Designed for deep forensic scanning of archive footage with detailed hit-logging and timeline generation."
            ]
        },
        {
            group: "Video Analysis",
            title: "2.1 Video Identification Scenario (Live stream)",
            content: "This document provides a detailed, stage-by-step breakdown of the technical process used when analyzing a video for real-time identification.",
            graphic: <VideoLiveAnalysisSVG />
        },
        {
            group: "Video Analysis",
            title: "Stage 1: File Upload & Temporary Persistence",
            content: "The video stream is intercepted by FastAPI and written to a Temporary .mp4 File using tempfile. OpenCV's VideoCapture requires a physical file path or a stable handle to decode frames efficiently.",
            list: [
                "Input: User selects video in VideoAnalyzer.jsx",
                "API: POST request sends binary stream to server",
                "Persistence: Written to disk via tempfile for random-access seek support"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 2: Multi-Model Tracking (YOLOv8 + ByteTrack)",
            content: "For every single frame in the video, the system detection and tracking engines work in tandem.",
            list: [
                "Detection: YOLOv8 locates all 'Person' class objects",
                "Tracking: ByteTrack assigns and maintains unique track_ids across occlusion",
                "Output: Bounding boxes paired with temporal identity anchors"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 3: Periodic Face Recognition (InsightFace)",
            content: "Heavy biometric recognition is throttled to maintain high processing speeds.",
            list: [
                "Trigger: Runs every 3 frames (VIDEO_SKIP_FRAMES)",
                "Detection: buffalo_l model crops face regions",
                "Extraction: ArcFace generates 512-D mathematical embeddings",
                "Threshold: Standard 0.35 similarity gate"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 4: Identity Fusion (The 'Glue')",
            content: "The system links a generic body track (YOLO) to a specific face identity (InsightFace).",
            list: [
                "Logic: Overlap check between person box and face box",
                "Metric: Intersection over Union (IoU) calculation",
                "Assignment: Links Track ID to Name (e.g., Track 1 -> 'John Doe')"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 5: Real-Time SSE Streaming",
            content: "Results are pushed to the frontend via Server-Sent Events (SSE) for low-latency feedback.",
            list: [
                "Payload: type: 'frame' event",
                "Encoding: Frame converted to Base64 string",
                "Metadata: JSON including track_ids, names, scores, and progress percentage"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 6: Identity Feed & Final Summary",
            content: "The frontend manages the visual timeline and cleans up server resources upon completion.",
            list: [
                "Identified Feed: Sidebar updates with unique discovered identities",
                "Cleanup: Server deletes temporary .mp4 file after 'complete' event"
            ]
        },

        // --- VIDEO BATCH ANALYSIS ---
        {
            group: "Video Analysis",
            title: "2.2 Video Batch Analysis",
            content: "Detailed breakdown of the asynchronous background process used for archive video analysis.",
            graphic: <VideoBatchAnalysisSVG />
        },
        {
            group: "Video Analysis",
            title: "Stage 1: Job Submission & Initialization",
            content: "Submission is handled via an asynchronous task queue returning an immediate job_id.",
            list: [
                "Request: POST /api/analyze/video/batch with scan_fps settings",
                "ID: Server generates unique UUID for the session",
                "Process: run_batch_video_analysis starts as a background FastAPI task"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 2: Background Sequential Processing",
            content: "The processor 'jumps' through the video to increase speed without missing crucial hits.",
            list: [
                "Sampling: Skips frames based on user-defined scan_fps",
                "Forensic Mode: Automatically lowers skip interval for higher granularity"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 3: Feature Extraction & Timeline Generation",
            content: "Individuals are located and identified, recording every distinct 'Hit' in the footage.",
            list: [
                "Body Search: YOLOv8 locates all subjects",
                "Face Search: InsightFace identifies against known database",
                "Logging: Hit recorded if Score > Threshold",
                "Assets: Automatic cropping of identifying thumbnails"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 4: Result Storage (Static Assets)",
            content: "Results are persisted in job-specific directories for retrieval.",
            list: [
                "Directory: /results/jobs/{job_id}/",
                "Crops: JPG files saved for hit-card previewing",
                "Data: In-memory JOBS dictionary tracks lifecycle"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 5: Frontend Polling & Progress Update",
            content: "The dashboard syncs with the background task status every 2 seconds.",
            list: [
                "Mechanism: setInterval calls GET /api/jobs/{job_id}",
                "Progress Bar: Percentage-based visual feedback",
                "Live Feed: Identified person list grows as job progresses"
            ]
        },
        {
            group: "Video Analysis",
            title: "Stage 6: Interactive Forensic Timeline",
            content: "Completion unlocks full navigation through the analyzed footage.",
            list: [
                "Identity Timeline: Complete gallery of all identified subjects",
                "Seeking: Clicking hit-cards jumps the <video> player to timestamp_seconds"
            ]
        },
        // --- PERSON BATCH SEARCH (DEEP SEARCH) ---
        {
            group: "Person Batch Search",
            title: "Person Batch Search (deep search)",
            content: "This document provides a detailed, stage-by-step breakdown of the \"Deep Search\" process used to find a specific individual across archival video footage.",
            graphic: <DeepSearchSVG />
        },
        {
            group: "Person Batch Search",
            title: "Stage 1: Dual Input & Job Submission",
            content: "Inputs: User selects a Source Video and a Target Subject photo. Parameters: scan_fps (e.g., 5 FPS) defines the search precision. API Request: /api/analyze/search/batch.",
            list: [
                "Initialization: Server generates a job_id.",
                "Files are saved to results/jobs/{job_id}/source_video.mp4 and target.jpg.",
                "Background task run_batch_person_search is launched."
            ]
        },
        {
            group: "Person Batch Search",
            title: "Stage 2: Target Feature Extraction",
            content: "Action: Before scanning the video, the system must \"know\" what it's looking for.",
            list: [
                "Process: Loads the target.jpg.",
                "Runs InsightFace Alignment.",
                "Generates the 512-D Target Embedding.",
                "Error Handling: If no face is found in the target photo, the job status is immediately set to failed."
            ]
        },
        {
            group: "Person Batch Search",
            title: "Stage 3: Frame-by-Frame Biometric Filtering",
            content: "The BatchProcessor iterates through the video: Sampling: Instead of 30 FPS, it jumps through frames based on the requested scan_fps to save time.",
            list: [
                "Detection: InsightFace scans the frame for all visible faces.",
                "Comparison: For every face found in the video, the system computes the Cosine Similarity against the 512-D Target Embedding."
            ]
        },
        {
            group: "Person Batch Search",
            title: "Stage 4: Thresholding & Match Verification",
            content: "Matching: If the similarity score is greater than or equal to the threshold (default 0.5 for search):",
            list: [
                "The frame is flagged as a Match.",
                "The face is cropped from the original frame.",
                "The crop is saved as a physical JPEG (e.g., match_frame_120.jpg)."
            ]
        },
        {
            group: "Person Batch Search",
            title: "Stage 5: Progress Reporting & Polling",
            content: "Worker: The background worker updates a shared JOBS dictionary with the current frame count and any matches found.",
            list: [
                "Frontend: PersonBatchSearch.jsx polls GET /api/jobs/{job_id} every 2 seconds.",
                "Display: The UI dynamically updates the Match Timeline as hits are discovered, allowing the user to see results while the search is still running."
            ]
        },
        {
            group: "Person Batch Search",
            title: "Stage 6: Interactive Forensic Retrieval",
            content: "Result Visualization: Once complete (or during processing), the user sees a chronological timeline of all \"hits\".",
            list: [
                "Visual Evidence: Each card displays the cropped \"face check\" and the similarity percentage.",
                "One-Click Seek: Clicking a match card automatically sets the <video> player's currentTime to the exact timestamp of that match, allowing the user to view the full context of where and when the person appeared."
            ]
        },
        // --- LIVE VISION ---
        {
            group: "Live Vision",
            title: "Live Vision Overview",
            content: "VisionLog's Live Vision module provides real-time biometric surveillance capabilities, ranging from single-camera monitoring to distributed multi-camera grids and active target hunting.",
            list: [
                "4.1 Live Intelligent Feed: Single-camera real-time identification with zero-lag buffering.",
                "4.2 Multi-Camera AI Overwatch: Distributed architecture for monitoring multiple feeds concurrently.",
                "4.3 Live Target Search: \"Active Radar\" mode to specifically hunt for a target across the entire camera grid."
            ]
        },
        {
            group: "Live Vision",
            title: "4.1 Live Intelligent Feed (Live Single Camera)",
            content: "This document provides a detailed, stage-by-step breakdown of the real-time biometric surveillance process used in the single-camera Live Stream."
        },
        {
            group: "Live Vision",
            title: "Stage 1: Connection & Protocol Handshake",
            content: "Input: User selects a source (Webcam 0, 1, or a custom rtsp:// URL). Request: The frontend LiveStream.jsx initiates a fetch request to /api/stream/live.",
            list: [
                "Response: The server returns a StreamingResponse with media_type=\"text/event-stream\" (Server-Sent Events)."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 2: Zero-Lag Frame Capture (RealTimeCapture)",
            content: "To prevent \"buffering lag\" common in RTSP, the system uses a custom RealTimeCapture class.",
            list: [
                "Worker Thread: A dedicated background thread continuously reads frames from the camera.",
                "Newest-Only Strategy: The reader only keeps the most recent frame in its buffer.",
                "Benefit: If the CPU is busy with recognition, the reader simply discards old frames. When the CPU is ready, it always gets the \"current\" reality."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 3: The Surveillance Pipeline",
            content: "For every frame polled by the API:",
            list: [
                "Detection (YOLOv8): Locates people in the frame.",
                "Identity Smoothing: Checks the FaceRecognizer cache. If a person was identified 0.5 seconds ago, the system reuses that identity to save CPU.",
                "Active Recognition: If the cache is cold, it runs the full InsightFace extraction and database search."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 4: SSE Payload Generation",
            content: "The server bundles the analysis results into a JSON event.",
            list: [
                "Payload: frame_data (Low-latency Base64 JPEG)",
                "detections: Array of objects containing track_id, name, score, and face_crop (encoded Base64).",
                "stats: Total count of Identified vs. Unknown entities."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 5: Intelligent Feed Rendering",
            content: "The \"Movie\": LiveStream.jsx continuously updates the <img> source at every incoming SSE event.",
            list: [
                "Identity Feed: As names are processed, the sidebar list is updated.",
                "De-duplication: The frontend checks if a name is already visible; if so, it \"bumps\" the existing card to the top with the new timestamp and latest face crop."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 6: Alert Generation & Log",
            content: "Pulse: Every identification triggers a \"System Pulse\" entry (LIVE IDENTIFIED: Name).",
            list: [
                "Alerts: If a person is present but the score is below the threshold, the Unknown Alerts counter increments, providing immediate situational awareness."
            ]
        },
        {
            group: "Live Vision",
            title: "4.2 Multi-Camera AI Overwatch (/live/multi-feed)",
            content: "This document provides a detailed breakdown of the technical orchestration required to manage multiple concurrent biometric surveillance nodes."
        },
        {
            group: "Live Vision",
            title: "Stage 1: Node Registration & State Segregation",
            content: "Action: User adds a new camera via the \"Add Feed\" modal.",
            list: [
                "Local State: MultiCameraFeed.jsx initializes a new CameraFeedCard component.",
                "Isolation: Each card manages its own AbortController and fetch connection. This ensures that a failure in one camera node does not impact the others."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 2: Concurrent SSE Streams",
            content: "Network: The browser maintains multiple simultaneous persistent connections to /api/stream/live.",
            list: [
                "Resource Management: Each stream runs a separate instance of RealTimeCapture on the server, leveraging multi-core CPUs for parallel image processing."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 3: Distributed Detection Processing",
            content: "Inside each CameraFeedCard: Incoming Frame is decoded and rendered to the card's specific video area.",
            list: [
                "Identification Event: When the backend identifies a face, it sends the standard detection object (Track ID, Name, Score, Face Crop)."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 4: Centralized Intelligence Fusion",
            content: "Unlike the single feed, the Multi-Feed uses a Unified Intelligence Messenger.",
            list: [
                "Callback: Every child card reports its detections to the parent onDetection handler.",
                "Normalization: The parent component handles the global totalIdentified and totalAlerts counters across all active cameras."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 5: Log Throttling & De-Spamming",
            content: "In a multi-camera setup, the same person might be visible on multiple screens or trigger many detections per second.",
            list: [
                "Throttle Key: The system creates a key: cameraName_personName_trackId.",
                "Logic: Detections for the same key are only added to the \"System Pulse\" log once every 2 seconds.",
                "Result: A clean, readable audit trail of person movements across different zones."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 6: Real-Time Global Oversight",
            content: "Global Feed: The right-hand panel shows the most recent \"Face Hits\" from any camera.",
            list: [
                "Visual Evidence: Each entry in the global feed displays which camera caught the subject, their identity, and a real-time thumbnail of their face for visual verification."
            ]
        },
        {
            group: "Live Vision",
            title: "4.3 Live Target Search",
            content: "This document explains the technical stages of the \"Active Radar\" mode, where a specific subject is sought across a grid of live cameras."
        },
        {
            group: "Live Vision",
            title: "Stage 1: Target Profile Distribution",
            content: "Upload: User uploads a photo of the \"Target\".",
            list: [
                "Biometric Locking: The server extracts the 512-D embedding and generates a search_id (a temporary biometric session).",
                "Global Context: This search_id is now available to any live stream node."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 2: Monitoring vs. Search Modes",
            content: "Nodes in this scenario can work in two modes:",
            list: [
                "Passive Monitoring: If no search_id is provided, the node performs standard identification.",
                "Active Search: When search_id is active, the node prioritizes matching against the target embedding over the general database."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 3: Biometric Radar Core (/search/stream/live)",
            content: "Backend: Uses api.py endpoint stream_target_search.",
            list: [
                "Comparison Engine: For every frame, the system compares all detected faces in the live feed against the single Target Embedding using a stricter similarity threshold for \"Confirmed Hit.\""
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 4: \"TARGET_HIT\" Event Trigger",
            content: "Unlike standard identification where names are streamed in the frame data, a Confirmed Match triggers a specialized SSE event.",
            list: [
                "Event Type: TARGET_HIT",
                "Data: Contains the high-resolution face crop of the suspect and the similarity score.",
                "Significance: This allows the frontend to distinguish a \"Normal Sighting\" from a \"Critical Target Match.\""
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 5: Critical Alert Intersection",
            content: "When a TARGET_HIT event is received by LiveTargetSearch.jsx:",
            list: [
                "State Trigger: A \"Target Alert\" modal appears instantly, overlaying the UI.",
                "Visual Comparison: The modal side-by-sides the \"Reference Photo\" and the \"Live Capture\" for immediate human verification.",
                "Auditory/Visual Cues: The UI flashes red and logs a CRITICAL pulse."
            ]
        },
        {
            group: "Live Vision",
            title: "Stage 6: Passive Radar UI (The Sidebar)",
            content: "Sighting Log: Even after the modal is acknowledged, the \"Target Sightings\" sidebar maintains a record.",
            list: [
                "Active Scan Effect: The target's reference photo is displayed in a \"Biometric Radar\" frame with a scanning animation, indicating which profile the AI Overmatch is currently hunting for."
            ]
        },
        {
            group: "Live Vision",
            title: "4.4 Remote Live Access (Ngrok)",
            content: "Guidance on sharing documentation access externally via Ngrok."
        },
        {
            group: "Live Vision",
            title: "Stage 1: Tunnel Initialization",
            content: "To expose the documentation server to the internet:",
            list: [
                "Command: `ngrok http 5174`",
                "Effect: Creates a secure tunnel (e.g., `https://random-id.ngrok-free.app`) pointing to your local Documentation Server.",
                "Result: Share this public URL with anyone to give them access to the VisionLog Documentation."
            ]
        },
        // --- DEV CONTAINERS SECTION ---
        {
            group: "Dev Containers",
            title: "Dev Containers Overview",
            content: "Dev containers (development containers) are Docker containers configured as full-featured, isolated development environments. By defining tools, libraries, and runtimes in a .devcontainer.json file, developers ensure consistent, reproducible setups across teams, avoiding \"it works on my machine\" issues. They are supported in VS Code, GitHub Codespaces, and IntelliJ."
        },
        {
            group: "Dev Containers",
            title: "Key Aspects of Dev Containers",
            content: "Modern development environments leverage containerization to ensure reproducibility and ease of onboarding.",
            list: [
                "Configuration: The setup is defined in a .devcontainer folder, typically using a devcontainer.json file to specify Docker images, plugins, and settings.",
                "Workflow: When opening a project, the IDE (like VS Code) reads this configuration, builds or pulls the container, and runs the editor inside it.",
                "Use Cases: Ideal for separating project dependencies, ensuring consistency, and onboarding new team members.",
                "Tools: The Dev Containers extension in VS Code allows running apps, installing VS Code extensions, and forwarding ports."
            ]
        },
        {
            group: "Dev Containers",
            title: "Benefits",
            content: "Adopting Dev Containers provides several strategic advantages for development teams.",
            list: [
                "Consistency: Every developer uses the same toolchain.",
                "Isolation: Project dependencies do not pollute the local machine.",
                "Efficiency: Easy, quick setup for new projects.",
                "Flexibility: Easily switch between different projects requiring different tools."
            ]
        },
        {
            group: "Dev Containers",
            title: "The Dev Container Workflow",
            content: "The typical dev container workflow follows these steps to create a seamless development experience:",
            list: [
                "Configuration Definition: A developer defines the required tools and settings in the devcontainer.json file, often starting from a base image or Dockerfile.",
                "Environment Initialization: When a user opens the project in a supported IDE with the Dev Containers extension, the tool reads the configuration file. It then uses the container runtime (Docker) to pull the specified image or build a custom one.",
                "Container Creation and Mounting: The IDE creates a new container based on the image. The local project source code is volume-mounted into the container, allowing seamless interaction with the codebase.",
                "Environment Setup: Any specified lifecycle scripts (e.g., postCreateCommand to install dependencies) and required IDE extensions are executed and installed inside the container.",
                "Development and Iteration: The developer works within the fully configured environment, using the local IDE interface as if everything were installed locally. All terminal commands run inside the container.",
                "Rebuilding as Needed: If the project requirements change (e.g., a new tool is needed), the devcontainer.json file is updated, and the container is rebuilt (a fast process after the initial build) to incorporate the changes.",
                "Sharing and Collaboration: The devcontainer.json file is committed to source control (e.g., Git). New team members simply clone the repository and open it in their IDE to get an identical, ready-to-code environment, drastically reducing onboarding time."
            ]
        },
        {
            group: "Dev Containers",
            title: "References & Resources",
            content: "For further study and official implementation guides, please refer to the following materials:",
            list: [
                <span key="github">GitHub: <a href="https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Introduction to Dev Containers</a></span>,
                <span key="youtube">YouTube: <a href="https://youtu.be/lYu_Acpjaq0?si=U_5k5UwEO4J3LUcx" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Dev Containers Setup Guide</a></span>
            ]
        }
    ];

    return (
        <div className="doc-layout">
            {/* --- HEADER --- */}
            <header className="doc-header">
                <div className="brand">
                    <div className="brand-logo-text" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>VisionLog Docs</div>

                </div>
                <div className="search-bar">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search documentation...</span>
                </div>
                <div className="header-actions">
                    <button className="back-btn" onClick={() => navigate('/')}>Back to Hub</button>
                    {/* Theme Toggle Placeholder */}
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#fbbf24' }}></div>
                </div>
            </header>

            {/* --- LEFT SIDEBAR (Navigation) --- */}
            <aside className="doc-sidebar-left">
                {['Introduction', 'Image Analysis Pipeline', 'Video Analysis', 'Person Batch Search', 'Live Vision', 'Dev Containers'].map(group => (
                    <div key={group} className="sidebar-group-wrapper">
                        <div
                            className={`sidebar-group-title ${openGroups[group] ? 'active' : ''}`}
                            onClick={() => toggleGroup(group)}
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <span>{group}</span>
                            <svg
                                className={`chevron ${openGroups[group] ? 'rotated' : ''}`}
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                style={{ transition: 'transform 0.2s', transform: openGroups[group] ? 'rotate(90deg)' : 'rotate(0deg)' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
                            </svg>
                        </div>

                        {/* Dropdown Content */}
                        {openGroups[group] && (
                            <div className="sidebar-group-content">
                                {sections.filter(s => s.group === group).map((s, i) => {
                                    const isSubHeader = s.title.match(/^\d+\.\d+/); // Matches "2.1", "4.1" etc.
                                    const isStage = s.title.startsWith("Stage");

                                    return (
                                        <a
                                            key={i}
                                            href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                                            className={`nav-link ${isSubHeader ? 'sub-header' : ''} ${isStage ? 'stage' : ''}`}
                                        >
                                            {s.title}
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="doc-main-content">
                <div className="breadcrumbs">
                    Docs <span>&gt;</span> Introduction <span>&gt;</span> YOLOv8 Overview
                </div>

                <h1 className="page-title">Technical Documentation</h1>

                {sections.map((s, i) => (
                    <section key={i} id={s.title.replace(/\s+/g, '-').toLowerCase()} className="content-section">
                        <div className="section-title">{s.title}</div>

                        {s.content && <p>{s.content}</p>}

                        {/* Special Note Box Example (Static for now, can be dynamic later) */}
                        {i === 0 && (
                            <div className="info-box">
                                <span className="info-icon">ⓘ</span>
                                <span className="info-text">
                                    Pro-tip: For high-density crowd scenarios, we recommend using the YOLOv8x variant for superior accuracy at the cost of slight latency.
                                </span>
                            </div>
                        )}

                        {s.graphic && (
                            <div className="graphic-container" onClick={() => setZoomedGraphic(s.graphic)}>
                                <div className="zoom-overlay-hint">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                    <span>Click to Zoom</span>
                                </div>
                                {s.graphic}
                            </div>
                        )}

                        {s.list && (
                            <ul className="feature-list">
                                {s.list.map((item, idx) => (
                                    <li key={idx}>
                                        <svg className="check-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {s.code && (
                            <div className="code-window">
                                <div className="window-header">
                                    <div className="window-dots">
                                        <div className="dot red"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot green"></div>
                                    </div>
                                    <span className="file-name">implementation.py</span>
                                </div>
                                <pre className="code-content"><code>{s.code}</code></pre>
                            </div>
                        )}
                    </section>
                ))}
            </main>

            {/* --- RIGHT SIDEBAR (TOC) --- */}
            <aside className="doc-sidebar-right">
                <div className="toc-title">On This Page</div>
                <div className="toc-list">
                    <ul>
                        {[...new Set(sections.map(s => s.group))].map((group, i) => {
                            const firstSection = sections.find(s => s.group === group);
                            return (
                                <li key={i}>
                                    <a href={`#${firstSection.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                        {group}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="help-card">
                    <h4>Need help?</h4>
                    <p>Join our developer community on Discord for real-time support.</p>
                    <button className="help-btn">Join Community</button>
                </div>
            </aside>

            {/* --- ZOOM MODAL --- */}
            {zoomedGraphic && (
                <div className="zoom-modal-overlay" onClick={() => setZoomedGraphic(null)}>
                    <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-zoom-btn" onClick={() => setZoomedGraphic(null)}>×</button>
                        {zoomedGraphic}
                    </div>
                </div>
            )}
        </div>
    );
};

export default YOLODoc;
