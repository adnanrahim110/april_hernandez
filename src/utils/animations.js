/**
 * @param {object} config
 * @param {number} [config.distance=20]
 * @param {number} [config.scale=0.5]
 * @param {number} [config.duration=0.6]
 * @param {number} [config.delay=0]
 * @param {string} [config.ease="easeOut"]
 */
export function fadeInUp({
  distance = 20,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
} = {}) {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
}

export function fadeInLeft({
  distance = 20,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
} = {}) {
  return {
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease },
    },
  };
}

export function fadeInRight({
  distance = 20,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
} = {}) {
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease },
    },
  };
}
export function fadeOut({
  scale = 0.5,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
} = {}) {
  return {
    hidden: { opacity: 0, scale: scale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease },
    },
  };
}
