module.exports = {
  extends: "semantic-release-monorepo",
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
    }],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md"],
    }],
    ['@semantic-release/npm', {
      "pkgRoot": "dist"
    }]
  ],
};
