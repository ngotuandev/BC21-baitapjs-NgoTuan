/**
 * Nhập vào 2 ký số là 65
 * 
 * Lấy ký số chia lấy dư cho 10 là ra số hàng đơn vị là 5
 * Lấy ký số chia cho 10 Mathfloor là ra số hàng chục 6
 * Tổng số hàng đơn vị và số hàng chục là ra tổng ký số
 * 
 * Tổng 2 ký số là 11
 */
var kySo;
    kySo=65;
    soHangDV=65%10;
    soHangChuc=Math.floor(65/10);
    tongKySo=soHangDV+soHangChuc;
    console.log('Tổng ký số'+'  '+tongKySo);