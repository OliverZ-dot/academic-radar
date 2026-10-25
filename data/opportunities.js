// 机会数据源。每日自动化更新于 2026-10-25：基于 10/24 分支；Roboletics OR InvitationExpired→已截止；Apart Collusion 最后一天；Algoverse 早鸟今日 10/25 23:59 PT；Generator 国际早鸟明日 10/26；创新大赛省赛节点今日；CNCC 收官归档腾位；新增 AAAI-27 SAFE Workshop（投稿至 11/2 AoE / OR≈11/03 04:59 UTC）；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-25";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "Algoverse AI Safety Fellowship · Nov 1 cohort（Open Phil 资助免学费）",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-10-25",
    deadlineLabel: "页眉 Early deadline 今日 10/25 23:59 PT（Nov 1 cohort）；正文残留旧 Jan 4 文案，以横幅为准",
    matchScore: 4,
    status: "开放中（今日截止）",
    link: "https://algoverseairesearch.org/ai-safety-fellowship",
    note: "本科可申、免学费。今天 23:59 PT 前打开 algoverseairesearch.org/ai-safety-fellowship 按 Nov 1 cohort 横幅提交；材料复用 SPAR/ERA 草稿，勿被正文 Jan 4 旧日期误导。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "最后一天至 10/25；线上+纽约 Collider / 香港 AI Safety HK hub；提交截止 10/25 AoE",
    matchScore: 5,
    status: "进行中（最后一天）",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "今天 23:59 AoE 前锁定 collusion detection / audit 赛道并提交；若在港占香港 hub，可顺延看 11/8 YOCSEF 香港，未打完则改盯 Lexsi（报名至 11/5）与 Swarm（11/6–8）。"
  },
  {
    title: "中国国际大学生创新大赛（2026）· 省赛完成 / 国赛推荐节点",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-10-25 / 2026-10-31",
    deadlineLabel: "各地须今日 10/25 前完成省赛；10/31 前完成入围总决赛项目推荐（国赛报名已于 9/25 截止）",
    matchScore: 4,
    status: "开放关注（省赛节点今日）",
    link: "https://cy.ncss.cn",
    note: "国赛系统报名已关；若已提交：今天确认学院/省赛组委会是否已完成省赛与推荐材料，按 10/31 节点备齐路演；未报名则转挑战杯校内选拔。"
  },
  {
    title: "Generator Residency · Winter 2027（Kairos × Constellation · Berkeley）",
    type: "Fellowship / 导师匹配",
    tags: ["B", "C", "D"],
    deadline: "2026-10-26 / 2026-11-01",
    deadlineLabel: "国际申请建议明日 10/26 前（签证）；正式截止 11/1 AoE；项目 2027-01-18–04-09",
    matchScore: 3,
    status: "开放中（国际早鸟明日）",
    link: "https://generatorresidency.org/",
    note: "AI safety 通才/基建 residency（非论文向；月津贴 $8500，可 J-1）。优先今天先交 Algoverse；若愿做 fieldbuilding，明天前在 generatorresidency.org/apply 提交（禁用 AI 代写），国际生务必赶 10/26。"
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
    title: "Lexsi · AI Safety and Alignment Hackathon（× Cohere Labs / Hugging Face）",
    type: "黑客松/演讲",
    tags: ["B", "C", "D"],
    deadline: "2026-11-05 / 2026-11-14",
    deadlineLabel: "报名截止 11/5 AoE；线上黑客松 11/1–21，提交 11/14；短名单 11/16；Demo Day 11/22；含 Red Teaming / Agentic Fine-tuning 赛道",
    matchScore: 5,
    status: "开放报名",
    link: "https://hackathon.lexsi.ai/",
    note: "本科可参加的线上 AI 安全黑客松，赛道含红队/对齐与 AgentTune；优秀者有 Lexsi 实习/全职面试通道。今天在 hackathon.lexsi.ai 报名并进 Discord，优先选 Red Teaming 或 Agentic Fine-tuning，预留 11/1–14 周末档期。"
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
    note: "多 agent 群体对齐/沙箱/协议/oversight，和 TOPOSHIELD 高度重合。先打完今晚 Collusion，再预留 11/6–8；今天在 apartresearch.com 报名并起草 swarm failure monitor 一页提纲。"
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
    title: "AAAI-27 Workshop · SAFE（Synthetic & Adversarial ForEnsics）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-02",
    deadlineLabel: "官网 Nov 2 23:59 AoE；OpenReview due ≈11/03 04:59 UTC；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约1周·新发现）",
    link: "https://www.safeworkshop.org/aaai-2027/",
    note: "新开：对抗/伪造取证/水印溯源/红队/jailbreak/MLLM 鲁棒，直打 AI Security×CV。本周把红队或 multimodal jailbreak 短文扩到 6–8 页 AAAI 格式，投 openreview.net/group?id=AAAI.org/2027/Workshop/SAFE；比 Trust4RSI 更早截止，优先排期。"
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
    note: "把 agent 演化可信性当 OS/系统问题（记忆溯源、工具沙箱、策略回滚、多智能体共演化），和 TOPOSHIELD/agent security 高度契合。优先先赶 SAFE（11/2），再列可扩短文投 openreview.net/group?id=AAAI.org/2027/Workshop/Trust4RSI-Agent。"
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
    note: "第三届 WMAC，主题从「如何协作」转向「如何度量群体智能」；可投 coordination metric / multi-agent eval / 负结果。安全向优先 SAFE→Trust4RSI，评测/度量向投 openreview.net/group?id=AAAI.org/2027/Workshop/WMAC。"
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
    status: "开放报名",
    link: "https://apartresearch.com/sprints/threat-intelligence-threat-modelling-2026",
    note: "用 LLM 规模化威胁情报/威胁建模，服务前沿 AI 数据中心对抗国家级攻击——直接贴 AI Security。今天报名；先打 Collusion/Swarm/Attribution，再预留 12/4–6，起草 1 页 AI-assisted threat model 提纲。"
  },

  // ---- 刚过截止（未满7天，暂留主列表）----
  {
    title: "CoRL 2026 Workshop · Roboletics 3.0（Agile Physical Human-Robot Interaction）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-24",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/24 15:59 UTC；官网写 Oct 23 AoE）",
    matchScore: 4,
    status: "已截止（OR 已关）",
    link: "https://roboletics.github.io/corl2026/",
    note: "OR 已 InvitationExpired。若已交则等通知；错过则 HRI/接触丰富叙事改投 AAAI SAFE（11/2）或 Trust4RSI/WMAC（11/20），或等 ICLR 2027 workshop 论文 CFP（提案录取约 11/29 后）。"
  },
  {
    title: "CoRL 2026 Workshop · G4DWM-AD（Grounded 4D Multimodal World Models for AD）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/23 11:59 UTC；官网 Oct 22 23:59 AoE；通知 11/5）",
    matchScore: 4,
    status: "已截止（OR 已关）",
    link: "https://arlo0o.github.io/Grounded-Driving-World-Models_Workshop/",
    note: "OR 已 InvitationExpired。若已交则等 11/5 通知；错过则 4D/世界模型叙事改投 AAAI Trust4RSI/WMAC（11/20），或等 ICLR 2027 workshop 论文 CFP（提案录取约 11/29 后）。"
  },
  {
    title: "CoRL 2026 Workshop · SISREN（Spatial Intelligence & Structured Reasoning for Embodied Navigation）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-21",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/21 12:00 UTC；官网 Oct 20 23:59 AoE；通知约 10/25）",
    matchScore: 5,
    status: "已截止（OR 已关）",
    link: "https://sisren-embodied-nav.github.io/",
    note: "OR 已关约第 4 天。若已交则盯约 10/25 通知；错过则空间推理/导航叙事改投 AAAI Trust4RSI/WMAC（11/20），或等 ICLR 2027 workshop CFP。"
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
    note: "OR 已关约第 5 天（约 10/28 后可归档）。若已交则等 10/30 通知；错过则效率/边缘推理叙事改投 AAAI 系列或等 ICLR 2027 workshop CFP。"
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
    note: "10/25 复核：Fall 2026 已关、Spring 约 12 月开放；页眉仍推 Generator。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "官网仍写 Spring cycle「later this fall」开放（原 late September 已过；截至 10/25 仍未开）",
    deadlineLabel: "已过 late September 预告；每日刷新官网与 EOI；可 J-1",
    matchScore: 4,
    status: "关注中（10/25 复核：文案仍为 later this fall；Fall 截止文案未改）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "10/25 官网仍写 Fall 周期文案，Spring 措辞为「later this fall」并可 J-1。立刻填 EOI，日历每周刷新 cbai.ai；开放当天投 Security / multi-agent mentor。"
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
    title: "上海人工智能实验室 · Agent算法 / 大模型&智能体安全 研究实习",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（Agent 岗 + 攻防平台中心安全岗均开放）",
    deadlineLabel: "常年开放；要求本科高年级+一作或主要贡献者论文优先；安全岗每周≥3天、≥3个月",
    matchScore: 5,
    status: "开放中",
    link: "https://www.shlab.org.cn/joinus/detail/7677804403931728179",
    note: "安全岗直打 Agent Safety/Jailbreak/红队（https://www.shlab.org.cn/joinus/detail/7677804403931728179）；Agent 算法岗见 https://www.shlab.org.cn/joinus/detail/7674925567683250474。今天按匹配度优先投安全岗，邮件 comm@pjlab.org.cn，简历突出 AI Security/Agent 一作与可实习时长。"
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
