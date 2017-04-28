class Issues {
  constructor (issues) {
    this.issues = issues;
  }

  // return an array containing each issues `id`
  get ids() {
  }

  // return the total number of issues
  get numberOfIssues() {
  }

  // return an array containing each issues `title`
  get titles() {
  }

  // return an array containing the `login` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get users() {
  }

  // return an array containing the `avatar_url` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get avatars() {
  }

  // return an array containing the `id` property of the issue
  // for each issue with an `assignee` property that is not `null`
  get withAssignee() {
  }

  // return an array containing the `id` property of the issue
  //  for each issue with a `pull_request` property that is not `null`
  get withPullRequest() {
  }

  // return the total number of comments for all the issues, based on the
  // `comments` property
  get totalComments() {
  }

  // Return the `login` property of the `user` property for the `user` that has
  // submitted the most issues
  get mostActiveUser() {
  }
}

module.exports = Issues;
