// src/data/projectsData.js
// Cardio Sensor 
import overview from "../assets/img/project_img/HELP/system_overview.png";
import signal_proc from "../assets/img/project_img/HELP/proc.png";
import before_d from "../assets/img/project_img/HELP//before_d.png";
import after_d from "../assets/img/project_img/HELP/After_d.png";
import denoise_result from "../assets/img/project_img/HELP/Denoise_result.png";
import distribusion from "../assets/img/project_img/HELP/distribution.png";
import fft from "../assets/img/project_img/HELP/FFT.png";
import model_pred from "../assets/img/project_img/HELP/sleep pos.png";

// FDA Clearance
import class_photo from "../assets/img/project_img/PIVOT/class_pho.jpg";
import preto from "../assets/img/project_img/PIVOT/pretotype-in-progress.png";
import preto_d from "../assets/img/project_img/PIVOT/pretotype-done.png"
import market_overview from "../assets/img/project_img/PIVOT/market-overview.png";
import market_size from "../assets/img/project_img/PIVOT/size.png";
import diagram from "../assets/img/project_img/PIVOT/physical diagram.png"

// S-EmoNet
import model_arc from "../assets/img/project_img/S-EmoNet/model architecture.png";
import gmm_relabel from "../assets/img/project_img/S-EmoNet/GMM.png";
import loss from "../assets/img/project_img/S-EmoNet/loss_overall.png";
import cm from "../assets/img/project_img/S-EmoNet/confusion_metrix.png";
import pca_before from "../assets/img/project_img/S-EmoNet/pca_summary.png"
import pca_after from "../assets/img/project_img/S-EmoNet/pca_summary_coral_aligned.png";
import demo from "../assets/img/project_img/S-EmoNet/demo.mp4";

// PAWS
import main_pin from "../assets/img/project_img/PAWS/Main board.png";
import gps_pin from "../assets/img/project_img/PAWS/gps tracker.png";
import prototype_f from "../assets/img/project_img/PAWS/prototyp_front.jpg";
import prototype_b from "../assets/img/project_img/PAWS/prototype_back.jpg";
import diag from "../assets/img/project_img/PAWS/diagram.png";
import lora_video from "../assets/img/project_img/PAWS/Real-time location demo.mp4";
import gps_video from "../assets/img/project_img/PAWS/4demoGPS.mp4";
import timer_video from "../assets/img/project_img/PAWS/4demoTimerManual.mp4";

//Bikegrid
import system from "../assets/img/project_img/BikeGrid/prediction.png"
import implentation from "../assets/img/project_img/BikeGrid/implementation.png"
import shap_1 from "../assets/img/project_img/BikeGrid/SHAP-1.png"
import shap_2 from "../assets/img/project_img/BikeGrid/SHAP-2.png"
import result from "../assets/img/project_img/BikeGrid/result.png"



export const projectsData = [
  {
    slug: "pivot-phantom-limb-pain",
    title: "PIVOT: Prosthetic Integrated Vibration Optimization Therapy",
    role: "Business Lead",
    year: "2025-2026",
    overviewTitle: "Project Overview",
    overview:
    "PIVOT (Prosthetic Integrated Vibration Optimization Therapy) is a medical device development project focused on non-invasive pain management for Phantom Limb Pain patients. Working with Dr. Goeran Fiedler, our team developed a prosthetic-integrated vibration therapy concept consisting of a flexible mesh of vibrational nodes placed between the prosthetic liner and socket, paired with a mobile app for personalized therapy control. This project covered the full early-stage product development process, from unmet-need identification and concept generation to design controls, verification and validation planning, regulatory strategy, reimbursement analysis, and commercialization planning. The result was a comprehensive whitepaper that established the technical, clinical, and business foundation for future prototyping and translational development",
      blocks: [
      {
        type: "section",
        images: [
          { src: class_photo, alt: "class photo" }
          
        ],
      },
      {
        type: "section",
        heading: "Inspiration, Ideation, and Implementation",
        paragraphs:[
          "We began by investigating the real clinical and user challenges associated with Phantom Limb Pain. Through mentor interviews, observational research, and review of current treatment options, we found that many existing solutions are invasive, difficult to access, or poorly integrated into everyday prosthetic use.",
          "Based on these insights, we designed a concept that allows users to receive targeted vibration therapy without removing their prosthesis. We developed early pretotypes and system concepts to define the product architecture, user interaction flow, and the relationship between the wearable mesh, control electronics, and Bluetooth mobile interface."
        ],
        images: [
          { src: preto, alt: "pretotype making" },
          { src: preto_d, alt: "pretotype done"}
        ],
   
      },
      {
        type: "section",
        heading: "Design Controls and Risk Analysis",
        paragraphs:[
          "The project was structured around FDA design control requirements under 21 CFR 820.30, including planning, design inputs, design outputs, design review, verification, validation, design transfer, and change control. We also defined a Design History File strategy to ensure that future development remains traceable and aligned with regulatory expectations.",
          "To support this process, we translated clinical and user needs into engineering requirements such as comfort, biocompatibility, thermal safety, mechanical durability, stable Bluetooth communication, and configurable vibration delivery. We additionally performed early human factors and hazard analysis to identify major safety and usability risks and propose mitigations for future verification and validation work"
        ],
        images: [
          {src: diagram, alt: "diagram"}
        ]
      },
      {
        type: "section",
        heading: "Market and Financial Analysis",
        paragraphs:[
          "Beyond the technical concept, we assessed the commercial potential of the product through market analysis, competitive benchmarking, reimbursement strategy, and financial modeling. We positioned PIVOT against competing pain-management modalities and identified a meaningful gap for a non-invasive, prosthetic-integrated therapy solution that supports both immediate pain relief and longitudinal symptom tracking.",
          "Our commercialization analysis also explored Medicare and private insurance pathways, including HCPCS coding strategy for prosthetic interface components. Based on the team’s assumptions, the financial model suggested a feasible long-term path to adoption, with affordability prioritized in early launch phases and reimbursement-supported growth in later stages"
        ],
        images: [
          { src: market_overview, alt: "market overview" },
          { src: market_size, alt: "market size"}
        ],
      },
      {
        type: "section",
        heading: "Future Validation and Launch Plan",
        paragraphs:[
          "The proposed roadmap includes functional prototyping, bench-level verification, early feasibility testing, pivotal clinical validation, FDA submission, manufacturing qualification, and phased market launch. Planned studies include safety, usability, and efficacy evaluation in amputee user groups, beginning with small-scale feasibility work and expanding toward multi-site validation",
          "The long-term launch plan focuses on rollout through prosthetics clinics and VA-related care settings, supported by clinical evidence generation and reimbursement development. At present, the project remains in the development phase, with prototype fabrication and future user testing identified as the next major milestones."
        ]
      },
    ],
  },
  {
    slug: "help-patch",
    title: "HELP: Heteromodal Epidermal Liquid-metal Patch",
    role: "Data Analyst and AI Engineer",
    year: "2024-2025",
    overviewTitle: "Overview",
    overview:
    "This project aims to design a wearable biosensing system that enables in-home monitoring of respiratory and cardiac signals using liquid metal (EGaIn) sensors and structural design, with a focus on early-stage sleep apnea screening.",

    blocks: [
      {
        type: "section",
        heading: "The Challenge",
        text:
          "Sleep apnea and hypopnea events are often subtle, evolving over tens of seconds with delayed interactions across breathing effort, airflow, oxygen saturation, and heart rate. Traditional PSG is accurate but bulky, expensive, and difficult to scale for routine, at-home screening."
      },
  
      {
        type: "section",
        heading: "The Goal",
        text:
          "This wearable patch is designed to enable in-home sleep monitoring and early-stage detection of sleep apnea symptoms by combining high-fidelity hardware (liquid-metal strain and ECG channels) with a dedicated multi-channel signal processing and event-detection pipeline."
      },
  
      {
        type: "section",
        heading: "My Contribution",
        text:
        "My contributions were primarily focused on signal processing and machine learning, implemented using Python and TensorFlow, with the goal of extracting stable physiological signals from noisy wearable recordings collected in real-world conditions.",
      },
      {
        type: "section",
        heading: "Core Techniques & Stack",
        text:
          "The project combines high-fidelity liquid-metal hardware with a physiology-informed software pipeline for sleep-related cardiorespiratory analysis.",
        groups: [
          {
            title: "Signal Processing Techniques",
            items: [
              "2nd-order bandpass filtering",
              "Discrete Wavelet Transform (DWT) / inverse SWT reconstruction",
              "MAD-based outlier detection",
              "Moving-window FFT for respiratory rate estimation",
              "Kalman filter-based sensor fusion for IMU orientation"
            ]
          },
          {
            title: "Machine Learning Techniques",
            items: [
              "Feature engineering for HR, HRV, respiration waveform, respiratory rate, and breathing intensity",
              "PCA for feature reduction",
              "SVM for body position classification",
              "Early-stage architecture planning for downstream sleep-event classification"
            ]
          },
          {
            title: "Tools & Frameworks",
            items: [
              "Python",
              "TensorFlow",
              "MATLAB",
              "BioRender",
              "3D printing for system prototyping"
            ]
          }
        ]
      },
      {
        type: "section",
        heading: "My Results",
        paragraphs: [
          "The result includes an success on-subject test for the designed comprehensive physiological signal processing pipeline. This begins with a robust raw-signal preprocessing framework that integrates bandpass filtering, wavelet-based decomposition, and median absolute deviation (MAD)-based outlier rejection to enhance signal quality in wearable sensing environments.",
          "Building on this foundation, I developed a moving-window FFT-based estimator for cross-subject respiratory rate tracking, enabling stable frequency-domain feature extraction under inter-individual variability.",          
          "In parallel, I constructed a posture classification pipeline combining Kalman filter-based sensor fusion, principal component analysis (PCA) for dimensionality reduction, and a support vector machine (SVM) classifier. This system achieved a mean test accuracy of 95.9% across four body positions.",
          "Together, these components establish a reliable and modular physiological feature extraction stream that supports downstream tasks such as sleep stage analysis and apnea detection",
          ]      
      },
      {
        type: "section",
        heading: "Research Context",
        text:
        "Sleep apnea is currently diagnosed primarily through polysomnography (PSG), a gold-standard but highly obtrusive procedure that must be performed in a clinical sleep lab with multiple wired sensors attached to the body. This setup often disrupts natural sleep and limits accessibility, especially for early screening. With HELP, we aim to provide a lightweight, in-home monitoring solution that can capture key cardiorespiratory patterns related to sleep apnea and hypopnea.",
        bullets: [
          "Soft EGaIn sensor patch",
          "Signal acquisition module",
          "Cardiorespiratory signal processing pipeline",
          "Wearable monitoring system with smartphone connectivity"
        ],
        images: [
          { src: overview, alt: "System overview" }
        ],
      },
  
      {
        type: "section",
        heading: "Technical Work & Result",
        subheading: "Raw Signal Processing",
        text:
          "The sampling rate was set to 500 Hz. I applied a 2nd‑order bandpass filter (0.1–10 Hz) to remove low-frequency baseline drift while preserving the main physiological dynamics in the respiratory and cardiac range.",
        images: [
          { src: signal_proc, alt: "Raw signal processing flow" }
        ]
      },
      {
        type: "section",
        sectionheading: "DWT Decomposition Filtering",
        text:
          "To further improve waveform quality, I implemented a wavelet-based signal decomposition using Discrete Wavelet Transform (DWT) to separate physiological components from ECG signals, inspired by Kwon et al. (2022) and then optimized based on our data. High-frequency coefficients around noisy ECG regions were suppressed, while low-frequency wavelet components were analyzed to preserve respiratory-related modulation. The cleaned signal was reconstructed using inverse SWT to maintain physiological trends while reducing noise.",
        images: [
          { src: before_d, alt: "Signal before wavelet denoising" },
          { src: after_d, alt: "Signal after wavelet denoising" }
        ]
      },
      {
        type: "section",
        sectionheading: "Abnormal Event Detection and Removal",
        text:
          "To handle large transient disturbances such as sneezing, coughing, or abrupt body movements, I developed a sliding-window outlier detection algorithm based on Median Absolute Deviation (MAD). The raw signal is segmented into windows where a robust modified Z-score is computed to identify abnormal spikes. Detected outliers and surrounding segments (±10 seconds) are removed to ensure stable cardiorespiratory waveform extraction for downstream analysis.",
        images: [
          { src: denoise_result, alt: "Signal after denoising and outlier removal" },
          { src: distribusion, alt: "R-peak distribution after cleaning" }
        ]
      },
  
      {
        type: "section",
        heading: "Data Analysis and Machine Learning",
        sectionheading: "Feature Engineering – Breath waveform, HR, HRV, etc.",
        paragraphs: [
          "After obtaining stable ECG and breathing waveforms, I continued with feature extraction and algorithm development to derive higher-level physiological indicators from the raw signals. The feature set includes heart rate (HR) from ECG, heart rate variability (HRV) from RR intervals, breathing waveform–based features, respiratory rate, breathing intensity, and posture / body position from inertial data.",
          "At first, I attempted to estimate respiratory rate by directly counting breathing cycles within a 60‑second window. However, this method required manual threshold adjustment because signal amplitude varied significantly across subjects and mounting conditions.",
          "To improve robustness, respiratory rate was later estimated using a moving-window FFT analysis. The signal was segmented into 10‑second windows with 5‑second overlap, and the dominant frequency peak in each spectrum was identified. Respiratory rate was then computed from the dominant frequency, and the amplitude of that spectral peak was used as an indicator of breathing intensity."
        ],
        images: [
          { src: fft, alt: "Moving-window FFT for respiratory rate estimation" }
        ]
      },
  
      {
        type: "section",
        sectionheading:
          "Machine Learning for Body Position Classification Using Accelerometer",
        paragraphs: [
          "Because the MEMS accelerometer and gyroscope are highly sensitive to noise and drift, I first implemented a Kalman filter-based sensor fusion algorithm to estimate device orientation. This fusion step corrected gyroscope drift and produced stable roll and pitch estimates for downstream posture classification.",
          "On top of the fused inertial features, I extracted posture-related motion features and applied Principal Component Analysis (PCA) to reduce the representation to three dimensions. A Support Vector Machine (SVM) classifier was then trained and evaluated using stratified 10‑fold cross-validation to classify sleep positions including supine, left lateral, right lateral, and prone. The model achieved a mean test accuracy of 95.9%."
        ],
        images: [
          { src: model_pred, alt: "Body position classification results" }
        ]
      },
      {
        type: "section",
        heading: "End Credits",
        paragraphs: [
          "📄 Research Paper : Li, Y., Lin, Y., He, A., Wang, X., Wang, X., Nyein, H., & Cui, J. (2026). Intermetallic-anchored epidermal EGaIn patch with analog constriction gates for cardiorespiratory monitoring. Science Advances. (Under Review)",
          ,"Many thanks to my PI, Professor Hnin Yin Yin Nyein, my mentors Yui and Asmita, and all the members of Nyein’s lab for their tutoring, guidance, and support throughout this project."        ]
      },
  
    ],
  },
  {
    slug: "s-emonet",
    title: "Hybrid Spiking Neural Network (SNN) for Real-Time EEG Emotion Recognition",
    role: "Researcher and Model Developer",
    year: "2024–2025",
    overviewTitle: "Overview",
    overview:
    "This project explores a low-power EEG emotion recognition framework for real-time and edge-oriented applications such as physiological therapy evaluation, adaptive human–computer interaction, and drowsiness monitoring. The model was designed around two practical constraints: maintaining competitive classification performance while moving toward low-latency, memory-efficient computation that is better aligned with neuromorphic and chip-based deployment than conventional dense ANN pipelines.", 
    blocks: [
        {
        type: "section",
        images:[
          {src: model_arc, alt: "model architecture"}
        ]
      },
      {
        type: "section",
        heading: "The Challenge",
        text:
          "While EEG-based affective computing has been explored for decades, most models are trained and evaluated purely offline, with limited discussion of computational efficiency, latency, or deployability on low-power hardware. Cross-subject EEG variability and inconsistent labeling across datasets further complicate building a robust, generalizable model."
      },
  
      {
        type: "section",
        heading: "The Goal",
        text:
          "Develop a memory-oriented, efficient hybrid CNN–SNN model that can handle cross-subject EEG data, maintain strong classification performance, and substantially reduce spiking-layer computation, paving the way for neuromorphic and edge deployment."
      },
      {
        type: "section",
        heading: "Core Techniques & Stack",
        text:
          "The project combines high-fidelity liquid-metal hardware with a physiology-informed software pipeline for sleep-related cardiorespiratory analysis.",
        groups: [
          {
            title: "Model Architecture",
            items: [
            "CNN for spatial feature extraction across multichannel EEG feature maps.",
            "Delta encoding + two LIF spiking layers for event-driven classification with sparse accumulate-only computation.",
            "LSTM for long-range temporal dependency modeling after spike-sequence generation.",
            "Architecture designed with neuromorphic compatibility in mind, especially for future deployment on low-power spiking hardware."
            ]
          },
          {
            title: "Domain Adaptation",
            items: [
            "Gaussian Mixture Model (GMM) relabeling to harmonize emotion labels across DREAMER and SEED-IV.",
            "CORAL (Correlation Alignment) to align second-order statistics across datasets.",
            "MMD (Maximum Mean Discrepancy) to reduce distributional mismatch in the latent feature space."
            ]
          },
          {
            title: "Tools & Frameworks",
            items: [
              "Python for full pipeline implementation.",
              "PyTorch-based deep learning workflow with surrogate-gradient training for non-differentiable spike functions.",
              "GPU-accelerated experimentation using Jupyter notebooks on virtualized environments (e.g., Vast.ai) to support large-scale training and ablation."
            ]
          }
        ]
      },
  
      {
        type: "section",
        heading: "The Process & Methodology",
        paragraphs: [
          "We began by exploring and evaluating data from the open datasets SEED-IV and DREAMER, two common benchmarks for EEG-based emotion recognition. When attempting to merge them into a larger training space, we encountered imbalanced and non-unified labels caused by mapping continuous self-assessment scores to categorical emotions with fixed thresholds, which introduced inconsistency and label noise.",
        ],
        images: [
          {src: gmm_relabel, alt:"gmm_relabel"}
        ]
      },
      {
        type: "section",
        paragraphs: [
          "To address this, we used a Gaussian Mixture Model (GMM) to re-cluster the latent feature space and reassign labels, initializing the GMM with SEED-IV’s predefined emotion categories so that the new clusters remained aligned with standard affective labels.",        ]
      },
      {
        type: "section",
        paragraphs: [
          "A second challenge was the mismatch in feature space between the two datasets, which made decision boundaries ambiguous when training a single classifier. We applied CORAL and MMD to align feature distributions at both centroid and covariance levels, reshaping the datasets into a more comparable latent region and reducing domain shift.",
        ],
        images: [
          {src: pca_before, alt: "misalignment"}
        ]
      },
      {
        type: "section",
        paragraphs: [
          "For the model architecture, we first reproduced the CNN–SNN design proposed by Gall et al., where a CNN acts as a feature extractor and the resulting representations are converted into spike trains for SNN-based classification. However, our problem setup involved more ambiguous, fine-grained emotion categories, and the purely CNN–SNN architecture underperformed. To capture richer temporal dependencies in EEG, we added an LSTM after the spiking block, enabling modeling of long-range dynamics beyond the local temporal structure encoded in the spike trains."
        ],    
        images: [
          {src: pca_after, alt: "fixed alignment"}
        ]
      },
  
      {
        type: "section",
        heading: "Key Insights & Pivot Points",
        paragraphs: [
          "The initial CNN–SNN configuration was not sufficient to capture longer temporal dependencies in EEG. Version 1, which used CNN feature extraction followed by delta encoding and two LIF layers, achieved only 57.93% mean test accuracy, revealing that spike-based classification alone could not deliver stable emotion decoding over extended time scales.",
          "The key pivot was adding an LSTM after the spiking block. This preserved the efficiency benefits of SNN-based classification while recovering longer-range temporal information. This single architectural change raised mean test accuracy from 57.93% to 67.87%, a gain of nearly 10 percentage points.",
          "A second major refinement came from addressing class imbalance and label uncertainty. By introducing soft label balancing and label smoothing, the final version improved mean test accuracy from 67.87% to 69.08%, and also enhanced minority-class recall, particularly for the difficult Neutral class."
        ]
      },
  
  
      {
        type: "section",
        heading: "Results & Impact",
        paragraphs: [
          "I developed a hybrid CNN–SNN–LSTM model for four-class EEG-based emotion recognition, evaluated on DREAMER and SEED-IV under cross-subject settings. The full pipeline integrates signal preprocessing, wavelet-based feature extraction, cross-dataset alignment, spike-based classification, temporal modeling, and efficiency-oriented deployment analysis. The final model achieved 69.08% test accuracy, compared to 74.88% from a CNN–LSTM ANN baseline, reflecting only a 5.8% performance trade-off despite substantially reduced spiking computation. It reached a macro F1 of 0.6622 and weighted F1 of 0.6821, indicating balanced multi-class performance. Iterative improvements increased accuracy from 57.93% to 67.87% and ultimately 69.08%. Computational analysis showed a 99.9% reduction in synaptic operations in spiking layers relative to dense ANN counterparts, while maintaining a compact footprint of 244,666 parameters (~0.93 MB), supporting efficient edge-oriented deployment.",
        ],
        images:[
          {src: loss, alt:"mean loss"},
        ],
      },
      { 
        type: "section",     
        images:[
        {src: cm, alt: " confusion metrix"}
      ]
    },
      {
        type: "section",
        subheading: "Real-world Value",
        bullets: [
          "Provided lower-latency and more energy-efficient solutions for real-time affective BCI.",
          "Verified that our neuromorphic approachs can maintains near ANN levels accuracy.",
          "Cross-subject data can be handled with our alignment method being implemented."
        ]
      },
  
      {
        type: "section",
        heading: "Live Demo",
        videos: [
          {src: demo, alt:"demo video"}
        ]
      },
  
      {
        type: "section",
        heading: "End Credits",
        paragraphs: [
          "💻 Source Code: https://github.com/Jarvis2030/EmotionNET",
          "📄 Final Report: ./SEmotionNET_report.pdf "
        ]
      }
    ]
  },
  {
    slug: "paws",
    title: "PAWS: Pet Automated Weighing and Feeding System",
    role: "Embedded Systems Developer",
    year: "2023–2024",
    overviewTitle: "Overview",
    overview:
    "For many pet owners, feeding becomes difficult when they are away from home for long hours or cannot maintain a fixed schedule. This project aims to build a low-cost embedded system that can automatically distribute food, detect whether the pet is nearby, and record post-feeding status, providing a more intelligent alternative to a basic timed dispenser.",
  
    blocks: [  
      { 
        type: "section",
        images:[
          {src: prototype_f, alt: "protoype"},
          {src: prototype_b, alt: "protoype"},
          
        ],
      },
      {
        type: "section",
        heading: "The Challenge",
        text:
          "Traditional auto-feeders usually solve only one part of the problem—scheduled food release. They often cannot verify whether the pet is actually at home, whether the correct amount of food was dispensed, or whether feeding was successfully completed.",
        
        },
  

      {
        type: "section",
        heading: "The Goal",
        text:
          "Design an STM32-based automated pet feeding system that supports both manual and scheduled feeding modes, controls food portion by weight, senses pet presence during feeding, and captures a simple record after the meal."
      },
      {
        type: "section",
        heading: "Core Techniques & Stack",
        text:
          "The project combines high-fidelity liquid-metal hardware with a physiology-informed software pipeline for sleep-related cardiorespiratory analysis.",
        groups: [
          {
            title: "Algorithmic Backbones / Hardware",
            items: [
            "Main controller boards: STM32F103VET6 & STM32F103C8T6.",
            "Feeding control: SG90 servo motor + HX711 weight sensor.",
            "Pet interaction sensing: MPU6050 + HC-SR04 ultrasonic sensor.",
            "Image capture: OV7725 camera with USB serial transmission to a PC.",
            "GPS-based presence logic: NEO-6M GPS and LoRa wireless communication."
        ]
          },
          {
            title: "Frameworks",
            items: [
              "STM32 embedded development environment and C-based firmware programming for the main control logic.",
              "ADC-based user input via variable resistor (VR) for menu navigation and parameter selection.",
              "RTC alarm interrupt for scheduled feeding mode and external interrupt handling for menu selection reliability."
            ]
          },
          {
            title: "Software/Language",
            items: [
              "C language",
              "CubeIDE",
              "Shapr3D",
            ]
          }
        ]
      },
  
      {
        type: "section",
        heading: "The Process & Methodology",
        paragraphs: [
          "The system was designed as a multi-board embedded platform centered on STM32 microcontrollers. The main board integrates sensing, feeding control, user interaction, and communication, while additional boards handle peripheral modules such as motion sensing and GPS tracking.",
          "The operation flow follows a state-based sequence: (1) User setting—choose feeding mode and set the target amount; (2) Feed—distribute food into the bowl; (3) Eat—sense whether the pet is near the bowl and interacting with it; (4) Take photo—capture an image after feeding and send it to the computer for storage or further processing.",
        ], 
        images:[
          {src: diag, alt: "d"},
        ]
        
      },
      {
        type: "section",
        paragraphs: [
          "My role mainly focused on board design, including controller selection, sensor/peripheral integration, and pin assignment planning across multiple STM32 boards; and on the main logic algorithm, including the control flow, event-driven state transitions, sensor-triggered behavior, and coordination between feeding, sensing, and communication modules."
        ],
        images:[
          {src: gps_pin, alt: "gps pin assignment"},
          {src: main_pin, alt: "main pin assignment"}
        ]

      },
  
      {
        type: "section",
        heading: "Key Insights & Pivot Points",
        paragraphs: [
          "The key design insights in this project centered on board resource allocation and protocol-level communication alignment. Because each sensor relied on a different communication protocol, building a truly interactive system required careful coordination of communication timing, protocol handling, decoding logic, and the overall control pipeline to avoid livelock or deadlock in the embedded state machine.",
          "One major challenge was debugging communication protocols. When a protocol is not correctly triggered, no response is returned, leaving very little feedback for troubleshooting. This surfaced clearly when configuring LoRa for the real-time GPS location demo: the system never activated because a UTF‑8–encoded message contained an extra trailing space, preventing the expected command from matching and silently blocking the entire pipeline.",
          "A key firmware consideration was keeping the system responsive without relying on inefficient polling. To achieve this, external interrupts were used for menu selection, and RTC alarm interrupts were used for scheduled feeding, enabling the state machine to react promptly to user input and timed events while reducing missed triggers in real-time operation."
        ]
      },
  
      {
        type: "section",
        heading: "Results & Impact",
        bullets: [
          "Designed the board-level architecture and integrated multiple embedded modules—including motor control, load sensing, ultrasonic sensing, IMU, camera, GPS, and wireless communication—into a coordinated STM32 system.",
          "Developed the main logic algorithm as a multi-state control pipeline linking user setting, scheduled triggering, feeding execution, pet sensing, and image capture into a complete embedded workflow.",
          "Improved system responsiveness and robustness using interrupt-based control for both user interaction and timed activation, reducing dependence on polling-driven logic."
        ]
      },
      {
        type: "section",
        heading: "Live Demo",
        videos: [
          {src: lora_video, alt:"lora video"},
          {src: gps_video, alt:"gps video"},
          {src: timer_video, alt:"timer video"},

        ]
      },
  
      {
        type: "section",
        heading: "End Credits",
        paragraphs: [
          "💻 Source Code: https://github.com/Jarvis2030/Auto-Pet-Feeder",
          "Special thanks to my group partner, Yu-Hsi Li, who took the lead on system assembly, integration and documentation."
        ]
      }
    ]
  },
  {
    slug: "bikegrid",
    title: "BikeGrid: Recurrent Ensemble Framework for Predictive Multi-Day Bike Usage Forecasting",
    role: "Data Scientist and ML Engineer",
    year: "2023–2024",
    overviewTitle: "Overview",
    overview:
    "A commercial co-op project with an industry partner, built an application prediiction pipeline for weekly, district-level dockless bike usage forecasting, using recurrent multi-step prediction and ensemble regression to support 7‑day operational planning - including data ingestion, model selection, and automated retraining—integrated into the client’s existing management system.",
  
    blocks: [
      {
        type: "section",
        images:[
          {src: system}
        ]
      },
      {
        type: "section",
        subheading: "The Challenge",
        text:
          "Dockless shared-bike usage in Hong Kong fluctuates strongly across districts and hours of the day, making it difficult for the company to allocate bikes efficiently with only a one-day-ahead forecast."
      },
      {
        type: "section",
        subheading: "The Goal",
        text:
          "Develop a district-wise, 7‑day forecasting system for daytime ride counts, targeting at least R² ≥ 0.90 and RMSE ≤ 15 in major service districts."
      },
      {
        type: "section",
        heading: "Core Techniques & Stack",
        text:
          "The project combines high-fidelity liquid-metal hardware with a physiology-informed software pipeline for sleep-related cardiorespiratory analysis.",
        groups: [
          {
            title: "Algorithmic Backbones",
            items: [
              "Ensemble regression models with Linear Regression as a meta-learner for final prediction calibration.",
              "Recursive multi-step forecasting: repeatedly applying a one-step model to generate a full 7‑day horizon.",
              "Comparison against baselines including ARIMA, single XGBoost, and LSTM models."
            ]
          },
          {
            title: "Tools & Frameworks",
            items: [
              "AutoML-style greedy model search and GridSearchCV for hyperparameter optimization across 13 districts and multiple model families.",
              "PyTorch and scikit-learn for model prototyping, training, and evaluation in a unified time-series forecasting pipeline.",
              "PostgreSQL (SQL) for production data access; matplotlib and Seaborn for exploratory data analysis and diagnostics."
            ]
          },
          {
            title: "Tools & Frameworks",
            items: [
              "Python for full pipeline implementation.",
              "PyTorch-based deep learning workflow with surrogate-gradient training for non-differentiable spike functions.",
              "GPU-accelerated experimentation using Jupyter notebooks on virtualized environments (e.g., Vast.ai) to support large-scale training and ablation."
            ]
          }
        ]
      },
  
      {
        type: "section",
        heading: "The Process & Methodology",
        bullets: [
          "Data fetching and visualization from the client’s database.",
          "Literature review on related time-series and demand forecasting methods.",
          "Feature engineering, including lag features and moving averages, followed by SHAP analysis.",
          "Model evaluation, hyperparameter optimization, and ensemble construction."
        ],
        images:[
          {src: shap_1},
          {src: shap_2}
        ]
      },

  
      {
        type: "section",
        heading: "Key Insights & Pivot Points",
        paragraphs: [
          "Although LSTM is a natural choice for sequential data, experiments showed uneven performance across districts: best R² around 0.81 in major areas, but dropping to roughly 0.65 elsewhere, with RMSE above 30 for a 7‑day horizon.",
          "To support a full 7‑day horizon, we adopted a recursive multi-step prediction strategy, where a one-step model is repeatedly applied, feeding each day’s prediction back as input until all 7 future days are generated.",
        ],
        images:[
          {src: implentation},
        ]
        
      },
      {
        type: "section",
        paragraphs: [
          "This recursive design allowed us to reuse well‑understood one-step models and their prior research results while extending them into a multi-day setting without training separate models for every horizon.",
          "We systematically applied GridSearchCV and an AutoML-style interface across model families (SVR, Random Forest, Gradient Boosting, XGBoost, MLP, Lasso) and their combinations. The best ensembles reached R² ≈ 0.92 and RMSE ≈ 12–13 in key districts, clearly outperforming both ARIMA and LSTM baselines (R² ≈ 0.65, RMSE ≈ 33).",
          "SHAP analysis revealed that 1‑day lag ride count and carefully chosen moving averages dominated predictive power, allowing us to prune less useful lag and window features and reduce overfitting while preserving accuracy."
        ]
      },
  
  
      {
        type: "section",
        heading: "Results",
        paragraphs: [
          " I developed a production-ready backend forecasting pipeline that ingests and preprocesses historical bike usage and weather data from a client database, performs per-district model training and selection using a recursive multi-step framework, and automatically generates 7-day forecasts via scheduled execution on a Linux VM, writing predictions back to the database for direct integration into operational systems.",
          " The approach improved performance over a single-model XGBoost baseline (R² ≈ 0.75, RMSE ≈ 21.6 in major districts) by leveraging ensemble models, achieving up to R² ≈ 0.92 and reducing RMSE to approximately 12.2–13.0. The results demonstrate that ensemble regressors combined with recursive multi-step forecasting can outperform ARIMA and LSTM for long-horizon bike demand prediction under real-world constraints.",
        ],
        images:[
          {src: result}
        ]
      },
    ]
  }

];