# 每日论文

按论文首次公开发表日期排列。

## 2026-10-02

- [Benchmarking Candidate Coverage in Typed Decision Models](https://arxiv.org/abs/2610.03387) — 固定候选数量并配对保留／移除参考标签，发现 Jev 与 Laya 的缺失检测和错误拒答权衡随任务变化。 `评测` · [PDF](https://arxiv.org/pdf/2610.03387v1)
- [To Jev or Not? Evaluating the Accuracy and Efficiency of Structured Decision Models for Hate-Speech Moderation](https://arxiv.org/abs/2610.03324) — 比较六种决策模型配置的仇恨言论审核表现；补充定义与问题分解并未稳定提高与数据标签的一致性。 `评测` · [PDF](https://arxiv.org/pdf/2610.03324v1)
- [SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073) — 用安全 LoRA 适配共享候选评分器；域内提升明显，但相对单 token 生成的延迟收益有限，跨来源仍有误报。 `评测` · [PDF](https://arxiv.org/pdf/2610.03073v1) · [代码](https://github.com/UESTC1010/SecJev)

## 2026-10-01

- [LLM2Jev: LLMs Are Already Jev-Style Decision Models -- When and How to Fine-Tune Them](https://arxiv.org/abs/2610.02076) — 保留架构直接读候选概率，比较无需训练与针对性微调。 `评测` · [PDF](https://arxiv.org/pdf/2610.02076v1)
- [HydroJEV: A one-second, training-free screen for cyber-attack and fault attribution in water distribution networks](https://arxiv.org/abs/2610.02048) — 水系统异常归因中，规则确认的良性分流可减少 LLM 复核负载。 `系统` · [PDF](https://arxiv.org/pdf/2610.02048v1)
- [Code Owns the Simulation, Jev Owns the Evaluation](https://arxiv.org/abs/2610.01834) — 能直接判断的选项与需要内部模拟的选项呈现能力分界。 `评测` · [PDF](https://arxiv.org/pdf/2610.01834v1)
- [Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079) — 低标签入侵检测有潜力，但证据来自 NSL-KDD 小规模试验。 `评测` · [PDF](https://arxiv.org/pdf/2610.01079v1) · [代码](https://github.com/jev-ids/jev-ids)
- [Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006) — 缺信息或越过知识边界时，高置信不能可靠代表知道答案。 `评测` · [PDF](https://arxiv.org/pdf/2610.01006v1) · [代码](https://github.com/Syntheme/beyond-answer-confidence.)

## 2026-09-30

- [Tron-1B: Fast, Calibrated Typed Decisions with a Set-Attention Option Head](https://zenodo.org/records/23066522) — 提出带集合注意力选项头的双向编码器；需区分使用基准训练集的结果与零样本托管服务的比较。 `模型` · [PDF](https://zenodo.org/api/records/23066522/files/tron-1b-paper.pdf/content)
- [AnyJev Technical Report](https://arxiv.org/abs/2610.00831) — 从预训练模型读出选项概率，以先验归一化和循环置换修正标签与位置偏差；多次前向带来额外成本。 `评测` · [PDF](https://arxiv.org/pdf/2610.00831v1)
- [JevSpawn: Adaptive Agentic Inference through Compositional Action Spaces](https://arxiv.org/abs/2610.00437) — 研究自然语言任务到有限动作空间的动态构造与恢复。 `系统` · [PDF](https://arxiv.org/pdf/2610.00437v1)
- [OmniMed-Jev: Calibrating LVLM Confidence for Trustworthy Medical Multimodal Decisions via System One](https://arxiv.org/abs/2610.00381) — 以匹配骨干和数据的生成式基线检验多模态候选决策接口，研究校准改善及准确率取舍；接口和训练效应未完全分离。 `评测` · [PDF](https://arxiv.org/pdf/2610.00381v1)
- [A First Glance at Jev for Network Traffic Classification: Accuracy, Processing Time, and Cost](https://arxiv.org/abs/2610.00376) — 网络应用流量分类中，少样本 Jev 明显落后于监督树模型。 `评测` · [PDF](https://arxiv.org/pdf/2610.00376v1)
- [When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496) — 正确候选缺失时，即使有拒答选项也可能接受错误数值。 `评测` · [PDF](https://arxiv.org/pdf/2609.39496v1)
- [Bongard: Training Machine Intuition](https://arxiv.org/abs/2609.39111) — 开放 System One 模型通过表征学习和结果反馈训练判断能力。 `方法` · [PDF](https://arxiv.org/pdf/2609.39111v1)
- [OpenJev-RLCD: A Working RLCD Implementation](https://arxiv.org/abs/2609.38850) — 公开 RLCD 风格训练实现，研究适当评分规则与选择性预测。 `方法` · [PDF](https://arxiv.org/pdf/2609.38850v1) · [代码](https://github.com/ZimmyGao/openjev-rlcd)
- [More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827) — 序数等级利用不足，增加选项并不保证更细致的实际决策。 `评测` · [PDF](https://arxiv.org/pdf/2609.38827v1) · [代码](https://github.com/Glax147/jev_ordinal_scale_bia)

## 2026-09-29

- [Confident Where People Disagree: A preregistered, bias-corrected test of whether TypeSafe AI’s Jev lowers its confidence when humans disagree, on ChaosNLI](https://zenodo.org/records/23032384) — 研究人类意见分歧与模型置信度，并校正小样本校准噪声。 `评测` · [PDF](https://zenodo.org/api/records/23032384/files/jevbench_paper_Khosla_2026_v1.1.pdf/content)
- [Benchmarking System One decision models against trained classifiers and language models for automated decision gates](https://arxiv.org/abs/2610.00346) — 匹配输入比较模型与监督分类器，排名随标签和读出条件变化。 `评测` · [PDF](https://arxiv.org/pdf/2610.00346v1)
- [Evaluating and Benchmarking the System One Model Jev](https://arxiv.org/abs/2609.37647) — 跨多类公开任务比较 Jev 的分类、校准和选择性预测，发现校准表现随接口与任务变化。 `评测 · 基准` · [PDF](https://arxiv.org/pdf/2609.37647v1)
- [Chinese-Jev: Bringing System One Model to Chinese-Language Tasks](https://arxiv.org/abs/2609.36965) — 研究中文任务的 System One 决策模型，提供多语言对照线索。 `方法` · [PDF](https://arxiv.org/pdf/2609.36965v1)

## 2026-09-28

- [A Noul Log Does Not Identify the Policy](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7525901) — 边际概率不能唯一确定联合事件，直接组合 Noul 可能改变策略。 `分析` · [PDF](https://papers.ssrn.com/sol3/Delivery.cfm/7525901.pdf?abstractid=7525901&mirid=1)
- [Calibrated to Whom? Persona and Language Effects on Cultural Values in JEV](https://arxiv.org/abs/2609.36399) — 文化价值回答受角色与语言影响；高重复性不等于无偏。 `评测` · [PDF](https://arxiv.org/pdf/2609.36399v1)
- [Dyad: Extending Large Language Models with Native Typed Decision-Making](https://arxiv.org/abs/2609.36116) — 为大语言模型加入候选动作编码器，对比冻结骨干与联合强化学习的类型化决策能力。 `评测` · [PDF](https://arxiv.org/pdf/2609.36116v1)
- [Koa-action: Fast and Consistent Structured Decision Making with Generative LLMs](https://arxiv.org/abs/2609.36115) — 单 token 动作输出提供低延迟决策的对照路线。 `方法` · [PDF](https://arxiv.org/pdf/2609.36115v1)
- [Mnemon: Raw Records, Fast Judgments, Slow Thoughts](https://arxiv.org/abs/2609.36059) — 用原始记录、快速判断和慢速推理分层组织代理记忆。 `系统` · [PDF](https://arxiv.org/pdf/2609.36059v1)
- [Jev thinks "I don't know'', but doesn't say it: Introducing Sys1Cal-v1 Dataset for Probability Calibration](https://arxiv.org/abs/2609.35342) — 已知真概率任务显示 Choice、Noul、Score 的数值含义不等价。 `评测 · 基准 · 数据集` · [PDF](https://arxiv.org/pdf/2609.35342v1)
- [The Argument and the Letterhead: Source-Position Coherence in AI Evaluation](https://arxiv.org/abs/2609.35286) — 检查内容评分是否受署名与立场一致性影响，Jev 补充结果较有限。 `评测` · [PDF](https://arxiv.org/pdf/2609.35286v1)
- [NavJev: Efficient Vision-Language Navigation via Action-Centric Visual Compression and Discriminative Action-Semantic Memory](https://arxiv.org/abs/2609.34969) — 通过动作中心表示与判别记忆研究高效视觉导航决策。 `系统` · [PDF](https://arxiv.org/pdf/2609.34969v1)
- [JevVibe: Efficient Classification-Guided Secure Code Generation](https://arxiv.org/abs/2609.34963) — CWE 分类引导代码修复，提高检测器测得的安全通过率。 `系统` · [PDF](https://arxiv.org/pdf/2609.34963v1)
- [JEV as a Judge for Agent Trace Security: An Empirical Comparison with Generative LLM Judges](https://arxiv.org/abs/2609.34862) — 在多个代理轨迹基准上比较安全裁判，联合考察检测质量、有效输出与调用成本。 `评测` · [PDF](https://arxiv.org/pdf/2609.34862v1)
- [When Does Selection Replace Extraction? A Pre-Registered Test of Agent Memory with a Typed Decision Model](https://arxiv.org/abs/2609.34227) — 预注册记忆研究发现小上下文下筛选有效，但可能降低正确拒答。 `评测` · [PDF](https://arxiv.org/pdf/2609.34227v1)
- [Decision Readouts for Text-Mediated Video Anomaly Detection: An Exploratory Evaluation of Jev and Qwen](https://arxiv.org/abs/2609.34180) — 固定视频文本证据比较读出方式，不同数据集结论相反。 `评测` · [PDF](https://arxiv.org/pdf/2609.34180v1)

## 2026-09-27

- [Probability Contracts: Accuracy, Coherence, and Decisions Across LLM Interfaces](https://arxiv.org/abs/2609.37470) — 同一事件换接口可改变动作，概率平均改善不保证决策损失改善。 `评测` · [PDF](https://arxiv.org/pdf/2609.37470v1)
- [Jev in Medicine: A Benchmark Evaluation](https://arxiv.org/abs/2609.34024) — 在四类医学基准上审计 Jev 1.13 的准确率、校准、选择性预测和无法回答问题的处理；结论依赖任务。 `评测` · [PDF](https://arxiv.org/pdf/2609.34024v2)
- [Do System One Decisions Add Up? A Study of Probabilistic Coherence](https://arxiv.org/abs/2609.33971) — 直接分类与分层重构的概率不一致，可改变准确率与校准。 `评测` · [PDF](https://arxiv.org/pdf/2609.33971v1)
- [JET: Justification Evaluation in Transformer](https://arxiv.org/abs/2609.33874) — 直接比较候选似然并复用计算，研究本地决策推理。 `方法` · [PDF](https://arxiv.org/pdf/2609.33874v2)
- [Laya as a Typed Probabilistic Assessor: An Independent Reproduction and a Preregistered Study of Calibration and Selective Escalation](https://arxiv.org/abs/2609.33843) — 复现 Laya 校准并发现门控目标在保留集上未必达成。 `评测` · [PDF](https://arxiv.org/pdf/2609.33843v1)
- [Type-Safe Decision Frameworks for Agentic 5G Control: A Theory-Driven Testbed Characterization of Where They Can Be Applied](https://arxiv.org/abs/2609.33689) — 在控制回路中检验时限、选项合法性和升级可行性。 `系统` · [PDF](https://arxiv.org/pdf/2609.33689v1)
- [COGNIT-Guard: Calibrated Standalone Direct-Decision Guardrails with Heterogeneous CPU-NPU Confidence Cascading under Explicit Latency and False-Positive Constraints](https://arxiv.org/abs/2609.33671) — 以校准后的 CPU 门控和 Laya CPU-NPU 级联筛查提示风险，同时评估误报、时延与域外迁移。 `评测` · [PDF](https://arxiv.org/pdf/2609.33671v1)
- [You Only Edit Once: Incentivizing In-Context Capability of LLMs via Local Demonstration Refinement](https://arxiv.org/abs/2609.33609) — 以决策模型辅助局部示例改写，提高上下文学习能力。 `系统` · [PDF](https://arxiv.org/pdf/2609.33609v1)
- [Evaluating System One Models for Agent Security Decisions: Reliability, Calibration, and Selective Automation](https://arxiv.org/abs/2609.33401) — 平均校准掩盖攻击族盲区，严格漏检约束下自动放行受限。 `评测` · [PDF](https://arxiv.org/pdf/2609.33401v2)
- [Beyond Calibration: Do a Typed-Decision Model's Probabilities Obey the Probability Axioms?](https://arxiv.org/abs/2609.33209) — 逐项检测否定与互斥关系，发现校准之外的概率不一致。 `评测` · [PDF](https://arxiv.org/pdf/2609.33209v1)

## 2026-09-26

- [PACT: Pairwise-Anchored Calibrated Tuning for Single-Token Typed Decisions](https://arxiv.org/abs/2609.35865) — 对比样本、置换一致性与证据必要性约束改善读出稳定性。 `方法` · [PDF](https://arxiv.org/pdf/2609.35865v1) · [代码](https://github.com/BennyLinntu/PACT-Pairwise-Anchored-Calibrated-Tuning-for-Single-Token-Typed-Decisions.)
- [Typed Decision Models: An Early Evidence Audit and Evaluation Checklist](https://arxiv.org/abs/2609.32160) — 梳理早期 Jev 研究，讨论读出方式、训练适配和评测设计如何影响结论。 `综述` · [PDF](https://arxiv.org/pdf/2609.32160v1)

## 2026-09-25

- [Jev at the Agent Authorization Boundary: Evaluating TypeSafe’s Decision Model on Allow, Hold, and Deny](https://zenodo.org/records/22952571) — 以明确策略比较放行、暂缓和拒绝，避免仅用总准确率评价授权。 `评测` · [PDF](https://zenodo.org/api/records/22952571/files/arxiv-preprint.pdf/content)
- [JevAdvBench: A Benchmark and Black-Box Attacks for Reinforcement Learning for Calibrated Decisions Models](https://arxiv.org/abs/2609.31142) — 单字段扰动对照重复噪声，量化翻转、概率变化和复核负载。 `评测 · 基准` · [PDF](https://arxiv.org/pdf/2609.31142v1)
- [JevSoup: System-One Routing for Training-Free LoRA Composition](https://arxiv.org/abs/2609.30922) — 用 Jev 选择 LoRA 专家并进行无需训练的组合。 `系统` · [PDF](https://arxiv.org/pdf/2609.30922v1) · [代码](https://github.com/Leowang980/JevSoup.)
- [LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706) — 训练模型判断何时值得追问信息，而不只在现有选项中猜测。 `方法` · [PDF](https://arxiv.org/pdf/2609.30706v1)

## 2026-09-24

- [How far can a commercial decision model’s probabilities be trusted? A calibration audit of Jev against open and general-purpose classifiers](https://escholarship.org/uc/item/4t4449jv) — 提问形式、标签定义与对照训练暴露均影响校准和模型排名。 `评测` · [PDF](https://escholarship.org/content/qt4t4449jv/qt4t4449jv.pdf)
- [JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243) — 自然上下文增补经反馈搜索可诱导高置信目标错选。 `攻击 · 评测` · [PDF](https://arxiv.org/pdf/2609.30243v1)
- [Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216) — 分析公开项目中 Jev 的接口用途、集成方式与采用情况。 `综述` · [PDF](https://arxiv.org/pdf/2609.30216v1)
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186) — 低频规划与高频有限动作执行分离，降低代理调用成本。 `系统` · [PDF](https://arxiv.org/pdf/2609.30186v1)
- [JEV vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769) — Jev 与 LLM 裁判常犯相同错误，升级后备模型未必修复高置信错判。 `评测` · [PDF](https://arxiv.org/pdf/2609.29769v2)
- [Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429) — 跨多类对齐失败评测 Jev 检测能力，概率排序与硬阈值表现应分开。 `评测 · 基准` · [PDF](https://arxiv.org/pdf/2609.29429v1) · [代码](https://github.com/sumleo/RLCDAlignBench.)
- [From Text Decisions to Pixels: An Study of Jev-Style Visual Choice Model](https://arxiv.org/abs/2609.29283) — 视觉候选概率读出与生成式对照，分析格式和准确率收益来源。 `方法` · [PDF](https://arxiv.org/pdf/2609.29283v1)
- [Calibrated Decision Models for Autonomous Penetration-Testing Harnesses: JEV and Laya as System One Decision Layers for LLM-Driven Pentest Agents](https://arxiv.org/abs/2609.28940) — 研究漏洞确认、严重性、代理裁剪和复核四个决策点。 `系统` · [PDF](https://arxiv.org/pdf/2609.28940v1)
- [Harness Tokenomics: A Router for the Enterprise Agentic Control Plane](https://arxiv.org/abs/2609.28919) — 研究代理路由与缓存的整体费用，而非只看单次 API 单价。 `分析` · [PDF](https://arxiv.org/pdf/2609.28919v2)

## 2026-09-23

- [Jev in Practice: A Composable Python Toolkit for TypeSafe’s System One Decision Model](https://zenodo.org/records/22921974) — 组合式工具包包含校准模块与批处理实验，可辅助复现。 `工具` · [PDF](https://zenodo.org/api/records/22921974/files/daf-jev_combined.pdf/content)
- [Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613) — 注入能推移目标概率；独立验证的目标选中率远低于搜索期峰值。 `攻击 · 评测` · [PDF](https://arxiv.org/pdf/2609.28613v1)
- [NumericJev: Jev-like LLM Numerical Decoding with Multiway Decision Trees](https://arxiv.org/abs/2609.28587) — 以多叉决策树逐步缩小数值区间，扩展有限选项接口。 `方法` · [PDF](https://arxiv.org/pdf/2609.28587v1)
- [Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678) — 合同推断中平均分数相近仍可出现逐项决策变化和稳定错误。 `评测` · [PDF](https://arxiv.org/pdf/2609.27678v1) · [代码](https://github.com/ZF-Utokyo/Jev-Benchmark)

## 2026-09-22

- [Typed Decisions at the Edge: A Privacy-Preserving Hybrid Architecture for Everyday Decision Support](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7500140) — 以封闭标签和分桶状态减少上传信息，保留为隐私架构研究。 `系统` · [PDF](https://papers.ssrn.com/sol3/Delivery.cfm/7500140.pdf?abstractid=7500140&mirid=1)
- [When a Judgment Layer's Self-Reported Fields Lie: Cost, Latency and the Failure Boundary of Three Judgment Layers on the Same Items](https://doi.org/10.5281/zenodo.22901853) — 审计裁判层成本、时延与自报字段，区分接入层缺陷和模型错误，并检验配对错误互补性。 `评测` · [PDF](https://zenodo.org/api/records/22901853/files/paper-en.pdf/content) · [代码](https://doi.org/10.5281/zenodo.22901248)
- [Type-Safe Is Not Error-Free: A Constrained Decision Head Follows the Option Name, Not the Rubric Bound to It](https://arxiv.org/abs/2609.26758) — 选项名称可能压过绑定规则，合法输出仍可能语义错误。 `评测` · [PDF](https://arxiv.org/pdf/2609.26758v2)
- [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550) — 置信度门控在部分裁判任务节约费用，但复杂错误与阈值迁移仍是难点。 `评测` · [PDF](https://arxiv.org/pdf/2609.26550v3)
- [REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532) — 低置信升级能减少强模型调用；授权边界和近似合法选项影响可靠性。 `系统` · [PDF](https://arxiv.org/pdf/2609.26532v1)
- [Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845) — 共享视觉前缀提高批量效率，专用决策头未显示稳定准确率优势。 `评测` · [PDF](https://arxiv.org/pdf/2609.25845v1)

## 2026-09-21

- [Universal Fractal Natural Language Decision Map: Real-Time Edge Triage Across Heterogeneous Domains](https://arxiv.org/abs/2609.25498) — 提出另类边缘决策实现与 JevBench 比较，作为外围对照。 `方法` · [PDF](https://arxiv.org/pdf/2609.25498v2)
- [Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965) — 分别检查语义选择、中间计算与最终标签，揭示仅看最终答案可能漏掉的错误。 `评测` · [PDF](https://arxiv.org/pdf/2609.24965v2)
- [Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574) — 对比决策模型与大模型的文本标注、校准和分流；部分任务可用置信度分流，但高置信错误集中在特定任务。 `评测` · [PDF](https://arxiv.org/pdf/2609.24574v2) · [代码](https://github.com/hazemibrahim97/decision-models-css)
- [Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052) — 以盲审人工标签核验 Jev 概率，检验后校准、离散概率分辨率及人工复核预算。 `评测` · [PDF](https://arxiv.org/pdf/2609.24052v1) · [代码](https://github.com/pozapas/jev-calibrated-narrative-coding)
- [Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986) — 用 System One 控制记忆操作，研究代理记忆效率。 `系统` · [PDF](https://arxiv.org/pdf/2609.23986v1)
- [Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959) — 小模型单次读出用于诈骗电话筛查，并报告校准和决策时机。 `评测 · 基准` · [PDF](https://arxiv.org/pdf/2609.23959v1)

## 2026-09-20

- [this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886) — 开放有限候选决策模型，适合作为可训练对照。 `方法` · [PDF](https://arxiv.org/pdf/2609.23886v1)

## 2026-09-19

- [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136) — 将决策等待纳入端到端时限，研究有限字段服务编排。 `系统` · [PDF](https://arxiv.org/pdf/2609.23136v1)
- [Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753) — 新请求的有界合同解释受益于低延迟，宽合同限制替代范围。 `系统` · [PDF](https://arxiv.org/pdf/2609.22753v2)

## 2026-09-17

- [Calibration Does Not Compose, Types Destroy Vagueness: The Hidden-Markov and Fuzzy Primitives Missing from System-One Decision Models](https://zenodo.org/records/23064668) — 在显式假设和合成实验下分析潜在状态漂移、重复阈值化如何破坏决策管线的组合可靠性；不是 Jev API 实测。 `分析` · [PDF](https://zenodo.org/api/records/23064668/files/paper.pdf/content)

