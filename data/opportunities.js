// 机会数据源。每日自动化更新于 2026-10-07：基于 PR#111；OR 复核：Oopsie/Learn@Deploy InvitationExpired→归档；Compositional OR 再延至 ≈10/7 23:59；NeurIPS FA 仍开至 ≈10/7 11:59 UTC（10/6 AoE）；Paris 志愿已开、截止 10/15 AoE；新增 SPAIS/Robocurve TG + HumanRLI；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-10-07";

const OPPORTUNITIES = [
  // ---- 紧迫行动 ----
  {
    title: "NeurIPS 2026 Financial Assistance / Volunteer（官方差旅资助）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-06（AoE ≈10/7 11:59 UTC）；Paris 志愿截止 2026-10-15 AoE",
    deadlineLabel: "FA/Sydney·Atlanta 志愿今日约 11:59 UTC 截止（10/6 AoE）；Paris 志愿已开、截止 15 Oct AoE",
    matchScore: 4,
    status: "开放中（FA 今日约 11:59 UTC · 最紧迫）",
    link: "https://neurips.cc/Conferences/2026/FinancialAssistance",
    note: "此刻最紧迫：若尚未提交，立刻交齐 FA + Sydney/Atlanta 志愿（≈今 11:59 UTC 关）；Paris 志愿表已开，同步填完，截止 15 Oct AoE。FA 不含机票，另找校内/Robocurve SPAIS TG 补缺口。"
  },
  {
    title: "CoRL 2026 Workshop · Scaling H2R（Human-to-Robot Scaling Laws）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "论文投稿截止（OpenReview due ≈10/7 07:00 UTC；官网写 Oct 7 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（今日约 07:00 UTC · 小时级）",
    link: "https://scaling-h2r-corl.github.io/",
    note: "人数据→机器人策略规模律与 embodiment gap。以 OR ≈10/7 07:00 UTC 为准（早于官网 AoE 解读），立刻投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Scaling_H2R。"
  },
  {
    title: "CoRL 2026 Workshop · Compositional Generalization for Real-World Robot Learning",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "OpenReview due ≈10/7 23:59 UTC（10/6 19:30 OR 再延期；官网仍写 Oct 6 extended；通知 10/19）",
    matchScore: 5,
    status: "开放中（今日约 23:59 UTC · OR 再延期）",
    link: "https://compogen-robotics.github.io/corl2026/",
    note: "组合泛化/真实世界机器人学习，贴合 VLA。10/6 OR 再延至 ≈10/7 23:59 UTC（勿信官网仍写的 Oct 6）；今日午夜前投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Compositional。"
  },
  {
    title: "CoRL 2026 Workshop · LEAP（Learning Abstractions for Planning）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "Late paper 截止（OpenReview due ≈10/7 23:59 UTC；官网写 late Oct 7；第三方 tracker 误写 Oct 19，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日约 23:59 UTC）",
    link: "https://leap-workshop.github.io/",
    note: "world model / abstraction for planning 贴合具身推理。以 OR ≈10/7 23:59 UTC 为准，压长程规划/抽象短文到 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/LEAP。"
  },
  {
    title: "AIDC 2026 @ ACSAC · Agentic AI in Offensive and Defensive Cyber Operations",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-08",
    deadlineLabel: "论文已于 10/3 11:59 UTC 截止；剩余 Lightning/Tutorial 截止 10/8 AoE",
    matchScore: 5,
    status: "论文已截止；Lightning 通道仍开（约1天）",
    link: "https://aidcworkshop.github.io/",
    note: "论文窗口已关。立刻改投 Lightning：≤200 词摘要讲 agentic 攻防/多 agent 编排，填 https://forms.gle/9pvzJqpmznaZZb5P6（或官网 Lightning Talk form）；Tutorial 亦可走同页表单。"
  },
  {
    title: "CoRL 2026 Workshop · PhysWM（Physics Simulation × World Models）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-08",
    deadlineLabel: "OpenReview due ≈10/8 11:59 UTC（10/1 OR 延期；官网仍写 Sept 30 / tracker 写 Oct 8，以 OR 为准）",
    matchScore: 5,
    status: "开放中（约1.5天 · OR 已延期）",
    link: "https://corl26ws-physwm.github.io/",
    note: "物理仿真×world model / sim2real：压 ≤4 页，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/PhysWM；叙事可与 LEAP 复用。"
  },
  {
    title: "CoRL 2026 Workshop · G2A / TAG（From Generative Models to Robot Actions）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-08",
    deadlineLabel: "论文投稿截止 10/8 AoE（OpenReview due ≈10/9 11:59 UTC；通知 10/29）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://actiongapworkshop.github.io/",
    note: "生成式先验落地为可执行动作（action gap），贴合 VLA。先冲今日 H2R/Compositional/LEAP，再写 4–9 页短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/TAG。"
  },
  {
    title: "CoRL 2026 Workshop · SimBench2Real（Simulation Benchmarks → Real-World Robot Learning）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-09",
    deadlineLabel: "论文截止 10/9（OpenReview due ≈10/9 11:59 UTC；官网写 Oct 9；通知约 10/23；含 BEHAVIOR/RoboEval/RoboChess 挑战）",
    matchScore: 4,
    status: "开放中（约2.5天）",
    link: "https://corl2026-realworld-robot-learning.github.io/",
    note: "sim 基准→真机迁移 + 三项挑战。写 ≤5 页短文（新方法/负结果/挑战报告均可）投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SimBench2Real；若有 sim2real 实验可并行看挑战轨。"
  },
  {
    title: "CoRL 2026 Workshop · HumanRLI（Human-Centered Robot Learning and Interaction）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-09",
    deadlineLabel: "论文截止 10/9 23:59 AoE（OpenReview due ≈10/10 11:59 UTC；官网 hc-robot-learning.github.io）",
    matchScore: 4,
    status: "开放中（约3天 · 新回主列表）",
    link: "https://hc-robot-learning.github.io/",
    note: "今日新回主列表：人机环境可靠/可扩展机器人学习与交互，贴合具身部署与安全。写 ≤8 页 CoRL 模板投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/HumanRLI；叙事可强调人在环偏好/安全打断。"
  },
  {
    title: "CoRL 2026 Workshop · WEBP（Everything Beneath the Policy）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-09",
    deadlineLabel: "论文截止 10/9 23:59 CT（OpenReview due ≈10/10 04:59 UTC；Best Paper ROBOTIS $1000 credit）",
    matchScore: 4,
    status: "开放中（约3天）",
    link: "https://beneath-the-policy.github.io/",
    note: "控制器/硬件/数据基础设施「政策之下」设计选择。压 4 页（CoRL 或 IEEE 模板）投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/WEBP；适合写实现细节/负结果/消融叙事。"
  },
  {
    title: "SPAIS @ CoRL 2026 · Robocurve Travel Grant（$2,000×10）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-11",
    deadlineLabel: "申请截止 10/11 AoE（通知 10/18；发放 10/25；与论文评审独立）",
    matchScore: 4,
    status: "开放中（约4天 · 新回主列表）",
    link: "https://airtable.com/appCxf8EI6xaNuxfE/pagaDxTFdxXo60qKj/form",
    note: "今日新回主列表：物理 AI 安全 workshop 差旅 $2k×10，补 NeurIPS FA 不含机票的缺口。立刻填 Airtable；文案写面向研究生/early-career，本科生在表单/邮件说明挑战杯+安全研究经历并确认资格；官网说明 https://spais-ws.org/#grants。"
  },
  {
    title: "CoRL 2026 Workshop · Do Robots Need World Models?",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-12",
    deadlineLabel: "论文投稿截止 10/12（OpenReview due ≈10/12 07:00 UTC；通知 10/26）",
    matchScore: 5,
    status: "开放中（约5天）",
    link: "https://do-robots-need-world-models.github.io/",
    note: "辩论式 workshop（显式 world model vs 端到端/VLA）。可投 ≤4 页研究稿或 position paper（鼓励负结果），走 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/do-robots-need-world-models。"
  },
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-12",
    deadlineLabel: "论文截止 10/12 AoE（OpenReview due ≈10/12 11:59 UTC；Challenge 截止 10/23；通知 10/26）",
    matchScore: 5,
    status: "开放中（约5天）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "VLA/world-action 压缩、量化、延迟与 onboard 安全，贴合具身部署。写 4 页投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/EEAI；有 Jetson/边缘推理经验可并行冲 10/23 Efficiency Challenge。"
  },
  {
    title: "CoRL 2026 Workshop · Sim2Real2Field（Sim-to-Real-to-Field）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-16",
    deadlineLabel: "OpenReview due ≈10/16 05:59 UTC（10/3 OR 延期；官网写 Oct 15 AoE；Best Paper $1000）",
    matchScore: 4,
    status: "开放中（约9天 · OR 已延期）",
    link: "https://sim2real2field-corl26.github.io/",
    note: "sim→lab→field 鲁棒迁移。先冲今日–10/9 批次，再写短文投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Sim2Real2Field；作者需有 OR profile 且愿审 ≤2 篇。"
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
    status: "开放关注（约10天）",
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
    status: "开放关注（约16天）",
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
    note: "10/7 复核：Fall 2026 已关、Spring 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，是本科阶段最高性价比 mentorship 管道之一，材料可复用 ERA 书面稿。"
  },
  {
    title: "CBAI Spring Research Fellowship 2027（关注池 · 仍未开放）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "官网改写 Spring cycle「later this fall」开放（原 late September 已过；截至 10/7 仍未开）",
    deadlineLabel: "已过 late September 预告；每日刷新官网与 EOI；可 J-1",
    matchScore: 4,
    status: "关注中（10/7 复核：文案仍为 later this fall；Fall 截止文案未改）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "10/7 官网仍写 Fall「due September 6」，Spring 措辞为「later this fall」并可 J-1。立刻填 EOI，日历每周刷新 cbai.ai；材料复用 ERA 稿，开放当天投 Security / multi-agent mentor。"
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
    note: "10/7 页面仍开放（HTTP 200）。下载 https://aka.ms/InternApplication，中英文简历发 MSRAih@microsoft.com 与 shun.zheng@microsoft.com，标题写「LLM Reasoning研究实习生」，注明可实习 ≥3 个月。"
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
    note: "10/7 复核页面仍开放；含基础大模型/RL/reasoning/multi-agent/具身等。本周按毕业年份选应届或实习通道投递，邮件 seedcampus@bytedance.com 备询；简历突出 reasoning/安全/VLA 一作与挑战杯。"
  },
];
