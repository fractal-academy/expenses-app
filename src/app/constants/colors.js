const COLOR = {
  GREEN: {
    name: 'Green',
    color: 'rgba(0, 245, 127, 0.25)'
  },
  LAVENDER: {
    name: 'Lavender',
    color: 'rgba(147, 78, 244, 0.25)'
  },
  YELLOW: {
    name: 'Yellow',
    color: 'rgba(255, 255, 0, 0.25)'
  },
  RED: {
    name: 'Red',
    color: 'rgba(242, 82, 54, 0.25)'
  },
  BLUE: {
    name: 'Blue',
    color: 'rgba(25, 64, 240, 0.25)'
  }
}

const COLOR_VALUE = Object.values(COLOR)
const COLOR_KEYS = Object.keys(COLOR)

export default COLOR
export { COLOR, COLOR_VALUE, COLOR_KEYS }
