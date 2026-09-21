// 机会数据源。每日自动化更新于 2026-09-21：基于 PR#78；ICLR/创新大赛约 4 天；新增 CoRL UncertainWM（9/23 AoE）、RoboMem（9/24 AoE）、EEAI（10/12）；归档 NEmo（腾位）；主列表腾出香港/遥感 YOCSEF；CBAI Spring / Paris 志愿岗仍未开放；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-21";

const OPPORTUNITIES = [
  // ---- 紧迫行动 ----
  {
    title: "CoRL 2026 Workshop · UncertainWM（Modeling Uncertainty in Robotic World Models）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-23",
    deadlineLabel: "论文投稿截止 9/23 AoE（OpenReview due ≈9/24 11:59 UTC）",
    matchScore: 5,
    status: "开放中（今日新增 · 约2–3天 · 最紧迫之一）",
    link: "https://uncertainwm2026.github.io/",
    note: "今日新增：world model 不确定性/安全部署交叉，贴合具身。立刻压 ≤4 页短文（不确定性量化、sim2real 风险、多智能体不可预测性均可），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/UncertainWM；可与 SPAIS 叙事复用。"
  },
  {
    title: "CoRL 2026 Workshop · RoboMem（Memory for Robot Foundation Models）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-24",
    deadlineLabel: "论文投稿截止 9/24 AoE（OpenReview due ≈9/25 11:59 UTC）",
    matchScore: 5,
    status: "开放中（今日新增 · 约3–4天）",
    link: "https://corl2026-memory.github.io/",
    note: "今日新增：VLA/world model 持久记忆与长程自主，本科短文友好（明确欢迎 WIP/position）。本周内整理 memory/retrieval/失败回忆相关 ≤4 页 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/RoboMem。"
  },
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-25",
    deadlineLabel: "摘要已截止；正文截止 9/25 AoE（≈9/26 11:59 UTC）",
    matchScore: 5,
    status: "开放中（仅正文 · 约4天 · 最紧迫）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要窗口已关（9/18 AoE）。今日立刻在 OpenReview 把已登记稿冲到可提交 PDF；入口 openreview.net/group?id=ICLR.cc/2027/Conference；注意新人 1 篇上限，截止后不可再改稿。"
  },
  {
    title: "中国国际大学生创新大赛（原'互联网+'）2026",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-09-25 12:00",
    deadlineLabel: "报名系统已开放，截止 9/25 12:00",
    matchScore: 4,
    status: "报名系统开放中（约4天）",
    link: "https://cy.ncss.cn",
    note: "距截止约 4 天；今日登录 cy.ncss.cn 定稿队名/成员/赛道并上传材料包，问清学院校内初赛是否已截（多校早于 9/25）；省赛推荐须 10/31 前完成。"
  },
  {
    title: "NeurIPS 2026 Workshop · IAB（Interpreting Agent Behavior）· 附 NeurIPS reviews 通道",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-25",
    deadlineLabel: "「附 NeurIPS reviews」二次投稿截止（官网已由 10/1 改为 9/25；主投稿 9/5 已关）",
    matchScore: 4,
    status: "开放中（仅限有 NeurIPS 审稿意见的论文 · 约4天）",
    link: "https://iab-agents.github.io/",
    note: "二次通道截止 9/25（距今约 4 天）。若有 NeurIPS 2026 agent 行为/可解释/安全相关审稿结果，本周内整理 reviews+作者回复并投 OpenReview；无 reviews 则忽略本条。"
  },
  {
    title: "CoRL 2026 Workshop · SPAIS（Science of Physical AI Safety）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-01",
    deadlineLabel: "论文投稿截止 10/1 AoE（OpenReview due ≈10/2 11:59 UTC；通知 10/17）",
    matchScore: 5,
    status: "开放中（约10天）",
    link: "https://spais-ws.org/cfp",
    note: "具身×AI Safety 交叉顶会 workshop（Austin 11/12）。ICLR 交完后把 VLA/world model 安全评测或 jailbreak/对齐迁移短文压到 ≤4 页 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SPAIS；可并行申 Robocurve 差旅资助（10/11）。"
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
    note: "FA 只覆盖注册+住宿不含机票；Paris 志愿岗仍写 later open（9/21 复核仍仅 Sydney/Atlanta）。本周登录 neurips.cc 填 FA，并与 Citadel（10/5）并行补机票。"
  },
  {
    title: "SPAIS / Robocurve Travel Grant · CoRL 2026（Austin）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-11",
    deadlineLabel: "申请截止 10/11 AoE（通知 10/18；每份 $2,000×10）",
    matchScore: 3,
    status: "开放中",
    link: "https://airtable.com/appCxf8EI6xaNuxfE/pagaDxTFdxXo60qKj/form",
    note: "官网写面向研究生/early-career，本科若有具身安全产出也可试投并在动机里写清贡献。与 SPAIS 论文互不影响；本周填 Airtable，强调 physical AI safety 动机与会后可落地实验。"
  },
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-12",
    deadlineLabel: "论文投稿截止 10/12 AoE（另有 Challenge 截止 10/23；通知 10/26）",
    matchScore: 4,
    status: "开放中（今日新增 · 约3周）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "今日新增：VLA/world model 效率+latency 下安全兜底，贴合具身落地。ICLR 后写 ≤4 页效率/压缩/实时安全监控短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/EEAI；有 Jetson 可并行盯 10/23 Challenge。"
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
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE，正文提交 11/16 AoE（补充材料 11/23）",
    matchScore: 4,
    status: "开放关注（约7–8周）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-22–25）。ICLR 正文交完后立刻列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定。"
  },

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 哈尔滨 ·「硅基共情与碳基尊严：具身智能时代的伦理边界与信任共识」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-09-19",
    deadlineLabel: "论坛已于 9/19 举办（哈尔滨）",
    matchScore: 4,
    status: "已举办（保留至约 9/26 再归档）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-09/930784.shtml",
    note: "已办。今日邮件 terigen@jl1.cn（胡俊成/罗仁强）索要回放/纪要并自荐后续分论坛短报告，附 1 页具身安全/人机信任摘要；同时改盯 10/17 保定/沈阳/物理仿真三场。"
  },
  {
    title: "CCF YOCSEF 保定 ·「智辨真伪：防范大模型欺骗的技术路径探索」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约4周）",
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
    status: "开放关注（约4周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-08/913432.shtml",
    note: "主题直打 AI 自动化攻击与关基防护，和 agent security / 攻防评测契合。本周电话 13032430077（韩从菲/张健楠）确认参会或短报告名额，准备 1 页 AI 自动化攻击/防御摘要。"
  },
  {
    title: "CCF YOCSEF ·「物理仿真平台能否成为机器人从虚到实的可信底座？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约4周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-09/930782.shtml",
    note: "主题直打 sim2real / 物理仿真可信验证，贴合具身智能与 world model。本周电话 18643068805（张沛轩/王春波）确认参会或短报告名额，准备 1 页仿真可信/迁移评测摘要。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约5周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打 AI 智能体攻防与安全边界，和 TOPOSHIELD/agent security 高度契合。本周邮件 10380295@qq.com（白杨/唐诗）自荐参会或短报告，附 1 页研究摘要与过往挑战杯/论文亮点。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "活动举办日期（线上+纽约 Collider / 香港 hub）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "主题直打 multi-agent collusion / 隐蔽协调检测；新增香港线下 hub（与 NYC 对打）。本周在 apartresearch.com 报名并预写 1 页 collusion eval/检测实验提纲；若在港可优先占香港 hub 名额。"
  },
  {
    title: "CCF YOCSEF 重庆 ·「重构可信边界：大模型内生安全与外围防线的协同之道」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-24",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约5周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-20/916619.shtml",
    note: "主题覆盖大模型内生安全与外围防线协同，适合讲 defense-in-depth / agent 边界。本周电话或短信联系 18680747367（冉靖/吴涛）确认参会/短报告名额，准备 1 页可信边界摘要。"
  },
  {
    title: "Apart Research · AI × Epistemics Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-13 至 2026-11-15",
    deadlineLabel: "活动举办日期（线上；提交截止 11/15 11:59pm AoE）",
    matchScore: 4,
    status: "开放报名（官网已上线）",
    link: "https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15",
    note: "主题含 model epistemics / trust infrastructure / 决策评测，可贴 deception 检测与 agent 可信度工作。先报 10 月 Collusion，再把本场放日历并预读 Resources 轨阅读清单；表现好同样可衔接到 Apart Fellowship。"
  },
  {
    title: "CCF YOCSEF 福州 ·「AI时代的数字信任挑战与重塑」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-28",
    deadlineLabel: "论坛举办日（福建师范大学；可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约10周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-08-12/923350.shtml",
    note: "主题直打数字信任/可信 AI，可贴 agent 可信度与安全边界叙事。本周电话 18558714918（陈承正）确认参会或短报告名额，准备 1 页数字信任/可信评测摘要。"
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
    note: "官网确认 Fall 2026 已关、Spring 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，是本科阶段最高性价比 mentorship 管道之一，材料可复用 ERA 书面稿。"
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
    note: "Fall 已关且不赞助签证；官网仍写 Spring late September 开放并可 J-1（9/21 复核仍未开放）。立刻填 EOI，日历每日刷新 cbai.ai；材料复用 ERA 稿，开放当天投 Security / multi-agent mentor。"
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
];
