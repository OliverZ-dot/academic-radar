// 机会数据源。每日自动化更新于 2026-08-26：基于 PR#26；OpenReview/官网确认 MATH-AI 于 8/25 大幅提前截止（官网 9/6 AoE，OR 9/7 11:59 UTC，原约 9/26）；刷新 WRL「今天截止」与其余紧迫倒计时；IAB 状态去「今日新增」；无超 7 天过期条目可归档；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-08-26";

const OPPORTUNITIES = [
  // ---- 紧迫行动（未来两周）----
  {
    title: "NeurIPS 2026 Workshop · 8th Robot Learning（WRL：Physical AI Going Zero-Shot）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-26",
    deadlineLabel: "论文投稿截止（OpenReview 今天 8/26 23:59 UTC）",
    matchScore: 5,
    status: "开放中，今天截止",
    link: "https://www.robot-learning.ml/2026/",
    note: "今天 23:59 UTC 截止：第八届 Robot Learning，追问 zero-shot Physical AI。立刻把具身/VLA/泛化结果压成短文走 OpenReview NeurIPS.cc/2026/Workshop/WRL，与 RoboWM/WM_PAI 错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of Language Model Security（FLMSec）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-28",
    deadlineLabel: "论文投稿截止（OpenReview 8/28 12:00 UTC，约2天）",
    matchScore: 5,
    status: "开放中（约2天）",
    link: "https://flmsec.github.io/",
    note: "OpenReview 仍为 8/28 12:00 UTC。LLM 安全形式化/可证明安全/多智能体安全高度契合：本周按 NeurIPS workshop 模板写 ≤8 页非归档短文并提交 NeurIPS.cc/2026/Workshop/FLMSec。"
  },
  {
    title: "NeurIPS 2026 Workshop · Interpreting Agent Behavior（IAB：Agent 行为解释/可解释控制）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（OpenReview 8/29 12:00 UTC，约3天）",
    matchScore: 5,
    status: "开放中（约3天）",
    link: "https://iab-agents.github.io/",
    note: "聚焦解释/审计 agent 行为、工具调用轨迹与可控性，和 AI Security / multi-agent 评估高度契合。≤标准 NeurIPS workshop 页数非归档走 OpenReview NeurIPS.cc/2026/Workshop/IAB；与 Who Verifies / AIWILD 错开：本条偏解释与行为归因。"
  },
  {
    title: "NeurIPS 2026 Workshop · World Models in Physical AI（WM_PAI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（OpenReview 约 8/29 13:59 UTC，约3天）",
    matchScore: 5,
    status: "开放中（约3天）",
    link: "http://www.worldmodels-physicalai.com/",
    note: "聚焦物理 AI 中的 world models（生成仿真/规划/安全评估），和 THU 具身/world model 线高度匹配。≤8 页非归档走 OpenReview NeurIPS.cc/2026/Workshop/WM_PAI；与 RoboWM（8/30）选一篇主投、一篇短文或 demo。"
  },
  {
    title: "NeurIPS 2026 Workshop · Who Verifies the Agents?（Agent 验证/安全/可扩展监督）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（OpenReview 延至 8/30 13:00 UTC；官网仍写 8/29）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://verify-agents-workshop.github.io/",
    note: "OpenReview（Verify-Agents）已延至 8/30 13:00 UTC。主题直打 agent 验证、verifier 抗 reward hacking、runtime verification；4–9 页非归档。优先把 TOPOSHIELD/验证器/红队评估角度压成短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · Meta-Agents（Managing Agents that Manage Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（OpenReview 现为 8/30 11:59 UTC；官网仍写 8/29 AoE）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://meta-agents-workshop.github.io/",
    note: "OpenReview 截止已显示 8/30（官网旧文案仍可能写 8/29，以 OR 为准）。覆盖 meta-agent 安全/红队/oversight；9 页或 4 页短文，必须附 responsible-use 声明。与 Who Verifies / AIWILD / RoboWM 同日截止，定一篇主投。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（OpenReview AIWILD 延至 8/30 13:00 UTC；官网仍写 8/29）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "OpenReview（AIWILD）已延至 8/30 13:00 UTC。主题直打 agent safety/security/prompt injection/tool misuse；9 页或 4 页短文。与 Who Verifies / Meta-Agents / IAB 分角度选主投。"
  },
  {
    title: "NeurIPS 2026 Workshop · Robot Learning with World Models（RoboWM，具身/世界模型）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-30",
    deadlineLabel: "论文/短文投稿截止（OpenReview Robotics_World_Modeling 现为 8/30 11:59 UTC）",
    matchScore: 5,
    status: "开放中（约4天）",
    link: "https://robowm-ws.github.io/",
    note: "OpenReview 截止已显示 8/30（官网曾写 8/29）。Full≤8 页或 Short 2–4 页；也可交 1 页 Demo/Networking。与 WM_PAI（8/29）错开：一个偏 world-model 评测安全，一个偏 robot learning 应用。"
  },
  {
    title: "NeurIPS 2026 Workshop · PALM（Personalized & Long-term Memory，含安全/多智能体记忆）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（OpenReview 8/30 11:59 UTC，约4天）",
    matchScore: 4,
    status: "开放中（约4天）",
    link: "https://palm-neurips-2026.github.io/",
    note: "覆盖 agent memory、multi-agent memory isolation、safety/privacy；有记忆/隔离/攻击面角度就压成 4 或 9 页短文投。与 8/30 agent 集群撞车时，优先保证 Who Verifies/Meta-Agents/AIWILD 其一。"
  },
  {
    title: "NeurIPS 2026 Workshop · VLM4RWD（接地/可靠 VLM 与真实世界部署）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-31",
    deadlineLabel: "论文投稿截止（OpenReview 约 8/31 04:00 UTC，约5天）",
    matchScore: 4,
    status: "开放中（约5天）",
    link: "https://vlm4rwd.github.io/",
    note: "聚焦 grounded/faithful VLM 与真实部署可靠性。把幻觉抑制、接地评测或失败案例压成短文；可与 RoboPAD/ESR/RoboWM 错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-01",
    deadlineLabel: "论文投稿截止（OpenReview 9/1 12:30 UTC，约6天）",
    matchScore: 5,
    status: "开放中（约6天）",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "明确有 Multi-agent Security 赛道。与 8/30 agent 集群错开：先交 Who Verifies/Meta-Agents/Wild/IAB，再把社会影响/部署安全角度留给本条。"
  },
  {
    title: "NeurIPS 2026 Workshop · MATH-AI（数学推理与 AI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（官网 9/6 AoE；OpenReview 9/7 11:59 UTC；原约 9/26 已提前）",
    matchScore: 4,
    status: "开放中（截止已提前，约11天）",
    link: "https://mathai-2026.github.io/",
    note: "重大更新：官网 8/25 宣布因 NeurIPS 导入时程将截止从约 9/26 提前到 9/6 AoE（OpenReview 显示 9/7 11:59 UTC）。主题偏 agentic math reasoning；若有 theorem proving / verifiable reward / 结构化推理结果，本周起稿并走 NeurIPS.cc/2026/Workshop/MATH-AI，勿按旧日历拖到月底。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 完整 cohort 已开放",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-06（完整 Winter 2027，AoE）；Neel Nanda 赛道 2026-09-04 11:59pm PT",
    deadlineLabel: "完整 cohort 截止 9/6；Neel 赛道更早 9/4 PT（约11天）",
    matchScore: 5,
    status: "开放中（约11天）",
    link: "https://www.matsprogram.org/apply",
    note: "Stage 1 截止 9/6 AoE；含 Systems Security / Empirical 等轨。本周先交 Stage 1（背景+短答+两位推荐人联系方式），解释性/欺骗检测可另冲 Neel（9/4 PT）；材料与 ERA 复用。提交时确认所选 cohort 为 Winter 2027。"
  },
  {
    title: "NeurIPS 2026 Workshop · Embodied Spatial Reasoning（ESR，具身空间推理）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文/Demo 投稿截止（AoE，约10天）",
    matchScore: 4,
    status: "开放中",
    link: "https://embodiedsr.github.io/",
    note: "第二届 ESR，聚焦 embodied spatial reasoning / world model / 3D 空间记忆；论文与 Demo 同截止（9/5）。把现有空间推理/VLA/world model 结果压成短文或交互 demo；与 WRL/WM_PAI/RoboWM 错开侧重点。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of LLM Post-Training（FLLMPT）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（OpenReview Submission 已于 8/24 重开/延至 9/5 22:00 UTC；官网仍写 8/30）",
    matchScore: 5,
    status: "开放中（OR 已延期，约10天）",
    link: "https://www.fllmpt-work.shop/",
    note: "OpenReview NeurIPS.cc/2026/Workshop/FLLMPT/-/Submission 仍为 9/5 22:00 UTC（官网仍标 8/30，以 OR 为准）。若有 post-training / RL / 非平稳适配结果，本周直接走 Submission；与 ESR（同日）错开叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agentic Web（网络化多智能体生态 / 信任与安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-06",
    deadlineLabel: "论文投稿截止（OpenReview 现为 9/6 11:59 UTC；官网仍写 9/5）",
    matchScore: 5,
    status: "开放中（约11天）",
    link: "https://projectnanda.org/workshops/neurips26/",
    note: "OpenReview（AgenticWeb）已显示 9/6（官网仍写 9/5，以 OR 为准）。含协调/声誉操纵抗性/population-scale safety；4 或 9 页非归档。若 TOPOSHIELD 可上升到网络信任/协调角度，优先投长文。"
  },
  {
    title: "NeurIPS 2026 Workshop · RoboPAD（机器人基础模型 Post-Training / 具身适应）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 约 9/10 11:59 UTC，约15天）",
    matchScore: 4,
    status: "开放中",
    link: "https://robotpad2026.github.io/",
    note: "聚焦 robot foundation model 的 post-training / 跨本体适应 / evaluation & safety；≤9 页非归档。若有适应/失败纠正/安全评估结果，优先压成短文；可与 ESR（9/5）与 WRL（8/26）错开叙事。"
  },
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE）",
    deadlineLabel: "申请截止（约18天）",
    matchScore: 5,
    status: "开放中",
    link: "https://erafellowship.org/fellowship",
    note: "剑桥线下 10 周（2027-01-18 起）、£10k 津贴+签证/差旅，含 Technical / Governance / TechGov；明确 18+ 即可。本周写完书面申请短文，技术轨突出 evaluations/robustness/agent control；与 MATS 材料复用后单独投。"
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
    note: "系统自 8/10 开放至 9/25 12:00；各地须 10/25 前完成省赛、10/31 前推荐国赛。本周登录 cy.ncss.cn 建队并上传预整理的 Symbiotic AI / 挑战杯材料包，同时问学院校内初赛截止日。"
  },

  // ---- 顶会主会 & 中期节点 ----
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要截止 9/18，正文截止 9/25（AOE）",
    matchScore: 5,
    status: "开放中（OpenReview 已公布提交入口）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "摘要 9/18、正文 9/25；入口 https://openreview.net/group?id=ICLR.cc/2027/Conference。本周锁定冲稿篇目与作者名单（摘要截止后不能再加作者），倒排实验与写作日程。"
  },
  {
    title: "Apart Research · AI Incident Response Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-09-11 至 2026-09-13",
    deadlineLabel: "活动举办日期（线上+线下均可参加）",
    matchScore: 4,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-incident-response-sprint-2026-09-11-to-2026-09-13",
    note: "主题直接对口 AI Security 事件响应（与 CeSIA 合办）；先报名占坑并加入 Discord，表现好可获 Apart Fellowship 邀请。本周在 apartresearch.com 完成 Sign Up。"
  },

  // ---- 竞赛 ----
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "校内选拔即将开始，需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周主动问学院团委第二十届校内选拔时间表，决定是带队冲奖还是做经验分享/答辩辅导角色。"
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
    title: "NeurIPS 2026 Workshop · NEmo（Neuro-Symbolic Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-10",
    deadlineLabel: "论文投稿截止（OpenReview 9/10 23:59 UTC，约15天）",
    matchScore: 4,
    status: "开放中",
    link: "https://nemo.semantic.review/",
    note: "具身神经符号智能，覆盖 LLM×planning、长程规划、共享语义与可靠性。Full≤8 页或 Short≤4 页非归档走 OpenReview NeurIPS.cc/2026/Workshop/NEmo；与 RoboPAD（同日）错开：本条偏符号/知识层，RoboPAD 偏 post-training。"
  }
];
