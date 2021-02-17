const COLOR = {
  GREEN: {
    name: 'Aquamarine',
    // name: 'Green',
    // color: 'rgba(0, 245, 127, 0.25)'
    color: '#20bfa9'
  },
  LAVENDER: {
    // name: 'Lavender',
    name: 'Peach',
    // color: 'rgba(147, 78, 244, 0.25)'
    color: '#c37fbc'
  },
  YELLOW: {
    // name: 'Yellow',
    name: 'Coral',
    // color: 'rgba(255, 255, 0, 0.25)'
    color: '#feb95a'
  },
  RED: {
    name: 'Salmon',
    // color: 'rgba(242, 82, 54, 0.25)'
    color: '#ee786c'
  },
  BLUE: {
    name: 'Blue',
    // color: 'rgba(25, 64, 240, 0.25)'
    color: 'rgb(16,101,205)'
  }
}

const COLOR_VALUE = Object.values(COLOR)
const COLOR_KEYS = Object.keys(COLOR)

export default COLOR
export { COLOR, COLOR_VALUE, COLOR_KEYS }
