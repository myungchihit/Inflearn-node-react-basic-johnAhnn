const mongoose = require('mongoose');

/*
 * user model 및 schema 생성
 */

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String, 
        trim: true, // 공간 없애기
        unique: 1  // 중복 X
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {  // 권한
        type: Number,
        default: 0
    },
    image: String,
    token:{  // 유효성 검사시
        type: String
    },
    tokenExp:{ // token 유효성 기간
        type: Number
    }
});

const User = moongose.model('User' , userSchema);
module.exports = { User };

// git 초기화
git init

// git 상태 보기
git status

// staging area에 add올라가 있는거 제거 (node_modules는 예시고 저기다 삭제시킬 파일이나 폴더 명 입력)
git rom --cached node_modules -r
