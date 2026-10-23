// 机会数据源。每日自动化更新于 2026-10-23：基于 10/22 分支；OR 复核 G4DWM≈10/23 11:59 UTC 今日截止 / Roboletics≈10/24 15:59 UTC 仍开；EEAI/SISREN 仍 InvitationExpired；YOCSEF 重庆已结束归档腾位；CNCC 第3天；YOCSEF 成都今日；Apart Collusion 今日开赛；新增 Apart Threat Intelligence（12/4–6）；Algoverse 早鸟仍 10/25；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-23";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "CoRL 2026 Workshop · G4DWM-AD（Grounded 4D Multimodal World Models for AD）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "OpenReview due ≈10/23 11:59 UTC（官网 Oct 22 23:59 AoE；通知 11/5）",
    matchScore: 4,
    status: "开放中（今日 UTC 截止）",
    link: "https://arlo0o.github.io/Grounded-Driving-World-Models_Workshop/",
    note: "今天 11:59 UTC 前把短文/负结果/数据集报告投到 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/GroundedDrivingWMs；优先讲 4D occupancy→规划/安全验证。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛今日举办（成都；可申请参会/报告；同期 CNCC 至 10/24）",
    matchScore: 4,
    status: "今日举办",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打智能体攻防。立刻邮件 10380295@qq.com（白杨/唐诗）确认今日席位与地点；与 CNCC 同城连打，现场加微信认识攻防方向学者。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "今日开赛至 10/25；线上+纽约 Collider / 香港 AI Safety HK hub；提交截止 10/25 AoE",
    matchScore: 5,
    status: "进行中（今日开赛）",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "今天打开 apartresearch.com 完成报名并锁定 collusion detection / audit 赛道；组队后周日 23:59 AoE 前提交。若在港占香港 hub，可顺延看 11/8 YOCSEF 香港。"
  },
  {
    title: "CNCC 2026（中国计算机大会 · 成都）· 智能体安全 / 大模型安全专题",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-21 至 2026-10-24",
    deadlineLabel: "大会进行中至 10/24；含「智能体的安全挑战」与「自主而有界」智能体攻防专题",
    matchScore: 4,
    status: "进行中（第3天）",
    link: "https://ccf.org.cn/CNCC2026",
    note: "今天优先占智能体安全相关场次并旁听 YOCSEF 成都；明天收官前再扫一遍会刊，收集可跟进的实验室/企业名片。"
  },
  {
    title: "CoRL 2026 Workshop · Roboletics 3.0（Agile Physical Human-Robot Interaction）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "官网 Oct 23 23:59 AoE；OpenReview due ≈10/24 15:59 UTC（10/23 仍开）",
    matchScore: 4,
    status: "开放中（延期重开 · 约1–2天）",
    link: "https://roboletics.github.io/corl2026/",
    note: "OR 仍开至 ≈10/24 15:59 UTC。有 HRI/接触丰富/敏捷交互稿今天起投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Roboletics；无稿则先保今日 G4DWM。"
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
    note: "国赛系统报名已关；若已提交：今天问学院/省赛组委会网评与答辩时间表，按 10/25、10/31 节点备齐路演；未报名则转挑战杯校内选拔。"
  },
  {
    title: "Algoverse AI Safety Fellowship · Nov 1 cohort（Open Phil 资助免学费）",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-10-25",
    deadlineLabel: "页眉 Early deadline 仍为 10/25 23:59 PT（Nov 1 cohort）；正文残留旧 Jan 4 文案，以横幅为准",
    matchScore: 4,
    status: "开放中（早鸟约2天）",
    link: "https://algoverseairesearch.org/ai-safety-fellowship",
    note: "本科可申、免学费。今天打开 algoverseairesearch.org/ai-safety-fellowship 按 Nov 1 cohort 横幅提交；材料复用 SPAR/ERA 草稿，勿被正文 Jan 4 旧日期误导。"
  },
  {
    title: "Generator Residency · Winter 2027（Kairos × Constellation · Berkeley）",
    type: "Fellowship / 导师匹配",
    tags: ["B", "C", "D"],
    deadline: "2026-10-26 / 2026-11-01",
    deadlineLabel: "国际申请建议 10/26 前（签证）；正式截止 11/1 AoE；项目 2027-01-18–04-09",
    matchScore: 3,
    status: "开放中（约3–9天）",
    link: "https://generatorresidency.org/",
    note: "AI safety 通才/基建 residency（非论文向；月津贴 $8500，可 J-1）。技术研究优先冲 Algoverse（10/25）；若愿做 fieldbuilding，本周在 generatorresidency.org/apply 提交（禁用 AI 代写），国际生尽量 10/26 前投。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔已启动（部分校 9–11 月窗口），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周立刻问学院团委第二十届校内选拔时间表，决定是带队冲奖还是做经验分享/答辩辅导角色。"
  },
  {
    title: "Apart Research · Swarm Alignment Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-06 至 2026-11-08",
    deadlineLabel: "活动举办日期（线上 + AE Studio 洛杉矶 hub；提交截止 11/8 AoE）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/swarm-alignment-2026",
    note: "多 agent 群体对齐/沙箱/协议/oversight，和 TOPOSHIELD 高度重合。先打完本周末 Collusion，再预留 11/6–8；今天在 apartresearch.com 报名并起草 swarm failure monitor 一页提纲。"
  },
  {
    title: "CCF YOCSEF 香港 ·「大模型跨境训练：隐私保护与模型能力能否兼得？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-08",
    deadlineLabel: "论坛举办日（香港；可申请参会/发言）",
    matchScore: 3,
    status: "开放关注（约2周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-04/929336.shtml",
    note: "隐私/跨境训练与模型能力权衡，偏治理但可贴 AI 安全。若本周末已在港打 Apart Collusion hub，可顺延邮件 nanjierenxjtu@163.com（刘浩/张权忠）自荐旁听或短发言。"
  },
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE，正文提交 11/16 AoE（补充材料 11/23；Workshop 提案 11/4）",
    matchScore: 4,
    status: "开放关注（约2–3周）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-20–25）。本周列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定；若组 workshop 盯 11/4 提案截止。"
  },
  {
    title: "Apart Research · AI × Epistemics Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-13 至 2026-11-15",
    deadlineLabel: "活动举办日期（线上；提交截止 11/15 AoE）",
    matchScore: 4,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15",
    note: "模型置信/可验证性/信任基础设施，贴合 LLM reasoning×安全。若 Collusion/Swarm 已打满，用此场练 eval；今天报名并准备 1 页 claim-verification 基准提纲。"
  },
  {
    title: "AAAI-27 Workshop · Trust4RSI-Agent（Trustworthy Evolution of AI Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 13:00 UTC；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约4周）",
    link: "https://trust4rsi-agent.github.io/AAAI2027/",
    note: "把 agent 演化可信性当 OS/系统问题（记忆溯源、工具沙箱、策略回滚、多智能体共演化），和 TOPOSHIELD/agent security 高度契合。本周列可扩短文清单，投 openreview.net/group?id=AAAI.org/2027/Workshop/Trust4RSI-Agent；录用后盯学生注册 travel grant。"
  },
  {
    title: "AAAI-27 Workshop · WMAC 2027（Multi-Agent Collaboration / Collective Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "OpenReview due ≈11/20 22:59 UTC（官网 Nov 20）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约4周）",
    link: "https://multiagents.org/2027/",
    note: "第三届 WMAC，主题从「如何协作」转向「如何度量群体智能」；可投 coordination metric / multi-agent eval / 负结果。与 Trust4RSI 同窗口：优先安全向投 Trust4RSI，评测/度量向投 openreview.net/group?id=AAAI.org/2027/Workshop/WMAC。"
  },
  {
    title: "Apart Research · Agent Attribution Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-27 至 2026-11-29",
    deadlineLabel: "活动举办日期（线上；提交截止 11/29 AoE）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/agent-attribution-2026",
    note: "区分 rogue agent vs 人控 agent 的归因/检测/逃逸，直打 agent security。今天报名；优先排 Collusion→Swarm 后再打此场，预写 1 页 attribution classifier 提纲。"
  },
  {
    title: "Apart Research · Threat Intelligence & Threat Modelling Hackathon（× SL5）",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-12-04 至 2026-12-06",
    deadlineLabel: "活动举办日期（线上；提交截止 12/6 AoE；与 Security Level 5 合办）",
    matchScore: 5,
    status: "开放报名（新发现）",
    link: "https://apartresearch.com/sprints/threat-intelligence-threat-modelling-2026",
    note: "新开：用 LLM 规模化威胁情报/威胁建模，服务前沿 AI 数据中心对抗国家级攻击——直接贴 AI Security。今天报名；先打 Collusion/Swarm/Attribution，再预留 12/4–6，起草 1 页 AI-assisted threat model 提纲。"
  },

  // ---- 刚过截止（未满7天，暂留主列表）----
  {
    title: "CoRL 2026 Workshop · SISREN（Spatial Intelligence & Structured Reasoning for Embodied Navigation）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-21",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/21 12:00 UTC；官网 Oct 20 23:59 AoE；通知约 10/25）",
    matchScore: 5,
    status: "已截止（OR 已关）",
    link: "https://sisren-embodied-nav.github.io/",
    note: "OR 已 InvitationExpired。若已交则等约 10/25 通知；错过则空间推理/导航叙事改投仍开的 Roboletics（≈10/24），或等 ICLR 2027 workshop CFP（提案录取约 11/29 后）。"
  },
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-20",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/20 11:59 UTC；官网写 Oct 19 AoE）",
    matchScore: 5,
    status: "已截止（OR 已关）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "OR 已关约第 3 天。若已交则等 10/30 通知；错过则效率/边缘推理叙事改投仍开的 Roboletics，或等 ICLR 2027 workshop CFP。"
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
    note: "10/23 复核：Fall 2026 已关、Spring 约 12 月开放；页眉仍推 Generator。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "官网仍写 Spring cycle「later this fall」开放（原 late September 已过；截至 10/23 仍未开）",
    deadlineLabel: "已过 late September 预告；每日刷新官网与 EOI；可 J-1",
    matchScore: 4,
    status: "关注中（10/23 复核：文案仍为 later this fall；Fall 截止文案未改）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "10/23 官网仍写 Fall 周期文案，Spring 措辞为「later this fall」并可 J-1。立刻填 EOI，日历每周刷新 cbai.ai；开放当天投 Security / multi-agent mentor。"
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
    title: "上海人工智能实验室 · Agent算法研究实习（工程智能 / 长链推理）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（岗位页开放中；另见智能体系统中心 2026-09-24 Agent 岗）",
    deadlineLabel: "常年开放；要求本科高年级+一作或主要贡献者论文优先",
    matchScore: 5,
    status: "开放中",
    link: "https://www.shlab.org.cn/joinus/detail/7674925567683250474",
    note: "方向含 Agent 长链规划/推理/工具学习/RL。今天按岗位页投递，并同步看 https://www.shlab.org.cn/joinus/detail/7688979700371507519（智能体系统中心 Agent）；邮件 comm@pjlab.org.cn 备询，简历突出 Agent/reasoning 一作与可实习时长。"
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
