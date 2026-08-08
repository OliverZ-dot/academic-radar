// 机会数据源。人工维护版本 v2（2026-08-08 由助手调研整理，新增导师匹配/实验室实习/演讲黑客松三大类）。
// 后续由每日/每周自动化任务追加更新，或由你要求助手手动刷新。
const LAST_UPDATED = "2026-08-08";

// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const OPPORTUNITIES = [
  {
    title: "NeurIPS 2026 Workshop · AI4GOOD（含 Multi-agent Security and Safety 分赛道）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止",
    matchScore: 5,
    status: "开放中",
    link: "https://trustworthy-ai-for-good.github.io/",
    note: "强烈推荐：明确设有 Multi-agent Security 赛道，和 TOPOSHIELD 方向高度契合，可将现有工作扩展/衍生一篇 workshop 论文，本科生也容易中，且能借此认识 AI Safety 圈子的人。"
  },
  {
    title: "NeurIPS 2026 Workshop · Child Safety in AI",
    type: "会议 Workshop",
    tags: ["A", "B"],
    deadline: "2026-08-29",
    deadlineLabel: "论文投稿截止（AoE）",
    matchScore: 3,
    status: "开放中",
    link: "https://childsafety-ai.github.io/",
    note: "如果安全方向的工作能扩展出儿童保护/内容安全角度可以投；否则优先级低于 AI4GOOD。"
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
    note: "直接投稿窗口已过，但若手上有已走 ARR 流程的 agent/reasoning 相关论文，可在 8/31 前 commit 过去，10 月底在布达佩斯举办，晚投稿是拿口头报告曝光的低成本机会。"
  },
  {
    title: "ICLR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-09-18 / 2026-09-25",
    deadlineLabel: "摘要截止 9/18，正文截止 9/25（AOE）",
    matchScore: 5,
    status: "开放中（尚未开放提交系统，需关注 OpenReview）",
    link: "https://iclr.cc/Conferences/2027/CallForPapers",
    note: "距今约6周，是你 reasoning/推理方向手头在投稿工作的下一个自然节点，建议现在就规划哪篇工作冲这个 deadline。"
  },
  {
    title: "中国国际大学生创新大赛（原'互联网+'）2026",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-08-10 起报名，2026-09-25 12:00 截止",
    deadlineLabel: "报名截止",
    matchScore: 4,
    status: "报名系统即将开放",
    link: "https://cy.ncss.cn",
    note: "你已有'挑战杯'全国唯一冠军的经验和 Symbiotic AI 概念，可以考虑把某个研究/开源项目包装成创业项目参赛，复用已有的路演/答辩经验，是曝光+履历的高性价比选择。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "校内选拔即将开始，需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届（2025）全国唯一冠军，非常适合连任/带队参赛或作为经验分享者角色参与选拔宣讲。建议本周主动询问学院团委本校第二十届的校内选拔时间表，别错过校内报名窗口。"
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
    note: "面向硕士/博士/博后，本科生能否申请需要邮件确认，即使不行也可以留意其他 NeurIPS 2026 的本科生资助渠道。若有论文/workshop 论文被接收，优先申请。"
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
    note: "'天才少年挑战课题'目前公开方向包含大模型安全技术、世界模型理论，和你的 AI Security / Symbiotic AI 方向高度重合。不急于现在投递（2027 届毕业更合适），但建议现在开始关注、了解历届课题方向，为后年投递做准备；也可以先争取暑期实习管道。"
  },
  {
    title: "WAIC 世界人工智能大会·青年优秀论文奖（WAICYOP）2027 届（预告）",
    type: "论坛/奖项",
    tags: ["B", "C"],
    deadline: "预计 2027 年 4 月前后（2026 届已于 4/26 截止）",
    deadlineLabel: "本届已错过，下一届待官方通知",
    matchScore: 3,
    status: "本轮已截止，记录备查",
    link: "https://kexie.dhu.edu.cn/2026/0305/c16079a372052/page.htm",
    note: "错过了 2026 届，设一个日历提醒在 2027 年 3 月前后主动查一次官网，用你 2026 年发表/在投的论文去申报。"
  },
  {
    title: "WAIC 青年菁英交流会 / 机器之心'先锋青年说'等青年学者论坛",
    type: "论坛/演讲",
    tags: ["B", "C"],
    deadline: "无固定截止，通常每年 6-7 月随 WAIC 前后发布征集通知",
    deadlineLabel: "持续关注，非即时行动项",
    matchScore: 3,
    status: "常态化关注",
    link: "https://www.qbitai.com/",
    note: "建议关注量子位、机器之心、智源社区的公众号，这类论坛通常靠自荐投稿研究成果+社群人脉获得邀请，不是标准报名流程，适合作为长期'刷脸'渠道。"
  },

  // ---- 导师匹配 / Fellowship（结构化认识"已经很出色且开放"的研究者，比冷发邮件靠谱）----
  {
    title: "SPAR（Supervised Program for Alignment Research）Fall 2026 · 学员申请",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C"],
    deadline: "2026-08-18",
    deadlineLabel: "学员申请截止",
    matchScore: 5,
    status: "开放中，仅剩约10天",
    link: "https://sparai.org/projects/f26/",
    note: "强烈推荐、马上截止：兼职远程的 AI 风险研究导师匹配项目，明确设有 Security 赛道（还有 Technical/Interpretability/Governance），可以同时申请多个项目。这是'认识已经很出色且愿意带学生的研究者'最结构化、成功率最高的路径，比自己找人冷发邮件靠谱得多。3个月，9-12月，需要立刻准备申请材料。"
  },
  {
    title: "MATS（ML Alignment & Theory Scholars）Winter 2027 · 学员申请",
    type: "导师匹配 Mentorship",
    tags: ["A", "B", "C", "D"],
    deadline: "2026年8月中旬开放（具体日期待官网公布）",
    deadlineLabel: "预计即将开放申请",
    matchScore: 5,
    status: "即将开放，需要盯紧官网",
    link: "https://www.matsprogram.org/",
    note: "AI alignment/安全领域最顶级的学生-导师匹配项目之一，导师来自 Anthropic、Google DeepMind、OpenAI、Redwood Research 等，含 Systems Security 赛道。Berkeley/London 线下12周+可选6-12个月延期。建议现在就去官网订阅通知，开放当天就投，竞争非常激烈，材料要提前准备好。"
  },
  {
    title: "Astra Fellowship / Pivotal Research Fellowship（AI Safety）· 下一轮关注",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "本轮（2026 Q3）已于 5/3 截止，下一轮时间待公布",
    deadlineLabel: "已错过本轮，记录备查",
    matchScore: 3,
    status: "本轮已截止",
    link: "https://constellation.org/programs/astra",
    note: "全额资助、5个月、伯克利/伦敦线下的 AI safety fellowship，配一对一资深导师+每月$8400生活费，含 Empirical/Strategy & Governance 等方向。这轮已经错过，建议先填官网的 expression of interest 表单，下次开放能第一时间收到通知。"
  },

  // ---- 知名实验室实习 / 暑研（滚动招募，越早投越好）----
  {
    title: "微软亚洲研究院（MSRA）Research Intern for LLM Reasoning",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募，无固定截止",
    deadlineLabel: "常年开放，建议尽快投递",
    matchScore: 5,
    status: "开放中",
    link: "https://www.microsoft.com/en-us/research/opportunity/research-intern-for-llm-reasoning/",
    note: "岗位方向和你在 THU AI 学院做的 reasoning（SFT/RL/test-time scaling）几乎完全重合。需要导师同意、至少3个月实习承诺。下载官方申请表 + 中英文简历，邮件发送到岗位页面指定邮箱，标题注明'LLM Reasoning研究实习生'。属于'明日之星'实习生项目，历年有大量清北复交及海外名校学生参与。"
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
    note: "具身智能岗位方向为 VLM/VLA/WBC/RL，直接匹配你在 THU 做的具身智能研究；另有 AI 安全方向研究实习生岗位在招。具身智能岗位可直接邮件投递简历到 chicheng@baai.ac.cn，注明'一作发表优先'的加分项你已经满足。"
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
    note: "书生大模型体系背后的团队，研究方向覆盖 LLM、具身智能、AI+Science。校招批次已过，但官网'加入我们'长期有日常实习岗位，建议主动投递简历或找内推码，不用等下一次校招季。"
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
    note: "目前岗位基本要求在读 PhD 或部分 Master，本科阶段暂时不是最优先级，先放进关注池。等你申请到 PhD 项目、或者以研究合作者身份进一步积累成果后，是非常值得冲的方向（FAIR 在 LLM/Alignment 方向常年招 research scientist intern）。"
  },

  // ---- 演讲 / 黑客松（低门槛刷经验+认识社区，含 fellowship 晋级通道）----
  {
    title: "Apart Research · AI Incident Response Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-09-11 至 2026-09-13",
    deadlineLabel: "活动举办日期（线上+线下均可参加）",
    matchScore: 4,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-incident-response-sprint-2026-09-11-to-2026-09-13",
    note: "周末的 AI 安全黑客松，主题直接对口 AI Security（事件响应），不需要提前很久准备，无需 AI safety 背景。表现好的团队可以被邀请申请 Apart Fellowship（3-6个月，含资金+导师+发表支持），是认识 AI safety 圈子和积累项目经验的低成本高性价比方式。"
  },
  {
    title: "Apart Research · Digital Minds Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-08-14 至 2026-08-16",
    deadlineLabel: "本周末举办",
    matchScore: 3,
    status: "即将开始，报名从速",
    link: "https://apartresearch.com/sprints/digital-minds-research-sprint-2026-08-14-to-2026-08-16",
    note: "这周末就开始，主题是 AI 偏好/意识/内省能力的实证研究，和你的主方向不完全重合，但作为'低门槛试水一次 AI safety hackathon'的机会很合适，时间紧就当练手，观察 Apart Research 这个社区的运作方式，为后面参加更对口的 sprint（比如9月的 Incident Response）做准备。"
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
    note: "CCF 官方的青年学者思辨/交流平台，遍布全国近30个城市分论坛，42周岁以下均可申请成为委员。不是一次性投稿，而是长期经营的国内学术人脉入口——先申请加入你所在城市的分论坛做委员，参与几次'观点论坛'活动，逐步积累到自己主讲或组织论坛的机会。"
  }
];
