// 机会数据源。每日自动化更新于 2026-10-21：基于 10/20 分支；OR 复核 EEAI InvitationExpired；SISREN 仍开至 ≈10/21 12:00 UTC；G4DWM/Roboletics 仍开；TAG 仍关；YOCSEF 重庆官方改期至 10/22 西博城（CNCC 会场）；Algoverse Nov 1 cohort 早鸟横幅延至 10/25 23:59 PT；CNCC 今日开幕；Generator/SPAR/CBAI/Apart/Seed/MSRA/上海AI Lab 复核；无 >7 天新归档；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-21";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "CoRL 2026 Workshop · SISREN（Spatial Intelligence & Structured Reasoning for Embodied Navigation）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-21",
    deadlineLabel: "OpenReview due ≈今日 10/21 12:00 UTC（官网 Oct 20 23:59 AoE；通知约 10/25）",
    matchScore: 5,
    status: "开放中（今日 OR 截止）",
    link: "https://sisren-embodied-nav.github.io/",
    note: "今天 12:00 UTC 前写短文/评测/负结果投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SISREN；优先讲可验证空间推理/反捷径学习，贴合 LLM reasoning × 具身。"
  },
  {
    title: "CNCC 2026（中国计算机大会 · 成都）· 智能体安全 / 大模型安全专题",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-21 至 2026-10-24",
    deadlineLabel: "大会今日开幕至 10/24；含「智能体的安全挑战」大会论坛与「自主而有界」智能体攻防专题",
    matchScore: 4,
    status: "进行中（今日开幕）",
    link: "https://ccf.org.cn/CNCC2026",
    note: "今天若还没票立刻上 ccf.org.cn/CNCC2026 购学生票；优先占「智能体的安全挑战」与「自主而有界」论坛，并连打 10/22 YOCSEF 重庆（西博城）+ 10/23 YOCSEF 成都。"
  },
  {
    title: "CCF YOCSEF 重庆 ·「重构可信边界：大模型内生安全与外围防线的协同之道」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-22",
    deadlineLabel: "论坛举办日 10/22 13:40–17:40；地点改为成都西博城 5 号馆 516（CNCC 会场）",
    matchScore: 5,
    status: "开放关注（约1天 · 官方改期）",
    link: "http://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-10-20/941719.shtml",
    note: "10/20 新公告：从原 10/24 重庆改到 10/22 成都西博城，主题仍是大模型内生安全×智能体外围防线。今天微信/电话 18680747367（冉靖/吴涛）自荐参会；人在蓉可与 CNCC 同馆连打。"
  },
  {
    title: "CoRL 2026 Workshop · G4DWM-AD（Grounded 4D Multimodal World Models for AD）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-22",
    deadlineLabel: "OpenReview due ≈10/23 11:59 UTC（官网 Oct 22 23:59 AoE；通知 11/5）",
    matchScore: 4,
    status: "开放中（约1–2天）",
    link: "https://arlo0o.github.io/Grounded-Driving-World-Models_Workshop/",
    note: "4D occupancy / 多模态 world model 服务规划与安全验证。本周写短文/负结果/数据集报告投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/GroundedDrivingWMs。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "活动举办日期（线上+纽约 Collider / 香港 AI Safety HK hub；报名仍开）",
    matchScore: 5,
    status: "开放报名（约2–4天）",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "主题直打 multi-agent collusion；今天在 apartresearch.com 报名并预写 1 页 collusion eval 提纲；若在港优先占香港 hub，可顺延看 11/8 YOCSEF 香港。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告；同期 CNCC 成都 10/21–24）",
    matchScore: 4,
    status: "开放关注（约2天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打 AI 智能体攻防与安全边界。今天邮件 10380295@qq.com（白杨/唐诗）自荐参会或短报告；与 10/22 西博城 YOCSEF 重庆 + CNCC 同城连打。"
  },
  {
    title: "CoRL 2026 Workshop · Roboletics 3.0（Agile Physical Human-Robot Interaction）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "官网 Oct 23 23:59 AoE；OpenReview due ≈10/24 15:59 UTC（10/21 仍开）",
    matchScore: 4,
    status: "开放中（延期重开 · 约2–3天）",
    link: "https://roboletics.github.io/corl2026/",
    note: "10/21 复核 OR 仍开。有 HRI/接触丰富/敏捷交互稿今天起投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Roboletics；无稿则优先保 SISREN/G4DWM。"
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
    note: "国赛系统报名已关；若已提交：今天立刻问学院/省赛组委会网评与答辩时间表，按 10/25、10/31 节点备齐路演；未报名则转挑战杯校内选拔。"
  },
  {
    title: "Algoverse AI Safety Fellowship · Nov 1 cohort（Open Phil 资助免学费）",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-10-25",
    deadlineLabel: "页眉 Early deadline 延至 10/25 23:59 PT（Nov 1 cohort）；正文仍残留旧 Jan 4 文案，以横幅为准；paperform HTTP 200",
    matchScore: 4,
    status: "开放中（早鸟延至 10/25 · 约4天）",
    link: "https://algoverseairesearch.org/ai-safety-fellowship",
    note: "10/21 重大变化：早鸟从 10/18 延到 10/25。本科可申、免学费——今天立刻打开 algoverse-safety.paperform.co 提交；材料可复用 SPAR/ERA 草稿。"
  },
  {
    title: "Generator Residency · Winter 2027（Kairos × Constellation · Berkeley）",
    type: "Fellowship / 导师匹配",
    tags: ["B", "C", "D"],
    deadline: "2026-10-26 / 2026-11-01",
    deadlineLabel: "国际申请建议 10/26 前（签证）；正式截止 11/1 AoE；项目 2027-01-18–04-09",
    matchScore: 3,
    status: "开放中（约5–11天）",
    link: "https://generatorresidency.org/",
    note: "AI safety 通才/基建 residency（非论文向；月津贴 $8500，可 J-1）。技术研究优先冲 Algoverse（10/25）/SPAR EOI；若愿做 fieldbuilding，本周在 generatorresidency.org/apply 提交（禁用 AI 代写），国际生尽量 10/26 前投。"
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
    note: "多 agent 群体对齐/沙箱/协议/oversight，和 TOPOSHIELD 高度重合。先报 10/23 Collusion，再预留 11/6–8；今天在 apartresearch.com 报名并起草 swarm failure monitor 一页提纲。"
  },
  {
    title: "CCF YOCSEF 香港 ·「大模型跨境训练：隐私保护与模型能力能否兼得？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-08",
    deadlineLabel: "论坛举办日（香港；可申请参会/发言）",
    matchScore: 3,
    status: "开放关注（约2–3周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-04/929336.shtml",
    note: "隐私/跨境训练与模型能力权衡，偏治理但可贴 AI 安全。若 10/23–25 已在港打 Apart Collusion hub，可顺延邮件 nanjierenxjtu@163.com（刘浩/张权忠）自荐旁听或短发言。"
  },
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE，正文提交 11/16 AoE（补充材料 11/23；Workshop 提案 11/4）",
    matchScore: 4,
    status: "开放关注（约3–4周）",
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

  // ---- 刚过截止（未满7天，暂留主列表）----
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-20",
    deadlineLabel: "OpenReview InvitationExpired（原 due ≈10/20 11:59 UTC；官网写 Oct 19 AoE）",
    matchScore: 5,
    status: "已截止（OR 已关）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "10/21 OR 已 InvitationExpired。若已交则等 10/30 通知；错过则效率/边缘推理叙事改投仍开的 G4DWM / Roboletics，或等 ICLR 2027 workshop CFP（提案录取约 11/29 后）。"
  },
  {
    title: "Anthropic Fellows Program · January 2027 cohort（AI Safety & Security）",
    type: "Fellowship / 导师匹配",
    tags: ["A", "C", "D"],
    deadline: "2026-10-18",
    deadlineLabel: "Greenhouse apply-by 已于 Oct 18 过；页面 10/21 仍开且写滚动审；需 US/UK/CA 工作许可",
    matchScore: 3,
    status: "关注中（apply-by 已过 · 条件门槛高）",
    link: "https://job-boards.greenhouse.io/anthropic/jobs/5183044008",
    note: "4 个月全职、周津贴约 $3850。无 US/UK/CA 工作许可只做材料草稿；有许可可试 Greenhouse 是否仍收滚动申请。STEM Fellow（PhD 向）不匹配本科，勿误投。"
  },
  {
    title: "CoRL 2026 Workshop · G2A / TAG（From Generative Models to Robot Actions）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-18",
    deadlineLabel: "OpenReview InvitationExpired（10/21 仍 400；原 due ≈10/18 11:59 UTC；官网仍写 Oct 14 属旧文案）",
    matchScore: 4,
    status: "已截止（OR 已关）",
    link: "https://actiongapworkshop.github.io",
    note: "OR 仍 InvitationExpired（约第 3 天，暂留主列表）。若已交则等通知；错过则 VLA/action gap 叙事改投仍开的 G4DWM / Roboletics。"
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
    note: "10/21 复核：Fall 2026 已关、Spring 约 12 月开放；页眉在推 Generator。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "官网仍写 Spring cycle「later this fall」开放（原 late September 已过；截至 10/21 仍未开）",
    deadlineLabel: "已过 late September 预告；每日刷新官网与 EOI；可 J-1",
    matchScore: 4,
    status: "关注中（10/21 复核：文案仍为 later this fall；Fall 截止文案未改）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "10/21 官网仍写 Fall「due September 6」，Spring 措辞为「later this fall」并可 J-1。立刻填 EOI，日历每周刷新 cbai.ai；开放当天投 Security / multi-agent mentor。"
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
