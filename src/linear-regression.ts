interface TrainingSample {
  x: number
  y: number
}

interface HypothesisParams {
  o1: number
  o2: number
}

export const hypothesis = ({ o1, o2 }: HypothesisParams) => (x: number) => o1 + o2 * x

export const gradientDescent = (a: number, trainingSamples: TrainingSample[], o1 = 0, o2 = 0, fractionDigits = 2): HypothesisParams => {
  const gds = gradientDescentStep(a, trainingSamples)
  let params = { o1, o2 }
  while (true) {
    const newParams = gds(params)
    if (newParams.o1 === params.o1 && newParams.o2 === params.o2) {
      break;
    }
    params = newParams
  }
  return {
    o1: +params.o1.toFixed(fractionDigits),
    o2: +params.o2.toFixed(fractionDigits)
  };
}

const gradientDescentStep = (a: number, trainingSamples: TrainingSample[]) => ({ o1, o2 }: HypothesisParams) => {
  const m = trainingSamples.length;
  const h = hypothesis({ o1, o2 })
  const do1 = (1 / m) * trainingSamples.reduce((sum, { x, y }) => sum + h(x) - y, 0)
  const do2 = (1 / m) * trainingSamples.reduce((sum, { x, y }) => sum + (h(x) - y) * x, 0)
  return {
    o1: o1 - a * do1,
    o2: o2 - a * do2
  }
}

