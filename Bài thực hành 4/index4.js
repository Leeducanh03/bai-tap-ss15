let input = prompt("Nhập vào chuỗi kí tự bất kì");
function isPalindrome(str) {
    // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
    str = str.toLowerCase().replace(/[a-ZA-Z0-9]/g, "");

    // Đảo ngược chuỗi
    let reversed = str.split().reverse().join("");

  // So sánh chuỗi gốc với chuỗi đảo ngược
  return str === reversed;
}