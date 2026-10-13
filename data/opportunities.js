// 机会数据源。每日自动化更新于 2026-10-13：基于 PR#117（10/9）；OR 复核：WEBP InvitationExpired→归档；AIDC/SPAIS 已关→归档腾位；BiDex/HumanRLI/WorldModels 今日仍开（BiDex OR≈10/13 07:00，HumanRLI≈10/13 11:59）；EEAI 延期至 ≈10/19 11:59；新增 Contact-Rich（OR≈10/16 11:59）与 Apart Swarm Alignment（11/6–8 multi-agent）；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-13";

const OPPORTUNITIES = [
  // ---- 紧迫行动（今日截止）----
  {
    title: "CoRL 2026 Workshop · Do Robots Need World Models?",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-13",
    deadlineLabel: "OpenReview due ≈10/13 06:59 UTC（今日上午；官网曾写 10/12）",
    matchScore: 5,
    status: "开放中（今日约 07:00 UTC 前）",
    link: "https://do-robots-need-world-models.github.io/",
    note: "今日最紧迫：辩论式 workshop（显式 world model vs 端到端/VLA）。立刻压 ≤4 页研究稿或 position paper 投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/do-robots-need-world-models。"
  },
  {
    title: "CoRL 2026 Workshop · BiDexTool（Bimanual Dexterous Tool Use）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-12",
    deadlineLabel: "官网延期至 Oct 12；OpenReview due ≈10/13 07:00 UTC（今日上午；以 OR 为准）",
    matchScore: 4,
    status: "开放中（今日约 07:00 UTC · OR 再延期）",
    link: "https://bimanual-tool.github.io/",
    note: "双手灵巧工具使用；官网已延至 10/12，OR 实际约 10/13 07:00 UTC。立刻投短文/demo 提案到 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/BiDexTool；demo 视频可另发 bidextool2026corl@googlegroups.com。"
  },
  {
    title: "CoRL 2026 Workshop · HumanRLI（Human-Centered Robot Learning and Interaction）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-13",
    deadlineLabel: "OpenReview due ≈10/13 11:59 UTC（今日；相对 10/9 快照已再延期）",
    matchScore: 4,
    status: "开放中（今日约 11:59 UTC 前）",
    link: "https://hc-robot-learning.github.io/",
    note: "人机环境可靠/可扩展机器人学习与交互。写 ≤8 页 CoRL 模板投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/HumanRLI；叙事可强调人在环偏好/安全打断。"
  },
  {
    title: "CoRL 2026 Workshop · Scaling H2R（Human-to-Robot Scaling Laws）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-14",
    deadlineLabel: "OpenReview due ≈10/14 12:00 UTC（官网 Oct 14 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（约1–2天）",
    link: "https://scaling-h2r-corl.github.io/",
    note: "人数据→机器人策略规模律与 embodiment gap。以 OR ≈10/14 12:00 UTC 为准，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Scaling_H2R。"
  },
  {
    title: "CoRL 2026 Workshop · G2A / TAG（From Generative Models to Robot Actions）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-14",
    deadlineLabel: "OpenReview due ≈10/14 11:59 UTC（以 OR 为准；通知 10/29）",
    matchScore: 5,
    status: "开放中（约1–2天）",
    link: "https://actiongapworkshop.github.io/",
    note: "生成式先验落地为可执行动作（action gap），贴合 VLA。投 4–9 页短文到 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/TAG。"
  },
  {
    title: "CoRL 2026 Workshop · SimBench2Real（Simulation Benchmarks → Real-World Robot Learning）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-14",
    deadlineLabel: "OpenReview due ≈10/14 11:59 UTC（官网 Oct 14；通知约 10/23）",
    matchScore: 4,
    status: "开放中（约1–2天）",
    link: "https://corl2026-realworld-robot-learning.github.io/",
    note: "sim 基准→真机迁移 + 三项挑战。写 ≤5 页短文投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SimBench2Real；有 sim2real 实验可并行看挑战轨。"
  },
  {
    title: "NeurIPS 2026 Paris Volunteer（官方差旅/注册通道）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-15",
    deadlineLabel: "Paris 志愿截止 10/15 AoE（通知约 10/20；FA/Sydney·Atlanta 已关）",
    matchScore: 4,
    status: "开放中（约2天）",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "立刻填 Paris Volunteer：https://forms.gle/bBFUyUNngtCcEN3z8（截止 15 Oct AoE）。表单偏 PhD/postdoc，本科生需在表单说明挑战杯+研究经历并邮件确认资格。"
  },
  {
    title: "CoRL 2026 Workshop · Contact-Rich Loco-Manipulation",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-15",
    deadlineLabel: "官网延期至 Oct 15 AoE；OpenReview due ≈10/16 11:59 UTC（通知 10/22）",
    matchScore: 4,
    status: "开放中（约3天 · 新入主列表）",
    link: "https://contact-rich-loco-manipulation.github.io/",
    note: "今日新入：接触丰富 loco-manipulation 开问题，贴合具身/VLA。写 2–4 页短文/负结果投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Contact-Rich_Loco-Manipulation。"
  },
  {
    title: "CoRL 2026 Workshop · Sim2Real2Field（Sim-to-Real-to-Field）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-16",
    deadlineLabel: "OpenReview due ≈10/16 05:59 UTC（官网写 Oct 15 AoE；Best Paper $1000）",
    matchScore: 4,
    status: "开放中（约3天）",
    link: "https://sim2real2field-corl26.github.io/",
    note: "sim→lab→field 鲁棒迁移。先冲今日–10/14 批次，再写短文投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Sim2Real2Field；需 OR profile 且愿审 ≤2 篇。"
  },
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-19",
    deadlineLabel: "官网延期至 Oct 19 AoE；OpenReview due ≈10/19 11:59 UTC（原 10/12；Challenge 板持续开放；通知 10/30）",
    matchScore: 5,
    status: "开放中（延期 · 约6天）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "重要更新：论文截止从 10/12 延至 10/19 AoE。写 4 页投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/EEAI；有边缘推理经验可并行冲 Efficiency Challenge。"
  },
  {
    title: "CoRL 2026 Workshop · SISREN（Spatial Intelligence & Structured Reasoning for Embodied Navigation）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-20",
    deadlineLabel: "官网 Oct 20 23:59 AoE；OpenReview due ≈10/21 12:00 UTC（通知约 10/25）",
    matchScore: 5,
    status: "开放中（约7–8天）",
    link: "https://sisren-embodied-nav.github.io/",
    note: "空间智能×结构化推理服务具身导航，直接贴合 LLM reasoning + 具身。写短文/评测/负结果投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SISREN；优先讲可验证推理/反捷径学习。"
  },
  {
    title: "CoRL 2026 Workshop · G4DWM-AD（Grounded 4D Multimodal World Models for AD）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-22",
    deadlineLabel: "OpenReview due ≈10/23 11:59 UTC（官网 Oct 22 23:59 AoE；通知 11/5）",
    matchScore: 4,
    status: "开放中（约9–10天）",
    link: "https://arlo0o.github.io/Grounded-Driving-World-Models_Workshop/",
    note: "4D occupancy / 多模态 world model 服务规划与安全验证，贴合具身+CV。写短文/负结果/数据集报告投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/GroundedDrivingWMs。"
  },
  {
    title: "中国国际大学生创新大赛（2026）· 省赛完成 / 国赛推荐节点",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-10-25 / 2026-10-31",
    deadlineLabel: "各地须 10/25 前完成省赛；10/31 前完成入围总决赛项目推荐（国赛报名已于 9/25 截止）",
    matchScore: 4,
    status: "开放关注（已报名团队盯省赛/推荐）",
    link: "https://cy.ncss.cn",
    note: "国赛系统报名已关；若已提交：本周立刻问学院/省赛组委会网评与答辩时间表，按 10/25、10/31 节点备齐路演；未报名则转挑战杯校内选拔。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔已启动（部分校 9–10 月窗口），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周立刻问学院团委第二十届校内选拔时间表，决定是带队冲奖还是做经验分享/答辩辅导角色。"
  },
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE，正文提交 11/16 AoE（补充材料 11/23）",
    matchScore: 4,
    status: "开放关注（约4–5周）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-22–25）。本周列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定。"
  },

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 保定 ·「智辨真伪：防范大模型欺骗的技术路径探索」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约4天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-16/915602.shtml",
    note: "主题直打大模型欺骗/真伪判别，贴合 LLM reasoning×安全。本周邮件 jinjia_peng@163.com（彭锦佳）自荐参会或短报告，附 1 页欺骗检测/可验证推理摘要。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约10天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打 AI 智能体攻防与安全边界，和 TOPOSHIELD/agent security 高度契合。本周邮件 10380295@qq.com（白杨/唐诗）自荐参会或短报告。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "活动举办日期（线上+纽约 Collider / 香港 AI Safety HK hub）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "主题直打 multi-agent collusion；官网确认 NYC + 香港双线下 hub。本周在 apartresearch.com 报名并预写 1 页 collusion eval 提纲；若在港优先占香港 hub。"
  },
  {
    title: "Apart Research · Swarm Alignment Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-06 至 2026-11-08",
    deadlineLabel: "活动举办日期（线上 + AE Studio 洛杉矶 hub；提交截止 11/8 AoE）",
    matchScore: 5,
    status: "开放报名（新入主列表）",
    link: "https://apartresearch.com/sprints/swarm-alignment-2026",
    note: "今日新入：多 agent 群体对齐/沙箱/协议/oversight，和 TOPOSHIELD 高度重合。先报 10/23 Collusion，再预留 11/6–8；本周在 apartresearch.com 报名并起草 swarm failure monitor 一页提纲。"
  },
  {
    title: "Apart Research · AI × Epistemics Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-13 至 2026-11-15",
    deadlineLabel: "活动举办日期（线上；提交截止 11/15 AoE）",
    matchScore: 4,
    status: "开放报名（新入主列表）",
    link: "https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15",
    note: "模型置信/可验证性/信任基础设施，贴合 LLM reasoning×安全。若 Collusion/Swarm 已打满，用此场练 eval；本周报名并准备 1 页 claim-verification 基准提纲。"
  },

  // ---- 导师匹配关注 ----
  {
    title: "SPAR（Supervised Program for Alignment Research）Spring 2027 · 学员关注",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "预计 2026-12 前后开放申请（官网：Spring apps open around December）",
    deadlineLabel: "下一轮约 12 月开放；EOI 表单可先填",
    matchScore: 5,
    status: "关注中（Fall 已关；立刻填 EOI）",
    link: "https://sparai.org/",
    note: "10/13 复核：Fall 2026 已关、Spring 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "官网仍写 Spring cycle「later this fall」开放（原 late September 已过；截至 10/13 仍未开）",
    deadlineLabel: "已过 late September 预告；每日刷新官网与 EOI；可 J-1",
    matchScore: 4,
    status: "关注中（10/13 复核：文案仍为 later this fall；Fall 截止文案未改）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "10/13 官网仍写 Fall「due September 6」，Spring 措辞为「later this fall」并可 J-1。立刻填 EOI，日历每周刷新 cbai.ai；开放当天投 Security / multi-agent mentor。"
  },

  // ---- 实验室实习 ----
  {
    title: "微软亚洲研究院（MSRA）Research Intern for LLM Reasoning",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "常年开放，建议尽快投递",
    matchScore: 5,
    status: "开放中",
    link: "https://www.microsoft.com/en-us/research/opportunity/research-intern-for-llm-reasoning/",
    note: "下载 https://aka.ms/InternApplication，中英文简历发 MSRAih@microsoft.com 与 shun.zheng@microsoft.com，标题写「LLM Reasoning研究实习生」，注明可实习 ≥3 个月。"
  },
  {
    title: "微软亚洲研究院（MSRA）具身智能研究实习生（Embodied AI / VLA / World Model）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "常年开放，本科也可申请",
    matchScore: 5,
    status: "开放中",
    link: "https://www.microsoft.com/en-us/research/opportunity/research-intern-for-machine-learning-group-embodied-ai-research/",
    note: "明确欢迎有志科研的本科生；方向含 latent action / VLA / world model / RL。同一套申请表发 MSRAih@microsoft.com 与 lizo@microsoft.com，标题写「机器学习组—具身智能研究实习生」。"
  },
  {
    title: "字节跳动 Seed 大模型人才校招 / 研究实习（含具身智能 · Reasoning · Multi-Agent）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（2027 届校招 + 实习通道已开）",
    deadlineLabel: "应届生面向 2026.9–2027.8 毕业；实习面向 2027.9 及以后毕业在读",
    matchScore: 5,
    status: "开放中",
    link: "https://seed.bytedance.com/zh/seedearlycareer",
    note: "含基础大模型/RL/reasoning/multi-agent/具身等。本周按毕业年份选应届或实习通道投递，邮件 seedcampus@bytedance.com 备询；简历突出 reasoning/安全/VLA 一作与挑战杯。"
  },
];
