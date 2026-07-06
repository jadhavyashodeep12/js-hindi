const course={
    courseName:"Js in hindi",
    price:"799",
    courseInstructor:"Yash"
}
// destructuring of objects:
// const {courseInstructor}=course
// console.log(courseInstructor)

const {courseInstructor:Instructor}=course
console.log(Instructor)

// this is JSON formt of data come from API . it may show some error inside the bracket but ignore it .it is correct syntax.
// {
//     "name":"Yash",
//     "coursename":"Js in hindi"
//     "price":"free"
// }

