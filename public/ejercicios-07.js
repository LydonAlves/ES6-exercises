// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce().

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const calculate = () => {
  const scores = exams.map((exam) => exam.score)
  const total = scores.reduce((acc, currentValue) => acc + currentValue)
  console.log(total)
}
calculate()

//? 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//? alumnos que esten aprobados usando la función .reduce().
//* imaginemos que se aprueba con un 6
const calculateScorePassed = () => {
  const passedStudents = exams.filter((exam) => exam.score >= 6)
  console.log(passedStudents)
  const studentScores = passedStudents.map((student) => student.score)
  const sumOfMarks = studentScores.reduce(
    (acc, currentValue) => acc + currentValue
  )
  console.log(sumOfMarks)
}
calculateScorePassed()

//? 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const calculateOverallAverage = () => {
  const examMarks = exams.map((exam) => exam.score)
  const examAverage =
    examMarks.reduce((acc, currentValue) => acc + currentValue) /
    examMarks.length
  console.log(examAverage)
}
calculateOverallAverage()
