let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { console.log('错误') }

export default {
    city: defaultCity
}