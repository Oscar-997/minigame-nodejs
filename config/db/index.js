const mongoose = require('mongoose') // import thư viện mongoose để quản lý mongodb vs nodejs

async function connect() {// tạo 1 hàm bất đồng bộ async tên connect
    try {// connect mongoose với địa chỉ ib của mongodb để có thể quản lý và xuất dữ liệu
        await mongoose.connect('mongodb+srv://minigame:sleyvIjSnu6uHyoe@cluster0.tuexl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');// thành công in ra 
    } catch (error) {
        console.log('Connect failure!!!');// thất bại in ra ở terminal
    }
}

module.exports = { connect }