import { gradientDescent } from "./linear-regression";

describe('gradientDescent', () => {
  it('should find params {o1: 0, o2: 1}', () => {
    const samples = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
    ];
    expect(gradientDescent(0.2, samples)).toEqual({ o1: 0, o2: 1 })
  })

  it('should find params {o1: 0, o2: 0.5}', () => {
    const samples = [
      { x: 1, y: 0.5 },
      { x: 2, y: 1 },
      { x: 3, y: 1.5 },
    ];
    expect(gradientDescent(0.2, samples)).toEqual({ o1: 0, o2: 0.5 })
  })

  it('should find params {o1: 1, o2: 1}', () => {
    const samples = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
    ];
    expect(gradientDescent(0.2, samples)).toEqual({ o1: 1, o2: 1 })
  })

  it('should find params {o1: -0, o2: -0.5}', () => {
    const samples = [
      { x: 1, y: -0.5 },
      { x: 2, y: -1 },
      { x: 3, y: -1.5 },
    ];
    expect(gradientDescent(0.2, samples)).toEqual({ o1: -0, o2: -0.5 })
  })
});