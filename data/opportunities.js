// 机会数据源。人工维护版本 v1（2026-08-08 由助手首次调研整理）。
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
  }
];
