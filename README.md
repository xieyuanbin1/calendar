# calendar

简单地将原有代码转换成了ES6规范，用于模块化导入使用。
经过原作者的同意，将代码推送到github。如需联系联系作者，见如下：
------

* 1900-2100区间内的公历、农历互转
* charset  UTF-8
* Author  Jea杨(JJonline@JJonline.cn)
* Time    2014-7-21
* Time    2016-8-13 Fixed 2033hex、Attribution Annals
* Version 1.0.1
* 公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* 农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]

------

# EdgerOS 安装和使用
```shell
npm install @edgeros/solar2lunar
```

# Node.js 环境安装
```shell
npm i solar2lunar
```

```javascript
const calendar = require('@edgeros/solar2lunar')
// const { solar2lunar, solar2lunar } = require('solar2lunar')
calendar.solar2lunar(1987,11,01);
```

# 用法

```javascript
// ES module
import calendar from 'solar2lunar'
// import { solar2lunar, solar2lunar } from 'solar2lunar'
calendar.solar2lunar(1987,11,01);

// commonjs
const calendar = require('solar2lunar')
// const { solar2lunar, solar2lunar } = require('solar2lunar')
calendar.solar2lunar(1987,11,01);
```

#### 公历年月日转农历数据 返回json

```javascript

calendar.solar2lunar(1987,11,01);

```
#### 农历年月日转公历年月日

```javascript

calendar.lunar2solar(1987,9,10);

```
* 调用以上方法后返回类似如下object（json）
* c开头的是公历各属性值 
* l开头的自然就是农历 
* gz开头的是天干地支纪年的数据

```javascript
{
  Animal: "兔",
  IDayCn: "初十",
  IMonthCn: "九月",
  Term: null,
  astro: "天蝎座",
  cDay: 1,
  cMonth: 11,
  cYear: 1987,
  gzDay: "甲寅",
  gzMonth: "庚戌",
  gzYear: "丁卯",
  isLeap: false,
  isTerm: false,
  isToday: false,
  lDay: 10,
  lMonth: 9,
  lYear: 1987,
  nWeek: 7,
  ncWeek: "星期日"
}

```


* 该代码还有其他可以调用的方法，请自己查看代码中的详细注释

* #### 现在可以通过npm来使用calendar了

```npm
npm install solar2lunar
```

```javascript
import calendar from 'solar2lunar'

calendar.solar2lunar(1987,11,01)
```