# 区域设置Locale

## 概述

+ 区域设置（locale），也称作“本地化策略集”、“本地环境”，是表达程序用户地区方面的软件设定。不同系统、平台、与软件有不同的区域设置处理方式和不同的设置范围

  + 一个 locale 对象就是个结合了语言和地区的特殊标识符

+ locale 由"互联网工程任务组"（IETF）的“BCP 47” 文档系列（tools.ietf.org/html/bcp47） 定义

+ 其 常见的典型形式 由分别表示语言和地区的两部分组成，用 `-` 连接；也可以省略地区

+ 举例来说：

  | locale code(语言代码_国家代码) | 通常的含义         |
  | ------------------------------ | ------------------ |
  | en                             | 英语               |
  | en-US                          | 美国讲的英语       |
  | en-GB                          | 英国讲的英语       |
  | zh-CN                          | 简体中文           |
  | zh-HK                          | 香港地区繁体中文   |
  | zh-TW                          | 台湾地区繁体中文   |
  | zh-SG                          | 新加坡简体中文     |
  | zh-MO                          | 澳门地区繁体中文   |
  | es-AR                          | 阿根廷讲的西班牙语 |
  | ar-001                         | 通用阿拉伯语       |
  | ar-AE                          | 阿联酋讲的阿拉伯语 |

  ```js
  zh_CN  中文(简体)
  zh_TW  中文(繁体)
  zh_HK  中文(香港)
  en_US  英语(美国)
  en_GB  英语(英国)
  ja_JP  日语
  ko_KR  韩语
  fr_FR  法语
  de_DE  德语
  es_ES  西班牙语
  ru_RU  俄语
  pt_BR  葡萄牙语(巴西)
  ```

  ```js
  全球国家 / 地区 中英标准列表（ISO 3166-1 标准）

  [
    {"locale": "af_ZA", "language": "Afrikaans", "cn_name": "南非荷兰语"},
    {"locale": "am_ET", "language": "Amharic", "cn_name": "阿姆哈拉语"},
    {"locale": "ar_AE", "language": "Arabic (UAE)", "cn_name": "阿拉伯语(阿联酋)"},
    {"locale": "ar_EG", "language": "Arabic (Egypt)", "cn_name": "阿拉伯语(埃及)"},
    {"locale": "ar_SA", "language": "Arabic (Saudi Arabia)", "cn_name": "阿拉伯语(沙特)"},
    {"locale": "az_AZ", "language": "Azerbaijani", "cn_name": "阿塞拜疆语"},
    {"locale": "be_BY", "language": "Belarusian", "cn_name": "白俄罗斯语"},
    {"locale": "bg_BG", "language": "Bulgarian", "cn_name": "保加利亚语"},
    {"locale": "bn_BD", "language": "Bengali", "cn_name": "孟加拉语"},
    {"locale": "bs_BA", "language": "Bosnian", "cn_name": "波斯尼亚语"},
    {"locale": "ca_ES", "language": "Catalan", "cn_name": "加泰罗尼亚语"},
    {"locale": "cs_CZ", "language": "Czech", "cn_name": "捷克语"},
    {"locale": "cy_GB", "language": "Welsh", "cn_name": "威尔士语"},
    {"locale": "da_DK", "language": "Danish", "cn_name": "丹麦语"},
    {"locale": "de_AT", "language": "German (Austria)", "cn_name": "德语(奥地利)"},
    {"locale": "de_CH", "language": "German (Switzerland)", "cn_name": "德语(瑞士)"},
    {"locale": "de_DE", "language": "German (Germany)", "cn_name": "德语(德国)"},
    {"locale": "el_GR", "language": "Greek", "cn_name": "希腊语"},
    {"locale": "en_AU", "language": "English (Australia)", "cn_name": "英语(澳大利亚)"},
    {"locale": "en_CA", "language": "English (Canada)", "cn_name": "英语(加拿大)"},
    {"locale": "en_GB", "language": "English (UK)", "cn_name": "英语(英国)"},
    {"locale": "en_HK", "language": "English (Hong Kong)", "cn_name": "英语(中国香港)"},
    {"locale": "en_IN", "language": "English (India)", "cn_name": "英语(印度)"},
    {"locale": "en_NZ", "language": "English (New Zealand)", "cn_name": "英语(新西兰)"},
    {"locale": "en_SG", "language": "English (Singapore)", "cn_name": "英语(新加坡)"},
    {"locale": "en_US", "language": "English (US)", "cn_name": "英语(美国)"},
    {"locale": "es_AR", "language": "Spanish (Argentina)", "cn_name": "西班牙语(阿根廷)"},
    {"locale": "es_CL", "language": "Spanish (Chile)", "cn_name": "西班牙语(智利)"},
    {"locale": "es_CO", "language": "Spanish (Colombia)", "cn_name": "西班牙语(哥伦比亚)"},
    {"locale": "es_ES", "language": "Spanish (Spain)", "cn_name": "西班牙语(西班牙)"},
    {"locale": "es_MX", "language": "Spanish (Mexico)", "cn_name": "西班牙语(墨西哥)"},
    {"locale": "es_US", "language": "Spanish (US)", "cn_name": "西班牙语(美国)"},
    {"locale": "et_EE", "language": "Estonian", "cn_name": "爱沙尼亚语"},
    {"locale": "eu_ES", "language": "Basque", "cn_name": "巴斯克语"},
    {"locale": "fa_IR", "language": "Persian", "cn_name": "波斯语"},
    {"locale": "fi_FI", "language": "Finnish", "cn_name": "芬兰语"},
    {"locale": "fil_PH", "language": "Filipino", "cn_name": "菲律宾语"},
    {"locale": "fr_BE", "language": "French (Belgium)", "cn_name": "法语(比利时)"},
    {"locale": "fr_CA", "language": "French (Canada)", "cn_name": "法语(加拿大)"},
    {"locale": "fr_CH", "language": "French (Switzerland)", "cn_name": "法语(瑞士)"},
    {"locale": "fr_FR", "language": "French (France)", "cn_name": "法语(法国)"},
    {"locale": "ga_IE", "language": "Irish", "cn_name": "爱尔兰语"},
    {"locale": "gl_ES", "language": "Galician", "cn_name": "加利西亚语"},
    {"locale": "gu_IN", "language": "Gujarati", "cn_name": "古吉拉特语"},
    {"locale": "he_IL", "language": "Hebrew", "cn_name": "希伯来语"},
    {"locale": "hi_IN", "language": "Hindi", "cn_name": "印地语"},
    {"locale": "hr_HR", "language": "Croatian", "cn_name": "克罗地亚语"},
    {"locale": "hu_HU", "language": "Hungarian", "cn_name": "匈牙利语"},
    {"locale": "hy_AM", "language": "Armenian", "cn_name": "亚美尼亚语"},
    {"locale": "id_ID", "language": "Indonesian", "cn_name": "印尼语"},
    {"locale": "is_IS", "language": "Icelandic", "cn_name": "冰岛语"},
    {"locale": "it_CH", "language": "Italian (Switzerland)", "cn_name": "意大利语(瑞士)"},
    {"locale": "it_IT", "language": "Italian (Italy)", "cn_name": "意大利语(意大利)"},
    {"locale": "ja_JP", "language": "Japanese", "cn_name": "日语"},
    {"locale": "ka_GE", "language": "Georgian", "cn_name": "格鲁吉亚语"},
    {"locale": "kk_KZ", "language": "Kazakh", "cn_name": "哈萨克语"},
    {"locale": "km_KH", "language": "Khmer", "cn_name": "高棉语"},
    {"locale": "kn_IN", "language": "Kannada", "cn_name": "卡纳达语"},
    {"locale": "ko_KR", "language": "Korean", "cn_name": "韩语"},
    {"locale": "ky_KG", "language": "Kyrgyz", "cn_name": "吉尔吉斯语"},
    {"locale": "lo_LA", "language": "Lao", "cn_name": "老挝语"},
    {"locale": "lt_LT", "language": "Lithuanian", "cn_name": "立陶宛语"},
    {"locale": "lv_LV", "language": "Latvian", "cn_name": "拉脱维亚语"},
    {"locale": "mk_MK", "language": "Macedonian", "cn_name": "马其顿语"},
    {"locale": "ml_IN", "language": "Malayalam", "cn_name": "马拉雅拉姆语"},
    {"locale": "mn_MN", "language": "Mongolian", "cn_name": "蒙古语"},
    {"locale": "mr_IN", "language": "Marathi", "cn_name": "马拉地语"},
    {"locale": "ms_MY", "language": "Malay", "cn_name": "马来语"},
    {"locale": "mt_MT", "language": "Maltese", "cn_name": "马耳他语"},
    {"locale": "my_MM", "language": "Burmese", "cn_name": "缅甸语"},
    {"locale": "nb_NO", "language": "Norwegian Bokmål", "cn_name": "挪威语"},
    {"locale": "ne_NP", "language": "Nepali", "cn_name": "尼泊尔语"},
    {"locale": "nl_BE", "language": "Dutch (Belgium)", "cn_name": "荷兰语(比利时)"},
    {"locale": "nl_NL", "language": "Dutch (Netherlands)", "cn_name": "荷兰语(荷兰)"},
    {"locale": "pl_PL", "language": "Polish", "cn_name": "波兰语"},
    {"locale": "pt_BR", "language": "Portuguese (Brazil)", "cn_name": "葡萄牙语(巴西)"},
    {"locale": "pt_PT", "language": "Portuguese (Portugal)", "cn_name": "葡萄牙语(葡萄牙)"},
    {"locale": "ro_RO", "language": "Romanian", "cn_name": "罗马尼亚语"},
    {"locale": "ru_RU", "language": "Russian", "cn_name": "俄语"},
    {"locale": "si_LK", "language": "Sinhala", "cn_name": "僧伽罗语"},
    {"locale": "sk_SK", "language": "Slovak", "cn_name": "斯洛伐克语"},
    {"locale": "sl_SI", "language": "Slovenian", "cn_name": "斯洛文尼亚语"},
    {"locale": "sq_AL", "language": "Albanian", "cn_name": "阿尔巴尼亚语"},
    {"locale": "sr_RS", "language": "Serbian", "cn_name": "塞尔维亚语"},
    {"locale": "sv_SE", "language": "Swedish", "cn_name": "瑞典语"},
    {"locale": "sw_KE", "language": "Swahili (Kenya)", "cn_name": "斯瓦希里语(肯尼亚)"},
    {"locale": "ta_IN", "language": "Tamil", "cn_name": "泰米尔语"},
    {"locale": "te_IN", "language": "Telugu", "cn_name": "泰卢固语"},
    {"locale": "th_TH", "language": "Thai", "cn_name": "泰语"},
    {"locale": "tr_TR", "language": "Turkish", "cn_name": "土耳其语"},
    {"locale": "uk_UA", "language": "Ukrainian", "cn_name": "乌克兰语"},
    {"locale": "ur_PK", "language": "Urdu", "cn_name": "乌尔都语"},
    {"locale": "uz_UZ", "language": "Uzbek", "cn_name": "乌兹别克语"},
    {"locale": "vi_VN", "language": "Vietnamese", "cn_name": "越南语"},
    {"locale": "zh_CN", "language": "Chinese (Simplified)", "cn_name": "中文(简体)"},
    {"locale": "zh_HK", "language": "Chinese (Hong Kong)", "cn_name": "中文(中国香港)"},
    {"locale": "zh_TW", "language": "Chinese (Traditional)", "cn_name": "中文(中国台湾)"}
  ]
  ```

## 语言编码

+ locale 的前半部分表示语言，通常由 2 或 3 位小写字母组成
+ 符合 [ISO 639-1](https://baike.baidu.com/item/ISO%20639-1/8292914?fr=aladdin)标准

+ 例如：

  | Language Code | Description |
  | ------------- | ----------- |
  | de            | German      |
  | en            | English     |
  | fr            | French      |
  | ru            | Russian     |
  | ja            | Japanese    |
  | jv            | Javanese    |
  | ko            | Korean      |
  | zh            | Chinese     |

## 地区编码

+ locale 的后半部分表示地区，由符合 [ISO 3166](https://baike.baidu.com/item/ISO%203166-1/5269555?fr=ge_ala) 标准的 2 或 3 位大写字母
+ 这部分是可选的

  | A-2 Code | A-3 Code | Numeric Code | Description        |
  | -------- | -------- | ------------ | ------------------ |
  | AU       | AUS      | 036          | Australia          |
  | BR       | BRA      | 076          | Brazil             |
  | CA       | CAN      | 124          | Canada             |
  | CN       | CHN      | 156          | China              |
  | DE       | DEU      | 276          | Germany            |
  | FR       | FRA      | 250          | France             |
  | IN       | IND      | 356          | India              |
  | RU       | RUS      | 643          | Russian Federation |
  | US       | USA      | 840          | United States      |

## 较少用到的更完整定义

+ 当然你可能还会看到一些更加完整的区域设置定义，比如：

  + `zh-Hans-CN`：在中国使用的中文简体
  + `zh-Hant-HK`：在中国香港使用的中文繁体
  + `zh-Hans`：同时包含了 `zh-CN`、`zh-SG`（新加坡）等使用简体字的地区

+ 当然还会有更复杂的extension设置

## 区域敏感

+ 一般来说，根据 locale 的设置，把一个 `hello` 分别翻译成 “こんにちは” 或 “你好” 就可以了；但涉及数字、日期、货币等，需要特殊的格式，或计算年号等，可以用一些专用的类来处理

  > 如果代码的行为取决于 locale，则说它是“区域敏感的（locale-sensitive）”

+ `JavaScript` 内置了 `Intl` 对象，可以用来处理国际化相关的内容，包括数字、日期和货币的格式化

+ 法国的数字表示方式（使用空格作为千位分隔符，逗号作为小数点）：

  ```js
  const nf = new Intl.NumberFormat('fr-FR');
  const formattedNumber = nf.format(12345.67);
  console.log(formattedNumber); // 输出: 12 345,67
  ```

+ 德国的数字表示方式（使用点作为千位分隔符，逗号作为小数点）：

  ```js
  const nf = new Intl.NumberFormat('de-DE');
  const formattedNumber = nf.format(12345.67);
  console.log(formattedNumber); // 输出: 12.345,67
  ```

+ 美国的数字表示方式（使用逗号作为千位分隔符，点作为小数点）：

  ```js
  const nf = new Intl.NumberFormat('en-US');
  const formattedNumber = nf.format(12345.67);
  console.log(formattedNumber); // 输出: 12,345.67
  ```
