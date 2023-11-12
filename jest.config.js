module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["node_modules/(?!axios)"],
},
{
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}