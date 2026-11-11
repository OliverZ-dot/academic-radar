// 机会数据源。每日自动化更新于 2026-11-11：基于 11/10 分支；OR/HotCRP/官网复核；CVPR 注册已过改盯 11/16 正文；Lexsi 提交更正为 11/15 AoE；珠峰大会归档腾位；新增 BlueDot Technical AI Safety（soonestDeadline=22 Nov）；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-11-11";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE 已过；正文 11/16 AoE（补充材料 11/23）；Workshop 提案 11/4 已过",
    matchScore: 4,
    status: "开放中（正文约5天；注册已截止）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "若已完成 Paper Registration：本周锁稿投 openreview.net/group?id=thecvf.com/CVPR/2027/Conference（11/16 AoE）；未注册则本轮主会已无提交资格，改盯 AAAI-27 workshop（11/20）与 ICLR 2027 workshop CFP（约 11/29 通知后）。"
  },
  {
    title: "Apart Research · AI × Epistemics Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-13 至 2026-11-15",
    deadlineLabel: "活动举办日期（线上 + Saarbrücken hub；提交截止 11/15 AoE；约2天开赛）",
    matchScore: 4,
    status: "开放报名（约2天）",
    link: "https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15",
    note: "模型置信/可验证性/信任基础设施，贴合 LLM reasoning×安全。今天报名并准备 1 页 claim-verification 基准提纲；Saarbrücken hub 见 luma.com/o9ra0uoq。"
  },
  {
    title: "AI Safety Camp · Virtual 2027（第12届 · 队员申请）",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-11-29",
    deadlineLabel: "队员申请 11/13 开放–11/29 截止；项目榜 11/13 上线；队长选人至 12/20；项目期 2027-01-11 至 04-18（线上，≥10h/周）",
    matchScore: 5,
    status: "即将开放（约2天）",
    link: "https://www.aisafety.camp/",
    note: "3 个月远程组队做预选 AI safety 项目。设日历盯 11/13 项目榜；优先勾 agent security / multi-agent / eval 项目，按 ≥10h/周 写一页动机+可复用代码/论文证据，开窗当天投出。"
  },
  {
    title: "Lexsi · AI Safety and Alignment Hackathon（× Cohere Labs / Hugging Face）",
    type: "黑客松/演讲",
    tags: ["B", "C", "D"],
    deadline: "2026-11-15",
    deadlineLabel: "报名 11/8 已关；线上黑客松进行中（11/1–22）；提交 11/15 23:59 AoE；短名单 11/16；决赛材料至 11/22；含 Red Teaming / Agentic Fine-tuning 赛道",
    matchScore: 5,
    status: "进行中（报名已关；盯提交·约4天）",
    link: "https://hackathon.lexsi.ai/",
    note: "若已报名：本周锁定 Red Teaming 或 Agentic Fine-tuning，把 before/after 指标与公开 HF collection 准备好，赶 11/15 AoE 提交；未报名则改打 Epistemics 11/13–15 与 Threat Intel 12/4–6。"
  },
  {
    title: "BlueDot Impact · Frontier AI Governance Course（下一期 cohort）",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-15",
    deadlineLabel: "官网 soonestDeadline=15 Nov；下一期 intensive 约 11/23–28、part-time 约 11/23–1/3；免费约 40 小时；申请见课程页 Apply",
    matchScore: 4,
    status: "开放中（约4天）",
    link: "https://bluedot.org/courses/ai-governance",
    note: "免费前沿 AI 治理课（证据评估/机构地图/策略辩论），适合作 GovAI/Pathfinder 前置训练。今天在 bluedot.org/courses/ai-governance 选 intensive 或 part-time 提交申请；技术向另见主列表 Technical AI Safety。"
  },
  {
    title: "Algoverse · AI Safety Fellowship Spring 2027",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-11-15",
    deadlineLabel: "Spring 2027 申请截止 Sunday Nov 15 23:59 PT（≈11/16 07:59 UTC）；免费（Open Phil 资助）；含 Trial Week + 组队发论文",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://algoverseairesearch.org/ai-safety-fellowship",
    note: "面向大学生/从业者做可发表 AI safety 研究（忽略页上残留的 Applications Closed for 2026 文案）。今天开写申请+准备 coding challenge 素材，赶 11/15 PT；材料可与 SPAR/PRISM EOI 复用。"
  },
  {
    title: "Humanoids 2026 Workshop · Trustworthy Humanoid Systems（From Capability to Assurance）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-15",
    deadlineLabel: "官网 Paper & Demo Nov 15 23:59 AoE；OpenReview due ≈11/17 11:59 UTC（alias Trustworthy_Humanoid_Systems；11/11 复核仍开放；滚动审 11/2–11/20）；会期 12/7 圣克拉拉",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://humanoid-safety-assurance.paiagent.ai/humanoids2026/",
    note: "具身/人形机器人系统级安全与 assurance（规划控制×运行时监督×人机接触），贴合 Embodied AI×AI Security。本周把 runtime monitor / failure recovery / 安全评测短文按 IEEE 双栏投 openreview.net/group?id=IEEE.org/RAS/Humanoids/2026/Workshop/Trustworthy_Humanoid_Systems（非归档、单盲）；有 demo 可同步交，标题含 Demo。"
  },
  {
    title: "AAAI-27 Workshop · Embodied AI Meta-alignment（When / How / With Whom to Align）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-16",
    deadlineLabel: "官网 Nov 16 23:59 AoE；HotCRP Deadline ≈11/17 11:59 UTC（11/11 复核 submissions open）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约5天）",
    link: "https://embodied-meta-alignment.pages.dev/",
    note: "具身智能×对齐元问题（安全/规范/多方目标权衡），直打 Embodied AI×AI Security。本周把具身安全/偏好冲突短文（position 2–4 页或 full 6–8 页，双盲 AAAI 格式）投 https://embodied-meta-alignment-2026.hotcrp.com/。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔持续推进（11/09–11/10 华南理工等校新发校选通知；合肥工大等要求学院 12 月底前推报），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：今天立刻问学院团委第二十届校内选拔截止日与申报书模板，决定是带队冲奖还是做经验分享/答辩辅导角色。"
  },
  {
    title: "Pathfinder Fellowship · Spring 2027（Kairos · 校园 AI Safety/Policy 社团负责人）",
    type: "导师匹配 Mentorship",
    tags: ["B", "C", "D"],
    deadline: "2026-11-24",
    deadlineLabel: "申请窗 11/10–11/24 23:59 AoE；录取 12/2；Kickoff mentee 12/6",
    matchScore: 4,
    status: "开放中（约13天）",
    link: "https://pathfinder.kairos-project.org/",
    note: "面向带领/筹建高校 AI safety·policy 社团的学生（本科可申，无个人津贴但可拿社团经费）。今天打开官网申请页，按社团现状/学期计划/个人角色写一稿并先提交，11/24 前可迭代。"
  },
  {
    title: "AAAI-27 Workshop · LoyalAgents（Who Does Your AI Agent Work For?）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 11:59 UTC（alias LoyalAgents；11/11 复核仍开放）；通知 12/2；camera-ready 1/15；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约9天）",
    link: "https://loyalagents.github.io/aaai27/",
    note: "agent 对用户的忠诚/权限门控/委托身份/利益冲突，补上「对公众安全 ≠ 对用户忠诚」缺口，贴合 TOPOSHIELD。≤8 页 AAAI、单盲、非归档，投 openreview.net/group?id=AAAI.org/2027/Workshop/LoyalAgents；可把攻防短文改写成 permission gate / attribution / inducement 评测。"
  },
  {
    title: "AAAI-27 Workshop · LAUT（LLM Agents Under Threat in Cyberspace）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 11:59 UTC（alias LAUT；11/11 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约9天）",
    link: "https://llm-agents-under-threat.github.io/",
    note: "直打 prompt injection / tool misuse / multi-agent collusion / 安全 agent 架构，与 TOPOSHIELD 高度重合。本周把 agent 攻防短文（≤7页、单盲、非归档）投 openreview.net/group?id=AAAI.org/2027/Workshop/LAUT。"
  },
  {
    title: "AAAI-27 Workshop · Trust4RSI-Agent（Trustworthy Evolution of AI Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 13:00 UTC（11/11 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约9天）",
    link: "https://trust4rsi-agent.github.io/AAAI2027/",
    note: "把 agent 演化可信性当 OS/系统问题（记忆溯源、工具沙箱、策略回滚、多智能体共演化）。优先投 LAUT/LoyalAgents 后，列可扩短文投 openreview.net/group?id=AAAI.org/2027/Workshop/Trust4RSI-Agent。"
  },
  {
    title: "AAAI-27 Workshop · AICS（AI Cyber Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 10:59 UTC（11/11 复核仍开放）；通知 12/11；AAAI 拒稿 fast track 另约 12/2 AoE；会期 2027-02 蒙特利尔",
    matchScore: 5,
    status: "开放中（约9天）",
    link: "http://aics.site/AICS2027/cfp.html",
    note: "主题直打 AI 系统安全/对抗鲁棒/红队/多智能体博弈安全，非匿名投稿。把 agent/jailbreak/红队短文投 openreview.net/group?id=AAAI.org/2027/Workshop/AICS；未赶上可盯 12/2 AAAI 拒稿 fast track。"
  },
  {
    title: "BlueDot Impact · Technical AI Safety Course（下一期 cohort）",
    type: "演讲/论坛",
    tags: ["A", "B", "C"],
    deadline: "2026-11-22",
    deadlineLabel: "官网 soonestDeadline=22 Nov；下一期 intensive 约 11/30–12/5（申请至 11/22）、part-time 约 12/7–1/17（申请至 11/29）；免费；需具备 LLM 训练/微调基础",
    matchScore: 5,
    status: "开放中（约11天）",
    link: "https://bluedot.org/courses/technical-ai-safety",
    note: "11/11 新上主列表：比 Governance 更贴技术对齐/评测/AI control。今天在 bluedot.org/courses/technical-ai-safety 选 11/22 前的 intensive；若时间紧可改申 11/29 part-time，并与 Algoverse/GovAI 文书错峰。"
  },
  {
    title: "GovAI · Summer Fellowship 2027（UK Research/Applied + DC）",
    type: "Fellowship",
    tags: ["B", "C", "D"],
    deadline: "2026-11-22",
    deadlineLabel: "UK Research/Applied：11/22 23:59 GMT；DC Summer：11/22 23:59 EST；项目期 2027-06-07 至 08-27（伦敦或华盛顿）",
    matchScore: 4,
    status: "开放中（约11天）",
    link: "https://www.governance.ai/opportunities",
    note: "AI governance 三个月全职 fellowship（UK 可签临时工签；DC 需美国工作许可）。技术向优先填 Research Track；材料本周起草，与 Algoverse/Pathfinder/BlueDot 错峰提交，截止前在 governance.ai/opportunities 投递。"
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
    note: "用 LLM 规模化威胁情报/威胁建模，服务前沿 AI 数据中心对抗国家级攻击——直接贴 AI Security。今天报名；先打 Epistemics，再预留 12/4–6（在 Attribution 之前），起草 1 页 AI-assisted threat model 提纲。"
  },
  {
    title: "Apart Research · Agent Attribution Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-12-11 至 2026-12-13",
    deadlineLabel: "官网已改期：12/11–13 线上（提交截止 12/13 AoE；原 11/27–29 不再适用；另有 Tel Aviv jam site）",
    matchScore: 5,
    status: "开放报名（改期·约30天）",
    link: "https://apartresearch.com/sprints/agent-attribution-2026",
    note: "区分 rogue agent vs 人控 agent 的归因/检测/逃逸，直打 agent security。今天报名；日程 Epistemics→Threat Intel（12/4）→Attribution（12/11），预写 1 页 attribution classifier 提纲。"
  },

  // ---- 刚过截止 / 近日落幕（未满7天，暂留主列表）----
  {
    title: "G-Research · NeurIPS 2026 Sydney Travel Grant",
    type: "Travel Grant",
    tags: ["B", "C", "D"],
    deadline: "2026-11-06",
    deadlineLabel: "申请已于 Friday 6 Nov 截止；通知约 11/13；面向 emerging talent / early-career / students 的全额悉尼 travel grant",
    matchScore: 4,
    status: "已截止（约第5天）",
    link: "https://www.gresearch.com/g-research-at-neurips/",
    note: "申请窗已关约第5天。若已提交：盯约 11/13 通知并备好护照/签证材料；未提交则改盯 AAAI-27 Student Scholar/Volunteer（约 11/30–12/4 ET 开放）与后续 conference travel 渠道。"
  },

  // ---- 导师匹配关注 ----
  {
    title: "SPAR（Supervised Program for Alignment Research）Spring 2027 · 学员关注",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "预计 2026-12 前后开放申请（官网：Spring apps open around December）",
    deadlineLabel: "下一轮约 12 月开放；EOI 表单可先填；并行可填 PRISM Fellow EOI（Fellow 窗 12/14–1/8；Mentor 窗至 11/25）",
    matchScore: 5,
    status: "关注中（Fall 已关；Spring 约12月）",
    link: "https://sparai.org/",
    note: "11/11 复核：Fall 已关、Spring 约 12 月开放。立刻点 Express interest；同步 prism-research.org 填 Fellow EOI。校园社团负责人另见主列表 Pathfinder；AISC 队员窗见主列表 AI Safety Camp。"
  },

  // ---- 实验室实习 ----
  {
    title: "微软亚洲研究院（MSRA）Research Intern in AI Safety（Societal AI Group）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "2026-10-20 新帖；北京；本科可申；需导师书面同意 + ≥3 个月",
    matchScore: 5,
    status: "开放中",
    link: "https://www.microsoft.com/en-us/research/opportunity/research-intern-in-ai-safety-societal-ai-group/",
    note: "AI 能力评测/价值对齐/自主系统安全可控，直打 AI Security。下载 https://aka.ms/InternApplication，中英文简历发 jingyao@microsoft.com，标题写「Social Computing组研究实习生」，注明可实习 ≥3 个月。"
  },
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
    title: "字节跳动 Seed 大模型人才校招 / 研究实习（含安全对齐 · 具身 · Reasoning · Multi-Agent）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（2027 届校招 + 实习通道已开）",
    deadlineLabel: "应届生面向 2026.9–2027.8 毕业；实习面向 2027.9 及以后毕业在读；另有「大模型安全与对齐研究实习生」对口岗",
    matchScore: 5,
    status: "开放中",
    link: "https://seed.bytedance.com/zh/seedearlycareer",
    note: "官网含基础大模型/RL/reasoning/multi-agent/具身；另有安全与对齐实习（Agent 可控/红队/监控）。本周按毕业年份选通道投递，优先搜投「大模型安全与对齐」岗，邮件 seedcampus@bytedance.com 备询；简历突出 reasoning/安全/VLA 一作与挑战杯。"
  },
];
