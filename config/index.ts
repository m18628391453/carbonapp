// 基础配置表
export const BASE_CONFIG = {
    BACKEND: {},
    API_KEY: {},
    HOME_TIP_WORDS: [],
    DEFAULT_ENV: 'ENV_PROD',
    FILE_MAX_COUNT: 1, // 附件最大上传个数
    MAX_TOP_RECORD_COUNT: 3, // 最大置顶条数
    SIDE_MAX_RQST_COUNT: 100, // 边侧栏单次最大请求PageSize
    SIDEBAR_WAIT_TIME_COUNT: 100, // 获取到边侧栏的历史会话记录后等待显示时间
    BTN_HIDDEN_TIME: 3000, // 多媒体渲染组件的按钮默认隐藏时间
    LOCK_DURATION: 300, // 前端上锁毫秒数
    IS_SHOW_AVATOR: false,
    IS_REPLY_BORDER: false,
    CACHED_CONVERSATIONS_KEY: 'cached_conversations',
    CACHED_PINNED_IDS_KEY: 'cached_pinned_ids',
    TITLE: 'Nextalk',
    DESCRIPT: 'AI智能会话系统，基于 LLM 的会话系统',
    KEY_WORDS: 'AI,Chat,助手,智能对话',
    EMPTY_REPLAY: '刚才有点忙，请再试一下呢。',
}