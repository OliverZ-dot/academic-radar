// 机会数据源。每日自动化更新于 2026-09-14：基于 PR#64；OpenReview 复核 RoboPAD/EvoRobust 已关（Invitation expired），NEmo 仍开至 9/15 11:59 UTC；ERA AoE 截止换算后仍开至今日约 11:59 UTC；Apart Incident 已结束；Meta-Agents/AgenticWeb/MATH-AI/CWM（9/7）满 7 天归档；新增 Apart AI Collusion Sprint（10/23–25）与 YOCSEF 沈阳；FA·Citadel·ICLR·创新大赛·挑战杯·MSRA×2·SPAR·CBAI·YOCSEF 成都/保定/重庆复核；主列表 23 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-14";

const OPPORTUNITIES = [
  // ---- 紧迫行动（今日 / 近 48h）----
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE ≈ 今日 11:59 UTC）",
    deadlineLabel: "申请截止（AoE 仍开放至约今日 11:59 UTC；滚动审阅）",
    matchScore: 5,
    status: "开放中（今日截止 · 本轮最高优先 mentorship）",
    link: "https://erafellowship.org/fellowship",
    note: "官网仍显示 Winter 2027 开放且截止 9/13 11:59pm AoE（≈今日 11:59 UTC）。立刻交书面申请：剑桥 10 周（2027-01-18 起）、£10k+签证/差旅；技术轨写清 evaluations/robustness/agent control。"
  },
  {
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-15",
    deadlineLabel: "论文投稿截止（OpenReview 延期至 9/15 11:59 UTC；官网仍写 9/10，以 OR 为准）",
    matchScore: 4,
    status: "开放中（约1天；OR 延期）",
    link: "https://nemo.semantic.review/",
    note: "具身神经符号智能，覆盖 LLM×planning、长程规划与可靠性。Full≤8 页或 Short≤4 页；今日先交 ERA，随后立刻走 OR NEmo（RoboPAD/EvoRobust 已关）。"
  },

  // ---- 中期资助 / 差旅 / 顶会 / 竞赛 ----
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要截止 9/18，正文截止 9/25（AOE）；OR Submission 约 9/19 11:59 UTC",
    matchScore: 5,
    status: "开放中（OpenReview 已公布提交入口）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要 9/18、正文 9/25；入口 openreview.net/group?id=ICLR.cc/2027/Conference。注意新人 1 篇上限。本周锁定冲稿篇目与作者名单（摘要截止后不能再加作者）。"
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
  {
    title: "Citadel Conference Travel Grant · NeurIPS 2026（Sydney）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-05",
    deadlineLabel: "申请截止（通知约 10/9；本科生可申）",
    matchScore: 4,
    status: "开放中",
    link: "https://www.citadel.com/careers/programs-and-events/conference-travel-grant/",
    note: "本科/硕博均可，偏好有 NeurIPS 投稿者；覆盖出席 Sydney 会场费用，补 NeurIPS FA 不含机票缺口。本周开官网表单草稿，workshop/主会录用后立刻提交。"
  },
  {
    title: "NeurIPS 2026 Financial Assistance / Volunteer（官方差旅资助）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-06（AoE）；申请于 2026-09-07 开放",
    deadlineLabel: "申请已开放，截止 10/6 AoE（通知约 10/14）",
    matchScore: 4,
    status: "开放中",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "FA 只覆盖注册+住宿不含机票。本周登录 neurips.cc 填表选可现实出行的会场，并与 Citadel Travel Grant（10/5）并行补机票。"
  },
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

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 保定 ·「智辨真伪：防范大模型欺骗的技术路径探索」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约5周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-16/915602.shtml",
    note: "主题直打大模型欺骗/真实性，和 AI Security / deception 评测高度契合。本周邮件 jinjia_peng@163.com（彭锦佳）自荐参会或短报告，附 1 页欺骗检测/红队相关摘要。"
  },
  {
    title: "CCF YOCSEF 沈阳 ·「AI自动化攻击来袭，关键信息基础设施该如何应战？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约5周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-08/913432.shtml",
    note: "主题直打 AI 自动化攻击与关基防护，和 agent security / 攻防评测契合。本周电话 13032430077（韩从菲/张健楠）确认参会或短报告名额，准备 1 页 AI 自动化攻击/防御摘要。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约6周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打 AI 智能体攻防与安全边界，和 TOPOSHIELD/agent security 高度契合。本周邮件 10380295@qq.com（白杨/唐诗）自荐参会或短报告，附 1 页研究摘要与过往挑战杯/论文亮点。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "活动举办日期（线上+纽约 Collider 线下 hub）",
    matchScore: 5,
    status: "开放报名（官网新上线）",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "主题直打 multi-agent collusion / 隐蔽协调检测，和 TOPOSHIELD 高度契合。本周在 apartresearch.com 报名并预写 1 页 collusion eval/检测实验提纲；表现好可衔接到 Apart Fellowship。"
  },
  {
    title: "CCF YOCSEF 重庆 ·「重构可信边界：大模型内生安全与外围防线的协同之道」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-24",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约6周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-20/916619.shtml",
    note: "主题覆盖大模型内生安全与外围防线协同，适合讲 defense-in-depth / agent 边界。本周电话或短信联系 18680747367（冉靖/吴涛）确认参会/短报告名额，准备 1 页可信边界摘要。"
  },

  // ---- 导师匹配关注 ----
  {
    title: "SPAR（Supervised Program for Alignment Research）Spring 2027 · 学员关注",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "预计 2026-12 前后开放申请（官网：Spring 2027 apps open around December）",
    deadlineLabel: "下一轮约 12 月开放；EOI 表单可先填",
    matchScore: 5,
    status: "关注中（Fall 已关；立刻填 EOI）",
    link: "https://sparai.org/",
    note: "官网确认 Fall 2026 已关、Spring 2027 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，是本科阶段最高性价比 mentorship 管道之一，材料可复用今日 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 预计本月下旬开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "预计 2026-09 下旬开放申请（官网写 late September；Fall 2026 已于 9/6 截止）",
    deadlineLabel: "下一轮即将开放，需盯紧官网与 EOI 表单",
    matchScore: 4,
    status: "关注中（官方预告本月下旬开放；可 J-1）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "Fall 已关且不赞助签证；官网明确 Spring cycle 将 late September 开放并可赞助 J-1。立刻填页面 EOI，设日历每日刷新 cbai.ai；材料复用 ERA 书面稿，开放当天投 Security / multi-agent 相关 mentor。"
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
  },

  // ---- 近期刚截止（保留至满 7 天）----
  {
    title: "NeurIPS 2026 Workshop · RoboPAD（机器人基础模型 Post-Training / 具身适应）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-13",
    deadlineLabel: "论文投稿已截止（OpenReview Invitation expired；官网曾写 9/10，以 OR 为准）",
    matchScore: 4,
    status: "已截止（保留至满 7 天再归档，约至 9/20）",
    link: "https://robotpad2026.github.io/",
    note: "OR 已关。若已交则等审；错过则 robot FM post-training / 跨本体适应改投仍开放的 NEmo（9/15）或冲 ICLR 2027。"
  },
  {
    title: "NeurIPS 2026 Workshop · EvoRobust（自演化多样性搜索 / 鲁棒与 Agent 安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-13",
    deadlineLabel: "论文投稿已截止（OpenReview Invitation expired；官网曾写 9/12 AoE）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/20）",
    link: "https://liuj-2023.github.io/EvoRobust-NeurIPS2026/",
    note: "OR 已关。若已交则等审；错过则 failure discovery / agentic safety 叙事冲 ICLR 2027（9/18–9/25），并准备 10 月 Apart Collusion Sprint。"
  },
  {
    title: "Apart Research · AI Incident Response Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-09-11 至 2026-09-13",
    deadlineLabel: "活动已结束（保留至满 7 天再归档，约至 9/20）",
    matchScore: 4,
    status: "已结束（保留备查）",
    link: "https://apartresearch.com/sprints/ai-incident-response-sprint-2026-09-11-to-2026-09-13",
    note: "已结束。若已参赛：整理 containment / escape-detection 产出并跟进 Apart Fellowship；未报名则改盯 10/23–25 Collusion Sprint 与国内 YOCSEF。"
  },
  {
    title: "NeurIPS 2026 Workshop · VERICODEGEN（AI for Verifiable Coding）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-12",
    deadlineLabel: "论文投稿已截止（OpenReview Invitation expired；官网摘要 9/11 / 正文 9/13，以 OR 为准）",
    matchScore: 3,
    status: "已截止（保留至满 7 天再归档，约至 9/19）",
    link: "https://vericodegen.github.io/",
    note: "OR 已关。若已交则等审；错过则 verifiable coding / 规格生成相关结果改投冲 ICLR 2027（9/18–9/25）。"
  },
  {
    title: "NeurIPS 2026 Workshop · PhysWorldAI（物理世界 AI：几何/物性/多模态感知）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-12",
    deadlineLabel: "论文投稿已截止（OpenReview duedate 9/12 23:59 UTC；官网仍写 9/9，以 OR 为准）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/19）",
    link: "https://physworld-org.github.io/physworld.github.io/",
    note: "OR 已关（未再延期）。若已交则等审；错过则几何/物性/embodied world model 改投仍开放的 NEmo（9/15）或冲 ICLR 2027。"
  },
  {
    title: "NeurIPS 2026 Workshop · Embodied Spatial Reasoning（ESR，具身空间推理）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-11",
    deadlineLabel: "论文/Demo 投稿已截止（OpenReview Paper/Demo Track Invitation expired；官网仍写 9/5，以 OR 为准）",
    matchScore: 4,
    status: "已截止（保留至满 7 天再归档，约至 9/18）",
    link: "https://embodiedsr.github.io/",
    note: "OR 已关。若已交则等审；错过则空间推理/VLA/3D grounding 改投仍开放的 NEmo（9/15）或冲 ICLR 2027。"
  },
  {
    title: "NeurIPS 2026 Workshop · CL4FMAgents（基础模型与具身 Agent 的持续学习）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-08",
    deadlineLabel: "论文投稿已截止（OpenReview 9/8 11:59 UTC，现 Invitation expired）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/15）",
    link: "https://neurips26-cl4fmagents.github.io/",
    note: "OR 已关。若已交则等审；错过则 continual FM / embodied lifelong learning 改投仍开放的 NEmo（9/15）或冲 ICLR 2027。"
  }
];
