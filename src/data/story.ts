export type StoryScene = {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  source: string;
};

export const story: StoryScene[] = [
  { id: "opening", chapter: "01 · Khởi đầu", title: "Một cuộc gặp nhỏ", subtitle: "Có những cuộc gặp gỡ nhỏ có thể thay đổi cả cuộc đời của hai người.", source: "SRC-001: relationship timeline / Hina narrative role" },
  { id: "first-language", chapter: "01 · Khởi đầu", title: "Hai ngôn ngữ", subtitle: "Họ quan tâm theo những cách khác nhau, và đã có lúc bỏ lỡ tín hiệu của nhau.", source: "SRC-001: Two love languages" },
  { id: "second-chance", chapter: "02 · Trở lại", title: "Một cơ hội nữa", subtitle: "Sau một khoảng thời gian, họ đã cho nhau thêm một cơ hội để hiểu nhau.", source: "SRC-001: 2023 reunion" },
  { id: "ordinary-days", chapter: "03 · Until Sunrise", title: "Những ngày bình thường", subtitle: "Một lời chúc ngủ ngon. Một cuộc gọi. Một người vẫn ở đó. Những điều bình thường ấy không hề nhỏ.", source: "SRC-001: ordinary days" },
  { id: "conflict", chapter: "04 · Khi đau", title: "Không có người thắng", subtitle: "Khi bị tổn thương, một người muốn rời đi. Một người cố ở lại. Cả hai đều đang sợ hãi.", source: "SRC-001 and SRC-002: relationship conflict" },
  { id: "listening", chapter: "05 · Lắng nghe", title: "Đứng cùng một phía", subtitle: "Có những lúc điều cần nhất không phải là một lời giải thích đúng, mà là cảm giác hai người vẫn là một đội.", source: "SRC-001: relationship recognition" },
  { id: "sunrise", chapter: "06 · Gửi lại", title: "Until Sunrise", subtitle: "Yêu là sau mỗi lần làm nhau đau, vẫn đủ can đảm để hiểu nhau thêm một chút.", source: "SRC-001: epilogue / approved 2026 open endpoint" }
];
