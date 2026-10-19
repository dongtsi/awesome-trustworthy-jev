# 每日论文

按论文首次公开发表日期排列。

## 2026-10-16

- [Jarvis: Coordination Deserves a Brain of Its Own in Agentic Interactive Models](https://arxiv.org/abs/2610.23804) — 以类型化决策和版本检查协调运行中任务，随请求变化复核计划与播报结果；固定前后端模型时，语音任务成功数从278项中的29增至192。 `评测` · [PDF](https://arxiv.org/pdf/2610.23804v1)
- [TUPLE-Bench: Evaluating and Mitigating Privacy-Utility Trade-offs in Typed Decision Models](https://arxiv.org/abs/2610.23668) — 在九个决策模型中审核类别、选项分数与置信字段的隐私泄漏；工作流约束量化降低秘密恢复率，同时保留指定下游动作及成本。 `评测` · [PDF](https://arxiv.org/pdf/2610.23668v1)
- [Jev-as-a-Judge for Brazilian Portuguese Information Retrieval: Relevance Assessment and Reranking](https://arxiv.org/abs/2610.23346) — 在四个葡萄牙语检索集合上比较Jev判断与官方标签；条目层面中等一致性可与相近系统排名并存，所测BM25重排效果提升。 `评测` · [PDF](https://arxiv.org/pdf/2610.23346v1)
- [Chinese Decision: A Family of Language Models for Single-Pass Probabilistic Decision-Making](https://arxiv.org/abs/2610.23170) — 通过候选字母logit与分布目标训练中文单次前向决策模型；完整训练的0.8B模型报告1.07%校准误差，未完成训练的2B结果无法隔离规模效应。 `评测` · [PDF](https://arxiv.org/pdf/2610.23170v1) · [代码](https://github.com/yanqiangmiffy/chinese-decision)

## 2026-10-15

- [Intern-Decision: Efficient Multimodal Decision Making with Autoregressive Masked Language Modeling](https://arxiv.org/abs/2610.22131) — 在 JSON 骨架中使用掩码决策位实现单次前向多模态选择；报告小模型准确率、时延及小规模校准和委托试验。 `评测` · [PDF](https://arxiv.org/pdf/2610.22131v1)
- [Prism-1: Position- and Rival-Independent Scoring for System One Models](https://arxiv.org/abs/2610.22066) — 以共享位置的独立注意力块为选项评分，从结构上保证顺序与竞争选项独立；在测试的选项变化下保持选择稳定，准确率接近基线。 `评测` · [PDF](https://arxiv.org/pdf/2610.22066v1)
- [Qwen-Audio-Jev: A Unified Interface for Audio Decisions](https://arxiv.org/abs/2610.21614) — 为音频骨干加入 CHOICE、NOUL 和 SCORE 类型化读出；报告 18 个标注配置的结果及相对生成式骨干约 20 倍的推理加速。 `评测` · [PDF](https://arxiv.org/pdf/2610.21614v1)
- [JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs](https://arxiv.org/abs/2610.21412) — 在 Agent 轨迹上拟合委托阈值，并用实际到达状态训练 4B 决策模型；发现孤立问题准确率不能代表闭环任务成功率。 `评测` · [PDF](https://arxiv.org/pdf/2610.21412v1)
- [Jev-LiteMAS: Separating Decisions from Generation in Multi-Agent Workflows](https://arxiv.org/abs/2610.21411) — 将专家路由和产物筛查与生成式执行、反馈分开；报告相对 LAS 减少 12.7–54.6% 生成令牌，准确率差距控制在 1.34 个百分点内。 `评测` · [PDF](https://arxiv.org/pdf/2610.21411v1)
- [System1-Arena: Which Decisions Can Be Left to System 1?](https://arxiv.org/abs/2610.21244) — 在 9.2 万问题和 138 个闭环环境中评测决策概率；较强的静态决策准确率并不一致转化为 Agent 成功率。 `评测` · [PDF](https://arxiv.org/pdf/2610.21244v1)

## 2026-10-14

- [Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents](https://arxiv.org/abs/2610.20927) — 用 Jev 删除缺少环境输出或前序摘要支持的压缩条目；报告在 AppWorld 和 OfficeBench 上提高跨运行可靠性。 `评测` · [PDF](https://arxiv.org/pdf/2610.20927v1)
- [From Detection to Decision: Calibration and Deferral for Prompt-Injection Detection](https://arxiv.org/abs/2610.20907) — 在 47,611 条留出样本上评测检测、校准和放行—阻断—转交策略；Jev 原生概率并非一致优于校准分类器，低漏报运行需要大量转交。 `评测` · [PDF](https://arxiv.org/pdf/2610.20907v1) · [代码](https://github.com/lanqianlong/calibrated-decision-models)
- [Verdict: Encode Once, Decide Many](https://arxiv.org/abs/2610.20778) — 以问题无关的共享状态编码回答多个类型化问题并保持选项不变性；提高与软标签的一致性，同时揭示取消问题感知状态编码的准确率—时延代价。 `评测` · [PDF](https://arxiv.org/pdf/2610.20778v1)
- [The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock](https://arxiv.org/abs/2610.20665) — 在 180 个实时任务中评测，并由慢教师在尝试间教导快学生；报告两轮后 Jev 测试分数从 13.51 提高至 24.19。 `评测` · [PDF](https://arxiv.org/pdf/2610.20665v1)
- [Diagnose Before You Refine: Multi-Dimensional Judge Feedback for Query-Efficient Jailbreak Attacks](https://arxiv.org/abs/2610.19971) — 用多维概率裁判反馈引导查询预算受限的越狱优化，并评测目标查询效率与输出过滤。 `评测` · [PDF](https://arxiv.org/pdf/2610.19971v1)
- [Lost in the Fallback: How Reliably Do Typed Decision Models Use Fallback Options?](https://arxiv.org/abs/2610.19856) — 测试常规选项与回退选项切换及等价回退定义；正确识别类别并不可靠地转化为正确执行回退规则。 `评测` · [PDF](https://arxiv.org/pdf/2610.19856v1)
- [Calibration and Risk-Budgeted Decisions with System One Models](https://arxiv.org/abs/2610.19811) — 通过 Learn Then Test 在风险预算和保守回退条件下选择效用动作；六个数据集上违反目标风险的比例低于朴素阈值选择。 `评测` · [PDF](https://arxiv.org/pdf/2610.19811v1)
- [Selective Reasoning for Typed Decision Models: When to Start, Read, and Stop](https://arxiv.org/abs/2610.19644) — 结合候选读出器与推理启动、读取及停止策略；用匹配前缀对照测量准确率、生成工作量和流水线时间。 `评测` · [PDF](https://arxiv.org/pdf/2610.19644v1)
- [Are AI Decision Models Biased? A Case Study of Jev](https://arxiv.org/abs/2610.19619) — 测试认知与人口属性偏差并扩展合取任务；所选答案稳定仍可能掩盖概率漂移、数值锚定及选项顺序敏感性。 `评测` · [PDF](https://arxiv.org/pdf/2610.19619v1)
- [JevCoder: When Does Decision Delegation Pay Off in Code Repair?](https://arxiv.org/abs/2610.19596) — 研究哪些代码修复决策适合委托；在 400 道共同任务上，报告的 Jev 工作流减少修复模型令牌用量，并提高观察到的修复率。 `评测` · [PDF](https://arxiv.org/pdf/2610.19596v1)
- [Typed Decision Models on Tabular Data](https://arxiv.org/abs/2610.19536) — 通过 21 类保留内容的表格和问题改写比较决策模型与 LLM；成本较低的类型化决策仍对表格组织方式敏感。 `评测` · [PDF](https://arxiv.org/pdf/2610.19536v1)

## 2026-10-13

- [DecisionRobust: Benchmarking Robustness for JEV Style Decision Models Across Text and Vision](https://arxiv.org/abs/2610.19118) — 以留出目标模型评测文本与视觉攻击；鲁棒性随任务和攻击类型变化，标签一致性复核会降低表观攻击成功率。 `评测` · [PDF](https://arxiv.org/pdf/2610.19118v1)
- [BLADE: Auditing Information Use for Failure Attribution in LLM Multi-Agent Systems](https://arxiv.org/abs/2610.18780) — 用 Jev 审计信息来源到决策的交接，区分错误引入、传播和修复；在五组多智能体基准子集上改善故障步骤定位。 `评测` · [PDF](https://arxiv.org/pdf/2610.18780v1)
- [Jeva: System One Models from First Principles](https://arxiv.org/abs/2610.18773) — 通过独立选项编码、对称聚合和单独覆盖估计，构建支持排列不变性、空答案与缓存复用的决策架构。 `评测` · [PDF](https://arxiv.org/pdf/2610.18773v1)
- [VideoJev: System One Model for Video Understanding and Interaction](https://arxiv.org/abs/2610.18615) — 通过共享决策头和视觉计算复用完成时序定位与视频问答；作者报告推理提速，任务得分相当或提高。 `评测` · [PDF](https://arxiv.org/pdf/2610.18615v1)
- [Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications](https://arxiv.org/abs/2610.18612) — 在 228 个 Jev 应用中追踪可达的攻击者上下文、格式合法的决策翻转及潜在下游影响，并发布应用级攻击基准。 `评测` · [PDF](https://arxiv.org/pdf/2610.18612v1)
- [Jev-ToM: Evaluating Theory of Mind in Typed Decision Models](https://arxiv.org/abs/2610.18610) — 在 11,117 道心智理论题上评测类型化模型；Jev 在多个能力组领先，但置信筛选、附加理由与候选扩展效果依赖任务。 `评测` · [PDF](https://arxiv.org/pdf/2610.18610v1)
- [Reading Right, Acting Wrong: Diagnosing Decision Failures of System One Models in Agent Loops](https://arxiv.org/abs/2610.18579) — 在 Agent 状态上配对动作选择与事实探针；多数错误动作发生在正确读取信息之后，暴露组合推理与子目标选择缺陷。 `评测` · [PDF](https://arxiv.org/pdf/2610.18579v1)
- [How Reliable Are System-One Decisions in Medicine? A Comparative Study of Jev, Jev-like Models, and LLMs](https://arxiv.org/abs/2610.18529) — 在 15 个医学数据集上测试准确率、提示稳定性与弃答；Jev 的文本任务表现优于数值任务，但识别答案缺失仍困难。 `评测` · [PDF](https://arxiv.org/pdf/2610.18529v1)
- [Judges Follow the Reference: The Derivation Gap in Verifying Tool-Call Arguments](https://arxiv.org/abs/2610.18497) — 发现工具调用裁判偏向可见参考而非正确推导值；由不看候选值的模型生成参考，在三个基准上改善参数验证。 `评测` · [PDF](https://arxiv.org/pdf/2610.18497v1)
- [Recalibrating Many Questions with Few Labels: Minimax Rates and Identification Limits](https://arxiv.org/abs/2610.18488) — 在单调校准映射假设下，推导相关问题少标签再校准的极小极大速率与识别限制，并给出合并保序拟合及留出修正方法。 `方法` · [PDF](https://arxiv.org/pdf/2610.18488v1)
- [PRISM: Calibrating Black-Box Judges with Counterfactual Probes](https://arxiv.org/abs/2610.18389) — 以反事实评分探针和人类标签回归修正黑箱裁判；在摘要与故事评测中提高报告的人类排序一致性。 `评测` · [PDF](https://arxiv.org/pdf/2610.18389v1)
- [Jev-Guard: Fast Routing and Auditing Agent Actions over Editable Policy Trees](https://arxiv.org/abs/2610.18326) — 在可编辑策略树中路由审计上下文，再按策略进行安全分类；同时评测独立路由与 Agent 权限门控。 `评测` · [PDF](https://arxiv.org/pdf/2610.18326v1)
- [Consider, Then Choose: Order-Invariant Decisions in System One Models](https://arxiv.org/abs/2610.18233) — 结合独立选项打分与位置均衡的决选比较消除选项顺序依赖，并与循环平均比较准确率及推理成本。 `评测` · [PDF](https://arxiv.org/pdf/2610.18233v1)
- [Cheap, Consistent, Calibrated, but Biased? Typed Decision Models as Judges](https://arxiv.org/abs/2610.18122) — 对八个类型化模型开展十二类 CALM 偏差测试；校准与一致性并不消除成对评审中的情绪语气、位置和来源归因偏差。 `评测` · [PDF](https://arxiv.org/pdf/2610.18122v1)
- [Same Attack, Different Judge: A First Controlled Adversarial Comparison of Jev, LLM Judges, and Purpose-Built Safety Classifiers](https://arxiv.org/abs/2610.17820) — 以相同对抗载荷比较 Jev、LLM 裁判与安全分类器；Jev 对规则式审核攻击的抵抗优于钓鱼任务，同时存在明显良性误报。 `评测` · [PDF](https://arxiv.org/pdf/2610.17820v1)

## 2026-10-12

- [StartLux-Decision: AutoThink Decision Models with Reinforcement Learning for Calibrated Deliberative Decisions](https://arxiv.org/abs/2610.17309) — 结合单次前向 Instant 模型与置信引导的 AutoThink 推理；校准式审慎决策强化学习缩短推理，同时保持报告的准确率。 `评测` · [PDF](https://arxiv.org/pdf/2610.17309v1)
- [Releasing the Inner Jev: A Simple Recipe for Open Decision Models](https://arxiv.org/abs/2610.17205) — 从指令模型读取选项字母 logits，并用 LoRA 决策头微调改善表现；在 OpenDecisions 与 JevBench 上评估准确率和校准。 `评测` · [PDF](https://arxiv.org/pdf/2610.17205v1)
- [FunDM: Cheap & Label-Free Decision Models from Frozen Language Models](https://arxiv.org/abs/2610.17175) — 无需正确答案标签，将冻结语言模型的概率蒸馏到小型决策头，以更少 Transformer 层保留大部分多选准确率。 `评测` · [PDF](https://arxiv.org/pdf/2610.17175v1)
- [ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty](https://arxiv.org/abs/2610.17016) — 构造具备精确条件概率与贝叶斯误差的模拟文本任务，直接评测概率质量，并对校准指标本身进行元评估。 `评测` · [PDF](https://arxiv.org/pdf/2610.17016v1)
- [Proactive Physical AI through Continuous Observation and Timely Intervention](https://arxiv.org/abs/2610.16967) — 提出 Jev 风格时机模型，将干预决策与响应生成分离，并用视频生成监督支持连续物理环境观察。 `评测` · [PDF](https://arxiv.org/pdf/2610.16967v1)
- [Does a Hosted Decision Model Respect Irrelevant Alternatives? A Pre-Registered Test of Option-Set Dependence in Jev](https://arxiv.org/abs/2610.16655) — 299,463 次调用显示，即使加入低概率备选项也会改变 Jev 的相对赔率；独立二元打分消除集合依赖，但牺牲准确率。 `评测` · [PDF](https://arxiv.org/pdf/2610.16655v1)
- [Correct Choices, Failed Sequences: Choice2Seq Benchmarks Correctness Retention Across Output Interfaces](https://arxiv.org/abs/2610.16191) — 衡量正确整答选择在逐步构造中保留的比例；Jev 在算术与词汇任务上的高选择准确率可能在串行输出接口下大幅下降。 `评测` · [PDF](https://arxiv.org/pdf/2610.16191v1)

## 2026-10-11

- [Jev, OpenAI, AWS, Perplexity: Do Decision Models Know When They're Wrong?: A pre-registered test of the calibration and accuracy of seven decision models on the same 799 unpublished yes/no decisions](https://zenodo.org/records/23293732) — 复用同一套 799 题并重新调用 Jev，比较七个决策模型；仅报告中的 Perplexity 检查点 ECE 区间整体低于研究阈值。 `评测` · [PDF](https://zenodo.org/api/records/23293732/files/SILT-RP-010-v1.0.pdf/content)
- [RSAJEV: Training-Free Abstaining Prototype Memory for Eliminating Silent Hallucination in JEV-Based Remote Sensing Classification](https://arxiv.org/abs/2610.15742) — 以缓存原型检索替换字母令牌读出，改善 Jev 风格遥感模型的跨数据集分类与开放集弃答。 `评测` · [PDF](https://arxiv.org/pdf/2610.15742v1)
- [Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate](https://arxiv.org/abs/2610.15710) — 区分已确立的记忆变更与暗示性变更；三分类 Jev 门控减少过早删除，但检出率损失超过预注册预算。 `评测` · [PDF](https://arxiv.org/pdf/2610.15710v1)
- [Poisoned into Action: Context Attacks on Typed Decision Workflows](https://arxiv.org/abs/2610.15537) — 追踪投毒上下文经检索、类型化决策进入持久状态的过程；两个合成工作流显示，防御阻止违规的同时也会扣留正确自动化操作。 `评测` · [PDF](https://arxiv.org/pdf/2610.15537v1) · [代码](https://github.com/WuXixiong/jev-poisoning-bench)

## 2026-10-10

- [Jev: Twenty Times Faster, Seven Points Behind: Does Jev know when it is wrong? A pre-registered test of a decision model's calibration and accuracy beside two general-purpose models](https://zenodo.org/records/23287930) — 在 799 道编程 Agent 与命令安全题上，Jev 配对准确率低于两个通用模型；其校准误差区间跨越研究设定的 ECE 阈值。 `评测` · [PDF](https://zenodo.org/api/records/23287930/files/SILT-RP-009-v1.0-Jev-Twenty-Times-Faster-Seven-Points-Behind.pdf/content)

## 2026-10-09

- [A Thermometer, Not an Analyst: Lawful Uses of a Text Judge in a Live Trading Lab](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7589261) — 研究固定版本Jev新闻标题裁判的六项检查，包括重复性、时间上下文与简单基线；报告微弱或消失的信号及失败后的基础设施修正，未检验交易收益提升。 `评测` · [PDF](https://papers.ssrn.com/sol3/Delivery.cfm/7589261.pdf?abstractid=7589261&mirid=1)
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://arxiv.org/abs/2610.13092) — 4,500 次 Agent 执行显示，Jev 降低单次决策成本与时延，但移动任务成功率下降及恢复开销会抵消成功交付层面的收益。 `评测` · [PDF](https://arxiv.org/pdf/2610.13092v1) · [代码](https://anonymous.4open.science/r/jev-emp-5BF4/)

## 2026-10-08

- [One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292) — 区分开放决策护栏的错误放行与错误拦截；选项名称进入模型输入时，误导名称可反转判断。 `评测` · [PDF](https://arxiv.org/pdf/2610.12292v1) · [代码](https://github.com/ArminAzizi98/option-channel-attack)
- [Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev Across Knowledge, Reasoning, and Multilingual Tasks](https://arxiv.org/abs/2610.11978) — 在 13 项基准上比较 Jev 与 19 个 LLM；知识任务表现较强，数学文字题明显较弱。 `评测` · [PDF](https://arxiv.org/pdf/2610.11978v1)
- [Can Decision Models Understand Stance? Evaluating Jev Against General-Purpose LLMs](https://arxiv.org/abs/2610.11901) — Jev 在英文 VAST 立场判断上接近 GPT-5.6，在中文对话立场上落后于更强模型，尤其难区分支持与反对。 `评测` · [PDF](https://arxiv.org/pdf/2610.11901v1)
- [Can Jev be Your Q or Policy in Reinforcement Learning?](https://arxiv.org/abs/2610.11692) — 将冻结 Jev 用作策略参照、探索判断及回放评分器；收益取决于学习角色与提供的信息。 `评测` · [PDF](https://arxiv.org/pdf/2610.11692v1)
- [Adversarial Cues in Decision Models Used as Judges: The Role of Request Presentation](https://arxiv.org/abs/2610.11436) — 添加冒号使排序字段请求中的明确错误终值更易被接受，保留插入顺序时两种候选均被拒绝。 `评测` · [PDF](https://arxiv.org/pdf/2610.11436v1)
- [TypedBench: A Benchmark for Calibration, Framing Sensitivity, and Cost in System One Decision Models](https://arxiv.org/abs/2610.11392) — 以策略驱动生成器测试校准、措辞、拒答和成本；错误排序较好不保证概率校准或对证据缺失敏感。 `评测` · [PDF](https://arxiv.org/pdf/2610.11392v1)
- [FastJEV: Understanding Redundancy for Compact JEV Inference](https://arxiv.org/abs/2610.11379) — 为 OmniJev 结合上下文状态复用、候选前缀共享及层剪枝；计算结构更紧凑不保证实测时延下降。 `评测` · [PDF](https://arxiv.org/pdf/2610.11379v1)
- [MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface](https://arxiv.org/abs/2610.11316) — 以请求到候选的对比学习训练多模态双编码器；将选项加入请求改善闭集判断，同时保留候选嵌入缓存。 `评测` · [PDF](https://arxiv.org/pdf/2610.11316v1)
- [Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?](https://arxiv.org/abs/2610.11135) — 通过阅读器替换及匹配类型化输入测试冷启动知识追踪；Jev 主要受益于模型先验，学习者增加后监督方法追上。 `评测` · [PDF](https://arxiv.org/pdf/2610.11135v1)

## 2026-10-07

- [JevForest: Path Voting for Budgeted Feature Acquisition](https://arxiv.org/abs/2610.10615) — 通过树路径投票在特征预算内选择语义问题；试验中较少的顺序问题比批量提问更贵。 `评测` · [PDF](https://arxiv.org/pdf/2610.10615v1)
- [Where Can a Decision Model Diagnose HVAC Faults? Reasoning Demand, Physical Representation, and Robustness Under Shift](https://arxiv.org/abs/2610.09937) — 在故障诊断中区分物理表征与推理需求；工程特征改善一致性，但迁移稳定不意味着绝对准确率更高或检测有效。 `评测` · [PDF](https://arxiv.org/pdf/2610.09937v1)
- [System Switch: When Should a Fast Decision Model Stop and Think?](https://arxiv.org/abs/2610.09683) — 测试快速决策模型按置信度转交慢速视觉推理器；离线收益未转化为 Doom 关卡通关。 `评测` · [PDF](https://arxiv.org/pdf/2610.09683v1)
- [Visual Jev Rewards: Reference-Bound Verification for Multi-Subject Image Generation](https://arxiv.org/abs/2610.09328) — 训练本地 Qwen 验证器联合判断参考身份与图像条件，将二元概率平均值用作图像生成奖励。 `评测` · [PDF](https://arxiv.org/pdf/2610.09328v1)

## 2026-10-06

- [Calibrated Decisions Are Not Calibrated Probabilities: An Exact-Target Audit of Jev and Three Open Decision Models](https://zenodo.org/records/23179064) — 以精确概率目标和人类分歧审计决策概率：归一化 Noul 更贴近给定基率，逐任务校准则缩小人类投票分布上的接口差距。 `评测` · [PDF](https://zenodo.org/api/records/23179064/files/velu-jev-calibration-audit.pdf/content) · [代码](https://github.com/MohitSV/jev-calibration-audit)
- [From Probabilities to Decisions: Search and Multi-Teacher Distillation with Jev](https://arxiv.org/abs/2610.09188) — 将 Jev 与 Qwen 成对概率蒸馏到小型评估器；匹配预算的国际象棋收益可重复，检索收益仍不确定。 `评测` · [PDF](https://arxiv.org/pdf/2610.09188v1)
- [Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?](https://arxiv.org/abs/2610.08775) — 评测 Agent 为大规模任务构建可复用产物的能力；多数运行损失零样本质量，部分产物以较低预估 API 费用接近 Jev。 `评测` · [PDF](https://arxiv.org/pdf/2610.08775v1) · [代码](https://github.com/aktsonthalia/bottled)
- [Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge](https://arxiv.org/abs/2610.08675) — 固定算术与操作数后交换财务引文；Jev 既会漏检错误角色证据，也会拒绝等价证据，显式列标题改变两者权衡。 `评测` · [PDF](https://arxiv.org/pdf/2610.08675v1)
- [Token-Efficient Multi-Agent Collaboration via System One-Guided Computational Division of Labor](https://arxiv.org/abs/2610.08155) — 以 Laya 控制器、小型证据阅读器和有限任务菜单协调 LLM 工作单元；七个基准上报告更少 GPT token 与较低端到端时延。 `评测` · [PDF](https://arxiv.org/pdf/2610.08155v1)
- [When Plans Change Answers: Formalizing Cost-Accuracy Optimization for Semantic Queries](https://arxiv.org/abs/2610.08089) — 形式化按贡献加权的语义查询质量；v2 新增基于置信度的跳过规则，在保证预测输出目标后不再为剩余元组评分。 `评测` · [PDF](https://arxiv.org/pdf/2610.08089v2)
- [Benchmarking System One Models in Online Moderation](https://arxiv.org/abs/2610.07953) — 在五个基准上分离审核规则、检索先例和答案集合；匹配条件下 Jev 从先例获益，Laya 则常仅改变判定比例而未提升区分能力。 `评测` · [PDF](https://arxiv.org/pdf/2610.07953v1) · [代码](https://github.com/FedericoMz/som-moderation-benchmark)
- [SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730) — 在重复骨干循环后训练类型化读出；八次循环提升同结构模型准确率，但计算更贵，校准不如三次循环。 `评测` · [PDF](https://arxiv.org/pdf/2610.07730v1)
- [Readout Stability in Prefill-Only Decision Models:Zero-Label Prediction and Inference-Time Compute Allocation](https://arxiv.org/abs/2610.07716) — 测试候选菜单变化后的首轮缓存排序，并比较重复询问与模型级联；排序稳定支持计算复用，本身不能识别无标签准确率。 `评测` · [PDF](https://arxiv.org/pdf/2610.07716v1) · [代码](https://github.com/rlisml/jev-cascade)

## 2026-10-05

- [ufakzeka-karar: An Open Turkish Typed-Decision Model with Order-Invariant Option Scoring](https://arxiv.org/abs/2610.06744) — 在共享位置独立评分土耳其语选项以消除顺序影响；监督训练优于所测 REINFORCE，温度校准在留出问题类型上反而变差。 `评测` · [PDF](https://arxiv.org/pdf/2610.06744v1)
- [JEV versus LLMs: Accuracy, Cost and Calibration on Seven Political Science Replications](https://arxiv.org/abs/2610.06625) — 复现七项标注与量表研究：Jev 响应更快，多项任务表现接近对照模型，按所报告批处理价格比较时没有费用优势。 `评测` · [PDF](https://arxiv.org/pdf/2610.06625v2)
- [SoK: Semantic Decision Engines in Network Control Loops](https://arxiv.org/abs/2610.06425) — 审计 139 个网络控制论文族，区分决策时延与服务完成验证；排队和候选覆盖检查会改变系统准入结论。 `综述` · [PDF](https://arxiv.org/pdf/2610.06425v1) · [代码](https://github.com/OniReimu/SoK-JEV)
- [GraphDecide: Benchmarking System One Models on Graph Tasks](https://arxiv.org/abs/2610.06354) — 在十四种模型接口配置上评测图结构、图文证据与序列优化；启发式提案改善 Jev 构造质量，相对固定规则的收益随任务变化。 `评测` · [PDF](https://arxiv.org/pdf/2610.06354v1) · [代码](https://github.com/VictorYXL/JevGraphBench)

## 2026-10-04

- [Hidden Risks of Jev: An Empirical Study of Security, Privacy, and Dual Use](https://arxiv.org/abs/2610.04985) — 研究输入操纵、受限输出中的隐私推断与防御检测；官方 Jev 接口实验和 NanoJev 可控训练实验揭示不同风险。 `评测` · [PDF](https://arxiv.org/pdf/2610.04985v1) · [代码](https://github.com/shihe98/Security_Privacy_Jev)

## 2026-10-03

- [System One Models for Wireless Decision-Making:Applications and Performance Evaluation](https://arxiv.org/abs/2610.04345) — 测量天线选择与 RAN 切片的质量／时延权衡：Jev 响应更快，效用收益取决于任务与后续执行成本。 `评测` · [PDF](https://arxiv.org/pdf/2610.04345v1)

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

- [Knows Its Slips, Reads the Page: A Pre-registered Study of Confidence and Abstention in Jev, a Calibrated Decision Model](https://zenodo.org/records/23288651) — 置信度在输入难度之外仍能预测错误，但随呈现方式漂移；合成任务中显式弃答方向合理，收益敏感度与标签不变性不足。 `评测` · [PDF](https://zenodo.org/api/records/23288651/files/Jev_J1J2.pdf/content) · [代码](https://github.com/QAv2/agi-semantic-core)
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

