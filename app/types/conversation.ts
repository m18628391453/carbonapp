export interface Attachment {
    id: string;
    name: string;
    size: number;
    type: string;
    extension: string;
    upload_file_id?: string; // 上传成功后由服务器返回的ID
    preview_url?: string;
    file?: File; // 本地文件对象，用于上传
    status: 'pending' | 'uploading' | 'finished' | 'error'; // 上传状态
    error?: string; // 错误信息
    mime_type?: string;
    transfer_method?: string;
    progress?: number;
}

export interface MessageVersion {
    content: string;
    message_id: string;
    feedback: 'like' | 'dislike' | null;
    files?: Attachment[];
}

export interface ChatMessage {
    id: string | number;
    content: string;
    sender: 'user' | 'ai';
    message_id?: string;
    conversation_id?: string;
    versions?: MessageVersion[];
    attachments?: Attachment[];
    currentIndex?: number;
    isEditing?: boolean;
    created_at?: number;
    progress?: number;
}

export interface ThinkingStatus {
    isActive: boolean;
    currentStep?: string;
}

export interface Conversation {
    id: string;
    name: string;
    inputs: Record<string, any>;
    status: 'normal' | 'archived';
    created_at: number;
    updated_at: number;
    user_id: string;
    message_count: number;
    app_id?: string;
    introduction?: string;
    summary?: string;
}

export type CardType = 'link' | 'video' | 'audio' | 'image';

export interface SmartCardData {
    type: CardType | string;
    title: string;
    url: string;
    desc?: string;
    cover?: string;
}

export const extractBracketText = (text: string): string => {
    const match = text.match(/【([^】]+)】/);
    return match ? match[1] : text;
};

export const detectResourceType = (url: string): CardType => {
    const videoExts = ['.mp4', '.webm', '.ogg', '.m3u8'];
    const audioExts = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
    const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
    const lowerUrl = url.toLowerCase();
    if (videoExts.some(ext => lowerUrl.includes(ext))) return 'video';
    if (audioExts.some(ext => lowerUrl.includes(ext))) return 'audio';
    if (imageExts.some(ext => lowerUrl.includes(ext))) return 'image';
    return 'link';
};

export interface ChatCompletionResponse {
    event: string;
    task_id: string;
    id: string;
    message_id: string;
    conversation_id: string;
    mode: string;
    answer: string;
    metadata: any;
    usage?: any;
    retriever_resources?: any[];
    created_at: number;
}

export interface ChatRequest {
    query: string;
    response_mode?: 'streaming' | 'blocking';
    conversation_id?: string;
    user?: string;
    token?: string;
    inputs: Record<string, any>;
    files?: any[] | undefined;
    auto_generate_name?: boolean;
    workflow_id?: string;
    trace_id?: string;
}

export interface ConversationResponse {
    data: Conversation[];
    has_more: boolean;
    limit: number;
    total: number;
}

export interface MessageResponse {
    data: ChatMessage[];
    has_more: boolean;
    limit: number;
    total: number;
}

export interface FileUploadResponse {
    id: string;
    name: string;
    size: number;
    extension: string;
    mime_type: string;
    created_by: string;
    created_at: number;
    url?: string;
}

export interface ChartData {
    option: any; 
    type: 'line' | 'bar' | 'pie' | 'other';
    rawOption?: any;
  }

  // 用户信息类型
export interface UserInfo {
    name: string;
    positionName: string;
    deptName: string;
    orgName: string;
  }
  
  // 会话分类类型
export type ConversationCategory = 'pinned' | 'today' | 'last7days' | 'last30days' | string;
