// 机会数据源。每日自动化更新于 2026-08-20：基于 PR#14 全量覆盖 6 类检索；MATS Winter 2027 完整 cohort 已于 8/18 开放（截止 9/6）；SPAR 部分项目延期至 8/21；AIAF 已截止移入归档；新增腾讯青云计划实习生；刷新 FLMSec/AI Scientist（约2天）与 PALM（约4天）紧迫度；主列表控制在 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-08-20";

const OPPORTUNITIES = [
  // ---- 紧迫行动（未来两周）----
  {
    title: "SPAR（Supervised Program for Alignment Research）Fall 2026 · 延期窗口",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-08-21",
    deadlineLabel: "部分项目仍接受申请（延期至 8/21）",
    matchScore: 5,
    status: "开放中，仅剩约1天（延期窗口）",
    link: "https://sparai.org/projects/f26/?stillAccepting=true",
    note: "常规截止已过，但官网仍显示部分项目接受至 8/21：立刻打开仍开放列表，优先挑 Security / multi-agent safety / evaluations 相关项目提交 https://forms.sparai.org/spar/mentee-app；本科可申，远程兼职，勿拖过明天。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of Language Model Security（FLMSec）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-22",
    deadlineLabel: "论文投稿截止（AoE，约2天）",
    matchScore: 5,
    status: "开放中，极紧迫",
    link: "https://flmsec.github.io/",
    note: "LLM 安全形式化/可证明安全/多智能体安全，与计算机安全背景高度契合。本周末前按 NeurIPS workshop 模板写 ≤8 页非归档短文，走 OpenReview 组 NeurIPS.cc/2026/Workshop/FLMSec；可与 AI4GOOD / Agents in the Wild 分叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI Scientist（LLM scientific reasoning）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-22",
    deadlineLabel: "论文投稿截止（AoE，约2天）",
    matchScore: 5,
    status: "开放中，极紧迫",
    link: "https://llm4sd.io/cfp",
    note: "主题覆盖 test-time reasoning / SFT / RLVR / agentic tool-use；非归档且可与 ICLR 2027 并行。与 FLMSec 同日截止：先定一篇主投，另一篇用已有实验结果压成 4–8 页短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · PALM（Personalized & Long-term Memory，含安全/多智能体记忆）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-24",
    deadlineLabel: "论文投稿截止（AoE，约4天）",
    matchScore: 4,
    status: "开放中",
    link: "https://memories.ai/blogs/call-for-papers-palm-at-neurips-2026",
    note: "覆盖 agent memory、multi-agent memory isolation、safety/privacy。若 TOPOSHIELD 或 agent 工作有记忆/隔离/攻击面角度，压成短文投 OpenReview；优先度略低于 FLMSec / AI Scientist。"
  },
  {
    title: "NeurIPS 2026 Workshop · Who Verifies the Agents?（Agent 验证/安全/可扩展监督）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE，约9天）",
    matchScore: 5,
    status: "开放中",
    link: "https://verify-agents-workshop.github.io/",
    note: "主题直打 agent 验证、verifier 抗 reward hacking、runtime verification、scalable oversight 与 meta-agent；4–9 页非归档（demo ≤4 页），允许双投。优先把 TOPOSHIELD/验证器/红队评估角度压成短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · Meta-Agents（Managing Agents that Manage Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE，约9天）",
    matchScore: 5,
    status: "开放中",
    link: "https://meta-agents-workshop.github.io/",
    note: "主题覆盖 meta-agent 安全/错位、对其他 agent 的 red-teaming、oversight 与 compound system post-training；支持 9 页全文或 4 页短文（非归档），必须附 responsible-use 声明。与 Who Verifies / Agents in the Wild 同日截止，定一篇主投。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE，约9天）",
    matchScore: 5,
    status: "开放中",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "主题直打 agent safety/security/prompt injection/tool misuse/multi-agent；支持 9 页正规文或 4 页短文（非归档）。确认已注册 OpenReview，与 Who Verifies / Meta-Agents 分角度选主投。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（约9天）",
    matchScore: 5,
    status: "开放中",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "明确有 Multi-agent Security 赛道：与 Agents in the Wild / Meta-Agents / Who Verifies 同日截止，此条偏社会影响与多智能体部署安全；选一篇主投、其余改角度或只投短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of LLM Post-Training（FLLMPT）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（约10天）",
    matchScore: 5,
    status: "开放中",
    link: "https://www.fllmpt-work.shop/",
    note: "巴黎站 NeurIPS workshop，聚焦非平稳环境下的 LLM post-training / RL / AI safety 基础；截止 8/30 11:59 GMT。若有 SFT/RLVR/test-time adaptation 或安全回归相关结果，走官网 OpenReview 入口投短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · VLM4RWD（Grounded VLM/VLA for Real-World Deployment）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止（约10天）",
    matchScore: 4,
    status: "开放中",
    link: "https://vlm4rwd.github.io/",
    note: "聚焦 grounded VLM/VLA、具身智能、幻觉与鲁棒性，和 THU 具身/CV 线匹配。把现有 VLA/grounding 结果压成 ≤8 页非归档短文，走 OpenReview。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 完整 cohort 已开放",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-06（完整 Winter 2027，AoE）；Neel Nanda 赛道 2026-09-04 11:59pm PT",
    deadlineLabel: "完整 cohort 截止 9/6；Neel 赛道更早 9/4 PT",
    matchScore: 5,
    status: "开放中（今日最高优先级更新）",
    link: "https://www.matsprogram.org/apply",
    note: "完整 Winter 2027 已于 8/18 开放 Stage 1，截止 9/6 AoE；含 Systems Security / Empirical 等轨，导师含 Anthropic、DeepMind、OpenAI、Redwood。本周先交 Stage 1 通用申请（背景+短答+两位推荐人联系方式），若做解释性/欺骗检测可另冲 Neel 赛道（9/4 PT）；材料与 ERA/SPAR 复用。"
  },
  {
    title: "NeurIPS 2026 Workshop · Embodied Spatial Reasoning（ESR，具身空间推理）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-05",
    deadlineLabel: "论文/Demo 投稿截止（AoE）",
    matchScore: 4,
    status: "开放中",
    link: "https://embodiedsr.github.io/",
    note: "第二届 ESR，聚焦 embodied spatial reasoning / world model / 3D 空间记忆；论文与 Demo 同截止（9/5）。把现有空间推理/VLA/world model 结果压成短文或交互 demo。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agentic Web（网络化多智能体生态 / 信任与安全）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-09-05",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 5,
    status: "开放中",
    link: "https://projectnanda.org/workshops/neurips26/",
    note: "亚特兰大站，把「网络化 agent 集体」当一等公民，含协调/声誉操纵抗性/population-scale safety；4 或 9 页非归档。若 TOPOSHIELD 或 multi-agent 工作可上升到网络信任/协调角度，优先投长文。"
  },
  {
    title: "ERA:AI Fellowship · Winter 2027（剑桥，含 Technical AI Safety）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-09-13（11:59pm AoE）",
    deadlineLabel: "申请截止（约24天）",
    matchScore: 5,
    status: "开放中",
    link: "https://erafellowship.org/fellowship",
    note: "剑桥线下 10 周（2027-01-18 起）、£10k 津贴+签证/差旅，含 Technical / Governance / TechGov；明确 18+ 即可、无学位门槛。本周写完书面申请短文，技术轨突出 evaluations/robustness/agent control；与 MATS 材料复用后单独投。"
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
    title: "NeurIPS 2026 Workshop · MATH-AI（数学推理与 AI）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-09-25",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 4,
    status: "开放中",
    link: "https://mathai-2026.github.io/",
    note: "数学/形式推理与 agentic AI，和 LLM reasoning 线匹配；截止与 ICLR 正文同日（9/25）。若有 theorem proving / verifiable reward / 结构化推理结果，走 OpenReview NeurIPS.cc/2026/Workshop/MATH-AI。"
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
  {
    title: "Citadel Conference Travel Grant · NeurIPS 2026",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-05",
    deadlineLabel: "申请截止（本科可申）",
    matchScore: 4,
    status: "开放中",
    link: "https://www.citadel.com/careers/programs-and-events/conference-travel-grant/",
    note: "Citadel 明确接受本科在读，覆盖机票/住宿等，10/5 截止、10/9 通知；有 workshop/主会投稿者优先。等 8 月底 workshop 结果出炉后立刻整理简历+投稿证明提交；同步关注 NeurIPS 官方约 9/1 开放的 Financial Assistance（注册+住宿）。"
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
    title: "腾讯青云计划 · 实习生招聘（混元/Agent/大模型方向）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "实习生通道开放中（本科可申）",
    matchScore: 4,
    status: "开放中（今日新增）",
    link: "https://join.qq.com/qingyun.html",
    note: "今日新增核实：面向本科/硕/博，实习生要求 2026 年 9 月及以后毕业；课题含混元基座、Agentic Coding、复杂 Agent 泛化等。本周在腾讯招聘选「实习生-青云计划」，优先投 Agent/安全/评测相关课题，咨询邮件注明方向：txqy@tencent.com。"
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
    title: "北京智源研究院（BAAI）具身智能 / AI安全方向 研究实习生",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "常年开放",
    matchScore: 4,
    status: "开放中",
    link: "https://mp.weixin.qq.com/s/tt2tbAcou9AMkn24IJjXow",
    note: "具身岗邮件投 chicheng@baai.ac.cn；简历置顶一作/共作与 VLM/VLA/RL 相关成果，并附可到岗时间。"
  },
  {
    title: "字节跳动 Seed · 大模型人才校招 / 实习生招聘（含具身智能）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动投递，无固定截止",
    deadlineLabel: "校招/实习通道开放中",
    matchScore: 4,
    status: "开放中（本科可申实习）",
    link: "https://research.doubao.com/zh/seedearlycareer",
    note: "实习生面向 2027 年 9 月及以后毕业在读生，含基础大模型（RL/Test-time Scaling/Multi-Agent）与具身智能。本周在页面点「立即投递」，简历突出 reasoning/RL 与具身成果；咨询 seedcampus@bytedance.com。"
  }
];
