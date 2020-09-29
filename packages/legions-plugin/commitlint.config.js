module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
        "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
        ]],
        // 'subject-full-stop': [0, 'never'],
        // 'subject-case': [0, 'never']
        // 'body-leading-blank': [1, 'always'], //body开始于空白行
        // 'body-tense': [1, 'always', ['present-imperative']], 
        // 'footer-leading-blank': [1, 'always'], //footer开始于空白行
        // 'footer-tense': [1, 'always', ['present-imperative']],
        // 'header-max-length': [2, 'always', 72],
        // 'scope-case': [2, 'always', 'lowerCase'], //scope小写
        // 'subject-empty': [2, 'never'], //subjec不t为空
        // 'subject-full-stop': [2, 'never', '.'], //subject结尾不加'.'
        // 'subject-tense': [1, 'always', ['present-imperative']], //以动词开头，使用第一人称现在时，比如change，而不是changed或changes
        // 'type-case': [2, 'always', 'lowerCase'], //type小写
        // 'type-empty': [2, 'never'], //type不为空
    }
  };
//   feat：新功能（feature）
// fix：修补bug
// docs：文档（documentation）
// style： 格式（不影响代码运行的变动）
// refactor：重构（即不是新增功能，也不是修改bug的代码变动）
// test：增加测试
// chore：构建过程或辅助工具的变动