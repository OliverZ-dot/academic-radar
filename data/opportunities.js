// 机会数据源。每日自动化更新于 2026-10-05：基于 PR#106；复核 OR：LfC/Pretrain/Oopsie/Learn@Deploy 仍开（今日 UTC 截止）；新增回主列表 Compositional（OR ≈10/6 11:59）；腾位下架 YOCSEF香港→归档；Citadel 今日截止；Paris 志愿官网写 opens 5 Oct 23:59 AoE；CBAI Spring 10/5 仍未开；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-05";

const OPPORTUNITIES = [
  // ---- 紧迫行动 ----
  {
    title: "CoRL 2026 Workshop · LfC（Learning from Corrections and Interventions）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-05",
    deadlineLabel: "OpenReview due ≈10/5 04:59 UTC（10/3 OR 延期；官网仍写 Oct 2，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日凌晨截止 · 最紧迫）",
    link: "https://sites.google.com/view/lfcworkshopcorl2026/home",
    note: "此刻最紧迫（约至 04:59 UTC）：人机干预/纠错学习贴合具身与 oversight。立刻压 ≤2 页摘要或 ≤6 页全文（CoRL 模板、双盲），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/LfC；交完立刻转 Pretrain/Oopsie/Learn@Deploy。"
  },
  {
    title: "CoRL 2026 Workshop · Pretrain to Adapt（What Makes a Pretrained Policy Adaptable?）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-05",
    deadlineLabel: "论文截止 10/4 AoE（OpenReview due ≈10/5 11:59 UTC；通知 10/19）",
    matchScore: 5,
    status: "开放中（今日约 11:59 UTC）",
    link: "https://corl2026-robotcl.github.io/",
    note: "OR due ≈10/5 11:59 UTC。预训练策略下游适应（RL/ICL/test-time steering）贴合 VLA。写短文投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/pretrain-to-adapt；失败轨迹叙事可与 Oopsie 复用。"
  },
  {
    title: "CoRL 2026 Workshop · Oopsie（Imperfect Data for Realistic Scenarios）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-05",
    deadlineLabel: "OpenReview due ≈10/5 16:59 UTC（9/28 OR 已延期；官网仍写 Oct 2，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日约 16:59 UTC）",
    link: "https://workshop.oopsie-data.com/",
    note: "OR duedate 仍为 ≈10/5 16:59 UTC。失败/近失/噪声示教叙事可复用；先交 LfC/Pretrain，再压 ≤4–8 页投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Oopsie。"
  },
  {
    title: "CoRL 2026 Workshop · Learn@Deploy（Robot Learning at Deployment）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-05",
    deadlineLabel: "论文投稿截止 10/5（OpenReview due ≈10/5 17:59 UTC；官网写 Oct 5 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（今日约 17:59 UTC）",
    link: "https://learn-at-deploy.github.io/",
    note: "部署期持续学习/在线适应/失败恢复。写 ≤8 页投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Learn_Deploy；与 Oopsie/Pretrain 同批赶稿，今晚前交齐。"
  },
  {
    title: "Citadel Conference Travel Grant · NeurIPS 2026（Sydney）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-05",
    deadlineLabel: "申请截止（通知约 10/9；本科生可申）",
    matchScore: 4,
    status: "开放中（今日截止）",
    link: "https://www.citadel.com/careers/programs-and-events/conference-travel-grant/",
    note: "本科/硕博均可，偏好有 NeurIPS 投稿者；覆盖 Sydney 会场费用。今日必须提交官网表单，并与 NeurIPS FA（10/6 AoE）并行，补 FA 不含机票缺口。"
  },
  {
    title: "NeurIPS 2026 Financial Assistance / Volunteer（官方差旅资助）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-06（AoE）；申请于 2026-09-07 开放",
    deadlineLabel: "FA/Sydney·Atlanta 志愿截止 10/6 AoE；Paris 志愿官网写 opens 5 Oct 23:59 AoE、截止 15 Oct AoE",
    matchScore: 4,
    status: "开放中（FA 约1–2天；Paris 志愿即将开）",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "10/5 复核：FA 与 Sydney/Atlanta 志愿仍截止 10/6 23:59 AoE；Paris 志愿 Application opens 5 Oct 23:59 AoE（约 10/6 11:59 UTC）、deadline 15 Oct AoE。今日交齐 FA+Citadel；日历标 Paris 表单一亮立刻填。"
  },
  {
    title: "CoRL 2026 Workshop · Compositional Generalization for Real-World Robot Learning",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-06",
    deadlineLabel: "OpenReview due ≈10/6 11:59 UTC（OR 延期；官网写 October 6 extended；通知 10/19）",
    matchScore: 5,
    status: "开放中（约1.5天 · 新回主列表）",
    link: "https://compogen-robotics.github.io/corl2026/",
    note: "今日新回主列表：组合泛化/真实世界机器人学习，贴合 VLA 与具身推理。冲完 10/5 批次后立刻写短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Compositional。"
  },
  {
    title: "CoRL 2026 Workshop · Scaling H2R（Human-to-Robot Scaling Laws）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "论文投稿截止（OpenReview due ≈10/7 07:00 UTC；官网写 Oct 7 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://scaling-h2r-corl.github.io/",
    note: "人数据→机器人策略规模律与 embodiment gap。以 OR ≈10/7 07:00 UTC 为准（早于官网 AoE 解读），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Scaling_H2R。"
  },
  {
    title: "CoRL 2026 Workshop · LEAP（Learning Abstractions for Planning）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "Late paper 截止（OpenReview due ≈10/7 23:59 UTC；官网写 late Oct 7；第三方 tracker 误写 Oct 19，以 OR 为准）",
    matchScore: 5,
    status: "开放中（约3天）",
    link: "https://leap-workshop.github.io/",
    note: "world model / abstraction for planning 叙事贴合具身推理。以 OR ≈10/7 23:59 UTC 为准，把长程规划/抽象短文压到 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/LEAP。"
  },
  {
    title: "AIDC 2026 @ ACSAC · Agentic AI in Offensive and Defensive Cyber Operations",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-08",
    deadlineLabel: "论文已于 10/3 11:59 UTC 截止；剩余 Lightning/Tutorial 截止 10/8 AoE",
    matchScore: 5,
    status: "论文已截止；Lightning 通道仍开（约3天）",
    link: "https://aidcworkshop.github.io/",
    note: "论文窗口已关。立刻改投 Lightning：≤200 词摘要讲 agentic 攻防/多 agent 编排，填 https://forms.gle/9pvzJqpmznaZZb5P6（或官网 Lightning Talk submission form）；Tutorial 亦可走同页表单。"
  },
  {
    title: "CoRL 2026 Workshop · PhysWM（Physics Simulation × World Models）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-08",
    deadlineLabel: "OpenReview due ≈10/8 11:59 UTC（10/1 17:06 OR 延期；官网写 Oct 7 AoE）",
    matchScore: 5,
    status: "开放中（约3.5天 · OR 已延期）",
    link: "https://corl26ws-physwm.github.io/",
    note: "OR 仍为 ≈10/8 11:59 UTC。物理仿真×world model / sim2real：压 ≤4 页，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/PhysWM；叙事可与 LEAP 复用。"
  },
  {
    title: "CoRL 2026 Workshop · G2A / TAG（From Generative Models to Robot Actions）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-08",
    deadlineLabel: "论文投稿截止 10/8 AoE（OpenReview due ≈10/9 11:59 UTC；通知 10/29）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://actiongapworkshop.github.io/",
    note: "生成式先验落地为可执行动作（action gap），贴合 VLA。先冲 10/5–10/7，再写 4–9 页短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/TAG。"
  },
  {
    title: "CoRL 2026 Workshop · Do Robots Need World Models?",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-12",
    deadlineLabel: "论文投稿截止 10/12（OpenReview due ≈10/12 07:00 UTC；通知 10/26）",
    matchScore: 5,
    status: "开放中（约7天）",
    link: "https://do-robots-need-world-models.github.io/",
    note: "辩论式 workshop（显式 world model vs 端到端/VLA）。可投 ≤4 页研究稿或 position paper（鼓励负结果），走 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/do-robots-need-world-models。"
  },
  {
    title: "CoRL 2026 Workshop · Sim2Real2Field（Sim-to-Real-to-Field）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-16",
    deadlineLabel: "OpenReview due ≈10/16 05:59 UTC（10/3 OR 延期；官网写 Oct 15 AoE；Best Paper $1000）",
    matchScore: 4,
    status: "开放中（约11天 · OR 已延期）",
    link: "https://sim2real2field-corl26.github.io/",
    note: "sim→lab→field 鲁棒迁移。OR 仍为 ≈10/16 05:59 UTC；先冲 10/5–10/7，再写短文投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Sim2Real2Field；作者需有 OR profile 且愿审 ≤2 篇。"
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
    note: "国赛系统报名已关；若你已提交：本周立刻问学院/省赛组委会网评与答辩时间表，按 10/25、10/31 节点备齐路演与材料；未报名则转挑战杯校内选拔，勿再等国赛通道。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔已启动（部分校 9–10 月窗口），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周立刻问学院团委第二十届校内选拔时间表（部分高校已进入 9–10 月院赛/校赛窗口），决定是带队冲奖还是做经验分享/答辩辅导角色。"
  },
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Paper Registration 11/10 AoE，正文提交 11/16 AoE（补充材料 11/23）",
    matchScore: 4,
    status: "开放关注（约5–6周）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-22–25）。本周列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定。"
  },

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 沈阳 ·「AI自动化攻击来袭，关键信息基础设施该如何应战？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-17",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约12天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-08/913432.shtml",
    note: "主题直打 AI 自动化攻击与关键信息基础设施防护。本周电话 13032430077（韩从菲/张健楠）自荐参会或短报告，附 1 页 agent/自动化攻击防护摘要。"
  },
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约18天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-21/916923.shtml",
    note: "主题直打 AI 智能体攻防与安全边界，和 TOPOSHIELD/agent security 高度契合。本周邮件 10380295@qq.com（白杨/唐诗）自荐参会或短报告，附 1 页研究摘要与过往挑战杯/论文亮点。"
  },
  {
    title: "Apart Research · AI Collusion Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-10-23 至 2026-10-25",
    deadlineLabel: "活动举办日期（线上+纽约 Collider / 香港 AI Safety HK hub）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25",
    note: "主题直打 multi-agent collusion；官网确认 NYC Collider + 香港 AI Safety HK 双线下 hub。本周在 apartresearch.com 报名并预写 1 页 collusion eval 提纲；若在港优先占香港 hub。"
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
    note: "10/5 复核：Fall 2026 已关、Spring 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，是本科阶段最高性价比 mentorship 管道之一，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "预计 2026-09 下旬开放申请（官网写 late September；截至 10/5 仍未开）",
    deadlineLabel: "已过 late September 预告窗口；每日刷新官网与 EOI",
    matchScore: 4,
    status: "关注中（10/5 复核仍为 Fall 文案；可 J-1）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "Fall 已关；官网仍写 Spring late September 开放并可 J-1，但 10/5 页面仍为 Fall「Applications are due September 6」文案、未开申请。立刻填 EOI，日历每日刷新 cbai.ai；材料复用 ERA 稿，开放当天投 Security / multi-agent mentor。"
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
  {
    title: "字节跳动 Seed 大模型人才校招 / 研究实习（含具身智能 · Reasoning · Multi-Agent）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（2027 届校招 + 实习通道已开）",
    deadlineLabel: "应届生面向 2026.9–2027.8 毕业；实习面向 2027.9 及以后毕业在读",
    matchScore: 5,
    status: "开放中",
    link: "https://seed.bytedance.com/zh/seedearlycareer",
    note: "官方统一「Seed 大模型人才校招」含基础大模型/RL/reasoning/multi-agent/具身智能等，本科可投（10/5 页面仍开放）。本周按毕业年份选应届或实习通道投递，邮件 seedcampus@bytedance.com 备询；简历突出 reasoning/安全/VLA 一作与挑战杯。"
  },
];
