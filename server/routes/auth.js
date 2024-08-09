const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Endpoint để đăng ký tài khoản
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Người dùng đã tồn tại' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 12);

    // Tạo người dùng mới
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // Tạo token JWT (tuỳ chọn)
    const token = jwt.sign({ id: newUser._id }, 'secretkey', { expiresIn: '1h' });

    res.status(201).json({ token, userId: newUser._id, username: newUser.username });
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
