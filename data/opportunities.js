// 机会数据源。每日自动化更新于 2026-08-11：全量覆盖 6 类检索；新增 Agents in the Wild workshop；MATS Neel Nanda Winter 2027 赛道今日确认开放（截止 9/4）；Citadel Travel Grant（本科可申）替换 QRT；主列表仍控制在 25 条内（RISE 暂移出主列表，deadline 仍 TBD）。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-08-11";

const OPPORTUNITIES = [
  // ---- 紧迫行动（未来两周）----
  {
    title: "Apart Research · Digital Minds Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-08-14 至 2026-08-16",
    deadlineLabel: "本周末举办",
    matchScore: 3,
    status: "即将开始，报名从速",
    link: "https://apartresearch.com/sprints/digital-minds-research-sprint-2026-08-14-to-2026-08-16",
    note: "距开场约 3 天：今天就在 apartresearch.com 完成报名并写好可协作时段；方向偏 AI welfare，目标是跑通 sprint 流程与结识队友，为 9/11 Incident Response 对口场铺路。"
  },
  {
    title: "SPAR（Supervised Program for Alignment Research）Fall 2026 · 学员申请",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-08-18",
    deadlineLabel: "学员申请截止",
    matchScore: 5,
    status: "开放中，仅剩约7天",
    link: "https://sparai.org/projects/f26/",
    note: "今日最高优先级：打开 https://forms.sparai.org/spar/mentee-app，从 Security（约 19 个项目）/Technical 赛道挑 2–3 个和 multi-agent security / LLM reasoning 最贴的项目写短申请；本科生可申，远程兼职 9–12 月，务必在 8/18 前提交。"
  },
  {
    title: "NeurIPS 2026 Workshop · Foundations of Language Model Security（FLMSec）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-22",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 5,
    status: "开放中",
    link: "https://flmsec.github.io/",
    note: "LLM 安全形式化/可证明安全/多智能体安全，和计算机安全背景+AI Security 高度契合。按 NeurIPS workshop 模板写 ≤8 页非归档短文，OpenReview 组 NeurIPS.cc/2026/Workshop/FLMSec，8/22 前投；可与 AI4GOOD / Agents in the Wild 分叙事。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI Scientist（LLM scientific reasoning）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-22",
    deadlineLabel: "论文投稿截止（AoE，tentative）",
    matchScore: 5,
    status: "开放中",
    link: "https://llm4sd.io/cfp",
    note: "主题覆盖 test-time reasoning / SFT / RLVR / agentic tool-use；非归档且可与 ICLR 2027 并行。这周写出 4–8 页短文，OpenReview 入口一公布就投，和 FLMSec 同日截止需排好写作优先级。"
  },
  {
    title: "NeurIPS 2026 Workshop · PALM（Personalized & Long-term Memory，含安全/多智能体记忆）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-24",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 4,
    status: "开放中",
    link: "https://memories.ai/blogs/call-for-papers-palm-at-neurips-2026",
    note: "覆盖 agent memory、multi-agent memory isolation、safety/privacy。若 TOPOSHIELD 或 agent 工作有记忆/隔离/攻击面角度，压成短文投 OpenReview；优先度略低于 FLMSec / AI Scientist。"
  },
  {
    title: "NeurIPS 2026 Workshop · Agents in the Wild（Agent Safety/Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 5,
    status: "开放中（今日新增）",
    link: "https://agentwild-workshop.github.io/neurips2026/",
    note: "今日新增：第三届 Agents in the Wild，主题直打 agent safety/security/prompt injection/tool misuse/multi-agent，和 TOPOSHIELD 高度契合；支持 9 页正规文或 4 页短文（非归档）。今天先注册/激活 OpenReview（官网建议 8/15 前），把安全叙事压成短文主投此 workshop。"
  },
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止",
    matchScore: 5,
    status: "开放中",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "明确有 Multi-agent Security 赛道：与 Agents in the Wild 同日截止，二者分叙事（此条偏社会影响与多智能体部署安全，Wild 偏攻击面与系统安全），选一篇主投、另一篇改角度或只投短文。"
  },
  {
    title: "NeurIPS 2026 Workshop · TTCL（Towards Test-Time Continual Learning Agents）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 4,
    status: "开放中",
    link: "https://ttcl-agents.github.io/",
    note: "聚焦 test-time continual learning、memory consolidation、具身/虚拟 agent 安全与鲁棒；另有 AgentOdyssey Challenge 可冲奖。把 reasoning agent 的在线学习/记忆巩固故事压成 4–9 页，走 OpenReview。"
  },
  {
    title: "NeurIPS 2026 Workshop · VLM4RWD（Grounded VLM/VLA for Real-World Deployment）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-30",
    deadlineLabel: "论文投稿截止",
    matchScore: 4,
    status: "开放中",
    link: "https://vlm4rwd.github.io/",
    note: "聚焦 grounded VLM/VLA、具身智能、幻觉与鲁棒性，和 THU 具身/CV 线匹配。把现有 VLA/grounding 结果压成 ≤8 页非归档短文，走 OpenReview。"
  },
  {
    title: "REALM @ EMNLP 2026（LLM Agents workshop，含 Security/Safety/Robustness 主题）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-31",
    deadlineLabel: "ARR Commitment 截止（直接投稿已截止，可走 ARR 转投）",
    matchScore: 4,
    status: "开放中（仅 ARR 转投通道）",
    link: "https://realm-workshop.github.io/call_for_papers/",
    note: "直接投稿已过；若手上有已过 ARR 评审的 agent/reasoning 论文，8/31 前在 OpenReview 完成 commitment，争取 10 月底布达佩斯口头/海报曝光。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · Neel Nanda 赛道已开放",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026-09-04（Neel Nanda 赛道，11:59pm PT）；完整 Winter 2027 预计 late August 开放",
    deadlineLabel: "Neel 赛道已开放，完整 cohort 即将开放",
    matchScore: 5,
    status: "部分开放（今日重大更新）",
    link: "https://www.matsprogram.org/apply",
    note: "今日核实：Neel Nanda（DeepMind 机械可解释性）Winter 2027 赛道已开放，截止 9/4 11:59pm PT；探索期 9/28–10/30 有 $4200+$500 compute。若做 CoT/欺骗检测/解释性相关可直接冲；同时填 Full Winter 2027 Launch EOI，并备好 Systems Security / Empirical 文书，等完整 cohort 在 late August 开放当天投。"
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
    note: "系统自 8/10 开放至 9/25 12:00。本周登录 cy.ncss.cn 建队并上传预整理的 Symbiotic AI / 挑战杯材料包，同时问学院校内初赛截止日，避免只报国赛系统却漏校内节点。"
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
    note: "数学/形式推理与 agentic AI，和 LLM reasoning 线匹配；截止与 ICLR 正文同日（9/25）。若有 theorem proving / verifiable reward / 结构化推理结果，走 OpenReview NeurIPS.cc/2026/Workshop/MATH-AI，可与主会错开叙事。"
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
    note: "主题直接对口 AI Security 事件响应；先报名占坑，表现好可获 Apart Fellowship 邀请。可与本周末 Digital Minds 连打两次，熟悉社区。"
  },
  {
    title: "Citadel Conference Travel Grant · NeurIPS 2026",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-05",
    deadlineLabel: "申请截止（本科可申）",
    matchScore: 4,
    status: "开放中（今日替换原 QRT 条目）",
    link: "https://www.citadel.com/careers/programs-and-events/conference-travel-grant/",
    note: "今日替换 QRT：Citadel 明确接受本科在读，覆盖机票/住宿等，10/5 截止、10/9 通知；有 workshop/主会投稿者优先。等 8 月底 workshop 结果出炉后立刻整理简历+投稿证明提交；同步关注 NeurIPS 官方 9 月开放的 Financial Assistance（注册+住宿）。"
  },
  {
    title: "CBAI Fall Research Fellowship in AI Safety（2026）",
    type: "Fellowship / 导师匹配",
    tags: ["A", "C", "D"],
    deadline: "2026年8月下旬预计开放申请（项目 10/13–12/18）",
    deadlineLabel: "申请即将开放，需填兴趣表",
    matchScore: 3,
    status: "即将开放（需美国工作许可）",
    link: "https://www.cbai.ai/ais-research-fellowship",
    note: "今日再核实仍写「applications will open later this month」。9 周全额资助+导师，明确欢迎本科生；必须有美国工作许可且不担保签证。暂无美签条件就先填 Fall 2026 Expression of Interest；有赴美窗口再冲。"
  },

  // ---- 竞赛 / 人才计划 ----
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
  {
    title: "华为'全球顶尖 AI 人才招募计划' / '天才少年'挑战课题",
    type: "人才计划",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "常年开放（面向2026/2027届毕业生）",
    matchScore: 4,
    status: "开放中",
    link: "https://www.huaweicloud.com/",
    note: "公开课题含大模型安全、世界模型，和 AI Security / Symbiotic AI 重合。2027 届更合适，现在先收藏课题页并争取相关暑期/日常实习管道。"
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
    note: "明确欢迎有志科研的本科生；方向含 latent action / VLA / world model / RL。同一套申请表发 MSRAih@microsoft.com 与 lizo@microsoft.com，标题写「机器学习组—具身智能研究实习生」，可与 LLM Reasoning 岗错开说明主申/兼申。"
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
  },
  {
    title: "Google DeepMind / Google Research · Student Researcher Program（本科可申）",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "2025–2026 周期滚动审核（岗位招满即关）",
    deadlineLabel: "滚动投递，尽快在 Google Careers 按 BS 档申请",
    matchScore: 3,
    status: "开放中（明确接受本科在读）",
    link: "https://deepmind.google/student-researcher-program/",
    note: "官方写明接受 Bachelor's 在读，12–24 周线下，投递后会在 DeepMind/Google Research 等团队匹配。在 Google Careers 搜 Student Researcher（BS）投 1–2 个最相关方向，同时准备签证/到岗可行性说明。"
  },

  // ---- 长期曝光渠道 ----
  {
    title: "CCF YOCSEF（青年计算机科技论坛）委员 / 报告人 长期通道",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "长期开放申请，无固定截止",
    deadlineLabel: "长期发展渠道",
    matchScore: 3,
    status: "常年开放",
    link: "https://www.ccf.org.cn/YOCSEF/2026-01-08/856596.shtml",
    note: "先申请加入所在城市分论坛做委员，参加 1–2 次观点论坛后再争取主讲或组织场次。"
  }
];
