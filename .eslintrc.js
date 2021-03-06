module.exports = {
    "parserOptions": {
        "ecmaVersion": 5
    },
    "env": {
        "node": true,
        "commonjs": true
    },
    "globals": {

    },
    "rules": {
        "strict": [1, "function"],                // 要求严格模式

        // 警告
        "quotes": [1, "double"],                  // 建议使用单引号
        "quote-props": 0,                         // 对象字面量属性名的风格
        "no-inner-declarations": [1, "both"],     // 不建议在{}代码块内部声明变量或函数
        "no-case-declarations": 1,                // 禁止在case段落中定义块级作用域变量
        "no-extra-semi": 2,                       // 多余的分号
        "no-extra-parens": 0,                     // 多余的括号,允许因为 no-cond-assign="except-parens"
        "no-empty": [1, { "allowEmptyCatch": true }], // 空代码块
        "no-use-before-define": [0, { "functions": false, "classes": true }],    // 使用前未定义
        // "complexity": [1, 10],                    // 圈复杂度大于10 警告
        "no-console": 1,                          // 不允许有console
        "no-debugger": 2,                         // debugger 调试代码未删除
        "no-dupe-args": 2,                        // 参数重复

        // 常见错误
        "semi": 2,                                // 要求分号
        "no-unexpected-multiline": 2,             // 行尾缺少分号可能导致一些意外情况
        "comma-dangle": [2, "never"],             // 定义数组或对象最后多余的逗号
        "no-cond-assign": [2, "except-parens"],   // 条件语句中禁止赋值操作,除非使用括号包裹
        "no-alert": 1,                            // 不允许有alert
        "no-caller": 0,                           // 不允许使用arguments.caller和arguments.callee,影响脚本解析器的性能优化
        "no-constant-condition": 2,               // 常量作为条件
        "no-dupe-keys": 2,                        // 对象属性重复
        "no-duplicate-case": 2,                   // case重复
        "no-empty-character-class": 2,            // 正则无法匹配任何值
        "no-extra-boolean-cast": 2,               // 多余的感叹号转布尔型
        // "no-extra-semi": 2,                       // 多余的分号
        "no-invalid-regexp": 2,                   // 无效的正则
        "no-func-assign": 2,                      // 函数被赋值
        "valid-typeof": 2,                        // 无效的类型判断
        "no-unreachable": 1,                      // 不可能执行到的代码
        "no-sparse-arrays": 2,                    // 数组中多出逗号
        "no-shadow-restricted-names": 2,          // 关键词与命名冲突
        "no-undef": 2,                            // 不允许使用未定义的变量
        "no-unused-vars": 1,                      // 变量定义后未使用
        "no-native-reassign": 2,                  // 禁止覆盖原生对象
        "no-obj-calls": 2,                        // 禁止将Math和JSON作为函数调用
        "no-regex-spaces": 2,                     // 禁止正则表达式中出现多个空格
        "no-irregular-whitespace": 2,             // 禁止异常的空白符出现在字符串和正则之外
        "no-negated-in-lhs": 2,                   // 禁止有歧义的in运算， if (!x in obj) {..}
        "no-unsafe-finally": 2,                   // 禁止在finally段落中出现流程控制语句
        "use-isnan": 2,                           // 要求使用isNaN()来判断NaN

        // 代码风格优化
        "valid-jsdoc": 0,                         // 强制使用符合JSDoc规范的注释
        "semi-spacing": [1, { "before": false, "after": true }], // 要求分号后有空格
        "no-multi-spaces": 1,                     // 不允许多个空格
        "key-spacing": [1, { "beforeColon": false, "afterColon": true }], // object直接量建议写法 : 后一个空格签名留空格
        "comma-spacing": [1, { "before": false, "after": true }], // 逗号后面跟空格
        "eqeqeq": 1,                              // 用全等比较和全等不比较最佳实践
        "guard-for-in": 1,                        // 在for-in循环中使用hasOwnProperty检查是最佳实践
        "no-empty-function": 1,                   // 不允许空函数体的函数
        "no-eq-null": 2,                          // 使用严格比较来判断是否===null,!==null
        "no-eval": 2,                             // eval是邪恶的
        "no-implied-eval": 2,                     // 禁用eval类似的用法
        "no-extra-bind": 1,                       // 不允许不必要的bind调用
        "no-fallthrough": 1,                      // 禁止case表达式的穿透（缺少break）
        "no-iterator": 2,                         // 禁止使用__iterator__属性
        "no-proto": 2,                            // 不适用__proto__属性
        "no-loop-func": 2,                        // 禁止在循环体中定义函数
        "no-new-func": 1,                         // 禁止new Function(...) 写法
        "no-lone-blocks": 1,                      // 禁止不必要的嵌套块级作用域
        "no-labels": 1,                           // 无用的标记(如switch和for)
        "block-scoped-var": 1,                    // 变量定义后未使用
        "dot-location": [2, "property"],          // 换行调用对象方法  点操作符应写在行首
        "dot-notation": 1,                        // 优先使用.来调用对象的属性而不是中括号
        "no-extend-native": 0,                    // 禁止扩展原生对象
        "no-floating-decimal": 0,                 // 浮点型需要写全 禁止.1 或 2.写法
        "no-self-compare": 2,                     // 不允与自己比较作为条件
        "no-sequences": 2,                        // 禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 0,                    // 禁止抛出一个直接量 应是Error对象
        "no-return-assign": [0, "always"],        // 不允return时有赋值操作
        "no-redeclare": [2, { "builtinGlobals": true }], // 不允许重复声明
        "no-unused-expressions": [1, { "allowShortCircuit": true, "allowTernary": true }], // 未使用的表达式
        "no-useless-call": 1,                     // 无意义的函数call或apply
        "no-useless-concat": 1,                   // 无意义的string concat
        "no-useless-escape": 1,                   // 禁用无意义的转义
        "no-void": 2,                             // 禁用void
        "no-with": 1,                             // 禁用with
        "radix": 2,                               // 使用parseInt时带上第二个进制参数
        "no-warning-comments": [2, { "terms": ["fixme", "fix me"], "location": "anywhere" }], // 标记未写注释
        "spaced-comment": 1,                      // 强制要求注释符//和/*后加空格
        "default-case": 1,                        // 要求在switch语句中包含default case
        "space-unary-ops": 1,                     // 一元运算符后要求空格，nonword类型的除外
        "space-infix-ops": 1,                     // 运算符左右要求空格 a + b
        "newline-before-return": 0,               // return语句前要求有空行
        "newline-after-var": 0,                   // var定义后要求留空行
        "padded-blocks": 0,                       // 块级作用域内部首位包含空行
        "space-before-blocks": 1,                 // 块级作用域前要求有空格function() {
        "space-before-function-paren": [1, "never"], // function名称和括号之间不要有空格
        "require-jsdoc": [0, { "require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true } }], // 要求注释
        "operator-linebreak": [0, "after"],       // 换行运算符的位置
        "operator-assignment": [0, "never"],      // 是否允许使用 += %= 这样的形式
        "no-trailing-spaces": [1, { "skipBlankLines": true }], // 不允许行尾的空格，除非该行完全由空格组成
        "no-new-object": 2,                       // 不允许使用Object构造器
        "no-array-constructor": 2,                // 不允许使用Array构造器
        "no-whitespace-before-property": 1,       // 不允许属性访问前的空格 a. b
        "no-unneeded-ternary": 1,                 // 过滤不必要的三元运算，var isYes = answer === 1 ? true : false;
        "no-underscore-dangle": [0, { "allowAfterThis": true }], // 不允许在变量名上悬挂下划线
        "no-spaced-func": 1,                      // 调用时， 函数名和括号之间不要有空格
        "no-plusplus": 0,                         // 不允许使用自增自减 ++ -- 运算符
        "no-nested-ternary": 1,                   // 不允许嵌套的三元运算
        "no-negated-condition": 0,                // 不允许反向的条件判断
        "no-mixed-spaces-and-tabs": 2,            // 不要同时存在tab和空格缩进
        "no-inline-comments": 0,                  // 不允许在同行注释
        "newline-per-chained-call": [1, { "ignoreChainWithDepth": 3 }], // 链式调用要求新起一行
        "new-parens": 2,                          // new一个构造器时要求括号
        "new-cap": 1,                             // 构造函数要求第一个字母大写
        "max-statements-per-line": [2, { "max": 3 }], // 不要在同一行写3个及以上的语句
        "block-spacing": 0,                       // 单行块级作用域内前后是否加空格
        "linebreak-style": 1,                     // 统一的换行符 LF
        "camelcase": 1,                           // 使用驼峰命名约定
        "keyword-spacing": 1,                     // 关键字前后要求空格如 } else {
        "indent": [1, 4],                         // 要求缩进
        "eol-last": 1,                            // 要求文件以空行结尾
        "consistent-this": [1, "self"],           // 用什么变量名带替代this指针
        "brace-style": [0, "stroustrup"],         // 代码结构风格 [1tbs, stroustrup, allman]
        "no-undef-init": 1,                       // 不需要初始化变量为undefined
        "curly": 1                                // if、else、while、for代码块用{}包围
    }


};
