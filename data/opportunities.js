// 机会数据源。每日自动化更新于 2026-09-02：基于 PR#40；OpenReview 确认 AI4GOOD 今日 12:00 UTC 截止（官网 9/1 AoE）；RoboWM=Robotics_World_Modeling OR 9/3 11:59 UTC；新增 EvoRobust（官网 9/12 AoE / OR 9/13 12:29 UTC，AI 鲁棒/agent 安全强匹配）并归档 MATH-AI 腾位；Who Verifies 保留至约 9/6；MATS Neel 9/4 PT / 全 cohort 9/6；NeurIPS FA 2026 页仍 not yet updated；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-02";

const OPPORTUNITIES = [
  // ---- 紧迫行动（未来两周）----
  {
    title: "NeurIPS 2026 Workshop · Who Verifies the Agents?（Agent 验证/安全/可扩展监督）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿已截止（OpenReview 8/30 13:00 UTC，现 Invitation 400）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/6）",
    link: "https://verify-agents-workshop.github.io/",
    note: "OR 投稿入口已过期。若已交则等审；错过则把 verifier/reward hacking 叙事立刻改投今日 12:00 UTC 截止的 AI4GOOD，或 AIWILD/IAB/Meta-Agents/EvoRobust。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-02",
    deadlineLabel: "论文投稿截止（官网 9/1 AoE；OpenReview 今日 9/2 12:00 UTC）",
    matchScore: 5,
    status: "开放中（今日最高优先：OR 今日 12:00 UTC 截止）",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "今天 12:00 UTC 前立刻交：OR 仍开到今日正午，Multi-agent Security 赛道与 TOPOSHIELD 高度契合。把多智能体安全/社会影响短文压进 OpenReview，错过就只能等下一档 AIWILD/EvoRobust。"
  },
  {
    title: "NeurIPS 2026 Workshop · Robot Learning with World Models（RoboWM，具身/世界模型）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-02",
    deadlineLabel: "论文/短文投稿截止（官网今日 9/2 AoE；OpenReview Robotics_World_Modeling 9/3 11:59 UTC）",
    matchScore: 5,
    status: "开放中（官网今日 AoE，OR 约1天）",
    link: "https://robowm-ws.github.io/",
    note: "Full≤8 页或 Short 2–4 页，也可交 1 页 Demo。先保 AI4GOOD（今日 12:00 UTC），再写 world model 短文走 OR；与 WRL（OR 同约 9/3）错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · 8th Robot Learning（WRL：Physical AI Going Zero-Shot）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-03",
    deadlineLabel: "论文投稿截止（OpenReview 9/3 11:59 UTC；官网 9/2 AoE）",
    matchScore: 5,
    status: "开放中（约1天）",
    link: "https://www.robot-learning.ml/2026/",
    note: "OR 仍开至 9/3 11:59 UTC。具身/零样本 Physical AI 短文可立刻投；先保 AI4GOOD，再交本条，之后接 RoboWM。"
  },
  {
    title: "NeurIPS 2026 Workshop · World Models in Physical AI（WM_PAI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（OpenReview 9/5 21:59 UTC，与官网 9/5 AoE 对齐）",
    matchScore: 5,
    status: "开放中（约3天）",
    link: "http://www.worldmodels-physicalai.com/",
    note: "≤8 页非归档。先保 AI4GOOD/WRL，再写世界模型/物理 AI 安全短文，可与 RoboWM 互补。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of LLM Post-Training（FLLMPT）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（OpenReview Submission 9/5 22:00 UTC；官网仍写 8/30）",
    matchScore: 5,
    status: "开放中（约3–4天）",
    link: "https://www.fllmpt-work.shop/",
    note: "OpenReview 仍为 9/5 22:00 UTC（官网仍标 8/30，以 OR 为准）。若有 post-training / RL / 非平稳适配结果，本周直接走 Submission。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of Agentic Systems Theory（FAST）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 12:00 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://fast-workshop.github.io/",
    note: "OR Submission 仍为 9/6 12:00 UTC。多智能体涌现/compositional safety 短文可再腾 1–2 天打磨后交 OR；与 AIWILD/Meta-Agents 同周错开角度。"
  },
  {
    title: "NeurIPS 2026 Workshop · Towards Test-Time Continual Learning Agents（TTCL）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（官网 9/5 AoE；OpenReview 9/6 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://ttcl-agents.github.io/",
    note: "聚焦部署后持续学习的语言/具身 agent，含 safety/robustness 评测。若有 test-time adaptation / 记忆巩固 / 防遗忘结果，本周压短文走 OR NeurIPS.cc/2026/Workshop/TTCL。"
  },
  {
    title: "NeurIPS 2026 Workshop · Embodied Spatial Reasoning（ESR，具身空间推理）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-06",
    deadlineLabel: "论文/Demo 投稿截止（OpenReview Paper/Demo Track 均为 9/6 11:59 UTC）",
    matchScore: 4,
    status: "开放中（约4天）",
    link: "https://embodiedsr.github.io/",
    note: "OR ESR_Paper_Track / ESR_Demo_Track 均为 9/6 11:59 UTC。把空间推理/VLA/world model 结果压成短文或交互 demo，与 WM_PAI（9/5）错开。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 13:00 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "主题直打 agent safety/security/prompt injection；9 页或 4 页短文。今天先保 AI4GOOD，本周再投本条作为安全主通道之一。"
  },
  {
    title: "NeurIPS 2026 Workshop · VLM4RWD（接地/可靠 VLM 与真实世界部署）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 03:59 UTC；官网 9/5 AoE）",
    matchScore: 4,
    status: "开放中（约4天）",
    link: "https://vlm4rwd.github.io/",
    note: "聚焦 grounded/faithful VLM 与真实部署可靠性；把幻觉抑制、接地评测或失败案例压成短文，可与 RoboPAD/ESR 错开。注意 OR 截止偏早（9/6 03:59 UTC）。"
  },
  {
    title: "NeurIPS 2026 Workshop · Meta-Agents（Managing Agents that Manage Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://meta-agents-workshop.github.io/",
    note: "与 AIWILD/IAB/TTCL 同日落在约 9/6。可先保 AI4GOOD，再投 meta-agent 安全/监督短文；须附 responsible-use 声明。"
  },
  {
    title: "NeurIPS 2026 Workshop · Interpreting Agent Behavior（IAB：Agent 行为解释/可解释控制）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://iab-agents.github.io/",
    note: "解释/审计 agent 行为与可控性短文可与 Meta-Agents / AIWILD 同日规划；今天先保 AI4GOOD，再写 IAB。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 完整 cohort 已开放",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-06（完整 Winter 2027，AoE）；Neel Nanda 赛道 2026-09-04 11:59pm PT",
    deadlineLabel: "完整 cohort 截止 9/6；Neel 赛道更早 9/4 PT（约2–4天）",
    matchScore: 5,
    status: "开放中（约4天；Neel 约2天）",
    link: "https://www.matsprogram.org/apply",
    note: "Stage 1 截止 9/6 AoE；含 Systems Security / Empirical 等轨。本周先交 Stage 1（背景+短答+两位推荐人联系方式），解释性/欺骗检测可另冲 Neel（9/4 PT）；材料与 ERA 复用。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agentic Web（网络化多智能体生态 / 信任与安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC；官网仍写 9/5）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://projectnanda.org/workshops/neurips26/",
    note: "含协调/声誉操纵抗性/population-scale safety；4 或 9 页非归档。若 TOPOSHIELD 可上升到网络信任/协调角度，优先投长文；与 Meta-Agents/IAB/AIWILD 同日落在约 9/6。"
  },
  {
    title: "NeurIPS 2026 Workshop · RoboPAD（机器人基础模型 Post-Training / 具身适应）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 约 9/10 11:59 UTC，约8天）",
    matchScore: 4,
    status: "开放中",
    link: "https://robotpad2026.github.io/",
    note: "聚焦 robot foundation model 的 post-training / 跨本体适应 / evaluation & safety；≤9 页非归档。若有适应/失败纠正/安全评估结果，优先压成短文；可与 ESR（9/6）错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 9/10 23:59 UTC，约8天）",
    matchScore: 4,
    status: "开放中",
    link: "https://nemo.semantic.review/",
    note: "具身神经符号智能，覆盖 LLM×planning、长程规划、共享语义与可靠性。Full≤8 页或 Short≤4 页非归档走 OpenReview NeurIPS.cc/2026/Workshop/NEmo；与 RoboPAD（同日）错开：本条偏符号/知识层。"
  },
  {
    title: "NeurIPS 2026 Workshop · EvoRobust（自演化多样性搜索 / 鲁棒与 Agent 安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-13",
    deadlineLabel: "论文投稿截止（官网 9/12 AoE；OpenReview 9/13 12:29 UTC）",
    matchScore: 5,
    status: "开放中（新上主列表，约11天）",
    link: "https://liuj-2023.github.io/EvoRobust-NeurIPS2026/",
    note: "新上主列表：主题覆盖 failure discovery、agentic safety、multi-agent 风险与多样性红队，和 AI Security 高度契合。≤4 页匿名短文走 OR NeurIPS.cc/2026/Workshop/EvoRobust；先保 AI4GOOD/AIWILD，再把 TOPOSHIELD/红队评测压成短文。"
  },
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE）",
    deadlineLabel: "申请截止（约11天）",
    matchScore: 5,
    status: "开放中",
    link: "https://erafellowship.org/fellowship",
    note: "剑桥线下 10 周（2027-01-18 起）、£10k 津贴+签证/差旅，含 Technical / Governance / TechGov；明确 18+ 即可。本周写完书面申请短文，技术轨突出 evaluations/robustness/agent control；与 MATS 材料复用后单独投。"
  },
  {
    title: "中国国际大学生创新大赛（原'互联网+'）2026",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-09-25 12:00",
    deadlineLabel: "报名系统已开放，截止 9/25 12:00",
    matchScore: 4,
    status: "报名系统开放中",
    link: "https://cy.ncss.cn",
    note: "系统自 8/10 开放至 9/25 12:00；各地须 10/31 前完成省赛推荐。本周登录 cy.ncss.cn 建队并上传预整理的 Symbiotic AI / 挑战杯材料包，同时问学院校内初赛截止日（多校早于国赛）。"
  },

  // ---- 顶会主会 & 中期节点 ----
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要截止 9/18，正文截止 9/25（AOE）；OR Submission 约 9/19 11:59 UTC",
    matchScore: 5,
    status: "开放中（OpenReview 已公布提交入口）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要 9/18、正文 9/25；入口 https://openreview.net/group?id=ICLR.cc/2027/Conference。本周锁定冲稿篇目与作者名单（摘要截止后不能再加作者），倒排实验与写作日程。"
  },
  {
    title: "Apart Research · AI Incident Response Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-09-11 至 2026-09-13",
    deadlineLabel: "活动举办日期（线上+线下均可参加，报名开放中）",
    matchScore: 4,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-incident-response-sprint-2026-09-11-to-2026-09-13",
    note: "主题直接对口 AI Security 事件响应（与 CeSIA 合办）；先报名占坑并加入 Discord，表现好可获 Apart Fellowship 邀请。本周在 apartresearch.com 完成 Sign Up。"
  },

  // ---- 竞赛 ----
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔已启动（部分校 9 月前后），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周立刻问学院团委第二十届校内选拔时间表（部分高校已进入 8–9 月校级复赛窗口），决定是带队冲奖还是做经验分享/答辩辅导角色。"
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
    note: "方向几乎完全重合（SFT/RL/test-time scaling）。下载 https://aka.ms/InternApplication，中英文简历发 MSRAih@microsoft.com 与 shun.zheng@microsoft.com，标题写「LLM Reasoning研究实习生」，注明可实习 ≥3 个月。"
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
  }
];
