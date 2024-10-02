export type Require<T, K extends keyof T> = T
  & { [P in K]-?: T[P] };

// Same as `InstanceType` but for arrays of classes
export type InstanceTypes<T extends readonly unknown[]> = {
  [K in keyof T]: T[K] extends new (...args: any) => infer R ? R : never;
};
