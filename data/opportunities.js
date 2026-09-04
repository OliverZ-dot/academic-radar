// 机会数据源。每日自动化更新于 2026-09-04：基于 PR#44；OpenReview 确认 RoboWM/WRL 已于 9/3 11:59 UTC 关闭（保留至约 9/10）；Who Verifies 保留至约 9/6、AI4GOOD 至约 9/9；今日最高优先为 MATS Neel（9/4 11:59pm PT）与明日 WM_PAI/FLLMPT（9/5）；完整 MATS cohort 仍 9/6 AoE；NeurIPS FA 官网宣布周一 9/7 开放申请（新增主列表），腾位归档 ESR；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-04";

const OPPORTUNITIES = [
  // ---- 紧迫行动（未来两周）----
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 完整 cohort 已开放",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-06（完整 Winter 2027，AoE）；Neel Nanda 赛道 2026-09-04 11:59pm PT",
    deadlineLabel: "今日最高优先：Neel 赛道今晚 9/4 11:59pm PT；完整 cohort 截止 9/6 AoE",
    matchScore: 5,
    status: "开放中（Neel 今晚截止；完整 cohort 约2天）",
    link: "https://www.matsprogram.org/apply",
    note: "今天立刻行动：若冲解释性/欺骗检测，今晚 11:59pm PT 前交 Neel 流；同时今晚或明早完成 Stage 1（背景+短答+两位推荐人），含 Systems Security 轨，材料与 ERA 复用。入口 matsprogram.org/apply。"
  },
  {
    title: "NeurIPS 2026 Workshop · Who Verifies the Agents?（Agent 验证/安全/可扩展监督）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿已截止（OpenReview 8/30 13:00 UTC，现 Invitation 400）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/6）",
    link: "https://verify-agents-workshop.github.io/",
    note: "OR 投稿入口已过期。若已交则等审；错过则把 verifier/reward hacking 叙事改投本周 AIWILD/IAB/Meta-Agents（约 9/6）或 9/13 的 EvoRobust。"
  },
  {
    title: "NeurIPS 2026 Workshop · Robot Learning with World Models（RoboWM，具身/世界模型）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-03",
    deadlineLabel: "论文投稿已截止（OpenReview Robotics_World_Modeling 9/3 11:59 UTC，现 Invitation expired）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/10）",
    link: "https://robowm-ws.github.io/",
    note: "OR 已于昨日 11:59 UTC 关闭。若已交则等审；错过则改投明日 WM_PAI（9/5）、PhysWorldAI（9/9）或 RoboPAD/NEmo（9/10）。"
  },
  {
    title: "NeurIPS 2026 Workshop · 8th Robot Learning（WRL：Physical AI Going Zero-Shot）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-03",
    deadlineLabel: "论文投稿已截止（OpenReview 9/3 11:59 UTC，现 Invitation expired）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/10）",
    link: "https://www.robot-learning.ml/2026/",
    note: "OR 已于昨日关闭。若已交则等审；错过则把 zero-shot / Physical AI 短文改投明日 WM_PAI 或下周 RoboPAD/NEmo。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-02",
    deadlineLabel: "论文投稿已截止（OpenReview 9/2 12:00 UTC，现 Invitation expired）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/9）",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "OR 已关闭。若已交则等审；错过则安全主通道改投本周 AIWILD/Meta-Agents/IAB（约 9/6）与 9/13 的 EvoRobust。"
  },
  {
    title: "NeurIPS 2026 Workshop · World Models in Physical AI（WM_PAI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（OpenReview 9/5 21:59 UTC，与官网 9/5 AoE 对齐）",
    matchScore: 5,
    status: "开放中（明日最高优先 workshop，约1天）",
    link: "http://www.worldmodels-physicalai.com/",
    note: "≤8 页非归档。今天写完 MATS 后立刻压世界模型/物理 AI 短文，明日 21:59 UTC 前交 OR；可与 PhysWorldAI（9/9）错开：本条偏 learned dynamics。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of LLM Post-Training（FLLMPT）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（OpenReview Submission 9/5 22:00 UTC；官网仍写 8/30）",
    matchScore: 5,
    status: "开放中（明日截止，约1天）",
    link: "https://www.fllmpt-work.shop/",
    note: "以 OR 为准（9/5 22:00 UTC）。若有 post-training / RL / 非平稳适配结果，与 WM_PAI 同日错开：本条偏 LLM 后训练，走 Submission。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of Agentic Systems Theory（FAST）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 12:00 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://fast-workshop.github.io/",
    note: "OR Submission 仍为 9/6 12:00 UTC。多智能体涌现/compositional safety 短文可再腾 1 天打磨后交 OR；与 AIWILD/Meta-Agents 同周错开角度。"
  },
  {
    title: "NeurIPS 2026 Workshop · Towards Test-Time Continual Learning Agents（TTCL）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（官网 9/5 AoE；OpenReview 9/6 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://ttcl-agents.github.io/",
    note: "聚焦部署后持续学习的语言/具身 agent，含 safety/robustness。若有 test-time adaptation / 记忆巩固 / 防遗忘结果，周六前压短文走 OR NeurIPS.cc/2026/Workshop/TTCL。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 13:00 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "主题直打 agent safety/security/prompt injection；9 页或 4 页短文。今天先保 MATS+明日 WM_PAI/FLLMPT，周六前投本条作为安全主通道之一。"
  },
  {
    title: "NeurIPS 2026 Workshop · Meta-Agents（Managing Agents that Manage Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC；官网 9/5 AoE）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://meta-agents-workshop.github.io/",
    note: "与 AIWILD/IAB/TTCL 同日落在约 9/6。先保 MATS 与明日两条，再投 meta-agent 安全/监督短文；须附 responsible-use 声明。"
  },
  {
    title: "NeurIPS 2026 Workshop · Interpreting Agent Behavior（IAB：Agent 行为解释/可解释控制）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://iab-agents.github.io/",
    note: "解释/审计 agent 行为与可控性短文可与 Meta-Agents / AIWILD 同日规划；与 MATS Neel 材料叙事可复用。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agentic Web（网络化多智能体生态 / 信任与安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 9/6 11:59 UTC；官网仍写 9/5）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://projectnanda.org/workshops/neurips26/",
    note: "含协调/声誉操纵抗性/population-scale safety；4 或 9 页非归档。若 TOPOSHIELD 可上升到网络信任/协调角度，优先投长文；与 Meta-Agents/IAB/AIWILD 同日。"
  },
  {
    title: "NeurIPS 2026 Financial Assistance / Volunteer（官方差旅资助）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-09-07 起开放（历史截止约 10 月初；本届截止待开放后确认）",
    deadlineLabel: "官网宣布周一 9/7 开放申请（新增）",
    matchScore: 4,
    status: "即将开放（约3天）",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "官网已写明志愿者与财务资助申请将于周一 9/7 开放。今天先备好学生身份证明、接收/在投论文信息与预算；开放当天立即填表。本科作者若有 workshop 接收也可申；与 Citadel Travel Grant（10/5）可并行。"
  },
  {
    title: "NeurIPS 2026 Workshop · PhysWorldAI（物理世界 AI：几何/物性/多模态感知）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-09",
    deadlineLabel: "Archival 论文投稿截止（官网 9/9；OpenReview 9/9 23:59 UTC）",
    matchScore: 5,
    status: "开放中（约5天）",
    link: "https://physworld-org.github.io/physworld.github.io/",
    note: "几何/物性/多模态传感与 embodied world models，和具身/CV 高度契合。明日先保 WM_PAI，再把 3D/VLA/world model 结果压成 archival 短文走 OR NeurIPS.cc/2026/Workshop/PhysWorldAI。"
  },
  {
    title: "NeurIPS 2026 Workshop · RoboPAD（机器人基础模型 Post-Training / 具身适应）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 约 9/10 11:59 UTC，约6天）",
    matchScore: 4,
    status: "开放中",
    link: "https://robotpad2026.github.io/",
    note: "聚焦 robot foundation model 的 post-training / 跨本体适应 / evaluation & safety；≤9 页非归档。若有适应/失败纠正/安全评估结果，优先压成短文；可与 PhysWorldAI（9/9）错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 9/10 23:59 UTC，约6天）",
    matchScore: 4,
    status: "开放中",
    link: "https://nemo.semantic.review/",
    note: "具身神经符号智能，覆盖 LLM×planning、长程规划、共享语义与可靠性。Full≤8 页或 Short≤4 页非归档走 OpenReview NeurIPS.cc/2026/Workshop/NEmo；与 RoboPAD（同日）错开：本条偏符号/知识层。"
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
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE）",
    deadlineLabel: "申请截止（约9天）",
    matchScore: 5,
    status: "开放中",
    link: "https://erafellowship.org/fellowship",
    note: "剑桥线下 10 周（2027-01-18 起）、£10k 津贴+签证/差旅，含 Technical / Governance / TechGov；明确 18+ 即可。本周写完书面申请短文，技术轨突出 evaluations/robustness/agent control；与 MATS 材料复用后单独投。"
  },
  {
    title: "NeurIPS 2026 Workshop · EvoRobust（自演化多样性搜索 / 鲁棒与 Agent 安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-13",
    deadlineLabel: "论文投稿截止（官网 9/12 AoE；OpenReview 9/13 12:29 UTC）",
    matchScore: 5,
    status: "开放中（约9天）",
    link: "https://liuj-2023.github.io/EvoRobust-NeurIPS2026/",
    note: "主题覆盖 failure discovery、agentic safety、multi-agent 风险与多样性红队，和 AI Security 高度契合。≤4 页匿名短文走 OR NeurIPS.cc/2026/Workshop/EvoRobust；本周先保 AIWILD，再把 TOPOSHIELD/红队评测压成短文。"
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
