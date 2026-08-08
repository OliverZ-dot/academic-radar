# 学术新星机会雷达（Academic Opportunity Radar）

这是一个个人"学术机会追踪看板"，由 AI 助手协助搜集整理，网页地址见 GitHub Pages（仓库 Settings → Pages 中查看）。

- `index.html`：可视化看板页面，直接打开即可查看，按截止日期紧迫程度自动排序。
- `data/opportunities.js`：数据源，每条机会包含类型、标签（A学术产出/B公开曝光/C资源网络/D履历里程碑）、截止日期、匹配度、行动建议。

## 如何更新数据

在 Cursor 中打开这个仓库，让助手："搜索最新的机会并更新 opportunities.js"，助手会：
1. 按下面**固定的 6 类检索范围**（每次都要覆盖，不能只挑一两类）搜索与 LLM reasoning / AI Security / Embodied AI / CV 相关的新机会：
   - 学术会议 & workshop（论文/talk/travel grant）
   - Fellowship / 奖学金 / 科研奖项
   - 竞赛 & 创业赛道
   - 演讲 / 论坛 / 曝光渠道（含黑客松、开放麦）
   - 导师匹配 / Fellowship 项目（如 SPAR、MATS 这类结构化导师匹配）
   - 知名实验室 / 机构暑研与实习（不限于大厂）
2. 按 A/B/C/D 标签分类、评估匹配度、写出具体行动建议；
3. 更新 `data/opportunities.js` 并提交推送，使网页自动刷新。

详细覆盖范围说明见 `00_助手角色定位与工作计划.md` 第 4 节。

## 自动化（可选）

如果配置了 Cursor Automation 定时任务，可以让它每天/每周自动执行上述更新流程，并在仓库中开一个 issue 作为"今日简报"（GitHub 会对仓库所有者发送邮件通知，等同于免配置的"每日邮件提醒"）。

参见工作区中的 `00_助手角色定位与工作计划.md` 了解整体规划。
