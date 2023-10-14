export const getCurrentTime = (runtime: number) => ((performance.now() - runtime) / 1000).toFixed(2);
