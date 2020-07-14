const TYPES = require("./types");
const axios = require("axios");

const getStudents = (students) => ({
  type: TYPES.GET_STUDENTS,
  students,
});
const getStudentCount = (count) => ({
  type: TYPES.GET_STUDENT_COUNT,
  count,
});
const getClassesCount = (count) => ({
  type: TYPES.GET_CLASSES_COUNT,
  count,
});
const getClasses = (classes) => ({
  type: TYPES.GET_CLASSES,
  classes,
});
const getHouses = (houses) => ({
  type: TYPES.GET_HOUSES,
  houses,
});
const getClassesStudents = (classStudents) => ({
  type: TYPES.GET_CLASSES_STUDENTS,
  classStudents,
});
const addStudent = (student) => ({
  type: TYPES.ADD_STUDENT,
  student,
});
const addClass = (classs) => ({
  type: TYPES.ADD_CLASS,
  classs,
});

const postClassesStudents = (classStudentObj) => {
  return async (dispatch) => {
    const classStudent = (
      await axios.post("/api/classes_students", classStudentObj)
    ).data.item;
    return;
  };
};
const fetchStudents = (where = "", page = 1, size = 10) => {
  return async (dispatch) => {
    const { count, rows } = (
      await axios.get(`/api/students?filter=${where}&page=${page}&size=${size}`)
    ).data;
    dispatch(getStudentCount(count));
    return dispatch(getStudents(rows));
  };
};
const postStudents = (studentObj, count) => {
  return async (dispatch) => {
    const student = (await axios.post(`/api/students`, studentObj)).data.item;
    dispatch(getStudentCount(count));
    return dispatch(addStudent(student));
  };
};
const postClasses = (classObj, count) => {
  return async (dispatch) => {
    const classs = (await axios.post(`/api/classes`, classObj)).data.item;
    dispatch(getClassesCount(count));
    return dispatch(addClass(classs));
  };
};
const fetchClasses = (page = 1, size = 3) => {
  return async (dispatch) => {
    const { count, rows } = (
      await axios.get(`/api/classes?page=${page}&size=${size}`)
    ).data;
    dispatch(getClassesCount(count));
    return dispatch(getClasses(rows));
  };
};
const fetchClassesStudents = (id) => {
  return async (dispatch) => {
    const student_classes = (await axios.get(`/api/classes/${id}`)).data;
    return dispatch(getClassesStudents(student_classes));
  };
};
const fetchStudentsClasses = (id) => {
  return async (dispatch) => {
    const student_classes = (await axios.get(`/api/students/${id}`)).data;
    return dispatch(getClassesStudents(student_classes));
  };
};
const fetchHouses = () => {
  return async (dispatch) => {
    const { Houses } = (await axios.get("/api/all/houses")).data;
    return dispatch(getHouses(Houses));
  };
};
const setFirstName = (firstName) => ({
  type: TYPES.SET_FIRST_NAME,
  firstName,
});
const setLastName = (lastName) => ({
  type: TYPES.SET_LAST_NAME,
  lastName,
});
const setEmail = (email) => ({
  type: TYPES.SET_EMAIL,
  email,
});
const setGrade = (grade) => ({
  type: TYPES.SET_GRADE,
  grade,
});
const setStudent = (student) => ({
  type: TYPES.SET_STUDENT,
  student,
});
const setClassName = (className) => ({
  type: TYPES.SET_CLASS_NAME,
  className,
});
const setClassImage = (classImage) => ({
  type: TYPES.SET_CLASS_IMAGE,
  classImage,
});
const setClass = (classs) => ({
  type: TYPES.SET_CLASS,
  classs,
});
const clearInput = () => ({
  type: TYPES.CLEAR_INPUT,
});
const setPage = (page) => ({
  type: TYPES.SET_PAGE,
  page,
});
const getAllStudents = (students) => ({
  type: TYPES.GET_ALL_STUDENTS,
  students,
});
const getAllClasses = (classes) => ({
  type: TYPES.GET_ALL_CLASSES,
  classes,
});
const getFilter = (filter) => ({
  type: TYPES.GET_FILTER,
  filter,
});
const setToggle = (toggle) => ({
  type: TYPES.SET_TOGGLE,
  toggle,
});
const setHouse = (house) => ({
    type:TYPES.SET_HOUSE,
    house
})

module.exports = {
  getStudents,
  getClasses,
  getHouses,
  addStudent,
  addClass,
  fetchStudents,
  fetchHouses,
  fetchClasses,
  postStudents,
  postClasses,
  getClassesStudents,
  fetchClassesStudents,
  setFirstName,
  setLastName,
  setEmail,
  setGrade,
  setStudent,
  setClassName,
  setClassImage,
  setClass,
  clearInput,
  postClassesStudents,
  fetchStudentsClasses,
  setPage,
  getAllStudents,
  getAllClasses,
  getFilter,
  setToggle,
  setHouse
};
