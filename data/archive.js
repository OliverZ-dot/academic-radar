// 已过期超过 7 天的机会归档。主列表保持精简，此处仅供回溯查阅。
const ARCHIVE_UPDATED = "2026-08-20";

const ARCHIVED_OPPORTUNITIES = [
  {
    title: "AI Alignment Foundation（AIAF）Fellowship 2026 · 与 AE Studio 合作",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "2026-08-17（AoE）",
    deadlineLabel: "申请已截止",
    matchScore: 5,
    status: "已截止",
    link: "https://aialignmentfoundation.org/fellowship",
    note: "申请已于 8/17 AoE 截止。若已提交，等待结果；若错过，把 CV+短问卷+视频脚本存成模板，关注下一轮或转向已开放的 MATS Winter 2027（9/6）与 ERA:AI（9/13）。",
    archivedAt: "2026-08-20",
    archiveReason: "申请截止（8/17）已过，无可执行动作；为主列表腾出名额给 MATS 完整开放与腾讯青云等更新"
  },
  {
    title: "Apart Research · Digital Minds Research Sprint",
    type: "黑客松/演讲",
    tags: ["B", "C"],
    deadline: "2026-08-14 至 2026-08-16",
    deadlineLabel: "活动已结束",
    matchScore: 3,
    status: "已结束",
    link: "https://apartresearch.com/sprints/digital-minds-research-sprint-2026-08-14-to-2026-08-16",
    note: "活动已于 8/14–8/16 举办完毕。若已参赛，整理产出并跟进 Apart Fellowship 邀请；下一次对口场是 9/11–9/13 Incident Response Sprint。",
    archivedAt: "2026-08-17",
    archiveReason: "活动已于 2026-08-16 结束；为给更高优先级新机会腾出主列表名额提前归档"
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
    note: "错过了 2026 届，设一个日历提醒在 2027 年 3 月前后主动查一次官网，用你 2026 年发表/在投的论文去申报。",
    archivedAt: "2026-08-08",
    archiveReason: "2026 届截止日已过超过 7 天，主列表仅保留待下一届开放时再移回"
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
    note: "全额资助、5个月、伯克利/伦敦线下的 AI safety fellowship。先填官网 expression of interest 表单，下次开放能第一时间收到通知；重新开放后应立即移回主列表。",
    archivedAt: "2026-08-08",
    archiveReason: "申请截止（5/3）已过超过 7 天，等待下一轮开放"
  },
  {
    title: "Anthropic Fellows Program（Nov 2026 cohort）",
    type: "导师匹配 Mentorship",
    tags: ["A", "C", "D"],
    deadline: "上一轮（Nov 2026 cohort）已于 2026-07-26 截止；多轮滚动，下一轮待公布",
    deadlineLabel: "本轮已截止，持续 watch 下一轮",
    matchScore: 4,
    status: "本轮已截止",
    link: "https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/",
    note: "本科学历即可、不强制 PhD，4 个月全职+周薪+算力，方向含 AI safety/security；硬约束是须在美/英/加有工作授权。把简历与研究陈述存成可复用模板，下轮开放 48 小时内投并移回主列表。",
    archivedAt: "2026-08-09",
    archiveReason: "申请截止（7/26）已过超过 7 天，等待下一轮开放后移回主列表"
  }
];
