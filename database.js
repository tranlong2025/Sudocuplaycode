/**
 * DATABASE - NƠI QUẢN LÝ TẤT CẢ ĐỀ THI SUDOKU
 * Bạn có thể thêm mã đề mới theo cấu trúc:
 * "MÃ_ĐỀ": { 
 * grid: [[9 hàng, mỗi hàng 9 số]], 
 * pdf: "link_file_pdf" 
 * }
 */

const QUIZ_DATABASE = {
    "DE001": {
        grid: [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ],
        pdf: "https://www.orimi.com/pdf-test.pdf"
    },
    "HOA11_C4": {
        grid: [
            [0,0,0,2,6,0,7,0,1],
            [6,8,0,0,7,0,0,9,0],
            [1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0],
            [0,0,4,6,0,2,9,0,0],
            [0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4],
            [0,4,0,0,5,0,0,3,6],
            [7,0,3,0,1,8,0,0,0]
        ],
        pdf: "https://pdfobject.com/pdf/sample.pdf"
    }
    // Thêm các mã đề khác bên dưới dấu phẩy cuối cùng này
};

// Xuất dữ liệu để index.html có thể đọc được (dành cho môi trường trình duyệt)
window.QUIZ_DATABASE = QUIZ_DATABASE;
