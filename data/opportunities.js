// 机会数据源。每日自动化更新于 2026-08-09：全量覆盖 6 类检索；新增 TTCL workshop；修正 MATS 状态；字节 Seed 改为本科可申校招/实习；归档 Anthropic Fellows。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-08-09";

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
    note: "距开场仅 5 天：今晚完成 apartresearch.com 报名，并把可协作时段写进简介；方向不完全对口，目标是跑通 sprint 流程，为 9/11 Incident Response 对口场攒团队与熟悉度。"
  },
  {
    title: "SPAR（Supervised Program for Alignment Research）Fall 2026 · 学员申请",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-08-18",
    deadlineLabel: "学员申请截止",
    matchScore: 5,
    status: "开放中，仅剩约9天",
    link: "https://sparai.org/projects/f26/",
    note: "今日最高优先级：打开 https://forms.sparai.org/spar/mentee-app，从 Security/Technical 赛道挑 2–3 个和 multi-agent security / LLM reasoning 最贴的项目写短申请；本科生明确可申请，远程兼职 9–12 月，务必在 8/18 前提交。"
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
    note: "主题直接覆盖 test-time reasoning / SFT / RLVR / agentic tool-use；非归档且欢迎与 ICLR 2027 并行。这周按 NeurIPS 模板写出 4–8 页短文，OpenReview 入口一公布就投。"
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
    note: "覆盖 agent memory、multi-agent memory isolation、safety/privacy。若 TOPOSHIELD 或 agent 工作有记忆/隔离/攻击面角度，压成短文投 OpenReview；优先度略低于 AI Scientist 但对口安全叙事。"
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
    note: "明确有 Multi-agent Security 赛道，和 TOPOSHIELD 高度契合：本周锁定一篇 workshop 短文主投此赛道，Child Safety 类旁支先不做。"
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
    note: "今日新增：聚焦 test-time continual learning、memory consolidation、具身/虚拟 agent 安全与鲁棒；另有 AgentOdyssey Challenge 可冲奖。把 reasoning agent 的在线学习/记忆巩固故事压成 4–9 页，走 OpenReview；可与 AI4GOOD 错开叙事。"
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
    title: "中国国际大学生创新大赛（原'互联网+'）2026",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-08-10 起报名，2026-09-25 12:00 截止",
    deadlineLabel: "报名系统明日开放，9/25 截止",
    matchScore: 4,
    status: "报名系统明日（8/10）开放",
    link: "https://cy.ncss.cn",
    note: "教育部已发文：系统 8/10 开放、9/25 12:00 截止。今天把 Symbiotic AI / 挑战杯项目材料预整理成可上传报名包，并和学院确认校内初赛节点，明天一开放就提交。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）下一轮学员申请",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "Autumn 2026 已于 6/7 截止；Winter 2027 日期待官网公布",
    deadlineLabel: "持续盯紧官网，下一轮开放即投",
    matchScore: 5,
    status: "关注中（本轮已截止，等待下一轮）",
    link: "https://www.matsprogram.org/apply",
    note: "今日核实：Autumn 2026 申请已关闭，官网尚未公布 Winter 2027 开放日。把 Systems Security / Empirical 赛道文书与一页项目摘要备好，每天刷 matsprogram.org/apply；一开放当天投。"
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
    note: "摘要 9/18、正文 9/25；提交入口见 OpenReview ICLR.cc/2027/Conference。本周确定冲稿篇目与作者名单（摘要截止后不能再加作者），倒排实验与写作日程。"
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
    title: "QRT Travel Grant to NeurIPS 2026",
    type: "Travel Grant",
    tags: ["C", "D"],
    deadline: "2026-10-02",
    deadlineLabel: "申请截止",
    matchScore: 3,
    status: "开放中",
    link: "https://builtinlondon.uk/job/qrt-travel-grant-neurips-2026-apply-here/10277793",
    note: "面向硕博/博后为主；若 workshop 被接收，先邮件确认本科是否可申，同时并行关注 NeurIPS 官方 student volunteer / DEI travel grant。"
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
    note: "9 周全额资助+导师，明确欢迎本科生且有本科配额；但必须有美国工作许可（OPT/CPT 等）且不担保签证。暂无美签条件就先填 Fall 2026 Expression of Interest，材料备好；有赴美窗口再冲。"
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

  // ---- 会议关注 / 实验室实习 ----
  {
    title: "RISE @ NeurIPS 2026（Reasoning in Scalable Embodied Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "投稿截止 TBD（会期 2026-12，随 NeurIPS）",
    deadlineLabel: "CFP 日期待公布，先盯官网",
    matchScore: 4,
    status: "关注中",
    link: "https://rise-ai-workshop.github.io/",
    note: "具身推理 / VLA / world model，和双线研究高度重合；截止日期仍 TBD。设日历每周刷一次官网，CFP 一出就排进投稿队列（可与 VLM4RWD / TTCL 错峰）。"
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
    title: "上海人工智能实验室（Shanghai AI Lab）日常实习 / AI训练与计算中心",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "常年滚动投递，每年3-6月为校招集中期",
    deadlineLabel: "常年开放",
    matchScore: 3,
    status: "开放中",
    link: "https://www.shlab.org.cn",
    note: "官网「加入我们」投日常实习，或找书生/具身相关组内推；不要干等下一季校招。"
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
    note: "今日核实：官方「Seed 大模型人才校招」实习生面向 2027 年 9 月及以后毕业在读生，含基础大模型（RL/Test-time Scaling/Multi-Agent）与具身智能方向。本周在页面点「立即投递」，简历突出 reasoning/RL 与具身相关成果；咨询邮箱 seedcampus@bytedance.com。"
  },
  {
    title: "Meta FAIR PhD-track Research Scientist Intern（关注池，非当下重点）",
    type: "实验室实习",
    tags: ["D"],
    deadline: "2027夏季岗位预计2026年8-10月开放申请",
    deadlineLabel: "watch list，暂不满足条件",
    matchScore: 2,
    status: "关注中",
    link: "https://ai.meta.com/join-us/residency-program/",
    note: "多数要求在读 PhD/部分 Master。继续放关注池；8–10 月若出现本科可申的 research intern 再升级优先级。"
  },

  // ---- 长期曝光渠道 ----
  {
    title: "WAIC 青年菁英交流会 / 机器之心'先锋青年说'等青年学者论坛",
    type: "论坛/演讲",
    tags: ["B", "C"],
    deadline: "无固定截止，通常每年 6-7 月随 WAIC 前后发布征集通知",
    deadlineLabel: "持续关注，非即时行动项",
    matchScore: 3,
    status: "常态化关注",
    link: "https://www.qbitai.com/",
    note: "关注量子位、机器之心、智源社区公众号；有新成果时准备 1 页自荐+代表作链接，走社群自荐而非干等公开征集。"
  },
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
