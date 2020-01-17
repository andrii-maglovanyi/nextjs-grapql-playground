export enum Type {
  array,
  bigO,
  graph,
  linear,
  nonLinear,
  queue,
  stack,
  tree,
}

export const types = Object.keys(Type).filter(
  (key) => !isNaN(Number(Type[key]))
);
