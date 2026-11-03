// 机会数据源。每日自动化更新于 2026-11-03：基于 11/02 分支；归档 Pivotal/Generator/Algoverse（Nov 1 窗口已关）；CAMBRIA 学员已关但 TA 仍开；SAFE 官网/OR 延期至 Nov 4 23:59 ET（OR ≈11/05 04:59 UTC）；腾位新增 LAUT / SPF-LLM / Agentic Laboratories；主列表 25 条。
// tags: A=学术产出 B=公开曝光 C=资源网络 D=履历里程碑
const LAST_UPDATED = "2026-11-03";

const OPPORTUNITIES = [
  // ---- 今日最紧迫 ----
  {
    title: "AAAI-27 Workshop · SAFE（Synthetic & Adversarial ForEnsics）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-04",
    deadlineLabel: "官网延期至 Nov 4 23:59 ET（= OR due ≈11/05 04:59 UTC；11/03 复核 OR 仍开放，tmdate 11/02 已改）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约2天·已延期）",
    link: "https://www.safeworkshop.org/aaai-2027/",
    note: "对抗/伪造取证/水印溯源/红队/jailbreak/MLLM 鲁棒，直打 AI Security×CV。今天就把红队或 multimodal jailbreak 短文扩到 6–8 页 AAAI 格式，投 openreview.net/group?id=AAAI.org/2027/Workshop/SAFE；比 Trust4RSI/AICS/LAUT 更早截止，最高优先。"
  },
  {
    title: "Lexsi · AI Safety and Alignment Hackathon（× Cohere Labs / Hugging Face）",
    type: "黑客松/演讲",
    tags: ["B", "C", "D"],
    deadline: "2026-11-05 / 2026-11-14",
    deadlineLabel: "报名截止 11/5（约2天）；Kickoff 已过；线上黑客松进行中（11/1–21），提交 11/14；短名单 11/16；Demo Day 11/22；含 Red Teaming / Agentic Fine-tuning 赛道",
    matchScore: 5,
    status: "开放报名（黑客松进行中）",
    link: "https://hackathon.lexsi.ai/",
    note: "本科可参加。若未报名：今天就在 hackathon.lexsi.ai 完成注册并进 Discord（报名窗只到 11/5）；已报名则锁定 Red Teaming 或 Agentic Fine-tuning，本周开题并预留周末赶 11/14 提交。"
  },
  {
    title: "G-Research · NeurIPS 2026 Sydney Travel Grant",
    type: "Travel Grant",
    tags: ["B", "C", "D"],
    deadline: "2026-11-06",
    deadlineLabel: "申请截止 Friday 6 Nov（约3天；面向 emerging talent / early-career / students；全额覆盖通行证+机票+住宿+日津贴；悉尼站售罄后的补票通道；通知约 11/13）",
    matchScore: 4,
    status: "开放中（约3天）",
    link: "https://www.gresearch.com/g-research-at-neurips/",
    note: "官方 FA/Citadel/QRT 等 NeurIPS 资助已关；这是目前仍开的全额悉尼 travel grant。今天走 HubSpot 表单 https://share-eu1.hsforms.com/1-6fUQeuwRrG-ZsFdfhZI-Q2b8apt 提交，简历突出一作/挑战杯与安全方向；准备一句为何必须到场的陈述。"
  },
  {
    title: "Apart Research · Swarm Alignment Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-06 至 2026-11-08",
    deadlineLabel: "活动举办日期（线上 + AE Studio 洛杉矶 hub + 蒙特利尔 Ω Labs hub；提交截止 11/8 AoE）",
    matchScore: 5,
    status: "开放报名（约3天）",
    link: "https://apartresearch.com/sprints/swarm-alignment-2026",
    note: "多 agent 群体对齐/沙箱/协议/oversight，和 TOPOSHIELD 高度重合。今天在 apartresearch.com 报名；若人在蒙特利尔可另报 luma.com/b6u4rfp4（仍须在 Apart 页注册才能提交），并起草 swarm failure monitor 一页提纲，预留 11/6–8。"
  },
  {
    title: "CAMBRIA · CBAI 技术技能冲刺营（Cambridge, MA · Jan 2027）· TA 通道",
    type: "Fellowship / 技能营",
    tags: ["A", "C", "D"],
    deadline: "2026-11-01（学员）/ 滚动（TA）",
    deadlineLabel: "学员申请已于 11/1 AoE 关闭；官网横幅：TA applications are still open；项目 2027-01-04–01-22 全职线下 Cambridge MA",
    matchScore: 4,
    status: "学员已关；TA 仍开放",
    link: "https://www.cbai.ai/cambria",
    note: "学员窗已关。若有 ARENA/ML 教学或安全研究带教经验：今天打开 cbai.ai/cambria 走 TA Airtable（https://airtable.com/apphMEwHISEUsaBaK/pagktesV5E1AQHmPC/form）投递；材料写清可带 mechinterp/evals 的具体经历。"
  },
  {
    title: "CVPR 2027",
    type: "顶会",
    tags: ["A", "D"],
    deadline: "2026-11-10 / 2026-11-16",
    deadlineLabel: "Workshop 提案 11/4 AoE（约1天）；Paper Registration 11/10 AoE；正文 11/16 AoE（补充材料 11/23）",
    matchScore: 4,
    status: "开放关注（Workshop 提案约1天）",
    link: "https://cvpr.thecvf.com/Conferences/2027/Dates",
    note: "CV/具身感知与 VLA 工作的下一自然节点（会期 2027-06-20–25）。若组 workshop：今天核对 11/4 提案材料并投 OpenReview；论文向则本周列候选稿，11/10 前完成 OpenReview 注册与作者锁定。"
  },
  {
    title: "'挑战杯'第二十届全国大学生课外学术科技作品竞赛（2027 届）",
    type: "竞赛",
    tags: ["A", "D"],
    deadline: "2026 年内校级选拔陆续启动（各校不同，通常 11 月前后），国赛在 2027 年",
    deadlineLabel: "多校校级选拔已启动（部分校 9–11 月窗口），需主动联系学院确认本校时间表",
    matchScore: 5,
    status: "校级选拔阶段（因校而异）",
    link: "https://www.tiaozhanbei.net/timing",
    note: "你是上一届全国唯一冠军：本周立刻问学院团委第二十届校内选拔时间表，决定是带队冲奖还是做经验分享/答辩辅导角色。"
  },
  {
    title: "CCF YOCSEF 香港 ·「大模型跨境训练：隐私保护与模型能力能否兼得？」",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-08",
    deadlineLabel: "论坛举办日（香港；可申请参会/发言）",
    matchScore: 3,
    status: "开放关注（约5天）",
    link: "https://yocsef.ccf.org.cn/YOCSEF/Upcoming_Events/2026-09-04/929336.shtml",
    note: "隐私/跨境训练与模型能力权衡，偏治理但可贴 AI 安全。若打了香港 Apart hub，可顺延邮件 nanjierenxjtu@163.com（刘浩/张权忠）自荐旁听或短发言。"
  },
  {
    title: "Apart Research · AI × Epistemics Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-13 至 2026-11-15",
    deadlineLabel: "活动举办日期（线上；提交截止 11/15 AoE）",
    matchScore: 4,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15",
    note: "模型置信/可验证性/信任基础设施，贴合 LLM reasoning×安全。若 Swarm 已打满，用此场练 eval；今天报名并准备 1 页 claim-verification 基准提纲。"
  },
  {
    title: "Humanoids 2026 Workshop · Trustworthy Humanoid Systems（From Capability to Assurance）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-15",
    deadlineLabel: "官网 Paper & Demo Nov 15 23:59 AoE；OpenReview due ≈11/17 11:59 UTC（alias Trustworthy_Humanoid_Systems；滚动审 11/2–11/20）；会期 12/7 圣克拉拉",
    matchScore: 5,
    status: "开放中（约12天）",
    link: "https://humanoid-safety-assurance.paiagent.ai/humanoids2026/",
    note: "具身/人形机器人系统级安全与 assurance（规划控制×运行时监督×人机接触），贴合 Embodied AI×AI Security。本周把 runtime monitor / failure recovery / 安全评测短文按 IEEE 双栏投 openreview.net/group?id=IEEE.org/RAS/Humanoids/2026/Workshop/Trustworthy_Humanoid_Systems（非归档、单盲）；有 demo 可同步交，标题含 Demo。"
  },
  {
    title: "AAAI-27 Workshop · LAUT（LLM Agents Under Threat in Cyberspace）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 11:59 UTC（alias LAUT；11/03 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约17天）",
    link: "https://llm-agents-under-threat.github.io/",
    note: "今日新增：直打 prompt injection / tool misuse / multi-agent collusion / 安全 agent 架构，与 TOPOSHIELD 高度重合。先赶 SAFE（约2天），再把 agent 攻防短文（≤7页、单盲、非归档）投 openreview.net/group?id=AAAI.org/2027/Workshop/LAUT。"
  },
  {
    title: "AAAI-27 Workshop · SPF-LLM（Security & Privacy Foundations for LLMs）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 11:59 UTC（alias SPF-LLM；11/03 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约17天）",
    link: "https://spf-llm-2026.github.io/spf-llm-workshop.github.io/",
    note: "今日新增：强调 agentic/multi-agent 设定下的安全与隐私（红队、runtime monitoring、工具劫持）。安全叙事若更偏 foundation/隐私，投 openreview.net/group?id=AAAI.org/2027/Workshop/SPF-LLM；偏攻防系统则优先 LAUT/AICS。"
  },
  {
    title: "AAAI-27 Workshop · Agentic Laboratories（From AI Scientists to Autonomous Labs）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20；OpenReview due ≈11/20 05:00 UTC（alias Agentic_Labs；11/03 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 4,
    status: "开放中（约17天）",
    link: "https://siavashhkh.github.io/agentic-labs-aaai27/",
    note: "今日新增：多智能体科研架构×具身实验机器人×世界模型调度，贴合 Embodied AI / multi-agent。有 VLA/实验自动化短文可投 openreview.net/group?id=AAAI.org/2027/Workshop/Agentic_Labs（≤7页）；安全向优先 SAFE→LAUT→AICS。"
  },
  {
    title: "AAAI-27 Workshop · Trust4RSI-Agent（Trustworthy Evolution of AI Agents）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 13:00 UTC（11/03 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约17天）",
    link: "https://trust4rsi-agent.github.io/AAAI2027/",
    note: "把 agent 演化可信性当 OS/系统问题（记忆溯源、工具沙箱、策略回滚、多智能体共演化）。优先先赶 SAFE，再列可扩短文投 openreview.net/group?id=AAAI.org/2027/Workshop/Trust4RSI-Agent。"
  },
  {
    title: "AAAI-27 Workshop · WMAC 2027（Multi-Agent Collaboration / Collective Intelligence）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "OpenReview due ≈11/20 22:59 UTC（官网 Nov 20；11/03 复核仍开放）；通知 12/2；会期 2027-02-22/23 蒙特利尔",
    matchScore: 5,
    status: "开放中（约17天）",
    link: "https://multiagents.org/2027/",
    note: "第三届 WMAC，主题从「如何协作」转向「如何度量群体智能」；可投 coordination metric / multi-agent eval / 负结果。安全向优先 SAFE→LAUT→AICS→Trust4RSI，评测/度量向投 openreview.net/group?id=AAAI.org/2027/Workshop/WMAC。"
  },
  {
    title: "AAAI-27 Workshop · AICS（AI Cyber Security）",
    type: "会议 Workshop",
    tags: ["A", "B", "C"],
    deadline: "2026-11-20",
    deadlineLabel: "官网 Nov 20 AoE；OpenReview due ≈11/21 10:59 UTC（11/03 复核仍开放）；通知 12/11；AAAI 拒稿 fast track 另约 12/2 AoE；会期 2027-02 蒙特利尔",
    matchScore: 5,
    status: "开放中（约17天）",
    link: "http://aics.site/AICS2027/cfp.html",
    note: "主题直打 AI 系统安全/对抗鲁棒/红队/多智能体博弈安全，非匿名投稿。优先先赶 SAFE，再把 agent/jailbreak/红队短文投 openreview.net/group?id=AAAI.org/2027/Workshop/AICS；未赶上可盯 12/2 AAAI 拒稿 fast track。"
  },
  {
    title: "Apart Research · Agent Attribution Hackathon",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-11-27 至 2026-11-29",
    deadlineLabel: "活动举办日期（线上；提交截止 11/29 AoE；另有 Tel Aviv jam site）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/agent-attribution-2026",
    note: "区分 rogue agent vs 人控 agent 的归因/检测/逃逸，直打 agent security。今天报名；优先排 Swarm→Attribution，预写 1 页 attribution classifier 提纲。"
  },
  {
    title: "Apart Research · Threat Intelligence & Threat Modelling Hackathon（× SL5）",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-12-04 至 2026-12-06",
    deadlineLabel: "活动举办日期（线上；提交截止 12/6 AoE；与 Security Level 5 合办）",
    matchScore: 5,
    status: "开放报名",
    link: "https://apartresearch.com/sprints/threat-intelligence-threat-modelling-2026",
    note: "用 LLM 规模化威胁情报/威胁建模，服务前沿 AI 数据中心对抗国家级攻击——直接贴 AI Security。今天报名；先打 Swarm/Attribution，再预留 12/4–6，起草 1 页 AI-assisted threat model 提纲。"
  },

  // ---- 刚过截止（未满7天，暂留主列表）----
  {
    title: "KCon 2026「弈智」· 人工智能+大会安全论坛",
    type: "演讲/论坛",
    tags: ["B", "C"],
    deadline: "2026-11-01",
    deadlineLabel: "大会已于 11/1 在北京中关村展示中心举办；早鸟票 10/25 已过",
    matchScore: 4,
    status: "已结束（约第2天）",
    link: "https://kcon.knownsec.com/",
    note: "已结束约第2天。若到场：整理认识的人脉与议题笔记，跟进可能的合作/内推；未到场则改盯 Lexsi（报名至 11/5）与 YOCSEF 香港（11/8）。"
  },
  {
    title: "中国国际大学生创新大赛（2026）· 国赛推荐节点（10/31）",
    type: "创业赛道",
    tags: ["B", "C", "D"],
    deadline: "2026-10-31",
    deadlineLabel: "推荐节点已过（各地须 10/31 前完成入围总决赛项目推荐；省赛 10/25 已过；国赛报名 9/25 已过；总决赛约 11 月·南京）",
    matchScore: 4,
    status: "已截止（等总决赛）",
    link: "https://cy.ncss.cn",
    note: "推荐节点已过约第3天。若已入围：盯学院总决赛评审/路演通知（约 11 月·南京）；未入围则转挑战杯校内选拔，别再等国赛系统。"
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
    note: "11/03 复核：Fall 2026 已关、Spring 约 12 月开放。立刻点 Express interest 填 EOI；兼职远程、含 Security 赛道，材料可复用 ERA/Pivotal 书面稿。"
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
    note: "下载 https://aka.ms/InternApplication，中英文简历发 MSRAih@microsoft.com 与 shun.zheng@microsoft.com，标题写「LLM Reasoning研究实习生」，注明可实习 ≥3 个月。"
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
    title: "上海人工智能实验室 · Agent算法 / 大模型&智能体安全 研究实习",
    type: "实验室实习",
    tags: ["C", "D"],
    deadline: "滚动招募（Agent 岗 + 攻防平台中心安全岗均开放）",
    deadlineLabel: "常年开放；要求本科高年级+一作或主要贡献者论文优先；安全岗每周≥3天、≥3个月",
    matchScore: 5,
    status: "开放中",
    link: "https://www.shlab.org.cn/joinus/detail/7677804403931728179",
    note: "安全岗直打 Agent Safety/Jailbreak/红队（https://www.shlab.org.cn/joinus/detail/7677804403931728179）；Agent 算法岗见 https://www.shlab.org.cn/joinus/detail/7674925567683250474。今天按匹配度优先投安全岗，邮件 comm@pjlab.org.cn，简历突出 AI Security/Agent 一作与可实习时长。"
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
    note: "含基础大模型/RL/reasoning/multi-agent/具身等。本周按毕业年份选应届或实习通道投递，邮件 seedcampus@bytedance.com 备询；简历突出 reasoning/安全/VLA 一作与挑战杯。"
  },
];
