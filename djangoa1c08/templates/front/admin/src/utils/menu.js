const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"项目分类","menuJump":"列表","tableName":"xiangmufenlei"}],"menu":"项目分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","修改","删除","审核","报表"],"menu":"学生活动申报","menuJump":"列表","tableName":"xueshenghuodongshenbao"}],"menu":"学生活动申报管理"},{"child":[{"buttons":["查看","修改","删除","审核","报表"],"menu":"社会实践活动","menuJump":"列表","tableName":"shehuishijianhuodong"}],"menu":"社会实践活动管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"活动报名申请","menuJump":"列表","tableName":"huodongbaomingshenqing"}],"menu":"活动报名申请管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","报名"],"menu":"社会实践活动列表","menuJump":"列表","tableName":"shehuishijianhuodong"}],"menu":"社会实践活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生活动申报","menuJump":"列表","tableName":"xueshenghuodongshenbao"}],"menu":"学生活动申报管理"},{"child":[{"buttons":["查看","删除"],"menu":"活动报名申请","menuJump":"列表","tableName":"huodongbaomingshenqing"}],"menu":"活动报名申请管理"}],"frontMenu":[{"child":[{"buttons":["查看","报名"],"menu":"社会实践活动列表","menuJump":"列表","tableName":"shehuishijianhuodong"}],"menu":"社会实践活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"学生活动申报","menuJump":"列表","tableName":"xueshenghuodongshenbao"}],"menu":"学生活动申报管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"社会实践活动","menuJump":"列表","tableName":"shehuishijianhuodong"}],"menu":"社会实践活动管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"活动报名申请","menuJump":"列表","tableName":"huodongbaomingshenqing"}],"menu":"活动报名申请管理"}],"frontMenu":[{"child":[{"buttons":["查看","报名"],"menu":"社会实践活动列表","menuJump":"列表","tableName":"shehuishijianhuodong"}],"menu":"社会实践活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]
    }
}
export default menu;