// 机会数据源。每日自动化更新于 2026-11-24：基于 11/23 分支；CVPR 补充窗将尽→归档腾位；新增 BlueDot Deep Field Fellowship（EOI，2–3 月 SF 全职）；Pathfinder/Lexsi/Meta-alignment 今天 AoE；LoyalAgents 通知改记 Dec 9；DataCon 补答辩 12/14–15；Apart Attribution 补 London hub；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-11-24";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "Lexsi · AI Safety and Alignment Hackathon（× Cohere Labs / Hugging Face）",
    type: "黑客松/演讲",
    tags: ["B", "C", "D"],
    deadline: "2026-11-24",
    deadlineLabel: "报名 11/8 已关；初稿 11/15 AoE 已过；短名单约 11/18；决赛材料/视频至 11/24 23:59 AoE（今天截止）；终审 11/24–25",
    matchScore: 5,
    status: "进行中（决赛材料今天截止）",
    link: "https://hackathon.lexsi.ai/",
    note: "若已进短名单：今天打磨 Demo 视频/幻灯与 HF artifacts，在 11/24 AoE 前交终稿；未进/未报则改打 Threat Intel 12/4–6 与 Agent Attribution 12/11–13。"
  },
  {
    title: "Pathfinder Fellowship · Spring 2027（Kairos · 校园 AI Safety/Policy 社团负责人）",
    type: "导师匹配 Mentorship",
    tags: ["B", "C", "D"],
    deadline: "2026-11-24",
    deadlineLabel: "申请窗 11/10–11/24 23:59 AoE（今天截止）；录取 12/2；Kickoff mentee 12/6",
    matchScore: 4,
    status: "开放中（今天截止）",
    link: "https://pathfinder.kairos-project.org/",
    note: "面向带领/筹建高校 AI safety·policy 社团的学生（本科可申，无个人津贴但可拿社团经费）。今天打开官网 Apply Now，按社团现状/学期计划/个人角色直接提交，11/24 AoE 前可再迭代。"
  },
  {
    title: "AAAI-27 Workshop · Embodied AI Meta-alignment（When / How / With Whom to Align）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-24",
    deadlineLabel: "官网已延期：Nov 24 23:59 AoE；HotCRP Deadline ≈11/25 11:59 UTC（11/24 复核仍 open）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（今天截止·已延期）",
    link: "https://embodied-meta-alignment.pages.dev/",
    note: "具身智能×对齐元问题，直打 Embodied AI×AI Security。把具身安全/偏好冲突短文（position 2–4 页或 full 6–8 页，双盲 AAAI 格式）投 https://embodied-meta-alignment-2026.hotcrp.com/（赶 Nov 24 AoE）。"
  },
  {
    title: "BlueDot Impact · Technical AI Safety Course（下一期 cohort）",
    type: "演讲/论坛",
    tags: ["A", "B", "C"],
    deadline: "2026-11-29 / 2026-12-06",
    deadlineLabel: "下一窗：part-time 约 12/7–1/17 申请至 11/29；intensive 12/14–19 申请至 12/6；再下一 intensive 1/4–9 申请至 12/27；另有 part-time 1/18–2/28 申请至 1/10；免费；需具备 LLM 训练/微调基础",
    matchScore: 5,
    status: "开放中（下一窗约5天）",
    link: "https://bluedot.org/courses/technical-ai-safety",
    note: "今天优先申 11/29 part-time 或 12/6 intensive。结课后可衔接 Technical AI Safety Project Sprint（申请至 12/27），也可填 Deep Field EOI 等 SF 全职轮次开放。"
  },
  {
    title: "AAAI-27 Workshop · LoyalAgents（Who Does Your AI Agent Work For?）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-27 / 2026-11-28",
    deadlineLabel: "官网已延期：Nov 27 AoE；OpenReview due ≈11/28 11:59 UTC（alias LoyalAgents；tmdate 11/21 14:43）；通知 12/9（官网/WikiCFP）；camera-ready 1/15；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（已延期·约4天）",
    link: "https://loyalagents.github.io/aaai27/",
    note: "agent 忠诚/权限门控/委托身份/利益冲突，贴合 TOPOSHIELD。≤8 页 AAAI、单盲、非归档——今天把草稿投 openreview.net/group?id=AAAI.org/2027/Workshop/LoyalAgents（赶 Nov 27 AoE）。"
  },
  {
    title: "AAAI-27 Workshop · LAUT（LLM Agents Under Threat in Cyberspace）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-27 / 2026-11-28",
    deadlineLabel: "官网 Nov 27 AoE；OpenReview due ≈11/28 11:59 UTC（alias LAUT；tmdate 11/20 11:19）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（已延期·约4天）",
    link: "https://llm-agents-under-threat.github.io/",
    note: "直打 prompt injection / tool misuse / multi-agent collusion。与 LoyalAgents 并行：把 agent 攻防短文（≤7页、单盲、非归档）投 openreview.net/group?id=AAAI.org/2027/Workshop/LAUT（赶 Nov 27 AoE）。"
  },
  {
    title: "DataCon2026 · 大数据安全分析竞赛（秋季赛）",
    type: "竞赛",
    tags: ["B", "C", "D"],
    deadline: "2026-11-28 / 2026-12-06",
    deadlineLabel: "报名 11/9–11/28；秋季赛 12/1–12/6；答辩约 12/14–15；春季赛约 2027-04；赛道含 APT 日志分析智能体 / 漏洞环境复现 / GEO",
    matchScore: 5,
    status: "开放报名（约4天）",
    link: "https://www.datacon.org.cn/datacon2026",
    note: "清华+奇安信发起，赛道直接对口 AI 智能体×网络安全（APT 日志分析 agent、漏洞环境复现）。今天在 datacon.org.cn 注册并组队（≤3人），优先选 APT 智能体赛道；获奖可拿蚂蚁/腾讯TSRC/奇安信内推。"
  },
  {
    title: "AAAI-27 Workshop · Agentic Laboratories（Agentic Labs）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-28",
    deadlineLabel: "官网已写延期至 Nov 27 23:00 AoE；OpenReview due ≈11/28 11:00 UTC（alias Agentic_Labs；tmdate 11/19 16:38；以 OR 为准）；通知约 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（OR 已延期·约4天）",
    link: "https://siavashhkh.github.io/agentic-labs-aaai27/",
    note: "实验室/科研流程中的 agentic 系统（工具链、评测、安全与可复现）。先冲 LoyalAgents/LAUT 后，把可复现实验/工具链短文投 openreview.net/group?id=AAAI.org/2027/Workshop/Agentic_Labs。"
  },
  {
    title: "AI Safety Camp · Virtual 2027（第12届 · 队员申请）",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-11-29",
    deadlineLabel: "队员申请已开–11/29 截止（约5天；项目榜已上线）；队长选人至 12/20；Opening weekend 2027-01-09/10；项目期 01-12 至 04-23；Final presentations 04-24–26（线上，≥10h/周）",
    matchScore: 5,
    status: "开放中（约5天）",
    link: "https://www.aisafety.camp/",
    note: "3 个月远程组队做预选 AI safety 项目。今天打开 aisafety.camp 浏览已上线项目榜，优先勾 agent security / multi-agent / eval，按 ≥10h/周 写一页动机+可复用代码/论文证据并投出。"
  },
  {
    title: "AAAI-27 Workshop · AICS（AI Cyber Security）· Fast Track",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-12-02",
    deadlineLabel: "常规投稿 11/20 AoE / OR ≈11/21 已关（InvitationExpired）；AAAI 拒稿 fast track 约 12/2 AoE（submission instruction TBD）；通知 12/11；会期 2027-02 蒙特利尔",
    matchScore: 5,
    status: "常规窗已关（盯 fast track·约8天）",
    link: "http://aics.site/AICS2027/cfp.html",
    note: "常规 OR 已关。若有 AAAI-27 主会拒稿且主题贴 AI 系统安全/红队/多智能体安全：盯官网 12/2 fast track 投稿说明（非匿名）；否则改打仍开放的 LoyalAgents/LAUT/Agentic_Labs。"
  },
  {
    title: "AAAI-27 Student Scholar / Volunteer Program",
    type: "Travel Grant",
    tags: ["B", "C", "D"],
    deadline: "2026-11-30 / 2026-12-04",
    deadlineLabel: "申请 11/30 12:01 AM ET 开放–12/4 11:59 PM ET 截止（约6天开窗）；需全日制在读 + AAAI 会员 + 已向会议投稿 + 导师推荐信；会期 2027-02-16–23 蒙特利尔",
    matchScore: 4,
    status: "即将开放（约6天）",
    link: "https://aaai.org/conference/aaai/aaai-27/student-scholar-volunteer-program/",
    note: "若本周把 LoyalAgents/LAUT/Meta-alignment 等 workshop 投出，即满足「已向会议投稿」。本周办好 AAAI 会员并请导师起草推荐信；开窗当天投，且勿提前注册会议以免丢掉免费注册。"
  },
  {
    title: "ICLR 2027 · Blog Posts Track",
    type: "顶会",
    tags: ["A", "B"],
    deadline: "2026-12-01",
    deadlineLabel: "Abstract & Submission 12/1 23:59 AoE（约7天）；通知 2027-03-01；camera-ready merge 03/15；录用可在主会海报展示；每人最多 2 篇；正文须以人类写作为主",
    matchScore: 4,
    status: "开放中（约7天）",
    link: "https://iclr.cc/Conferences/2027/CallForBlogPosts",
    note: "主会投稿已关后的低门槛学术曝光：把 agent 安全/reasoning 负结果或新直觉写成可读博客。今天读 iclr-blogposts.github.io/2027/call/，选定 1 个选题并建 OpenReview+匿名 GitHub PR 草稿，12/1 AoE 前双通道提交。"
  },
  {
    title: "BlueDot Impact · Frontier AI Governance Course（下一期 cohort）",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-12-06",
    deadlineLabel: "11/15 AoE 申请窗已过；下一窗 intensive 12/14–19 申请至 12/6 AoE（另有 1/4–9 intensive / 1/4–2/14 part-time 申请至 12/27）；免费约 40 小时",
    matchScore: 4,
    status: "开放中（下一窗约12天）",
    link: "https://bluedot.org/courses/ai-governance",
    note: "11/15 AoE 窗已过：改申 12/14–19 intensive（申请至 12/6 AoE）。技术向优先并行 BlueDot Technical AI Safety（part-time 至 11/29；intensive 至 12/6）。"
  },
  {
    title: "BlueDot Impact · Deep Field Fellowship（SF 全职 · EOI）",
    type: "导师匹配 Mentorship",
    tags: ["B", "C", "D"],
    deadline: "待公布（下一轮 2027-02-01 至 03-26）",
    deadlineLabel: "申请尚未开放；下一轮 2027-02-01–03-26 旧金山全职 8 周；另有 3/8–4/30、4/12–6/4 轮次；机票/住宿/餐饮覆盖，符合签证规则可有 $10k 津贴；现可填 Express interest",
    matchScore: 5,
    status: "关注中（申请未开·先填 EOI）",
    link: "https://bluedot.org/programs/deep-field",
    note: "覆盖威胁/缓解/机构地图的高强度全景 fellowship，明确欢迎一年。今天打开官网填 Express interest，并并行完成 Technical AI Safety（至 11/29/12/6）以抬高后续录取信号；确认能否离校 8 周赴 SF。"
  },
  {
    title: "BlueDot Impact · Technical AI Safety Project Sprint",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-12-27",
    deadlineLabel: "申请至 12/27；项目期 2027-01-04 至 02-07（5 周 part-time，约 25h）；优先录取 Technical AI Safety 课程毕业生；可申请 Rapid Grants 算力",
    matchScore: 5,
    status: "开放中（约33天）",
    link: "https://bluedot.org/courses/technical-ai-safety-project",
    note: "把 agent 安全/评测想法做成可公开小项目的结构化冲刺。建议先申 Technical AI Safety course（至 11/29/12/6），再在 12/27 前投本 sprint；准备 1 页项目设想（问题/方法/可交付物）与可编码证据。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔持续推进（南航申报书 11/16–12/8、作品上交 12/17–18；华南理工作品提交至 11/30；无锡学院材料 11/30；深技大 AI 学院院赛材料 11/25·约1天、校复赛材料 12/7；广西医科大学学院汇总至 11/30 18:00；黄山学院报送约 11/30；中石油（北京）报名至 12/10 23:00；立信申报书约 12/16；合肥工大学院报送 12/28），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：今天立刻问学院团委第二十届校内选拔截止日与申报书模板；若在深技大可对标院赛材料约 11/25，若在南航可对标申报书窗 11/16–12/8，决定带队冲奖或经验分享/答辩辅导角色。"
  },
  {
    title: "Apart Research · Threat Intelligence & Threat Modelling Hackathon（× SL5）",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-12-04 至 2026-12-06",
    deadlineLabel: "活动 12/4–6；提交截止 12/6 AoE；线上为主；线下 hub：San Francisco SL5（周六日）+ Bengaluru（AI Safety India）；与 Security Level 5 合办",
    matchScore: 5,
    status: "开放报名（约10天）",
    link: "https://apartresearch.com/sprints/threat-intelligence-threat-modelling-2026",
    note: "用 LLM 规模化威胁情报/威胁建模，服务前沿 AI 数据中心对抗国家级攻击——直接贴 AI Security。今天报名（可选 SF/Bengaluru hub）；Lexsi 决赛后优先预留 12/4–6，起草 1 页 AI-assisted threat model 提纲。"
  },
  {
    title: "Apart Research · Agent Attribution Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-12-11 至 2026-12-13",
    deadlineLabel: "官网已改期：12/11–13 线上（提交截止 12/13 AoE；原 11/27–29 不再适用；另有 Tel Aviv / London jam site）",
    matchScore: 5,
    status: "开放报名（改期·约17天）",
    link: "https://apartresearch.com/sprints/agent-attribution-2026",
    note: "区分 rogue agent vs 人控 agent 的归因/检测/逃逸，直打 agent security。今天报名；日程 Threat Intel（12/4）→Attribution（12/11），预写 1 页 attribution classifier 提纲；若在伦敦可看 Luma London jam。"
  },
  {
    title: "ICML 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2027-01-14 / 2027-01-22",
    deadlineLabel: "提交系统 1/8 开放；摘要 1/14 AoE；正文 1/22 AoE；一阶段拒稿 2/23；最终通知 5/3；会期 2027-08-02–04（Workshop 8/5–6）",
    matchScore: 5,
    status: "开放中（距摘要约51天；官网已公布 Dates）",
    link: "https://icml.cc/Conferences/2027/Dates",
    note: "官网已锁定摘要/正文节点。把 reasoning/安全方向下一篇主会目标对准 ICML；本周列可投稿工作清单，并在 1/8 前提前建好 OpenReview 账号（Suggested Account Creation 同日）。"
  },

  // ---- 导师匹配关注 ----
  {
    title: "SPAR（Supervised Program for Alignment Research）Spring 2027 · 学员关注",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-12-16 / 2027-01-13",
    deadlineLabel: "官网已锁定：学员申请 12/16 开放–1/13 截止；导师/机构申请现开至 11/30；EOI 可先填；并行可填 PRISM Fellow EOI（Fellow 窗 12/14–1/8；Mentor 窗至 11/25·约1天）",
    matchScore: 5,
    status: "关注中（Fall 已关；Spring 12/16 开窗）",
    link: "https://sparai.org/",
    note: "11/24 复核：Spring 学员窗仍锁定 12/16–1/13。立刻点 Express interest；同步 prism-research.org 填 Fellow EOI（Mentor 窗仅剩约1天，本科生通常申 Fellow 而非 Mentor）。校园社团负责人另见 Pathfinder；AISC 队员窗可并行投。"
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
    deadlineLabel: "常年开放；详情页需带 ?mode=campus；安全岗仍开（本科优秀可申）；另有 11/18「AI 安全研究实习生·安全工具集」新帖（硕博优先）；另有「智能体攻防算法实习生」滚动岗",
    matchScore: 5,
    status: "开放中",
    link: "https://www.shlab.org.cn/joinus/detail/7677804403931728179?mode=campus",
    note: "安全岗直打 Agent Safety/Jailbreak/红队（须用 ?mode=campus 打开）；工具集岗 https://www.shlab.org.cn/joinus/detail/7707575334678792475?mode=campus 偏硕博。今天优先投安全/智能体攻防岗，邮件 comm@pjlab.org.cn，简历突出 AI Security/Agent 一作与可实习时长。"
  },
  {
    title: "字节跳动 Seed 大模型人才校招 / 研究实习（含安全对齐 · 具身 · Reasoning · Multi-Agent）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（2027 届校招 + 实习通道已开）",
    deadlineLabel: "应届生面向 2026.9–2027.8 毕业；实习面向 2027.9 及以后毕业在读；另有「大模型安全与对齐研究实习生」对口岗（北京/上海，≥3 个月）",
    matchScore: 5,
    status: "开放中",
    link: "https://seed.bytedance.com/zh/seedearlycareer",
    note: "官网含基础大模型/RL/reasoning/multi-agent/具身；对口岗 https://jobs.bytedance.com/campus/position/7696062042885687557/detail（Agent 可控/红队/监控）。本周按毕业年份选通道投递，优先搜投「大模型安全与对齐」，邮件 seedcampus@bytedance.com 备询。"
  },
];
