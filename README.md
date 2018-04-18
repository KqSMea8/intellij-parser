# haskell

haskell 写 parser

```haskell
plusParser :: Parser Char
plusParser = xxxx

numberParser :: Parser Int
numberParser = xxxx

data Op a b = Op a b a

plusOperationParser :: Parser (Op a b)
plusOperationParser = do
  a <- numberParser
  plusParser
  b <- numberParser
  return $ Op a '+' b
```

优势，写 Parser 的过程和 lexer grammer 一一对应。

# sql lexcer grammer

可以先看 sqlite-parser 来写一些简单的语法。渐进加强。

https://www.sqlite.org/lang_select.html

select-stmt

select ['', 'distinct', 'all'][result-column, ] [from ]

lexcial grammer（antlr）
https://github.com/antlr/grammars-v4

# 原则

1、静态类型

# 语言

hive 2.3 & odps

# 流程

## 总体

1、text -> parser
2、parser 动态构建
3、language server(worker)
4、智能编辑器

## 具体

0、找到一个 lexcer grammer，包含 tokenizer，Node,Statment
1、生成一堆 tokenizer，每个包含 tokenKind 正则。
2、将代码不断用正则匹配，得到 token 列表，
3、生成一堆继承 Node(基类)的 Statment，写一堆 parser 方法，eat tokenizer，parse 表达式（自底向上）特别的，Token 是叶子 Node。
1）eat 可以生成 MissingToken。
2）当出错后，问父级是否可以处理，如果可以，生成 MissingToken。如果所有父级无法处理，生成 SkippedToken
4、生成 AST。
5、当代码变化后，检测到变化的位置，进行 AST 的增量动态变化，复用现有节点。并制定限制复用节点列表（边缘 case）。
6、检测代码（SkippedToken、MissingToken、递归调用每个节点 checkDiagnose 方法）
7、根据位置获取节点（自动提醒）

## 参考文献

https://github.com/Microsoft/tolerant-php-parser/blob/master/docs/HowItWorks.md

https://github.com/SAP/chevrotain

odps 官网: https://help.aliyun.com/document_detail/27808.html?spm=a2c4g.11186623.4.11.TVftxQ

https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL

https://github.com/antlr/antlr4/blob/master/doc/grammars.md

https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/parse/HiveLexer.g
