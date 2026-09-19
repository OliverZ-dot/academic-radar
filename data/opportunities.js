// 机会数据源。每日自动化更新于 2026-09-19：基于 PR#74；ICLR 摘要 AoE 窗口今日仍开放至 ~11:59 UTC；创新大赛约 6 天；哈尔滨 YOCSEF 今日举办；新增 CVPR 2027（11/10–11/16）与 YOCSEF 物理仿真可信底座（10/17）；提前归档 Apart Incident Response 腾位；CBAI Spring / Paris 志愿岗仍未开放；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-19";

const OPPORTUNITIES = [
  // ---- 紧迫行动 ----
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要 AoE 窗口今日仍开至 ~11:59 UTC（9/18 AoE），正文截止 9/25 AoE",
    matchScore: 5,
    status: "开放中（摘要窗口末段 · 最紧迫）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要窗口今日 UTC 午前仍开：立刻在 OpenReview 提交真实摘要并锁定作者名单（截止后不能再加作者）；入口 openreview.net/group?id=ICLR.cc/2027/Conference；正文冲 9/25，注意新人 1 篇上限。"
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
    note: "距截止约 6 天；今日登录 cy.ncss.cn 核对队名/成员/赛道并上传材料包，问清学院校内初赛截止（多校早于 9/25）；省赛推荐须 10/31 前完成。"
  },
  {
    title: "NeurIPS 2026 Workshop · IAB（Interpreting Agent Behavior）· 附 NeurIPS reviews 通道",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-25",
    deadlineLabel: "「附 NeurIPS reviews」二次投稿截止（官网已由 10/1 改为 9/25；主投稿 9/5 已关）",
    matchScore: 4,
    status: "开放中（仅限有 NeurIPS 审稿意见的论文）",
    link: "https://iab-agents.github.io/",
    note: "二次通道截止 9/25（距今约 6 天）。若有 NeurIPS 2026 agent 行为/可解释/安全相关审稿结果，本周内整理 reviews+作者回复并投 OpenReview；无 reviews 则忽略本条。"
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
    note: "FA 只覆盖注册+住宿不含机票；Paris 志愿岗预告本月下旬另开通道（9/19 复核仍仅 Sydney/Atlanta）。本周登录 neurips.cc 填 FA，并与 Citadel（10/5）并行补机票。"
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
    status: "开放关注（约7–8周 · 今日新增）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-22–25）。ICLR 正文交完后立刻列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定。"
  },

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 哈尔滨 ·「硅基共情与碳基尊严：具身智能时代的伦理边界与信任共识」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-09-19",
    deadlineLabel: "论坛举办日（哈尔滨；可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（今日举办）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-09/930784.shtml",
    note: "主题直打具身智能伦理/信任边界，贴合具身+安全叙事。今日立刻邮件 terigen@jl1.cn（胡俊成/罗仁强）确认线上旁听或会后资料，附 1 页具身安全/人机信任摘要；错过现场则跟进分论坛后续活动。"
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
    deadlineLabel: "论坛举办日（可申请参会/报告 · 今日新增）",
    matchScore: 4,
    status: "开放关注（约4周 · 今日新增）",
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
    deadlineLabel: "活动举办日期（线上+纽约 Collider 线下 hub）",
    matchScore: 5,
    status: "开放报名",
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
    status: "开放关注（约5周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-20/916619.shtml",
    note: "主题覆盖大模型内生安全与外围防线协同，适合讲 defense-in-depth / agent 边界。本周电话或短信联系 18680747367（冉靖/吴涛）确认参会/短报告名额，准备 1 页可信边界摘要。"
  },
  {
    title: "CCF YOCSEF 香港 ·「大模型跨境训练：隐私保护与模型能力能否兼得？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-08",
    deadlineLabel: "论坛举办日（香港；可申请参会/报告）",
    matchScore: 3,
    status: "开放关注（约7周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-04/929336.shtml",
    note: "主题偏跨境训练与隐私/能力权衡，可把 agent 安全与数据/训练侧风险串成短报告。本周邮件 nanjierenxjtu@163.com（刘浩/张权忠）自荐参会或短报告，附 1 页隐私×安全边界摘要。"
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
    title: "CCF YOCSEF ·「遥感大模型与智能体：走向可信星地任务闭环」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-21",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 3,
    status: "开放关注（约9周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-01/928537.shtml",
    note: "主题含大模型×智能体可信闭环，可把 agent 可信度/任务安全评测做成短报告。本周电话 18610851996（刘那与/徐夏）确认参会或发言名额，准备 1 页可信智能体摘要。"
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
    note: "Fall 已关且不赞助签证；官网仍写 Spring late September 开放并可 J-1（9/19 复核仍未开放）。立刻填 EOI，日历每日刷新 cbai.ai；材料复用 ERA 稿，开放当天投 Security / multi-agent mentor。"
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
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-15",
    deadlineLabel: "论文投稿已截止（OpenReview Invitation expired；官网曾写延期至 9/14 AoE）",
    matchScore: 4,
    status: "已截止（保留至满 7 天再归档，约至 9/22）",
    link: "https://nemo.semantic.review/",
    note: "OR 已关。若已交则等审；错过则具身神经符号 / LLM×planning 冲 ICLR 2027 正文（9/25），并准备 10 月 Apart Collusion Sprint。"
  },
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE ≈ 2026-09-14 11:59 UTC）",
    deadlineLabel: "申请已截止（官网：Winter 2027 Applications have now closed）",
    matchScore: 5,
    status: "已截止（保留至满 7 天再归档，约至 9/20；已投则等 late Sep 面试）",
    link: "https://erafellowship.org/fellowship",
    note: "官网公告栏确认关闭并引导加邮寄名单。若已交书面申请：盯 late Sep Round1 / early Oct Round2 面试邮件；错过则立刻转 SPAR EOI + 盯 CBAI Spring（本月下旬，可 J-1）。"
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
    note: "OR 已关。若已交则等审；错过则 failure discovery / agentic safety 叙事冲 ICLR 2027 正文（9/25），并准备 10 月 Apart Collusion Sprint。"
  },
];
