workflow "New workflow" {
  on = "push"
  resolves = ["Running Test"]
}

action "Running Test" {
  uses = "stefanoeb/jest-action@master"
}
