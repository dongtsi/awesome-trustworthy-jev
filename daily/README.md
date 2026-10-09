# Daily papers

Grouped by first public publication date.

## 2026-10-08

- [One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292) — Separates fail-open and fail-closed errors in open decision-model guardrails; misleading option names can reverse decisions when labels enter the model input. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.12292v1) · [Code](https://github.com/ArminAzizi98/option-channel-attack)
- [Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev Across Knowledge, Reasoning, and Multilingual Tasks](https://arxiv.org/abs/2610.11978) — Compares Jev with 19 LLMs on 13 benchmarks; strong knowledge scores coexist with a marked weakness on mathematical word problems. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11978v1)
- [Can Decision Models Understand Stance? Evaluating Jev Against General-Purpose LLMs](https://arxiv.org/abs/2610.11901) — Jev matches GPT-5.6 on English VAST stance labels but trails stronger models on Chinese conversational stance, especially favor-versus-against distinctions. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11901v1)
- [Can Jev be Your Q or Policy in Reinforcement Learning?](https://arxiv.org/abs/2610.11692) — Uses frozen Jev as a policy reference, exploration judge and replay rater; gains depend on the learning role and supplied information. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11692v1)
- [Adversarial Cues in Decision Models Used as Judges: The Role of Request Presentation](https://arxiv.org/abs/2610.11436) — A colon edit increases false acceptance of explicitly wrong final answers under sorted request keys, while insertion-order requests reject both variants. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11436v1)
- [TypedBench: A Benchmark for Calibration, Framing Sensitivity, and Cost in System One Decision Models](https://arxiv.org/abs/2610.11392) — Uses policy-driven generators to test calibration, framing, abstention and cost; good error ranking does not ensure calibrated or evidence-sensitive confidence. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11392v1)
- [FastJEV: Understanding Redundancy for Compact JEV Inference](https://arxiv.org/abs/2610.11379) — Combines context-state reuse, candidate-prefix sharing and layer pruning for OmniJev; compact execution does not consistently reduce measured latency. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11379v1)
- [MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface](https://arxiv.org/abs/2610.11316) — Trains a multimodal bi-encoder with request-to-candidate contrastive learning; including options in requests improves closed-set decisions while retaining cached candidate embeddings. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11316v1)
- [Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?](https://arxiv.org/abs/2610.11135) — Tests cold-start knowledge tracing with reader swaps and matched typed inputs; Jev benefits mainly from its model prior, while supervised methods catch up with more learners. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.11135v1)

## 2026-10-07

- [JevForest: Path Voting for Budgeted Feature Acquisition](https://arxiv.org/abs/2610.10615) — Uses tree-path voting to select semantic questions under a feature budget; fewer sequential questions cost more than batching in the tested pilots. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.10615v1)
- [Where Can a Decision Model Diagnose HVAC Faults? Reasoning Demand, Physical Representation, and Robustness Under Shift](https://arxiv.org/abs/2610.09937) — Separates physical representation from reasoning in fault diagnosis; engineered features improve consistency, but stable shift performance does not imply superior absolute accuracy or useful detection. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.09937v1)
- [System Switch: When Should a Fast Decision Model Stop and Think?](https://arxiv.org/abs/2610.09683) — Tests confidence-based deferral from fast decision models to a slow visual reasoner; offline gains do not translate into Doom level completion. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.09683v1)
- [Visual Jev Rewards: Reference-Bound Verification for Multi-Subject Image Generation](https://arxiv.org/abs/2610.09328) — Trains a local Qwen verifier for joint reference identity and image conditions, then averages binary probabilities as an image-generation reward. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.09328v1)

## 2026-10-06

- [Calibrated Decisions Are Not Calibrated Probabilities: An Exact-Target Audit of Jev and Three Open Decision Models](https://zenodo.org/records/23179064) — Audits exact probability targets and human disagreement: normalized Noul better tracks stated base rates, while per-task calibration narrows the gap on human-vote distributions. `Evaluation` · [PDF](https://zenodo.org/api/records/23179064/files/velu-jev-calibration-audit.pdf/content) · [Code](https://github.com/MohitSV/jev-calibration-audit)
- [From Probabilities to Decisions: Search and Multi-Teacher Distillation with Jev](https://arxiv.org/abs/2610.09188) — Distills Jev and Qwen pairwise probabilities into small evaluators; matched-budget chess gains replicate, while retrieval gains remain uncertain. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.09188v1)
- [Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?](https://arxiv.org/abs/2610.08775) — Benchmarks agents that build reusable artifacts for large workloads; most runs lose quality relative to zero-shot calls, while selected artifacts approach Jev at lower projected API cost. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.08775v1) · [Code](https://github.com/aktsonthalia/bottled)
- [Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge](https://arxiv.org/abs/2610.08675) — Holds arithmetic and operand values fixed while swapping financial citations; Jev misses some wrong-role evidence and rejects some equivalent evidence, with column rendering changing the trade-off. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.08675v1)
- [Token-Efficient Multi-Agent Collaboration via System One-Guided Computational Division of Labor](https://arxiv.org/abs/2610.08155) — Uses a Laya controller, compact evidence reader and bounded task menus to coordinate LLM workers; reports lower GPT token use and end-to-end latency across seven benchmarks. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.08155v1)
- [When Plans Change Answers: Formalizing Cost-Accuracy Optimization for Semantic Queries](https://arxiv.org/abs/2610.08089) — Formalizes contribution-weighted semantic-query quality; v2 adds confidence-centric skipping of unscored tuples once predicted output targets are guaranteed. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.08089v2)
- [Benchmarking System One Models in Online Moderation](https://arxiv.org/abs/2610.07953) — Separates moderation rules, retrieved precedents and answer inventories across five benchmarks; Jev benefits from precedents in matched settings, while Laya often changes its operating point without better discrimination. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.07953v1) · [Code](https://github.com/FedericoMz/som-moderation-benchmark)
- [SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730) — Trains typed readouts after repeated backbone loops; eight loops improve accuracy at fixed model shape, but cost more compute and calibrate worse than three loops. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.07730v1)
- [Readout Stability in Prefill-Only Decision Models:Zero-Label Prediction and Inference-Time Compute Allocation](https://arxiv.org/abs/2610.07716) — Tests cached first-pass rankings under candidate-menu changes and compares re-asking with model cascades; ranking stability supports computation reuse but does not itself identify unlabeled accuracy. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.07716v1) · [Code](https://github.com/rlisml/jev-cascade)

## 2026-10-05

- [ufakzeka-karar: An Open Turkish Typed-Decision Model with Order-Invariant Option Scoring](https://arxiv.org/abs/2610.06744) — Scores Turkish answer options independently at shared positions to remove order effects; supervised training beats the tested REINFORCE variant, while temperature calibration degrades on held-out question types. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.06744v1)
- [JEV versus LLMs: Accuracy, Cost and Calibration on Seven Political Science Replications](https://arxiv.org/abs/2610.06625) — Replicates seven annotation and scaling studies: Jev is faster, matches or approaches comparison models on several tasks, and has no price advantage over the reported batch-rate baseline. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.06625v2)
- [SoK: Semantic Decision Engines in Network Control Loops](https://arxiv.org/abs/2610.06425) — Audits 139 network-control paper families and separates decision latency from verified service completion; queueing and coverage checks can reverse admission decisions. `Survey` · [PDF](https://arxiv.org/pdf/2610.06425v1) · [Code](https://github.com/OniReimu/SoK-JEV)
- [GraphDecide: Benchmarking System One Models on Graph Tasks](https://arxiv.org/abs/2610.06354) — Benchmarks graph structure, graph-text evidence and sequential optimization across fourteen model-interface configurations; Jev benefits from heuristic proposals but gains over fixed rules depend on the task. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.06354v1) · [Code](https://github.com/VictorYXL/JevGraphBench)

## 2026-10-04

- [Hidden Risks of Jev: An Empirical Study of Security, Privacy, and Dual Use](https://arxiv.org/abs/2610.04985) — Studies input manipulation, constrained-output privacy and defensive detection; official Jev API experiments and controlled NanoJev training experiments expose distinct risks. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.04985v1) · [Code](https://github.com/shihe98/Security_Privacy_Jev)

## 2026-10-03

- [System One Models for Wireless Decision-Making:Applications and Performance Evaluation](https://arxiv.org/abs/2610.04345) — Measures the quality/latency trade-off in antenna selection and RAN slicing: Jev responds faster, while utility gains depend on the task and execution costs. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.04345v1)

## 2026-10-02

- [Benchmarking Candidate Coverage in Typed Decision Models](https://arxiv.org/abs/2610.03387) — Pairs present and omitted reference labels at matched candidate counts; Jev and Laya show task-dependent detection versus false-rejection trade-offs. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.03387v1)
- [To Jev or Not? Evaluating the Accuracy and Efficiency of Structured Decision Models for Hate-Speech Moderation](https://arxiv.org/abs/2610.03324) — Compares six decision-model configurations for hate-speech moderation; supplied definitions and question decomposition do not consistently improve agreement with labels. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.03324v1)
- [SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073) — Specializes a shared candidate scorer with security LoRA adapters; strong in-domain gains coexist with limited latency gains over one-token generation and transfer false alarms. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.03073v1) · [Code](https://github.com/UESTC1010/SecJev)

## 2026-10-01

- [LLM2Jev: LLMs Are Already Jev-Style Decision Models -- When and How to Fine-Tune Them](https://arxiv.org/abs/2610.02076) — Studies when existing LLMs already support Jev-style decisions. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.02076v1)
- [HydroJEV: A one-second, training-free screen for cyber-attack and fault attribution in water distribution networks](https://arxiv.org/abs/2610.02048) — Uses Jev and a rule gate to triage simulated water-network alarms, reducing the workload passed to an LLM reviewer. `System` · [PDF](https://arxiv.org/pdf/2610.02048v1)
- [Code Owns the Simulation, Jev Owns the Evaluation](https://arxiv.org/abs/2610.01834) — Separates evaluating supplied consequences from simulating missing ones. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.01834v1)
- [Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079) — Evaluates typed intrusion decisions with limited labels on an NSL-KDD pilot; the study does not establish performance on live network traffic. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.01079v1) · [Code](https://github.com/jev-ids/jev-ids)
- [Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006) — Audits missing knowledge with paired evidence interventions. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.01006v1) · [Code](https://github.com/Syntheme/beyond-answer-confidence.)

## 2026-09-30

- [Tron-1B: Fast, Calibrated Typed Decisions with a Set-Attention Option Head](https://zenodo.org/records/23066522) — Introduces a bidirectional encoder with a set-attention option head; benchmark-trained results are compared with a zero-shot hosted service. `Model` · [PDF](https://zenodo.org/api/records/23066522/files/tron-1b-paper.pdf/content)
- [AnyJev Technical Report](https://arxiv.org/abs/2610.00831) — Reads option probabilities from pretrained LLMs and corrects label and position bias with prior normalization and cyclic option rotations. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.00831v1)
- [JevSpawn: Adaptive Agentic Inference through Compositional Action Spaces](https://arxiv.org/abs/2610.00437) — Explores compositional action spaces for fast agent inference. `System` · [PDF](https://arxiv.org/pdf/2610.00437v1)
- [OmniMed-Jev: Calibrating LVLM Confidence for Trustworthy Medical Multimodal Decisions via System One](https://arxiv.org/abs/2610.00381) — Studies candidate-conditioned multimodal decisions against a matched generative baseline, reporting improved calibration with task-dependent accuracy trade-offs. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.00381v1)
- [A First Glance at Jev for Network Traffic Classification: Accuracy, Processing Time, and Cost](https://arxiv.org/abs/2610.00376) — Jev is faster than the tested LLM but trails trained trees on traffic classification. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.00376v1)
- [When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496) — Finds an arithmetic rejection bottleneck despite an explicit fallback option. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.39496v1)
- [Bongard: Training Machine Intuition](https://arxiv.org/abs/2609.39111) — Trains an open System One model with outcome feedback. `Method` · [PDF](https://arxiv.org/pdf/2609.39111v1)
- [OpenJev-RLCD: A Working RLCD Implementation](https://arxiv.org/abs/2609.38850) — Implements a third-party calibrated-decision reinforcement objective. `Method` · [PDF](https://arxiv.org/pdf/2609.38850v1) · [Code](https://github.com/ZimmyGao/openjev-rlcd)
- [More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827) — Measures ordinal scale compression as candidate counts grow. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.38827v1) · [Code](https://github.com/Glax147/jev_ordinal_scale_bia)

## 2026-09-29

- [Confident Where People Disagree: A preregistered, bias-corrected test of whether TypeSafe AI’s Jev lowers its confidence when humans disagree, on ChaosNLI](https://zenodo.org/records/23032384) — Tests confidence under human disagreement with bias-corrected calibration. `Evaluation` · [PDF](https://zenodo.org/api/records/23032384/files/jevbench_paper_Khosla_2026_v1.1.pdf/content)
- [Benchmarking System One decision models against trained classifiers and language models for automated decision gates](https://arxiv.org/abs/2610.00346) — Compares typed models, trained classifiers and LLM readouts under matched requests. `Evaluation` · [PDF](https://arxiv.org/pdf/2610.00346v1)
- [Evaluating and Benchmarking the System One Model Jev](https://arxiv.org/abs/2609.37647) — Evaluates Jev across public classification, routing and reasoning datasets. Calibration and selective prediction vary with the task and decision interface. `Evaluation · Benchmark` · [PDF](https://arxiv.org/pdf/2609.37647v1)
- [Chinese-Jev: Bringing System One Model to Chinese-Language Tasks](https://arxiv.org/abs/2609.36965) — Develops a System One model for Chinese-language tasks. `Method` · [PDF](https://arxiv.org/pdf/2609.36965v1)

## 2026-09-28

- [A Noul Log Does Not Identify the Policy](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7525901) — Shows why marginal Noul probabilities do not identify a conjunction policy. `Analysis` · [PDF](https://papers.ssrn.com/sol3/Delivery.cfm/7525901.pdf?abstractid=7525901&mirid=1)
- [Calibrated to Whom? Persona and Language Effects on Cultural Values in JEV](https://arxiv.org/abs/2609.36399) — Audits persona and language effects despite highly repeatable answers. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.36399v1)
- [Dyad: Extending Large Language Models with Native Typed Decision-Making](https://arxiv.org/abs/2609.36116) — Adds an action-description encoder to an LLM and evaluates frozen-backbone and joint reinforcement learning for typed decisions. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.36116v1)
- [Koa-action: Fast and Consistent Structured Decision Making with Generative LLMs](https://arxiv.org/abs/2609.36115) — Uses atomic output tokens for fast structured decisions. `Method` · [PDF](https://arxiv.org/pdf/2609.36115v1)
- [Mnemon: Raw Records, Fast Judgments, Slow Thoughts](https://arxiv.org/abs/2609.36059) — Combines raw records with fast judgments and slower reasoning. `System` · [PDF](https://arxiv.org/pdf/2609.36059v1)
- [Jev thinks "I don't know'', but doesn't say it: Introducing Sys1Cal-v1 Dataset for Probability Calibration](https://arxiv.org/abs/2609.35342) — Introduces Sys1Cal-v1 with probabilities known by construction, exposing differences between Choice, Noul and Score outputs. `Evaluation · Benchmark · Dataset` · [PDF](https://arxiv.org/pdf/2609.35342v1)
- [The Argument and the Letterhead: Source-Position Coherence in AI Evaluation](https://arxiv.org/abs/2609.35286) — Separates source attribution from the quality of a fixed argument. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.35286v1)
- [NavJev: Efficient Vision-Language Navigation via Action-Centric Visual Compression and Discriminative Action-Semantic Memory](https://arxiv.org/abs/2609.34969) — Studies action-centric representations and decision memory for navigation. `System` · [PDF](https://arxiv.org/pdf/2609.34969v1)
- [JevVibe: Efficient Classification-Guided Secure Code Generation](https://arxiv.org/abs/2609.34963) — Uses Jev to classify code weaknesses and guide a repair model. Repairs improve results under the benchmark’s insecure-code detector. `System` · [PDF](https://arxiv.org/pdf/2609.34963v1)
- [JEV as a Judge for Agent Trace Security: An Empirical Comparison with Generative LLM Judges](https://arxiv.org/abs/2609.34862) — Compares Jev with generative judges on agent-trajectory security benchmarks, examining detection quality, valid outputs and inference cost. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.34862v1)
- [When Does Selection Replace Extraction? A Pre-Registered Test of Agent Memory with a Typed Decision Model](https://arxiv.org/abs/2609.34227) — Tests raw-turn selection against extraction under controlled memory budgets. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.34227v1)
- [Decision Readouts for Text-Mediated Video Anomaly Detection: An Exploratory Evaluation of Jev and Qwen](https://arxiv.org/abs/2609.34180) — Compares anomaly decision readouts under fixed video-derived evidence. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.34180v1)

## 2026-09-27

- [Probability Contracts: Accuracy, Coherence, and Decisions Across LLM Interfaces](https://arxiv.org/abs/2609.37470) — Links exact posteriors, equivalent requests and action-sensitive loss. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.37470v1)
- [Jev in Medicine: A Benchmark Evaluation](https://arxiv.org/abs/2609.34024) — Audits Jev 1.13 accuracy, calibration, selective prediction and unanswerable-question handling across four medical benchmarks. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.34024v2)
- [Do System One Decisions Add Up? A Study of Probabilistic Coherence](https://arxiv.org/abs/2609.33971) — Compares direct and hierarchical decisions on matched items. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.33971v1)
- [JET: Justification Evaluation in Transformer](https://arxiv.org/abs/2609.33874) — Tests local candidate-likelihood inference with shared computation. `Method` · [PDF](https://arxiv.org/pdf/2609.33874v2)
- [Laya as a Typed Probabilistic Assessor: An Independent Reproduction and a Preregistered Study of Calibration and Selective Escalation](https://arxiv.org/abs/2609.33843) — Audits calibration and selective escalation in an open decision model. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.33843v1)
- [Type-Safe Decision Frameworks for Agentic 5G Control: A Theory-Driven Testbed Characterization of Where They Can Be Applied](https://arxiv.org/abs/2609.33689) — Maps when typed decision gates are applicable to network control. `System` · [PDF](https://arxiv.org/pdf/2609.33689v1)
- [COGNIT-Guard: Calibrated Standalone Direct-Decision Guardrails with Heterogeneous CPU-NPU Confidence Cascading under Explicit Latency and False-Positive Constraints](https://arxiv.org/abs/2609.33671) — Combines a calibrated CPU gate with a Laya CPU-NPU cascade for prompt safety, measuring false positives, latency and out-of-domain transfer. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.33671v1)
- [You Only Edit Once: Incentivizing In-Context Capability of LLMs via Local Demonstration Refinement](https://arxiv.org/abs/2609.33609) — Uses typed decisions in local demonstration refinement. `System` · [PDF](https://arxiv.org/pdf/2609.33609v1)
- [Evaluating System One Models for Agent Security Decisions: Reliability, Calibration, and Selective Automation](https://arxiv.org/abs/2609.33401) — Compares security judgments across attack groups and tests confidence-based escalation. Aggregate calibration can hide groups with more missed attacks. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.33401v2)
- [Beyond Calibration: Do a Typed-Decision Model's Probabilities Obey the Probability Axioms?](https://arxiv.org/abs/2609.33209) — Tests logical probability coherence without needing class labels. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.33209v1)

## 2026-09-26

- [PACT: Pairwise-Anchored Calibrated Tuning for Single-Token Typed Decisions](https://arxiv.org/abs/2609.35865) — Uses paired evidence and permutation constraints to improve typed-readout robustness. `Method` · [PDF](https://arxiv.org/pdf/2609.35865v1) · [Code](https://github.com/BennyLinntu/PACT-Pairwise-Anchored-Calibrated-Tuning-for-Single-Token-Typed-Decisions.)
- [Typed Decision Models: An Early Evidence Audit and Evaluation Checklist](https://arxiv.org/abs/2609.32160) — Audits the first research wave and its evaluation practices. `Survey` · [PDF](https://arxiv.org/pdf/2609.32160v1)

## 2026-09-25

- [Jev at the Agent Authorization Boundary: Evaluating TypeSafe’s Decision Model on Allow, Hold, and Deny](https://zenodo.org/records/22952571) — Evaluates allow, hold and deny against authored policy specifications. `Evaluation` · [PDF](https://zenodo.org/api/records/22952571/files/arxiv-preprint.pdf/content)
- [JevAdvBench: A Benchmark and Black-Box Attacks for Reinforcement Learning for Calibrated Decisions Models](https://arxiv.org/abs/2609.31142) — Introduces an adversarial benchmark that compares single-field perturbations with repeated clean requests, separating attack effects from output noise. `Evaluation · Benchmark` · [PDF](https://arxiv.org/pdf/2609.31142v1)
- [JevSoup: System-One Routing for Training-Free LoRA Composition](https://arxiv.org/abs/2609.30922) — Routes and combines LoRA experts using typed choices. `System` · [PDF](https://arxiv.org/pdf/2609.30922v1) · [Code](https://github.com/Leowang980/JevSoup.)
- [LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706) — Learns which missing information is worth asking for. `Method` · [PDF](https://arxiv.org/pdf/2609.30706v1)

## 2026-09-24

- [How far can a commercial decision model’s probabilities be trusted? A calibration audit of Jev against open and general-purpose classifiers](https://escholarship.org/uc/item/4t4449jv) — Audits task-specific calibration and label-wording sensitivity. `Evaluation` · [PDF](https://escholarship.org/content/qt4t4449jv/qt4t4449jv.pdf)
- [JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243) — Optimizes ordinary-looking context to redirect initially correct decisions. `Attack · Evaluation` · [PDF](https://arxiv.org/pdf/2609.30243v1)
- [Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216) — Maps decision interfaces and adoption across 2,170 public projects. `Survey` · [PDF](https://arxiv.org/pdf/2609.30216v1)
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186) — Separates VLM planning from typed GUI execution. `System` · [PDF](https://arxiv.org/pdf/2609.30186v1)
- [JEV vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769) — Correlated errors limit the accuracy benefit of judge cascades. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.29769v2)
- [Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429) — Evaluates zero-shot detection of ten alignment-failure families. `Evaluation · Benchmark` · [PDF](https://arxiv.org/pdf/2609.29429v1) · [Code](https://github.com/sumleo/RLCDAlignBench.)
- [From Text Decisions to Pixels: An Study of Jev-Style Visual Choice Model](https://arxiv.org/abs/2609.29283) — Studies visual choice readouts with matched generation baselines. `Method` · [PDF](https://arxiv.org/pdf/2609.29283v1)
- [Calibrated Decision Models for Autonomous Penetration-Testing Harnesses: JEV and Laya as System One Decision Layers for LLM-Driven Pentest Agents](https://arxiv.org/abs/2609.28940) — Explores typed decision layers for pentest finding validation and triage. `System` · [PDF](https://arxiv.org/pdf/2609.28940v1)
- [Harness Tokenomics: A Router for the Enterprise Agentic Control Plane](https://arxiv.org/abs/2609.28919) — Models routing economics with session-level cache effects. `Analysis` · [PDF](https://arxiv.org/pdf/2609.28919v2)

## 2026-09-23

- [Jev in Practice: A Composable Python Toolkit for TypeSafe’s System One Decision Model](https://zenodo.org/records/22921974) — Provides composable tooling, calibration utilities and recorded API experiments. `Tool` · [PDF](https://zenodo.org/api/records/22921974/files/daf-jev_combined.pdf/content)
- [Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613) — Measures injection-driven probability shifts and validated targeted decisions. `Attack · Evaluation` · [PDF](https://arxiv.org/pdf/2609.28613v1)
- [NumericJev: Jev-like LLM Numerical Decoding with Multiway Decision Trees](https://arxiv.org/abs/2609.28587) — Uses multiway decision trees for numerical readout. `Method` · [PDF](https://arxiv.org/pdf/2609.28587v1)
- [Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678) — Shows that aggregate accuracy and repeated agreement hide item-level failures. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.27678v1) · [Code](https://github.com/ZF-Utokyo/Jev-Benchmark)

## 2026-09-22

- [Typed Decisions at the Edge: A Privacy-Preserving Hybrid Architecture for Everyday Decision Support](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7500140) — Studies a privacy-oriented typed interface and deterministic fallback. `System` · [PDF](https://papers.ssrn.com/sol3/Delivery.cfm/7500140.pdf?abstractid=7500140&mirid=1)
- [When a Judgment Layer's Self-Reported Fields Lie: Cost, Latency and the Failure Boundary of Three Judgment Layers on the Same Items](https://doi.org/10.5281/zenodo.22901853) — Audits judgment-layer costs, latency and self-reported fields; separates access-layer defects from model errors and tests paired error complementarity. `Evaluation` · [PDF](https://zenodo.org/api/records/22901853/files/paper-en.pdf/content) · [Code](https://doi.org/10.5281/zenodo.22901248)
- [Type-Safe Is Not Error-Free: A Constrained Decision Head Follows the Option Name, Not the Rubric Bound to It](https://arxiv.org/abs/2609.26758) — Tests whether option names override their attached rubrics. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.26758v2)
- [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550) — Studies confidence-based acceptance and escalation for model judging. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.26550v3)
- [REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532) — Tests selective agent control and near-valid action alternatives. `System` · [PDF](https://arxiv.org/pdf/2609.26532v1)
- [Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845) — Compares visual decision heads with matched generation baselines. Shared computation improves efficiency, while dedicated heads do not consistently improve accuracy. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.25845v1)

## 2026-09-21

- [Universal Fractal Natural Language Decision Map: Real-Time Edge Triage Across Heterogeneous Domains](https://arxiv.org/abs/2609.25498) — Reports an alternative edge decision implementation and benchmark comparison. `Method` · [PDF](https://arxiv.org/pdf/2609.25498v2)
- [Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965) — Separates semantic choices, intermediate calculations and final labels to reveal errors that a final-answer score can hide. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.24965v2)
- [Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574) — Compares decision models with LLMs on text annotation; confidence-based routing helps on some tasks but high confidence can conceal task-specific errors. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.24574v2) · [Code](https://github.com/hazemibrahim97/decision-models-css)
- [Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052) — Audits Jev probabilities against blinded human labels and tests recalibration, probability-grid resolution and review-budget allocation. `Evaluation` · [PDF](https://arxiv.org/pdf/2609.24052v1) · [Code](https://github.com/pozapas/jev-calibrated-narrative-coding)
- [Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986) — Places a typed decision controller inside agent memory. `System` · [PDF](https://arxiv.org/pdf/2609.23986v1)
- [Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959) — Evaluates an open typed readout for scam-call screening. `Evaluation · Benchmark` · [PDF](https://arxiv.org/pdf/2609.23959v1)

## 2026-09-20

- [this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886) — Provides an open model with a native typed decision interface. `Method` · [PDF](https://arxiv.org/pdf/2609.23886v1)

## 2026-09-19

- [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136) — Studies how decision latency affects bounded service orchestration. `System` · [PDF](https://arxiv.org/pdf/2609.23136v1)
- [Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753) — Measures typed decisions in deadline-constrained service admission. `System` · [PDF](https://arxiv.org/pdf/2609.22753v2)

## 2026-09-17

- [Calibration Does Not Compose, Types Destroy Vagueness: The Hidden-Markov and Fuzzy Primitives Missing from System-One Decision Models](https://zenodo.org/records/23064668) — Analyzes how latent regime shifts and repeated thresholds can invalidate composed decision pipelines, using formal assumptions and synthetic experiments. `Analysis` · [PDF](https://zenodo.org/api/records/23064668/files/paper.pdf/content)

