/**
 * Scene 001 Data Configuration
 * SCN-001 — The Opening Memory Space
 * Authority: Approved Knowledge Layer & Scene_001_Specification.md
 */

export const SCENE_001_DATA = {
  id: "SCN-001",
  name: "The Opening Memory Space",
  narrativeScope: "2026 Present-Tense Framing",
  
  anchors: [
    {
      id: "ANCHOR_LAMP",
      type: "light",
      label: "Đèn bàn",
      hint: "Ánh sáng dịu nhẹ của những đêm thức muộn",
      detail: "Chiếc đèn bàn tỏa ánh sáng ấm áp, nơi ghi dấu những buổi tối trò chuyện thầm lặng."
    },
    {
      id: "ANCHOR_WINDOW",
      type: "atmosphere",
      label: "Khung cửa sổ hoàng hôn",
      hint: "Lắng nghe tiếng mưa chiều",
      detail: "Bầu trời hoàng hôn dần chuyển sang đêm. Tiếng mưa rơi khe khẽ bên ngoài ô cửa."
    },
    {
      id: "ANCHOR_HEADSET",
      type: "object",
      label: "Tai nghe gaming",
      hint: "Những cuộc gọi dài qua đêm",
      detail: "Chiếc tai nghe từng đồng hành cùng những buổi tối chơi game và trò chuyện cùng nhau."
    },
    {
      id: "ANCHOR_MAIN_OBJ",
      type: "memory_primary",
      label: "Vật thể ký ức",
      hint: "Chạm để mở lại một khoảng ký ức",
      detail: "Một chiếc điện thoại phát ra ánh sáng dịu. Nơi lưu giữ những dòng tin nhắn và cuộc gọi kết nối hai người."
    }
  ],

  memoryPrompts: {
    revealText: "Có những ký ức không nên chỉ tồn tại trong quá khứ.",
    subText: "Dũng và Ngọc Anh — 2026. Một chặng đường học cách lắng nghe và thấu hiểu hơn sau những tổn thương.",
    completionText: "Bạn đã chạm vào phần đầu tiên của ký ức. Hành trình đang tiếp tục."
  }
};
