const fs = require('fs')
const { userInfo } = require('os')

let uid = 1

function readFile(path, preData) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject()
            }

            const resData = JSON.parse(data)

            resolve({
                preData,
                resData
            })
        })
    })
}

readFile('./data/user.json')
    .then((res) => {
        const { resData } = res;
        userInfo = resData.filter(item => item.id === uid)[0]

        return readFile('./data/userCourse.json', userInfo);
    })
    .then((res) => {
        const { prevData, resData } = res;
        userId = prevData.id,
            userCourse = resData.filter(item => item.uid === userId)[0];
        
        return readFile('./data/course.json', {
            username: prevData.username,
            userCourse
        });
    })
    .then((res) => {
        const { prevData, resData } = res;
        userCourse = prevData.userCourse.course

        let _arr = [];

        userCourses.map(id => {
                resData.map((item) => {
                    if (item.id === id) {
                        _arr.push(item)
                    }
                })
        })
        const userCourseInfo = {
            username: prevData.username,
            course: _arr
        }
        fs.writeFileSync(`./data/jing1.json`,JSON.stringify(userCourseInfo))
})