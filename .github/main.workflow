workflow "New workflow" {
  on = "push"
  resolves = ["stefanoeb/jest-action"]
}

action "stefanoeb/jest-action" {
  uses = "stefanoeb/jest-action"
  args = "__tests__"
}
