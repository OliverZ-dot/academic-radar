// 机会数据源。每日自动化更新于 2026-09-07：基于 PR#50；OpenReview 确认 Meta-Agents 延期至 9/7 11:59 UTC（tmdate 9/6）；AgenticWeb/MATH-AI 今日 9/7；新增 CL4FMAgents（官网 9/7 AoE / OR 9/8 11:59 UTC）与 CWM（OR 9/7，tmdate 9/6 延期）；ESR Paper/Demo Track OR 延期至 9/11（tmdate 9/6，官网仍写 9/5）回填主列表；MATS/AIWILD/WM_PAI/FAST/TTCL/IAB 已关；NeurIPS FA 今日开放且截止改为 10/6 AoE（原记 10/9）；FAST/TTCL/IAB/WRL 提前归档腾位；主列表 24 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-07";

const OPPORTUNITIES = [
  // ---- 紧迫行动（今日/未来两周）----
  {
    title: "NeurIPS 2026 Workshop · Meta-Agents（Managing Agents that Manage Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-07",
    deadlineLabel: "论文投稿截止（OpenReview 已延期至今日 9/7 11:59 UTC，tmdate 9/6；官网仍写 9/5，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日最高优先 agent workshop）",
    link: "https://meta-agents-workshop.github.io/",
    note: "OR 于 9/6 把 duedate 推至今日 11:59 UTC。先投 meta-agent 安全/监督短文并附 responsible-use 声明；与 AgenticWeb/MATH-AI 同日错开角度。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agentic Web（网络化多智能体生态 / 信任与安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-07",
    deadlineLabel: "论文投稿截止（OpenReview 今日 9/7 11:59 UTC；官网仍写 9/5，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日最高优先安全 workshop）",
    link: "https://projectnanda.org/workshops/neurips26/",
    note: "含协调/声誉操纵抗性/population-scale safety。今日 11:59 UTC 前把 TOPOSHIELD/多智能体信任叙事压成长文或短文走 OR AgenticWeb。"
  },
  {
    title: "NeurIPS 2026 Workshop · MATH-AI（数学推理与 AI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-07",
    deadlineLabel: "论文投稿截止（官网 9/6 AoE；OpenReview 今日 9/7 11:59 UTC）",
    matchScore: 4,
    status: "开放中（今日截止）",
    link: "https://mathai-2026.github.io/",
    note: "若有 theorem proving / verifiable reward / reasoning chain 结果，今日与 AgenticWeb/Meta-Agents 错开后投；匹配 LLM reasoning。"
  },
  {
    title: "NeurIPS 2026 Workshop · Continual World Models（CWM）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-07",
    deadlineLabel: "论文投稿截止（OpenReview 今日 9/7 11:59 UTC；tmdate 9/6 延期）",
    matchScore: 5,
    status: "开放中（今日最高优先具身/世界模型 workshop）",
    link: "https://continual-world-models-workshop.github.io",
    note: "OR 昨晚延期至今日 11:59 UTC。聚焦持续学习的世界模型，和具身/WM 高度契合；有 world model / continual adaptation 结果立刻走 OR CWM。"
  },
  {
    title: "NeurIPS 2026 Workshop · CL4FMAgents（基础模型与具身 Agent 的持续学习）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-07 / 2026-09-08",
    deadlineLabel: "论文投稿截止（官网 9/7 AoE；OpenReview 9/8 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约1天；今日新增）",
    link: "https://neurips26-cl4fmagents.github.io/",
    note: "主题覆盖 continual FM、agent self-evolution、embodied lifelong learning 与更新期安全。≤8/≤4 页非归档走 OR CL4FMAgents；今日先保 Meta-Agents/CWM，再投本条。"
  },
  {
    title: "NeurIPS 2026 Workshop · PhysWorldAI（物理世界 AI：几何/物性/多模态感知）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-09",
    deadlineLabel: "Archival 论文投稿截止（官网 9/9；OpenReview 9/9 23:59 UTC）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://physworld-org.github.io/physworld.github.io/",
    note: "几何/物性/多模态传感与 embodied world models 高度契合。今日保 CWM 后，把 3D/VLA/world model 结果压成 archival 短文走 OR PhysWorldAI。"
  },
  {
    title: "NeurIPS 2026 Workshop · RoboPAD（机器人基础模型 Post-Training / 具身适应）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 约 9/10 11:59 UTC；官网仍写 8/29，以 OR 为准）",
    matchScore: 4,
    status: "开放中",
    link: "https://robotpad2026.github.io/",
    note: "聚焦 robot foundation model post-training / 跨本体适应 / evaluation & safety；≤9 页非归档，可与 PhysWorldAI（9/9）错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 9/10 23:59 UTC，约3天）",
    matchScore: 4,
    status: "开放中",
    link: "https://nemo.semantic.review/",
    note: "具身神经符号智能，覆盖 LLM×planning、长程规划与可靠性。Full≤8 页或 Short≤4 页走 OR NEmo；与 RoboPAD 同日错开：本条偏符号/知识层。"
  },
  {
    title: "NeurIPS 2026 Workshop · Embodied Spatial Reasoning（ESR，具身空间推理）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-11",
    deadlineLabel: "论文/Demo 投稿截止（OpenReview Paper/Demo Track 均为 9/11 11:59 UTC；官网仍写 9/5，以 OR 延期为准）",
    matchScore: 4,
    status: "开放中（OR 延期回填主列表）",
    link: "https://embodiedsr.github.io/",
    note: "OR 于 9/6 把 Paper/Demo Track 推至 9/11 11:59 UTC。有空间推理/VLA/3D grounding 结果或交互 demo，本周走 OR ESR_Paper_Track 或 ESR_Demo_Track。"
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
    note: "主题直打 AI Security 事件响应（与 CeSIA 合办）。今天报名占坑并加入 Discord，表现好可获 Apart Fellowship 邀请。"
  },
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE）",
    deadlineLabel: "申请截止（约6天）",
    matchScore: 5,
    status: "开放中",
    link: "https://erafellowship.org/fellowship",
    note: "剑桥线下 10 周（2027-01-18 起）、£10k 津贴+签证/差旅，含 Technical / Governance / TechGov。MATS 已关后本周立刻写书面短文，技术轨突出 evaluations/robustness/agent control。"
  },
  {
    title: "NeurIPS 2026 Workshop · EvoRobust（自演化多样性搜索 / 鲁棒与 Agent 安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-13",
    deadlineLabel: "论文投稿截止（官网 9/12 AoE；OpenReview 9/13 12:29 UTC）",
    matchScore: 5,
    status: "开放中（约6天）",
    link: "https://liuj-2023.github.io/EvoRobust-NeurIPS2026/",
    note: "覆盖 failure discovery、agentic safety、multi-agent 风险与多样性红队。≤4 页匿名短文走 OR EvoRobust；本周先保今日 agent 场，再压 TOPOSHIELD/红队评测。"
  },
  {
    title: "NeurIPS 2026 Financial Assistance / Volunteer（官方差旅资助）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-06（AoE）；申请于 2026-09-07 开放",
    deadlineLabel: "今日已开放申请，截止 10/6 AoE（官网已更新，原记 10/9）",
    matchScore: 4,
    status: "开放中（今日开放）",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "官网确认：7 Sep 开放、6 Oct 23:59 AoE 截止、14 Oct 通知；志愿同窗（Sydney/Atlanta，Paris 晚些）。今天登录 neurips.cc 填 FA 表（备好 OR profile ID、学生身份、接收/在投论文）；与 Citadel Travel Grant（10/5）可并行。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 完整 cohort",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-06（完整 Winter 2027，AoE）；Neel Nanda 赛道已于 2026-09-04 11:59pm PT 关闭",
    deadlineLabel: "申请已截止（9/6 AoE；保留至满 7 天再归档，约至 9/13）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/13）",
    link: "https://www.matsprogram.org/apply",
    note: "Stage 1 已于 9/6 AoE 关闭。若已交则等 9–11 月评估与 11 月中旬 offer；错过则本周全力冲 ERA（9/13），并订阅 matsprogram.org 下轮通知。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿已截止（OpenReview 9/6 13:00 UTC，现 Invitation 400）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/13）",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "OR 已关。若已交则等审；错过则安全主通道改投今日 AgenticWeb/Meta-Agents 与 9/13 的 EvoRobust。"
  },
  {
    title: "NeurIPS 2026 Workshop · World Models in Physical AI（WM_PAI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿已截止（OpenReview 9/6 13:59 UTC，现 Invitation 400）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/13）",
    link: "http://www.worldmodels-physicalai.com/",
    note: "OR 已关。若已交则等审；错过则改投今日 CWM、PhysWorldAI（9/9）或 RoboPAD/NEmo（9/10）。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of LLM Post-Training（FLLMPT）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿已截止（OpenReview Submission 9/5 22:00 UTC 后 Invitation 400/403；官网仍写 9/12，以 OR 为准）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/12）",
    link: "https://www.fllmpt-work.shop/",
    note: "OR 已关，勿信官网 9/12。若已交则等审；错过则把 post-training / RL 结果改投今日 MATH-AI 或冲 ICLR 2027（9/18–9/25）。"
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
    note: "OR 已关闭。若已交则等审；错过则改投今日 CWM、PhysWorldAI（9/9）或 RoboPAD/NEmo（9/10）。"
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
    note: "OR 已关闭。若已交则等审；错过则安全主通道改投今日 AgenticWeb/Meta-Agents 与 9/13 的 EvoRobust。"
  },

  // ---- 顶会主会 & 中期节点 ----
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
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要截止 9/18，正文截止 9/25（AOE）；OR Submission 约 9/19 11:59 UTC",
    matchScore: 5,
    status: "开放中（OpenReview 已公布提交入口）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要 9/18、正文 9/25；入口 openreview.net/group?id=ICLR.cc/2027/Conference。注意新人 1 篇上限政策。本周锁定冲稿篇目与作者名单（摘要截止后不能再加作者）。"
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
