// 机会数据源。每日自动化更新于 2026-09-27：基于 PR#90；ICLR/IAB OR 已关→归档腾位；新增 CoRL Oopsie（9/30）与 Scaling H2R（10/7）；今日最紧迫 Agentic Robotics（9/27 AoE）；CBAI Spring / Paris 志愿岗仍未开放；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-09-27";

const OPPORTUNITIES = [
  // ---- 紧迫行动 ----
  {
    title: "CoRL 2026 Workshop · Agentic Robotics",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-27",
    deadlineLabel: "论文/Demo 投稿截止 9/27 AoE（OpenReview due ≈9/28 12:59 UTC · 今日最紧迫）",
    matchScore: 5,
    status: "开放中（今日 AoE · 最紧迫）",
    link: "https://agentic-robotics-workshop.github.io/",
    note: "今日 12:59 UTC 前必须交：VLA/推理回路上的 agentic robotics（规划—执行—恢复）。立刻写 ≤8 页 poster 或准备 demo 视频，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Agentic_Robotics；Best Demo 有 $1,000。"
  },
  {
    title: "CoRL 2026 Workshop · CSIR（Continually Self-Improving Robots）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-28",
    deadlineLabel: "论文投稿截止 9/28 AoE（OpenReview due ≈9/29 12:59 UTC）",
    matchScore: 5,
    status: "开放中（约1–2天）",
    link: "https://csircorl.github.io/website/",
    note: "机器人自改进 / 失败发现 / safe exploration / world model。Agentic 交完后立刻用任意模板压 ≤8 页（双盲），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/CSIR；可与 RoboMem/PhysWM/Oopsie 故事线复用。"
  },
  {
    title: "CoRL 2026 Workshop · Oopsie（Imperfect Data for Realistic Scenarios）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-30",
    deadlineLabel: "投稿截止以 OpenReview 为准 ≈9/30 09:59 UTC（官网文案曾写 Oct 2，以 OR 为准）",
    matchScore: 5,
    status: "开放中（今日新增 · 约3天）",
    link: "https://workshop.oopsie-data.com/",
    note: "今日新增：失败/近失/噪声示教等「不完美数据」收集与利用，贴合具身安全与 failure discovery。优先跟 OR duedate（约 9/30 09:59 UTC），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Oopsie；可与 CSIR/UncertainWM 叙事复用。"
  },
  {
    title: "CoRL 2026 Workshop · UncertainWM（Modeling Uncertainty in Robotic World Models）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-30",
    deadlineLabel: "论文投稿截止 9/30 AoE（OpenReview due ≈10/1 11:59 UTC；官网部分文案仍混有 9/23，以 OR 为准）",
    matchScore: 5,
    status: "开放中（约3–4天）",
    link: "https://uncertainwm2026.github.io/",
    note: "OR duedate 仍为 10/1 11:59 UTC（≈9/30 AoE）。立刻压 ≤4 页（不确定性量化、sim2real 风险、多智能体不可预测性），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/UncertainWM。"
  },
  {
    title: "CoRL 2026 Workshop · RoboMem（Memory for Robot Foundation Models）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-30",
    deadlineLabel: "论文投稿截止 9/30 AoE（OpenReview due ≈10/1 11:59 UTC；官网已同步写 Sep 30）",
    matchScore: 5,
    status: "开放中（约3–4天）",
    link: "https://corl2026-memory.github.io/",
    note: "官网与 OR 均确认 9/30 AoE。本周整理 memory/retrieval/失败回忆 ≤4 页 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/RoboMem。"
  },
  {
    title: "CoRL 2026 Workshop · PhysWM（Physics Simulation × World Models）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-30",
    deadlineLabel: "论文投稿截止 9/30 AoE（OpenReview due ≈10/1 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约3–4天）",
    link: "https://corl26ws-physwm.github.io/",
    note: "物理仿真与 world model 融合、sim2real、长程推理。Agentic/CSIR 交完后压 ≤4 页 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/PhysWM；叙事可与 UncertainWM/SPAIS 复用。"
  },
  {
    title: "CoRL 2026 Workshop · SPAIS（Science of Physical AI Safety）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-01",
    deadlineLabel: "论文投稿截止 10/1 AoE（OpenReview due ≈10/2 11:59 UTC；通知 10/17）",
    matchScore: 5,
    status: "开放中（约4–5天）",
    link: "https://spais-ws.org/cfp",
    note: "具身×AI Safety 交叉顶会 workshop（Austin 11/12）。把 VLA/world model 安全评测或 jailbreak/对齐迁移短文压到 ≤4 页 CoRL 模板，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/SPAIS；可并行关注 Robocurve 差旅（10/11，见 watchlist）。"
  },
  {
    title: "CoRL 2026 Workshop · Learn@Deploy（Robot Learning at Deployment）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-05",
    deadlineLabel: "论文投稿截止 10/5（OpenReview due ≈10/5 17:59 UTC；官网写 Oct 5 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（约8天）",
    link: "https://learn-at-deploy.github.io/",
    note: "部署期持续学习/在线适应/失败恢复，贴合具身落地与 agentic robotics。9 月底几场交完后写 ≤8 页，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Learn_Deploy（以 OR duedate 为准）。"
  },
  {
    title: "Citadel Conference Travel Grant · NeurIPS 2026（Sydney）",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-05",
    deadlineLabel: "申请截止（通知约 10/9；本科生可申）",
    matchScore: 4,
    status: "开放中（约8天）",
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
    note: "FA 只覆盖注册+住宿不含机票；Paris 志愿岗官方仍写 later（9/27 复核仍仅 Sydney/Atlanta）。本周登录 neurips.cc 填 FA，并与 Citadel（10/5）并行补机票。"
  },
  {
    title: "CoRL 2026 Workshop · Scaling H2R（Human-to-Robot Scaling Laws）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-07",
    deadlineLabel: "论文投稿截止（OpenReview due ≈10/7 07:00 UTC；官网写 Oct 7 AoE；通知 10/19）",
    matchScore: 5,
    status: "开放中（今日新增 · 约10天）",
    link: "https://scaling-h2r-corl.github.io/",
    note: "今日新增：人数据→机器人策略的规模律与多样性/embodiment gap，贴合 VLA/具身。以 OR ≈10/7 07:00 UTC 为准（早于官网 AoE 解读），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/Scaling_H2R。"
  },
  {
    title: "CoRL 2026 Workshop · G2A / TAG（From Generative Models to Robot Actions）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-08",
    deadlineLabel: "论文投稿截止 10/8 AoE（OpenReview due ≈10/9 11:59 UTC；通知 10/29）",
    matchScore: 5,
    status: "开放中（约11天）",
    link: "https://actiongapworkshop.github.io/",
    note: "生成式 world/video/3D 先验如何落地为可执行机器人动作（action gap），贴合 VLA/具身。先冲 9 月底 CoRL，再写 4–9 页短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/TAG。"
  },
  {
    title: "CoRL 2026 Workshop · WEBP（Everything Beneath the Policy）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-09",
    deadlineLabel: "论文投稿截止 10/9 23:59 CT（OpenReview due ≈10/10 04:59 UTC；Best Paper 含 ROBOTIS $1000 credit）",
    matchScore: 4,
    status: "开放中（约12天）",
    link: "https://beneath-the-policy.github.io/",
    note: "聚焦 policy 之下的硬件/控制器/数据基建设计选择与可复现性，贴合具身落地。9 月底 CoRL 交完后压 ≤4 页（含负结果/消融亦可），投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/WEBP。"
  },
  {
    title: "CoRL 2026 Workshop · Do Robots Need World Models?",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-10-12",
    deadlineLabel: "论文投稿截止 10/12（OpenReview due ≈10/12 07:00 UTC；通知 10/26）",
    matchScore: 5,
    status: "开放中（约2周）",
    link: "https://do-robots-need-world-models.github.io/",
    note: "辩论式 workshop（显式 world model vs 端到端/VLA），嘉宾含 Chelsea Finn / Yunzhu Li 等。可投 ≤4 页研究稿或 position paper（鼓励负结果），走 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/do-robots-need-world-models。"
  },
  {
    title: "CoRL 2026 Workshop · EEAI（Efficient Foundation Models for Real-Time Embodied AI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-10-12",
    deadlineLabel: "论文投稿截止 10/12 AoE（另有 Challenge 截止 10/23；通知 10/26）",
    matchScore: 4,
    status: "开放中（约2周）",
    link: "https://efficient-embodied-ai.github.io/",
    note: "VLA/world model 效率+latency 下安全兜底。先冲 9 月底 CoRL 几场，再写 ≤4 页效率/压缩/实时安全监控短文，投 openreview.net/group?id=robot-learning.org/CoRL/2026/Workshop/EEAI；有 Jetson 可并行盯 10/23 Challenge。"
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
    status: "开放关注（约6–7周）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-22–25）。本周列 CVPR 候选稿清单，11/10 前完成 OpenReview 注册与作者锁定。"
  },

  // ---- 演讲 / 黑客松曝光 ----
  {
    title: "CCF YOCSEF 成都 ·「AI智能体驱动的网络攻防风险边界与路径重构」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-23",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约4周）",
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
    note: "主题直打 multi-agent collusion；官网确认 NYC Collider + 香港 AI Safety HK 双线下 hub（另有 Cape Town Luma）。本周在 apartresearch.com 报名并预写 1 页 collusion eval 提纲；若在港优先占香港 hub。"
  },
  {
    title: "CCF YOCSEF 重庆 ·「重构可信边界：大模型内生安全与外围防线的协同之道」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-10-24",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约4周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-07-20/916619.shtml",
    note: "主题覆盖大模型内生安全与外围防线协同，适合讲 defense-in-depth / agent 边界。本周电话或短信联系 18680747367（冉靖/吴涛）确认参会/短报告名额，准备 1 页可信边界摘要。"
  },
  {
    title: "CCF YOCSEF 香港 ·「大模型跨境训练：隐私保护与模型能力能否兼得？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-08",
    deadlineLabel: "论坛举办日（可申请参会/报告）",
    matchScore: 4,
    status: "开放关注（约6周）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-04/929336.shtml",
    note: "主题直打跨境训练隐私与模型能力权衡，可贴 AI Security / 数据治理叙事。本周邮件 nanjierenxjtu@163.com（刘浩/张权忠）自荐参会或短报告，附 1 页隐私/训练安全摘要；可与 10 月 Collusion 香港 hub 行程一并规划。"
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
    status: "关注中（官方预告 late September；可 J-1）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "Fall 已关且不赞助签证；官网仍写 Spring late September 开放并可 J-1（9/27 复核页面仍为 Fall 文案、未开放申请）。立刻填 EOI，日历每日刷新 cbai.ai；材料复用 ERA 稿，开放当天投 Security / multi-agent mentor。"
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
